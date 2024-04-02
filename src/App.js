import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/Veenessie">Verity Masters</a>
        and is{" "}
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
