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
            >
              <div className="rectangle partner-rectangles">
                <img
                  src="/partnerships_images/annettes.jpg"
                  className="partner-images"
                  alt="Annettes Club logo"
                />
              </div>
              <div className="partner-our-mission">
                <h2>Annettes Club of RCMC</h2>
                <p>
                  ShoreGuardians and the{" "}
                  <a
                    href="https://www.instagram.com/annettes_rcmc/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Annettes Club of the Rotary Club Madras Central
                  </a>{" "}
                  have joined hands to make waves of change. Together,
                  we&apos;ve cleaned up our shores across multiple cleanups, and
                  are dedicated to a cleaner, greener tomorrow.
                </p>
              </div>
            </Stack>
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
                  Our efforts were recognized by the{" "}
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
            <Stack
              direction={["column", "row"]}
              divider={<StackDivider borderColor="gray.200" />}
              className="partner-about-us-component"
              style={{
                marginBottom: "0",
                height: "55vh",
              }}
            >
              <div className="rectangle partner-rectangles">
                <img
                  src="/partnerships_images/myrafiky.jpg"
                  className="partner-images"
                  alt="MyRafiky Logo"
                />
              </div>
              <div className="partner-our-mission">
                <h2>MyRafiky</h2>
                <p>
                  We worked with the{" "}
                  <a
                    href="https://www.instagram.com/p/C9SQMicPpCL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noreferrer"
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
              className="partner-about-us-component"
              style={{
                marginBottom: "0",
                height: "50vh",
              }}
            >
              <div className="partner-about-us">
                <h2>Jane Goodall Institute</h2>
                <p>
                  To commemorate Plastic Free July 2024, We partnered up with
                  the{" "}
                  <a
                    href="https://www.instagram.com/reel/C9ehqcMqnA-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jane Goodall Institute (India)
                  </a>
                  , through which we were able to share our story on their
                  platform and create an outline for future collaboratoins.
                </p>
              </div>
              <div className="rectangle partner-rectangles">
                <img
                  src="/partnerships_images/jane.jpg"
                  className="partner-images jane"
                  alt="Jane Goodall Institute India Logo"
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
