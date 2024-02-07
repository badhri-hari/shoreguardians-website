import { HStack } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export default function Nav() {
  const mailtoURL = `mailto:shoreguardians.chennai@gmail.com?cc=average.runner216@gmail.com&subject=Hey ShoreGuardians! I Have A Question...`;

  return (
    <nav>
      <HStack className="nav-hstack" spacing={300}>
        <a
          href="https://form.jotform.com/232942341832050"
          target="blank"
          className="nav-image-container"
        >
          <img
            src="/shoreguardians-logo-hands.jpg"
            className="nav-image"
            alt="Part of the ShoreGuardians Logo"
          />
        </a>
        <a href="/" className="nav-links first">
          Home
        </a>
        <a href="/members" className="nav-links second">
          Members
        </a>
        <a href={mailtoURL} target="blank">
          <EmailIcon
            color="white"
            boxSize="2em"
            className="nav-email-container"
          />
        </a>
      </HStack>
    </nav>
  );
}
