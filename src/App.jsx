import "./App.css";
import { HelloWorld } from "./helloworld";
import { Article } from "./article";
import { Top10 } from "./Top10";
import { CookieClicker } from "./CookieClicker";
import { Pokemon } from "./Pokemon";

function App() {
  return (
    <div className="app">
      <Pokemon/>
      {/* <CookieClicker /> */}
      {/* <HelloWorld title="HelloWorld" /> */}
      {/* <Article title="Title" text="Text" /> */}
      {/* <Top10 /> */}
    </div>
  );
}

export default App;
