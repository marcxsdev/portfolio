import AnimatedContactButtons from "../common/AnimatedButton";
import { ReactTyped } from "react-typed";

const Introduction = () => {
  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-[1440px] px-[30px] md:px-[75px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left max-w-[540px]">
            <h1 className="text-black font-raleway text-[52px] lg:text-[64px] font-extrabold leading-tight">
              Hi, I’m <br className="lg:hidden" />
              <span className="text-[#6A4C9C]">Marcos</span> 🌑
            </h1>
            <p className="text-black font-ibmplex text-base lg:text-lg leading-6 py-7 lg:py-6">
              I'm a{" "}
              <span className="text-[#6A4C9C] font-bold">
                full-stack developer
              </span>{" "}
              passionate about creating remarkable digital experiences. Feel
              free to explore my projects and the journey that brought me here.
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
