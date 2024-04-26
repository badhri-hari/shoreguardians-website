import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handlePointerMove = (event) => {
    const xPosition = Math.min(event.clientX, window.innerWidth - 300);
    const yPosition = Math.min(event.clientY, window.innerHeight - 300);
    setPosition({
      left: xPosition,
      top: yPosition,
    });
  };

  useEffect(() => {
    const updatePosition = (event) => {
      handlePointerMove(event);
    };
    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <>
      <div
        id="blob"
        style={{
          position: "absolute",
          left: `${position.left}px`,
          top: `${position.top}px`,
          transition: "left 1s, top 1s",
        }}
      ></div>
      <div onPointerMove={handlePointerMove}>
        <div className="content-blur">
          <Nav />
          <div className="home-page-image-container">
            <img
              src="/test-image.png"
              className="home-page-image"
              alt="test image"
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
