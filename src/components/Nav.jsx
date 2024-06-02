import { HStack, Center, Link, Box } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

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
          <HStack className="nav-hstack" spacing="auto">
            <Link href="/" className="nav-links">
              Home
            </Link>
            <Link href="/members" className="nav-links">
              Members
            </Link>
            <Link href="/recognition" className="nav-links">
              Recognition
            </Link>
            <a
              href="mailto:shoreguardians.chennai@gmail.com?cc=average.runner216@gmail.com,rishirajanmenon@gmail.com&subject=Hey ShoreGuardians! I Have A Question..."
              target="blank"
            >
              <EmailIcon
                color="white"
                boxSize="2em"
                className="nav-email-container"
              />
            </a>
          </HStack>
        </Center>
      </nav>
    </header>
  );
}
