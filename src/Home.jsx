import React, { useEffect, useState } from "react";
import "./styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";

const Home = () => {
  //parallax scrolling
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //initiate animation on scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  //creating object for opacity
  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: 0
    }
  };

  return (
    <>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <div style={{}} className="hero-image"></div>
        <div
          className="hero-text"
          // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <h1
            style={{
              fontSize: "58px",
              transform: `translateY(${offsetY * 0.5}px)`
            }}
          >
            Welcome
          </h1>
          <p style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
            Keep It Simple
          </p>
          <Button
            className="btn_our_company animate__animated animate__heartBeat"
            variant="outlined"
            color="primary"
            style={{
              transform: `translateY(${offsetY * 0.5}px)`
            }}
          >
            Browse
          </Button>
        </div>

        {/* <div className="App">
        <h1 className="animate__animated animate__bounce mt-5">About Us</h1>
      </div> */}

        <div className="container d-flex justify-content-between mt-5 our_company">
          <div data-aos="fade-right" className="company_image">
            <figure>
              <img
                src="https://source.unsplash.com/600x400/?company"
                alt="ImageLeft"
              />
            </figure>
          </div>
          <div data-aos="fade-left" className="ml-4">
            <h4>Our Company</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam dolorem quisquam expedita, harum veniam fugit vitae
              architecto nam quasi suscipit id, quaerat soluta, aliquam
              exercitationem rem! Libero neque temporibus aliquid!
            </p>
            <Button
              className="btn_our_company mt-3"
              variant="outlined"
              color="primary"
            >
              Details
            </Button>
          </div>
        </div>

        <div className="container d-flex justify-content-between mt-5 our_mission">
          <div data-aos="fade-right">
            <h4>Our Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam dolorem quisquam expedita, harum veniam fugit vitae
              architecto nam quasi suscipit id, quaerat soluta, aliquam
              exercitationem rem! Libero neque temporibus aliquid!
            </p>
            <Button
              className="btn_our_company mt-3"
              variant="outlined"
              color="primary"
            >
              Details
            </Button>
          </div>
          <div className="ml-4" data-aos="fade-left">
            <figure>
              <img
                src="https://source.unsplash.com/600x400/?mission"
                alt="ImageRight"
              />
            </figure>
          </div>
        </div>

        <div data-aos="fade-down" className="App container mt-5 services">
          <h3>Services</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            porro aliquam quibusdam. Aliquid nobis facilis animi voluptate,
            iusto vero suscipit maxime. Minus eveniet, ipsum animi accusamus
            nihil architecto sunt beatae!
          </p>
        </div>
        <div className="container d-flex justify-content-between mt-5 cards">
          <div
            data-aos="flip-right"
            class="card card1"
            style={{ marginLeft: 10 }}
          >
            <figure>
              <img
                className="card-img-top"
                src="https://source.unsplash.com/600x400/?development"
                alt="Card cap"
              />
            </figure>
            <div className="card-body">
              <h5 className="card-title">Development</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                magnam consectetur aliquid dolorum quis, quos officia voluptas,
                excepturi id optio adipisci quam fugiat odit, vero soluta ab
                assumenda inventore tenetur?
              </p>
              <Button
                className="btn_our_company mt-3"
                variant="outlined"
                color="primary"
              >
                More...
              </Button>
            </div>
          </div>

          <div data-aos="flip-up" class="card card1" style={{ marginLeft: 10 }}>
            <figure>
              <img
                className="card-img-top"
                src="https://source.unsplash.com/600x400/?design"
                alt="Card cap"
              />
            </figure>
            <div className="card-body">
              <h5 className="card-title">Design</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                magnam consectetur aliquid dolorum quis, quos officia voluptas,
                excepturi id optio adipisci quam fugiat odit, vero soluta ab
                assumenda inventore tenetur?
              </p>
              <Button
                className="btn_our_company mt-3"
                variant="outlined"
                color="primary"
              >
                More...
              </Button>
            </div>
          </div>

          <div
            data-aos="flip-left"
            class="card card1"
            style={{ marginLeft: 10 }}
          >
            <figure>
              <img
                className="card-img-top"
                src="https://source.unsplash.com/600x400/?maintenance"
                alt="Card cap"
              />
            </figure>
            <div className="card-body">
              <h5 className="card-title">Maintenance</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                magnam consectetur aliquid dolorum quis, quos officia voluptas,
                excepturi id optio adipisci quam fugiat odit, vero soluta ab
                assumenda inventore tenetur?
              </p>
              <Button
                className="btn_our_company mt-3"
                variant="outlined"
                color="primary"
              >
                More...
              </Button>
            </div>
          </div>
        </div>

        <div className="App mt-5"></div>
      </motion.div>
    </>
  );
};

export default Home;
