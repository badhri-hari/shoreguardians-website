import {
  Box,
  HStack,
  Center,
  VStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaInstagram, FaUserPlus, FaLinkedin } from "react-icons/fa";
import { IoAtSharp, IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <header className="header-container">
        <Box className="nav-logo-container nav-logo-blue-background">
          <img
            src="/shoreguardians-logo-hands.jpg"
            className="nav-image"
            alt="ShoreGuardians Logo"
          />
        </Box>
        <nav>
          <Center className="glassmorphism-nav">
            <Box onClick={onOpen} className="burger-menu">
              <Center>
                <HamburgerIcon boxSize={30} mt={10} aria-label="Open Menu" />
              </Center>
            </Box>
            <HStack className="nav-hstack" spacing="2rem" width="100%">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-links-desktop ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/members"
                className={({ isActive }) =>
                  `nav-links-desktop ${isActive ? "active" : ""}`
                }
              >
                Members
              </NavLink>
              <NavLink
                to="/partnerships"
                className={({ isActive }) =>
                  `nav-links-desktop ${isActive ? "active" : ""}`
                }
              >
                Partnerships and News
              </NavLink>
              <HStack spacing="1.2rem">
                <a
                  href="mailto:shoreguardians.chennai@gmail.com?cc=badhrihari123@gmail.com,rishirajanmenon@gmail.com&subject=Hey ShoreGuardians! I Have A Question..."
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IoAtSharp
                    color="red"
                    size="2em"
                    className="nav-email-container-desktop"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Email Us!"
                    data-tooltip-place="bottom"
                    id="clickable"
                    data-tooltip-offset="12"
                    data-tooltip-variant="info"
                    data-tooltip-delay-show="180"
                  />
                  <Tooltip id="my-tooltip" />
                </a>
                <a
                  href="https://instagram.com/shore.guardians"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaInstagram
                    color="#ff6e6e"
                    size="2em"
                    className="nav-instagram-container-desktop"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Visit our Instagram Page!"
                    data-tooltip-place="bottom"
                    id="clickable"
                    data-tooltip-offset="12"
                    data-tooltip-variant="info"
                    data-tooltip-delay-show="180"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/shoreguardians/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLinkedin
                    color="#0072b1"
                    size="2em"
                    className="nav-signup-container-desktop"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Visit our LinkedIn Page!"
                    data-tooltip-place="bottom"
                    id="clickable"
                    data-tooltip-offset="12"
                    data-tooltip-variant="info"
                    data-tooltip-delay-show="180"
                  />
                </a>
                <a
                  href="https://forms.gle/ZmhYk2ko54hg3gWu9"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaUserPlus
                    color="#6792c9"
                    size="2em"
                    className="nav-instagram-container-desktop"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Sign Up!"
                    data-tooltip-place="bottom"
                    id="clickable"
                    data-tooltip-offset="12"
                    data-tooltip-variant="info"
                    data-tooltip-delay-show="180"
                  />
                </a>
              </HStack>
            </HStack>
          </Center>
        </nav>

        <Drawer isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            bg="rgba(138, 188, 215, 0.95)"
            style={{
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <DrawerBody>
              <VStack spacing="2rem">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-links-mobile ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/members"
                  className={({ isActive }) =>
                    `nav-links-mobile ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  Members
                </NavLink>
                <NavLink
                  to="/partnerships"
                  className={({ isActive }) =>
                    `nav-links-mobile ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  Partnerships and News
                </NavLink>
                <HStack spacing="1rem" className="nav-icons-container-mobile">
                  <a
                    href="mailto:shoreguardians.chennai@gmail.com?cc=badhrihari123@gmail.com,rishirajanmenon@gmail.com&subject=Hey ShoreGuardians! I Have A Question..."
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IoAtSharp
                      color="white"
                      size="2em"
                      className="nav-email-container-mobile"
                    />
                  </a>
                  <a
                    href="https://instagram.com/shore.guardians"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaInstagram
                      color="white"
                      size="2em"
                      className="nav-instagram-container-mobile"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/shoreguardians/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedin
                      color="white"
                      size="2em"
                      className="nav-signup-container-mobile"
                    />
                  </a>
                  <a
                    href="https://forms.gle/ZmhYk2ko54hg3gWu9"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaUserPlus
                      color="white"
                      size="2em"
                      className="nav-signup-container-mobile"
                    />
                  </a>
                </HStack>
              </VStack>
            </DrawerBody>
            <Center mt={40}>
              <IoCloseOutline onClick={onClose} size="3em" />
            </Center>
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
}
