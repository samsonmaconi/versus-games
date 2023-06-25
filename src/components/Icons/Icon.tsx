import React from "react";
import PropTypes from "prop-types";
import Icons from "./Icons.svg";

export type IconType =
  | "Home"
  | "Games"
  | "Activity"
  | "Account"
  | "Tips"
  | "VersusLight"
  | "VersusDark"
  | "VersusFull";

const Icon = (props: { className: any; name: IconType }) => {
  const { className, name } = props;
  return <div className={className}>{Icons[`${name}Icon`]()}</div>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
