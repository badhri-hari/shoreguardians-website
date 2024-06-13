import {
  Box,
  HStack,
  Center,
  Link,
  VStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaInstagram, FaUserPlus } from "react-icons/fa";
import { IoAtSharp, IoCloseOutline } from "react-icons/io5";

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
              <Link href="/" className="nav-links-desktop">
                Home
              </Link>
              <Link href="/members" className="nav-links-desktop">
                Members
              </Link>
              <Link href="/recognition" className="nav-links-desktop">
                Recognition
              </Link>
              <HStack spacing="1rem" className="nav-icons-container-desktop">
                <a
                  href="mailto:shoreguardians.chennai@gmail.com?cc=badhrihari123@gmail.com,rishirajanmenon@gmail.com&subject=Hey ShoreGuardians! I Have A Question..."
                  target="blank"
                >
                  <IoAtSharp
                    color="white"
                    size="2em"
                    className="nav-email-container-desktop"
                  />
                </a>
                <a href="https://instagram.com/shore.guardians" target="blank">
                  <FaInstagram
                    color="white"
                    size="2em"
                    className="nav-instagram-container-desktop"
                  />
                </a>
                <a href="https://forms.gle/YtEeof8MpSGa8hFE8" target="blank">
                  <FaUserPlus
                    color="white"
                    size="2em"
                    className="nav-signup-container-desktop"
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
                <Link href="/" className="nav-links-mobile" onClick={onClose}>
                  Home
                </Link>
                <Link
                  href="/members"
                  className="nav-links-mobile"
                  onClick={onClose}
                >
                  Members
                </Link>
                <Link
                  href="/recognition"
                  className="nav-links-mobile"
                  onClick={onClose}
                >
                  Recognition
                </Link>
                <HStack spacing="1rem" className="nav-icons-container-mobile">
                  <a
                    href="mailto:shoreguardians.chennai@gmail.com?cc=badhrihari123@gmail.com,rishirajanmenon@gmail.com&subject=Hey ShoreGuardians! I Have A Question..."
                    target="_blank"
                    rel="noreferrer"
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
                    rel="noreferrer"
                  >
                    <FaInstagram
                      color="white"
                      size="2em"
                      className="nav-instagram-container-mobile"
                    />
                  </a>
                  <a
                    href="https://forms.gle/YtEeof8MpSGa8hFE8"
                    target="_blank"
                    rel="noreferrer"
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
