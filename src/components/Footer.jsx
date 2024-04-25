import { HStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer>
      <HStack>
        <img src="../../public/shoreguardians-logo.png" className="footer-logo"></img>
        <div className="footer-text-container">
          Web Design Team: <a href="https://github.com/badhri-hari/" target="blank">Badhri Hari</a>, John Doe
        </div>
      </HStack>
    </footer>
  );
}
