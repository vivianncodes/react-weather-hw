import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/vivian-nguyen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vivian Nguyen
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/vivianncodes/react-weather-hw"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
