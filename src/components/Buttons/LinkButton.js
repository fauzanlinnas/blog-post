import React from "react";
import { Link } from "react-router-dom";
import { SolidColorVariants } from "./Button";

const LinkButton = ({ href, variant, title, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={href}
      className={`block shadow text-white py-1 px-2 rounded-md focus:outline-none ${SolidColorVariants[variant]}`}
    >
      {title}
    </Link>
  );
};

export { LinkButton };
