import React from "react";
import DefaultLink from "next/link";

const aStyle = {
  textDecoration: "none"
};

function Link({ children, ...props }) {
  return (
    <DefaultLink {...props}>
      <a style={aStyle}>{children}</a>
    </DefaultLink>
  );
}

export default Link;
