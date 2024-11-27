import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

export const Number = ({ n, extra = "" }) => {
  // Intersection Observer to detect when the component is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once when it comes into view
    threshold: 0.5, // 50% of the component should be visible
  })

  const { number } = useSpring({
    from: 0,
    to: { number: inView ? n : 0 }, // Animate to `n` only when in view
    delay: 200,
    config: { mass: 1, tension: 20, friction: 12 },
  })
  return (
    <div ref={ref} className="flex items-center gap-1">
      <animated.div className="text-5xl lg:text-6xl font-bold">{number.to((n) => n.toFixed(0))}</animated.div>
      <span className="lg:text-3xl font-bold">{extra}</span>
    </div>
  )
}
