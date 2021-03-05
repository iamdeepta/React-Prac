import { useState } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function About() {
  //const [val, setVal] = useState("Hello");
  const [val2, setVal2] = useState("");
  const [about, setAbout] = useState("");

  const changeText = (event) => {
    // val === "Hello" ? setVal(`Hello ${val2}`) : setVal("Hello");
    setVal2(event.target.value);
  };

  const changeAbout = () => {
    if (val2 === "") {
      toast.error("Write Something!");
    } else {
      setAbout(val2);
      toast.success("Created successfully!");
    }
  };

  // const onChange = (event) => {
  //   setVal2(event.target.value);
  //   //console.log(event);
  // };

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
          <h4>Create Your Own About</h4>
          {/* <h2>Press to toggle text {val2}</h2> */}
          <div className="col-sm-3 container">
            <textarea
              className="form-control"
              value={val2}
              onChange={changeText}
            ></textarea>
          </div>
          <Button
            style={{ marginTop: "2%" }}
            variant="contained"
            color="primary"
            onClick={changeAbout}
          >
            Create
          </Button>

          <br />
          {/* <div className="col-sm-2 container">
            <input
              type="text"
              className="form-control mt-4"
              value={val2}
              onChange={onChange}
            />
          </div> */}
        </div>
        <div className="container mt-5">
          <h2 className="App">About</h2>
          <p className="mt-2">{about}</p>
        </div>

        <ToastContainer style={{ paddingTop: "4%" }} />
      </motion.div>
    </>
  );
}
