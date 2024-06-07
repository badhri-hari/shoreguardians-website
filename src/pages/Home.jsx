import { useState, useEffect } from "react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const images = import.meta.glob("/public/home-page-pictures/*.jpg");
      const imagePaths = await Promise.all(
        Object.keys(images).map(async (path) => {
          const module = await images[path]();
          return module.default;
        })
      );

      const shuffledImages = imagePaths.sort(() => Math.random() - 0.5);
      setImages(shuffledImages);
    };

    fetchImages();

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 6500);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <>
      <Nav />
      <div className="home-image-container">
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            className={`home-image ${fade ? "fade-in" : "fade-out"}`}
            alt="Home Page Images"
          />
        )}
      </div>
      <Footer />
    </>
  );
}
