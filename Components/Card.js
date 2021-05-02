import React from "react";

export default function Card(props) {
  return (
    <div className={"w3-card-2 w3-third w3-center " + props.backgroundColor}>
      <header className="w3-indigo w3-center">{props.cardText}</header>
      <h3 className="w3-center">{"$" + props.amount}</h3>
    </div>
  );
}
