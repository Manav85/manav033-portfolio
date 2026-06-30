import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * useGSAPOnMount — run a GSAP timeline when the component mounts.
 * Cleans up the timeline on unmount.
 *
 * @param {(tl: gsap.core.Timeline) => void} setup - callback that builds the timeline
 * @param {Array} deps - re-run when these deps change (default: [])
 */
export function useGSAPOnMount(setup, deps = []) {
  const tlRef = useRef(null)

  useEffect(() => {
    tlRef.current = gsap.timeline()
    setup(tlRef.current)

    return () => {
      tlRef.current?.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return tlRef
}

/**
 * useGSAPRef — attach GSAP animations to a DOM ref.
 *
 * @param {(el: HTMLElement, tl: gsap.core.Timeline) => void} setup
 * @param {Array} deps
 */
export function useGSAPRef(setup, deps = []) {
  const elRef = useRef(null)
  const tlRef = useRef(null)

  useEffect(() => {
    if (!elRef.current) return
    tlRef.current = gsap.timeline()
    setup(elRef.current, tlRef.current)

    return () => {
      tlRef.current?.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { elRef, tlRef }
}

export { gsap }
