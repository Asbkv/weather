import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./About.scss";

const About = () => {
  const dispatch = useDispatch();
  const { main } = useSelector((s) => s);
  function getUser() {
    return async (dispatch) => {
      let res = await axios(`https://fakestoreapi.com/products`);
      let { data } = res;
      dispatch({ type: "GET_USERS", payload: data });
      console.log(data);
    };
  }

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="about">
          {main.map((el) => (
            <div className="about--block" key={el.id}>
              <center>
                <img src={el.image} alt="img" width={150} />
              </center>
              <div className="about--block__info">
                <h1>{el.title.slice(0, 10)}</h1>
                <h3>{el.price}$</h3>
                <h5>{el.category}</h5>
                <h6>{el.description.slice(0, 65)}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
