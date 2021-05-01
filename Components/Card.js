import React from "react";

export default function Card(props) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: props.backgroundColor,
        borderRadius: "5px",
        margin: "5px",
        justifyContent: "center"
      }}
    >
      <p
        style={{
          textAlign: "left",
          width: "50%",
          height: "50px",
          margin: "2px"
        }}
      >
        {props.cardText}
      </p>
      <p
        style={{
          textAlign: "right",
          width: "50%",
          height: "50px",
          margin: "2px"
        }}
      >
        {props.amount}
      </p>
    </div>
  );
}
