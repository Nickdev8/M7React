import { useState } from "react"
import styles from "./CookieClicker.module.css"

export function CookieClicker() {

  const [score, setScore] = useState(0)
  const [grandmas, setGrandmas] = useState(0)

  const grandmaCost = Math.floor(20 * 1.15 ** grandmas)

  function handleCookieClick() {
    setScore(score + 1 + grandmas)
  }

  function buyGrandma() {
    if (score >= grandmaCost) {
      setGrandmas(grandmas + 1)
      setScore(score - grandmaCost)
    }
  }

  return (
    <section className={styles.container}>
      <h2>Cookie Clicker</h2>

      <button 
        className={styles.cookie} 
        onClick={handleCookieClick}
      ></button>

      <div className={styles.score}>
        {score} Cookies
      </div>

      <div className={styles.upgradeSection}>
        <p>Grandmas: {grandmas}</p>
        <p>Cost: {grandmaCost}</p>
        <button 
          className={styles.upgrade}
          onClick={buyGrandma}
        >
          Buy Grandma
        </button>
      </div>
    </section>
  )
}
