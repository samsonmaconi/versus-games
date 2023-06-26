import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icons";
import { MainMenuItems } from "./Menu.const";

const Menu = (props: { className: any }) => {
  const { className } = props;
  return (
    <div
      className={`${className} flex w-full flex-col gap-6 bg-white py-8 pl-7 pr-6 sm:w-44`}
    >
      <div className="hidden flex-col gap-6 sm:flex">
        <Icon name="VersusFull" />
        <hr className="h-px border-none bg-black" />
      </div>
      <Navbar />
    </div>
  );
};

const Navbar = () => {
  const handlesNavItemClicked = (event: any) => {
    // capture telemetry data
  };

  return (
    <nav>
      <ul className="flex justify-between gap-6 sm:flex-col">
        {MainMenuItems.map((item) => (
          <li
            key={item.name}
            className={`${!item.showOnMobile ? "hidden sm:inline" : ""}`}
          >
            <a
              aria-label={item.name}
              className="group flex gap-2 font-semibold hover:font-bold"
              onClick={handlesNavItemClicked}
              href={item.url}
            >
              <Icon className="group-hover:scale-125" name={item.icon} />
              <span className="hidden sm:inline">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
