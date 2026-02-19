import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { About } from "./About";
import { Games } from "./Games";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";
import { NotFound } from "./NotFound";

function App() {
  const [path, setPath] = useState(window.location.hash.slice(1) || "/");

  useEffect(() => {
    const onHashChange = () => {
      setPath(window.location.hash.slice(1) || "/");
    };

    window.addEventListener("hashchange", onHashChange);
    onHashChange();

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  let page = <NotFound />;
  if (path === "/") page = <Home />;
  if (path === "/about") page = <About />;
  if (path === "/games") page = <Games />;
  if (path === "/gallery") page = <Gallery />;
  if (path === "/contact") page = <Contact />;

  return (
    <div className="app">
      <Navbar />
      {page}
    </div>
  );
}

export default App;
