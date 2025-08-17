import { useState } from "react";
import { Stack, VStack, StackDivider } from "@chakra-ui/react";

import Head from "../components/Head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Partnerships() {
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
      <Head
        pageTitle="Partnerships and News"
        description="Our club's recognitions and partnerships."
      />
      <div
        className="blob"
        style={{
          position: "fixed",
          left: `${position.left}vw`,
          top: `${position.top}vh`,
          transition: "left 0.5s, top 0.5s",
        }}
      ></div>
      <div className="content-blur" onPointerMove={handlePointerMove}>
        <Nav />
        <div className="partner-home-container">
          <VStack className="partner-about-mission-overlay">
            <Stack
              direction={["column", "row"]}
              divider={<StackDivider borderColor="gray.200" />}
              className="partner-about-us-component"
              style={{
                marginBottom: "0",
                height: "55vh",
              }}
            >
              <div className="partner-about-us">
                <h2>Adyar Times</h2>
                <p>
                  The efforts of our club&apos;s founders were recognized by the{" "}
                  <a
                    href="https://adyartimes.in/youth-group-shows-concern-for-environmental-issues/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Adyar Times
                  </a>{" "}
                  group, which lead to a feature article about the club, our
                  purpose, and our outreach.
                </p>
              </div>
              <div className="rectangle partner-rectangles">
                <img
                  src="/partnerships_images/adyar.jpg"
                  className="partner-images"
                  alt="Adyar Times Feature Article's main image"
                />
              </div>
            </Stack>
          </VStack>
        </div>
        <Footer />
      </div>
    </>
  );
}
