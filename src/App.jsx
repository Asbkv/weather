import { useSelector } from "react-redux";
import "./App.scss";
import Header from "./components/layout/header/Header";
import Home from "./components/pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/about/About";
import Weather from "./components/pages/weather/Weather";

function App() {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <Home />,
    },
    {
      id: 2,
      path: "/about",
      element: <About />,
    },
    {
      id: 3,
      path: "/weather",
      element: <Weather/>
    },
  ];

  const  dark  = useSelector((s) => s.dark);

  return (
    <div className={`app ${dark ? "dark-theme" : "light-theme"}`}>
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
