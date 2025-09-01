import AnimatedContactButtons from "../common/AnimatedButton";

const Introduction = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mx-[30px] md:mx-[75px] gap-8 lg:max-w-[1440px] lg:mx-auto lg:w-full">
      <div className="text-center lg:text-left max-w-[540px]">
        <h1 className="text-black font-raleway text-[52px] lg:text-[64px] font-extrabold leading-tight">
          Hi, I’m <br className="lg:hidden" />
          <span className="text-[#6A4C9C]">Marcos</span> 🌑
        </h1>

        <p className="text-black font-ibmplex text-base lg:text-lg leading-6 py-7 lg:py-6">
          Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <AnimatedContactButtons />
      </div>

      <img
        src="/images/portfolio-img.png"
        alt="Marcos Alexandre"
        className="hidden lg:block"
      />
    </div>
  );
};

export default Introduction;
