import { useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { Avatar, Divider, VStack, Box, AbsoluteCenter } from "@chakra-ui/react";

import Nav from "../components/Nav";
import MemberCards from "../components/MemberCards";
import Footer from "../components/Footer";

export default function Members() {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    const { innerHeight, innerWidth } = window;

    setPosition({
      left: (clientX / innerWidth) * 100,
      top: (clientY / innerHeight) * 100,
    });
  };

  const mailtoURL0 = `mailto:average.runner216@gmail.com?subject=Hey Badhri!`;
  const mailtoURL1 = `mailto:rishirajanmenon@gmail.com?subject=Hey Rishi!`;

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
        <div className="members-founders-container">
          <div className="members-founders-card">
            <div className="members-founders-card-container">
              <div className="members-founders-card-text-container">
                <h1>Badhri N Hari</h1>
                <p>Founder | Director</p>
                <div className="members-founders-card-contacts">
                  <a href={mailtoURL0} target="_blank" rel="noreferrer">
                    <EmailIcon style={{ color: "black", fontSize: "40px" }} />
                  </a>
                </div>
              </div>
              <div className="members-founders-card-picture">
                <Avatar name="Badhri Hari" src="/badhri-image.jpeg" />
              </div>
            </div>
          </div>
          <div className="members-founders-card">
            <div className="members-founders-card-container">
              <div className="members-founders-card-text-container">
                <h1>Rishi Rajan Menon</h1>
                <p>Founder | President</p>
                <div className="members-founders-card-contacts">
                  <a href={mailtoURL1} target="_blank" rel="noreferrer">
                    <EmailIcon style={{ color: "black", fontSize: "40px" }} />
                  </a>
                </div>
              </div>
              <div className="members-founders-card-picture">
                <Avatar name="Rishi Rajan Menon" src="/rishi-image.jpg" />
              </div>
            </div>
          </div>
        </div>
        <Box position="relative" padding="30">
          <Divider />
          <AbsoluteCenter px="4" className="members-header">
            Our Members
          </AbsoluteCenter>
        </Box>
        <VStack>
          <MemberCards />
        </VStack>
        <Footer />
      </div>
    </>
  );
}
