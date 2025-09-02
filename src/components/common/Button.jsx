const Button = ({ children, href, icon, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`flex flex-row justify-center items-center gap-5 cursor-pointer bg-[#6A4C9C] hover:bg-[#5C4189] transition-colors duration-200 ${className}`}
    >
      <span className="text-white font-raleway text-base font-semibold">
        {children}
      </span>
      {icon && <span>{icon}</span>}
    </a>
  );
};

export default Button;
