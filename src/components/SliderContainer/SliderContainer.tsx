import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icons";

const SliderContainer = (props: { className: any }) => {
  const { className } = props;
  return (
    <div className={`${className} relative bg-yellow-500`}>
      <Icon name="VersusLight" className="absolute left-4 top-4" />
    </div>
  );
};

SliderContainer.propTypes = {
  className: PropTypes.string,
};

export default SliderContainer;
