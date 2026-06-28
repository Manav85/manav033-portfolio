import React, { useCallback } from 'react'
import { Rnd } from 'react-rnd'
import { motion } from 'framer-motion'
import { useDesktopStore } from '@/store/useDesktopStore'
import { colors, motion as motionTokens } from '@/theme/tokens'

function TrafficLight({ color, onClick, title }) {
  return (
    <button
      className="traffic-light"
      style={{ background: color }}
      onClick={onClick}
      title={title}
      aria-label={title}
    />
  )
}

function TitleBar({ title, windowId }) {
  const { closeWindow, minimizeWindow } = useDesktopStore()

  return (
    <div
      className="window-titlebar flex items-center gap-2 px-3 select-none"
      style={{
        height: 40,
        borderRadius: '12px 12px 0 0',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        flexShrink: 0,
      }}
    >
      <div className="flex items-center gap-1.5">
        <TrafficLight
          color={colors.trafficLights.close}
          onClick={() => closeWindow(windowId)}
          title="Close"
        />
        <TrafficLight
          color={colors.trafficLights.minimize}
          onClick={() => minimizeWindow(windowId)}
          title="Minimize"
        />
        <TrafficLight
          color={colors.trafficLights.maximize}
          onClick={() => {}}
          title="Maximize"
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
      onDragStop={(e, d) => updateWindowPosition(win.id, { x: d.x, y: d.y })}
      onResizeStop={(e, dir, ref, delta, position) => {
        updateWindowSize(win.id, { width: ref.offsetWidth, height: ref.offsetHeight })
        updateWindowPosition(win.id, position)
      }}
      minWidth={340}
      minHeight={300}
      dragHandleClassName="window-titlebar"
      bounds="parent"
      enableResizing
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
          borderRadius: 12,
          boxShadow: '0 25px 60px rgba(0,0,0,0.35), 0 10px 20px rgba(0,0,0,0.2)',
          userSelect: 'none',
        }}
      >
        <TitleBar title={win.title} windowId={win.id} />
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
