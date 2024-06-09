import { useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { Avatar, SimpleGrid, Center } from "@chakra-ui/react";

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

  const mailtoURLs = [
    `mailto:badhrihari123@gmail.com?subject=Hey Badhri!`,
    `mailto:rishirajanmenon@gmail.com?subject=Hey Rishi!`,
    `mailto:siddvaka1303@gmail.com?subject=Hey Siddhaarth!`,
    `mailto:rmfawaz07@gmail.com?subject=Hey Fawaz!`,
    `mailto:shrikkanthb@gmail.com?subject=Hey Shrikkanth!`,
    `mailto:praneshsch@gmail.com?subject=Hey Pranesh!`,
    `mailto:mithulchokan12@gmail.com?subject=Hey Mithul!`,
    `mailto:sahanaselvasankari@gmail.com?subject=Hey Sahana!`,
    `mailto:example@gmail.com?subject=Hey Prathap!`,
    `mailto:pritamkrishna2007@gmail.com?subject=Hey Pritam!`,
    `mailto:danadev0dd@gmail.com?subject=Hey Dana Dev!`,
  ];

  const keyMembers = [
    {
      name: "Badhri N Hari",
      title: "Founder | Director",
      emailIndex: 0,
      image: "/badhri-image.jpg",
    },
    {
      name: "Rishi Rajan Menon",
      title: "Founder | President",
      emailIndex: 1,
      image: "/rishi-image.jpg",
    },
    {
      name: "Siddhaarth",
      title: "Role 1",
      emailIndex: 2,
      image: "/siddhaarth-image.jpg",
    },
    {
      name: "Fawaz RM",
      title: "Role 2",
      emailIndex: 3,
      image: "/fawaz-image.jpg",
    },
    {
      name: "Shrikkanth",
      title: "Vice President",
      emailIndex: 4,
      image: "/shrikkanth-image.jpg",
    },
    {
      name: "Pranesh",
      title: "Finances Manager",
      emailIndex: 5,
      image: "/pranesh-image.jpg",
    },
    {
      name: "Mithul Chokan",
      title: "Role 5",
      emailIndex: 6,
      image: "/mithul-image.jpg",
    },
    {
      name: "Sahana Sankari",
      title: "Role 6",
      emailIndex: 7,
      image: "/sahana-image.jpg",
    },
    {
      name: "Prathap",
      title: "Role 7",
      emailIndex: 8,
      image: "/prathap-image.jpg",
    },
    {
      name: "Pritam KS",
      title: "Role 8",
      emailIndex: 9,
      image: "/pritam-image.jpg",
    },
    {
      name: "Dana Dev DS",
      title: "Role 9",
      emailIndex: 10,
      image: "/dana-image.jpg",
    },
  ];

  const founders = keyMembers.slice(0, 2);
  const coreMembers = keyMembers.slice(2);

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
        <Center>
          <div className="members-founders-container">
            {founders.map((founder, index) => (
              <div key={index} className="members-founders-card">
                <div className="members-founders-card-container">
                  <div className="members-founders-card-text-container">
                    <h1>{founder.name}</h1>
                    <p>{founder.title}</p>
                    <div className="members-founders-card-contacts">
                      <a
                        href={mailtoURLs[founder.emailIndex]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <EmailIcon
                          style={{ color: "black", fontSize: "40px" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="members-founders-card-picture">
                    <Avatar name={founder.name} src={founder.image} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Center>
        <Center pt={20} pb={40} px="4" className="members-core-header">
          Key Members
        </Center>
        <Center>
          <Center className="members-core-grid">
            <SimpleGrid columns={[1, 2, 3]} spacingX={50} spacingY={10}>
              {coreMembers.map((keyMember, index) => (
                <div key={index} className="members-core-card">
                  <div className="members-core-card-container">
                    <div className="members-core-card-text-container">
                      <h1>{keyMember.name}</h1>
                      <p>{keyMember.title}</p>
                      <div className="members-core-card-contacts">
                        <a
                          href={mailtoURLs[keyMember.emailIndex]}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <EmailIcon
                            style={{ color: "black", fontSize: "40px" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="members-core-card-picture">
                      <Avatar name={keyMember.name} src={keyMember.image} />
                    </div>
                  </div>
                </div>
              ))}
            </SimpleGrid>
          </Center>
        </Center>
        <MemberCards />
        <Footer />
      </div>
    </>
  );
}
