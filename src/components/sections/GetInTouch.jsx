import Button from "../common/Button";

const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="mx-7.5 pb-14 lg:flex lg:flex-col lg:justify-center lg:items-center"
    >
      <h2 className="text-black font-raleway text-[52px] font-extrabold text-center py-5 md:text-6xl md:py-8">
        Get In Touch
      </h2>

      <p className="text-black text-center font-raleway text-base font-medium leading-6 md:text-xl lg:max-w-[1290px]">
        Let's create something amazing together! I'm always looking for new
        challenges and opportunities to collaborate on innovative projects. If
        you have an idea or just want to share your experience, feel free to get
        in touch.
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
