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
      name: "Badhri Hari",
      title: "Founder | President",
      emailIndex: 0,
      image: "/key-members/badhri-image.jpg",
      accomplishments: "Accomplishments for Badhri",
    },
    {
      name: "Rishi RM",
      title: "Founder | Director",
      emailIndex: 1,
      image: "/key-members/rishi-image.jpg",
      accomplishments:
        "As the Director of ShoreGuardians, I've played a crucial role in the planning and execution the club’s initiatives. I reached out to and managed our partnership with Annetts Club, coordinating major collaborations and organizing cleanups that mobilized up to 80 members. My efforts have been pivotal in establishing a strong foundation for the club's ongoing activities and expanding its reach.",
    },
    {
      name: "Shrikkanth",
      title: "Vice President",
      emailIndex: 4,
      image: "/key-members/shrikkanth-image.jpg",
      accomplishments:
        "As Vice President, I manage the day-to-day operations and ensure the smooth execution of the club’s activities. I support the President in overseeing major events, such as high-impact cleanup initiatives and collaborations with external organizations. My role enhances the club's operational efficiency and member engagement.",
    },
    {
      name: "Fawaz RM",
      title: "Vice Director",
      emailIndex: 3,
      image: "/key-members/fawaz-image.jpg",
      accomplishments:
        "As Vice Director, I assist the Director in planning and executing strategic projects and partnerships. I coordinate with partner organizations like MYRafiky and Oceans Are Us, ensuring that collaborations run seamlessly and effectively. My organizational skills contribute to the successful management of large-scale cleanups.",
    },
    {
      name: "Siddhaarth",
      title: "Chief of Members",
      emailIndex: 2,
      image: "/key-members/siddhaarth-image.jpg",
      accomplishments:
        "As Chief of Members, I am responsible for member recruitment, retention, and engagement within ShoreGuardians. I have successfully grown the club to nearly 100 members over the course of a year and maintained high levels of participation in cleanups and events. My efforts have fostered a strong, active community dedicated to environmental conservation.",
    },
    {
      name: "Sahana S",
      title: "Marketing Head",
      emailIndex: 7,
      image: "/key-members/sahana-image.jpeg",
      accomplishments:
        "As the Marketing Head, I manage the club's social media presence, growing our Instagram account to 300+ followers. Through engaging posts and reels, I successfully raise awareness about the club’s initiatives and achievements. My strategies help increase the club's visibility and attract widespread support and participation.",
    },
  ];

  const founders = keyMembers.slice(0, 2);
  const coreMembers = keyMembers.slice(2);

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
