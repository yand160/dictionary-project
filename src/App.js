import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>📖 Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer">
          Coded with ❤️ by Yandia Alexis and is
          <a
            href="https://github.com/yand160/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/strong-vacherin-76b3b8/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
