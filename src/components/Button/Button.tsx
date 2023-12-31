import React from "react";
import PropTypes from "prop-types";
import { Icon, IconArray } from "../Icons";

const Button = (props: any) => {
  const { id, icon, iconOnly, label, onClick, type, className } = props;

  const handleClick = (event: any) => {
    // capture button telemetry data
    onClick(event);
  };

  return (
    <button
      id={id}
      className={`${className}`}
      aria-label={label}
      type={type}
      onClick={handleClick}
    >
      {icon && <Icon name={icon} />}
      {iconOnly && icon ? null : label}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.oneOf(IconArray),
  iconOnly: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export default Button;
