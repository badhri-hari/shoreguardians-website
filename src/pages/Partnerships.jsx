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
        pageTitle="Partnerships"
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
        <div
          className="home-container"
          style={{ height: "175vh", paddingTop: "0" }}
        >
          <VStack
            className="about-mission-overlay"
            style={{
              marginTop: "17vh",
              height: "92.5%",
            }}
          >
            <Stack
              direction={["column", "row"]}
              divider={<StackDivider borderColor="gray.200" />}
              className="about-us-component"
              style={{
                marginBottom: "0",
                height: "31.3%",
              }}
            >
              <div className="about-us">
                <h2>Annettes Club of RCMC</h2>
                <p>
                  ShoreGuardians and the{" "}
                  <a
                    href="https://www.instagram.com/annettes_rcmc/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecorationThickness: "1.2px",
                      textUnderlineOffset: "0.1em",
                    }}
                  >
                    Annettes Club of Rotary Club (Madras Central)
                  </a>{" "}
                  have joined hands to make waves of change. Together,
                  we&apos;ve cleaned up our shores across multiple cleanups, and
                  are dedicated to a cleaner, greener tomorrow.
                </p>
              </div>
              <div className="rectangle">
                <img
                  src="/shoreguardians-logo.png"
                  className="fade-in-smaller-images"
                  alt=""
                />
              </div>
            </Stack>
            <Stack
              direction={["column", "row"]}
              divider={<StackDivider borderColor="gray.200" />}
              className="about-us-component"
              style={{
                marginBottom: "0",
                height: "31.3%",
              }}
            >
              <div className="rectangle">
                <img
                  src="/shoreguardians-logo.png"
                  className="fade-in-smaller-images"
                  alt=""
                />
              </div>
              <div className="our-mission">
                <h2>MyRafiky</h2>
                <p>
                  We worked with the{" "}
                  <a
                    href="https://myrafiky.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{}}
                  >
                    MyRafiky
                  </a>{" "}
                  organization in order to explore how tending to nature can
                  help bring a peace of mind for teens and young adults alike.
                </p>
              </div>
            </Stack>
            <Stack
              direction={["column", "row"]}
              divider={<StackDivider borderColor="gray.200" />}
              className="about-us-component"
              style={{
                marginBottom: "0",
                height: "31.3%",
              }}
            >
              <div className="about-us">
                <h2>Jane Goodall Institute</h2>
                <p>
                  To commemorate Plastic Free July 2024, We partnered up with
                  the{" "}
                  <a
                    href="https://rootsandshoots.in/"
                    target="_blank"
                    rel="noreferrer"
                    style={{}}
                  >
                    Jane Goodall Institute (India)
                  </a>
                  , through which we were able to share our story on their
                  platform and create an outline for future collaboratoins.
                </p>
              </div>
              <div className="rectangle">
                <img
                  src="/shoreguardians-logo.png"
                  className="fade-in-smaller-images"
                  alt=""
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
