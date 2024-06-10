import { Box, HStack, Center, Link } from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import { FaInstagram, FaUserPlus } from "react-icons/fa";

export default function Nav() {
  return (
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
          <HStack className="nav-hstack" spacing="2rem" width="100%">
            <Link href="/" className="nav-links">
              Home
            </Link>
            <Link href="/members" className="nav-links">
              Members
            </Link>
            <Link href="/recognition" className="nav-links">
              Recognition
            </Link>
            <HStack spacing="1rem">
              <a
                href="mailto:shoreguardians.chennai@gmail.com?cc=badhrihari123@gmail.com,rishirajanmenon@gmail.com&subject=Hey ShoreGuardians! I Have A Question..."
                target="blank"
              >
                <AtSignIcon
                  color="white"
                  boxSize="2em"
                  className="nav-email-container"
                />
              </a>
              <a href="https://instagram.com/shore.guardians" target="blank">
                <FaInstagram
                  color="white"
                  size="2em"
                  className="nav-instagram-container"
                />
              </a>
              <a href="https://forms.gle/BxeDLuxhkKXpJffi6" target="blank">
                <FaUserPlus
                  color="white"
                  size="2em"
                  className="nav-signup-container"
                />
              </a>
            </HStack>
          </HStack>
        </Center>
      </nav>
    </header>
  );
}
