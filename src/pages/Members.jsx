import { useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { CgDetailsMore } from "react-icons/cg";
import {
  Avatar,
  SimpleGrid,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  VStack,
  Box,
} from "@chakra-ui/react";

import Nav from "../components/Nav";
import MemberCards from "../components/MemberCards";
import Footer from "../components/Footer";
import Head from "../components/Head";

export default function Members() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [selectedMember, setSelectedMember] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    const { innerHeight, innerWidth } = window;

    setPosition({
      left: (clientX / innerWidth) * 100,
      top: (clientY / innerHeight) * 100,
    });
  };

  const handleClick = (member) => {
    setSelectedMember(member);
    onOpen();
  };

  const mailtoURLs = [
    `mailto:aadhils2009@gmail.com?subject=Hey Aadhil!`,
    `mailto:roshanamrith2009@gmail.com?subject=Hey Roshan!`,
    `mailto:ahilmanav@gmail.com?subject=Hey Ahil!`,
  ];

  const keyMembers = [
    {
      name: "Aadhil",
      title: "President",
      emailIndex: 0,
      image: "/key-members/aadhil-image.jpg",
      accomplishments:
        "I’m Aadhil, and I am the President of ShoreGuardians. I believe that small actions can bring big changes and to protect our iconic beaches and marine life, I work to encourage simple beach cleanups that reduce pollution and keep our coastlines looking serene. In my role, I lead our team in planning cleanups, guiding projects, and ensuring that our efforts create a lasting impact. Our goal is to build a strong community that is dedicated to preserving the health of our coasts. Together, lets help keep our shores clean and waste-free.",
    },
    {
      name: "Roshan",
      title: "Director",
      emailIndex: 1,
      image: "/key-members/roshan-image.jpg",
      accomplishments:
        "I am Roshan, I am passionate about protecting coastlines. By leading beach cleanups, reducing plastic waste, and restoring ecosystems, me and my peers look forward to inspire communities to take action for a cleaner, healthier, and sustainable ocean future because there is more than it meets the eye.",
    },
    {
      name: "Ahil Manav",
      title: "Director",
      emailIndex: 2,
      image: "/key-members/ahil-image.jpg",
      accomplishments:
        "I’m Ahil Manav, and I've always wanted to do something meaningful for the environment. I believe that every action, whether it’s saving energy, reducing waste, or encouraging others to live sustainably adds up to create real change. For me, protecting the planet isn’t just an idea, it’s a responsibility. I love learning new ways to care for nature and as a director of ShoreGuardians I aim to do my part for the planet!",
    },
  ];

  const founders = keyMembers.slice(0, 3);
  const coreMembers = keyMembers.slice(3);

  return (
    <>
      <Head
        pageTitle="Members"
        description="Our club's key members and volunteers."
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
                        <EmailIcon />
                      </a>
                      <CgDetailsMore
                        style={{
                          color: "black",
                          fontSize: "40px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleClick(founder)}
                      />
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
          <Center className="members-core-grid-container">
            <div className="members-core-grid-desktop">
              <SimpleGrid columns={[1, 2]} spacingX={50} spacingY={0}>
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
                          <CgDetailsMore
                            style={{
                              color: "black",
                              fontSize: "40px",
                              cursor: "pointer",
                            }}
                            onClick={() => handleClick(keyMember)}
                          />
                        </div>
                      </div>
                      <div className="members-core-card-picture">
                        <Avatar name={keyMember.name} src={keyMember.image} />
                      </div>
                    </div>
                  </div>
                ))}
              </SimpleGrid>
            </div>

            <div className="members-core-grid-mobile">
              <SimpleGrid columns={[1]} spacingX={0} spacingY={0}>
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
                          <CgDetailsMore
                            style={{
                              color: "black",
                              fontSize: "40px",
                              cursor: "pointer",
                            }}
                            onClick={() => handleClick(keyMember)}
                          />
                        </div>
                      </div>
                      <div className="members-core-card-picture">
                        <Avatar name={keyMember.name} src={keyMember.image} />
                      </div>
                    </div>
                  </div>
                ))}
              </SimpleGrid>
            </div>
          </Center>
        </Center>
        <MemberCards />
        <Footer />
      </div>

      {selectedMember && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay
            backdropFilter="blur(10px)"
            transition="backdrop-filter 0.3s ease"
          />
          <ModalContent
            className="members-modal"
            transition="transform 0.3s ease"
          >
            <Center height="100%" width="100%">
              <VStack className="members-modal-glassmorphism">
                <ModalHeader
                  style={{
                    fontFamily: "arvo-bold, sans-serif",
                    fontSize: "30px",
                  }}
                >
                  {selectedMember.name} | {selectedMember.title}
                </ModalHeader>
                <ModalBody>
                  <div className="members-modal-picture">
                    <Avatar
                      name={selectedMember.name}
                      src={selectedMember.image}
                    />
                  </div>
                  <Box className="members-modal-text">
                    {selectedMember.accomplishments}
                  </Box>
                </ModalBody>
              </VStack>
            </Center>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
