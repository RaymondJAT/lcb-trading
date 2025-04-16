import React from "react";

const Button = ({ children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`group relative px-3 py-2 font-medium font-[contentFont] text-[13px] transition-colors duration-[400ms] rounded-sm cursor-pointer border-2 border-transparent backdrop-blur-md bg-white/5 hover:bg-transparent ${className}`}
    >
      <span>{children}</span>

      {/* top */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-secondary transition-all duration-100 group-hover:w-full" />

      {/* right */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-secondary transition-all delay-100 duration-100 group-hover:h-full" />

      {/* bottom */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-secondary transition-all delay-200 duration-100 group-hover:w-full" />

      {/* left */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-secondary transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Button;
