import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./templates/Navbar";
import { Home } from "./templates/Home";
import { About } from "./about/About";
import { Games } from "./games/Games";
import { Contact } from "./contact/Contact";
import { Gallery } from "./grallery/Gallery";
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
