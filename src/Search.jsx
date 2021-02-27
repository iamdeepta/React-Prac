import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import "./styles.css";

const Search = () => {
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState([]);

  const searchImage = (event) => {
    let value = event.target.value;
    setImage(value);
  };

  //storing array
  const addImage = () => {
    setNewImage((oldImage) => {
      return [...oldImage, image]; //spread operator means if there is any value then it will include it
    });
    //setImage("");
  };

  const deleteImage = (id) => {
    setNewImage((oldImage) => {
      return oldImage.filter((arrElement, index_no) => {
        return index_no !== id;
      });
    });
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

  // const imageArray = [
  //   {
  //     images: "https://source.unsplash.com/600x400/?cycle"
  //   },
  //   {
  //     images: "https://source.unsplash.com/600x400/?car"
  //   },
  //   {
  //     images: "https://source.unsplash.com/600x400/?bus"
  //   },
  //   {
  //     images: "https://source.unsplash.com/600x400/?road"
  //   },
  //   {
  //     images: "https://source.unsplash.com/600x400/?ball"
  //   },
  //   {
  //     images: "https://source.unsplash.com/600x400/?bat"
  //   }
  // ];

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

        <div className="App container col-md-3">
          <label>Search Image</label>
          <input
            type="text"
            class="form-control"
            value={image}
            onChange={searchImage}
          />
          <div>
            {image !== "" ? (
              <>
                <img
                  className="search_image"
                  src={`https://source.unsplash.com/600x400/?${image}`}
                  alt="ImageSearch"
                />
                <Button
                  className="btn_add_image"
                  variant="contained"
                  color="primary"
                  onClick={addImage}
                >
                  Add Image
                </Button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row mt-5 ">
          {newImage.map((img, index) => {
            return (
              <>
                <img
                  className="array_image"
                  src={`https://source.unsplash.com/600x400/?${img}`}
                  alt="ImageArray"
                />
                <button
                  className="btn btn-danger btn-sm btn_delete"
                  onClick={() => {
                    deleteImage(index);
                  }}
                >
                  x
                </button>
              </>
            );
          })}
        </div>
        <div style={{ paddingTop: "3%" }}></div>
      </motion.div>
    </>
  );
};

export default Search;
