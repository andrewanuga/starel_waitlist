import ContactContents from "./ContactContents"
import AbsoluteRippleBackground from "./RippleEffect"

const Contact = ({ref}) => {
  return (
    <div ref={ref} className="w-full relative h-screen bg-[#121212] flex flex-wrap justify-center items-center">
      <div className="absolute inset-0 overflow-hidden">
        <AbsoluteRippleBackground
          color="rgba(150, 220, 255, 0.15)"
          rippleCount={6}
          animationDuration={10000}
          maxOpacity={0.25}
        />
      </div>
      <ContactContents />
    </div>
  )
}

export default Contact