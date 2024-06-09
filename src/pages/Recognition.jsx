import { useState } from "react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Recognition() {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    const { innerHeight, innerWidth } = window;

    setPosition({
      left: (clientX / innerWidth) * 100,
      top: (clientY / innerHeight) * 100,
    });
  };

  return (
    <>
      <div
        className="blob"
        style={{
          position: "fixed",
          left: `${position.left}vw`,
          top: `${position.top}vh`,
          transition: "left 0.3s, top 0.3s",
        }}
      ></div>
      <div className="content-blur" onPointerMove={handlePointerMove}>
        <Nav />
        <Footer />
      </div>
    </>
  );
}
