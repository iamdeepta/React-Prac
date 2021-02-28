import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <Spinner
        animation="border"
        variant="primary"
        style={{ marginTop: "50%" }}
      />
    </>
  );
};

export default Loader;
