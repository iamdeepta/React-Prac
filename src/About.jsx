import { useState } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";

export default function About() {
  const [val, setVal] = useState("Hello");
  const [val2, setVal2] = useState("");

  const changeText = () => {
    val === "Hello" ? setVal(`Hello ${val2}`) : setVal("Hello");
  };

  const onChange = (event) => {
    setVal2(event.target.value);
    //console.log(event);
  };

  //creating object for opacity
  const pageVariants = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100vh"
    }
  };

  //applying duration for animation
  const pageTransition = {
    //duration: 0.2
    //transition: "linear",
    type: "spring",
    stiffness: 70
  };

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div style={{ paddingTop: "7%" }}></div>
        <div className="App">
          <h1>{val}</h1>
          <h2>Press to toggle text {val2}</h2>
          <Button variant="contained" color="primary" onClick={changeText}>
            Press
          </Button>

          <br />
          <div className="col-sm-2 container">
            <input
              type="text"
              className="form-control mt-4"
              value={val2}
              onChange={onChange}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
