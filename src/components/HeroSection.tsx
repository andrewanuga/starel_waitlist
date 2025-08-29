import heroImage from "../assets/educator.svg";

interface HeroSectionProps {
  click: () => void;
}

const HeroSection = ({ click }: HeroSectionProps) => {
  return (
    <div className="flex lg:h-[70vh] justify-center flex-wrap flex-col lg:flex-row items-center gap-12 py-10">
      <div className="flex justify-evenly items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
            The{" "}
            <span className="nata-sans bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              All-In-One Platform
            </span>{" "}
            for Nigerian Students
          </h1>
          <p className="text-white lg:mb-8 md:text-[16px] text-md lg:text-xl">
            Starel combines AI-powered academic support, campus marketplace, and
            student services in one intuitive platform - starting with FUTA and
            expanding nationwide.
          </p>
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <img src={heroImage} alt="Starel Platform Preview" className="" />
        </div>
      </div>
      <button
        onClick={click}
        className="w-full h-14 max-w-[1000px] cursor-pointer transition-all duration-150 hover:saturate-150 shadow shadow-gray-200/50 outline-gray-300 rounded-full flex justify-center bg-gradient-to-r from-violet-500 lg:mt-10 mt-8 to-gray-100 items-center"
      >
        Join the WaitList
      </button>
    </div>
  );
};

export default HeroSection;
