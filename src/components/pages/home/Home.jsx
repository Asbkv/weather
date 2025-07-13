import React, { useState } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const { cash } = useSelector((s) => s);

  const error = () => {
    toast.error("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  function AddPrice() {
    dispatch({ type: "ADD_MONEY", payload: price });
    setPrice("");
  }

  return (
    <div id="home">
      <div className="container">
        <div className="form">
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            value={price}
          />
          <button onClick={() => AddPrice()}>add</button>
        </div>
        <div className="home">
          <button
            onClick={() =>
              cash >= 5000
                ? error()
                : dispatch({ type: "ADD_MONEY", payload: 500 })
            }
          >
            ADD
          </button>
          <h1>{cash}$</h1>
          <button
            onClick={() => dispatch({ type: "TAKE_MONEY", payload: 500 })}
          >
            TAKE
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
