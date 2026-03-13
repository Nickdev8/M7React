import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

export function Gallery() {
  const base = import.meta.env.BASE_URL;
  const images = Array.from({ length: 10 }, (_, i) => ({
    original: `${base}top10/${i + 1}.webp`,
    thumbnail: `${base}top10/${i + 1}.webp`,
  }));

  return (
    <main>
      <h1>Gallery</h1>
      <ImageGallery items={images} />
    </main>
  );
}
