import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#/about">About</a>
        </li>
        <li>
          <a href="#/games">Games</a>
        </li>
        <li>
          <a href="#/gallery">Gallery</a>
        </li>
        <li>
          <a href="#/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
