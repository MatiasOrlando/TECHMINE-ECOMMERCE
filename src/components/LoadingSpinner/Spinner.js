import React from "react";
import { Spinner } from "reactstrap";

export default function SpinnerLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "300px",
        alignItems: "center",
      }}
    >
      <Spinner
        style={{
          height: "80px",
          width: "80px",
        }}
      />
    </div>
  );
}
