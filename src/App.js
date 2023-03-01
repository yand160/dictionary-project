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
        <footer className="App-footer">Coded with ❤️ by Yandia Alexis</footer>
      </div>
    </div>
  );
}
