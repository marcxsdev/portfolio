import AnimatedContactButtons from "../common/AnimatedButton";

const Introduction = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-[30px] md:px-[75px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left max-w-[540px]">
            <h1 className="text-black font-raleway text-[52px] lg:text-[64px] font-extrabold leading-tight">
              Hi, I’m <br className="lg:hidden" />
              <span className="text-[#6A4C9C]">Marcos</span> 🌑
            </h1>
            <p className="text-black font-ibmplex text-base lg:text-lg leading-6 py-7 lg:py-6">
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <div className="flex justify-center items-center lg:block">
              <AnimatedContactButtons />
            </div>
          </div>

          <img
            src="/images/portfolio-img.png"
            alt="Marcos"
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
