import React, { useCallback, useState } from 'react'
import { Rnd } from 'react-rnd'
import { motion } from 'framer-motion'
import { useDesktopStore } from '@/store/useDesktopStore'
import { colors, motion as motionTokens } from '@/theme/tokens'

// ── Traffic light button ─────────────────────────────────────
function TrafficLight({ color, hoverColor, icon, onClick, title }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: color,
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        flexShrink: 0,
        transition: 'filter 0.1s',
        filter: hovered ? 'brightness(0.82)' : 'none',
      }}
    >
      {hovered && (
        <span style={{
          fontSize: 7,
          fontWeight: 900,
          color: 'rgba(0,0,0,0.5)',
          lineHeight: 1,
          fontFamily: 'system-ui',
        }}>
          {icon}
        </span>
      )}
    </button>
  )
}

// ── Title bar ────────────────────────────────────────────────
function TitleBar({ title, windowId, isMaximized }) {
  const { closeWindow, minimizeWindow, maximizeWindow } = useDesktopStore()

  return (
    <div
      className="window-titlebar flex items-center gap-2 px-3 select-none"
      style={{
        height: 40,
        borderRadius: isMaximized ? '0' : '12px 12px 0 0',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        flexShrink: 0,
        background: 'rgba(246,246,246,0.97)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="flex items-center gap-1.5">
        <TrafficLight
          color={colors.trafficLights.close}
          icon="✕"
          onClick={(e) => { e.stopPropagation(); closeWindow(windowId) }}
          title="Close"
        />
        <TrafficLight
          color={colors.trafficLights.minimize}
          icon="−"
          onClick={(e) => { e.stopPropagation(); minimizeWindow(windowId) }}
          title="Minimize"
        />
        <TrafficLight
          color={colors.trafficLights.maximize}
          icon={isMaximized ? '⊡' : '⊞'}
          onClick={(e) => { e.stopPropagation(); maximizeWindow(windowId) }}
          title={isMaximized ? 'Restore' : 'Maximize'}
        />
      </div>
      <span
        className="flex-1 text-center font-medium text-gray-500 truncate"
        style={{ fontSize: 12 }}
      >
        {title}
      </span>
    </div>
  )
}

// ── Window ───────────────────────────────────────────────────
export default function Window({ win }) {
  const { focusWindow, updateWindowPosition, updateWindowSize } = useDesktopStore()

  const handleMouseDown = useCallback(() => {
    focusWindow(win.id)
  }, [focusWindow, win.id])

  if (win.isMinimized) return null

  return (
    <Rnd
      size={win.size}
      position={win.position}
      onDragStop={(e, d) => {
        if (!win.isMaximized) updateWindowPosition(win.id, { x: d.x, y: d.y })
      }}
      onResizeStop={(e, dir, ref, delta, position) => {
        if (!win.isMaximized) {
          updateWindowSize(win.id, { width: ref.offsetWidth, height: ref.offsetHeight })
          updateWindowPosition(win.id, position)
        }
      }}
      minWidth={340}
      minHeight={300}
      dragHandleClassName="window-titlebar"
      bounds="parent"
      enableResizing={!win.isMaximized}
      disableDragging={win.isMaximized}
      style={{ zIndex: win.zIndex, pointerEvents: 'auto' }}
      onMouseDown={handleMouseDown}
    >
      <motion.div
        initial={motionTokens.window.initial}
        animate={motionTokens.window.animate}
        exit={motionTokens.window.exit}
        transition={motionTokens.window.transition}
        className="w-full h-full flex flex-col overflow-hidden"
        style={{
          background: colors.surface.window,
          borderRadius: win.isMaximized ? 0 : 12,
          boxShadow: win.isMaximized
            ? 'none'
            : '0 25px 60px rgba(0,0,0,0.35), 0 10px 20px rgba(0,0,0,0.2)',
          userSelect: 'none',
        }}
      >
        <TitleBar title={win.title} windowId={win.id} isMaximized={win.isMaximized} />
        <div
          className="flex-1 overflow-auto scrollable"
          style={{ userSelect: 'text', minHeight: 0 }}
        >
          {win.content}
        </div>
      </motion.div>
    </Rnd>
  )
}
