import styles from './Top10.module.css'

export function Top10() {
  const base = import.meta.env.BASE_URL

  const photos = Array.from({ length: 10 }, (_, index) => ({
    src: `${base}top10/${index + 1}.webp`,
    alt: `Top 10 photo ${index + 1}`
  }))

  return (
    <section className={styles.top10}>
      <h2>Top 10 Photos</h2>
      <ol className={styles.list}>
        {photos.map((photo, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.info}>
              <img className={styles.photo} src={photo.src} alt={photo.alt} />
              <p className={styles.caption}>Photo {index + 1}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
