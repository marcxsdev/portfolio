import Button from "../common/Button";

const GetInTouch = () => {
  return (
    <section className="mx-7.5">
      <h2 className="text-black font-raleway text-[52px] font-extrabold text-center py-5 md:text-6xl md:py-8">
        Get In Touch
      </h2>

      <p className="text-black text-center font-raleway text-base font-medium leading-6 md:text-xl">
        Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>

      <div className="flex justify-center items-center mt-8.5">
        <Button
          href="mailto:contato@marcosalexandre.me"
          className={"py-4 w-57 rounded-[30px]"}
        >
          Send me an email
        </Button>
      </div>
    </section>
  );
};

export default GetInTouch;
