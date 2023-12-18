import React from "react";

const sizeClasses = {
  txtInterMedium19: "font-inter font-medium",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold45: "font-inter font-semibold",
  txtInterMedium22: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium30WhiteA700: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterLight28: "font-inter font-light",
  txtInterBold30: "font-bold font-inter",
  txtInterMedium30: "font-inter font-medium",
  txtInterMedium14Black90001: "font-inter font-medium",
  txtInterMedium16Gray70002: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterLight30: "font-inter font-light",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
