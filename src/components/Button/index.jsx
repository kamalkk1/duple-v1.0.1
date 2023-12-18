import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[28px]" };
const variants = {
  fill: {
    red_A700_01: "bg-red-A700_01 text-white-A700",
    red_A700: "bg-red-A700 text-white-A700",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "red_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["red_A700_01", "red_A700"]),
};

export { Button };
