import React from "react";
import DefaultCard from "material-ui/Card/Card";

const cardStyle = {
  marginTop: 20
};

function Card(props) {
  return <DefaultCard {...props} style={cardStyle} />;
}

export default Card;
