import logo from "./logo.svg";
import "./App.css";
import useScreenshotableDiv from "./hooks/useScreenshotableDiv";

function App() {
  const [ScreenshotableDiv, takeScreenshot] = useScreenshotableDiv();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            takeScreenshot("PNG");
          }}
        >
          DOWLOAD AS PNG
        </button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ScreenshotableDiv>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </ScreenshotableDiv>
      </header>
    </div>
  );
}

export default App;
