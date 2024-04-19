import "./App.css";
import Weather from "./Weather";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <a href="/">
          <img src={logo} alt="Logo" className="img-fluid" />
        </a>
      </div>
      <div className="container">
        <Weather defaultCity="London" />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/Veenessie">Verity Masters</a> and is{" "}
        <a href="https://github.com/Veenessie/react-weather-app">
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://verity-react-weather-app.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
