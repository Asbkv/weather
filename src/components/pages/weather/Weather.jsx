import React, { useEffect, useState } from "react";
import "./Weather.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((s) => s.weather);

  const [weat, setWeat] = useState("");
  const [query, setQuery] = useState("Bishkek");
  function getWeather(city) {
    return async (dispatch) => {
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru`
      );
      dispatch({ type: "GET_WEATHER", payload: res.data });
      setWeat("");
      console.log(res.data);
    };
  }

  const KeyDown = (e) => {
    if (e.key === "Enter" && weat.trim() !== "") {
      setQuery(weat.trim());
    }
  };
  useEffect(() => {
    dispatch(getWeather(query));
  }, [query]); 

  return (
    <div id="weather">
      <div className="container">
        <div className="weather">
          <div className="weather--search">
            <input
              type="text"
              placeholder="Введите название города"
              value={weat}
              onChange={(e) => setWeat(e.target.value)}
              onKeyDown={KeyDown}
            />
            <button onClick={() => setQuery(weat.trim())}>Search</button>
          </div>
          {weather ? (
            <div className="weather--card">
              <h2>Погода в {weather.name}</h2>
              <p>Температура: {weather.main.temp}°C</p>
              <p>Ощущается как: {weather.main.feels_like}°C</p>
              <p>Описание: {weather.weather[0].description}</p>
              <p>Ветер: {weather.wind.speed} м/с</p>
            </div>
          ) : (
            <p>Загрузка...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
