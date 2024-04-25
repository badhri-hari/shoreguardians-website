import { HStack, Center } from "@chakra-ui/react";

export default function Footer() {
  return (
      <Center className="footer-container">
        <footer>
          <HStack padding={"10px"}>
            <img src="/shoreguardians-logo.png" className="footer-logo"></img>
            <div className="footer-text-container">
              Web Design Team: <a href="https://github.com/badhri-hari/" target="blank">Badhri Hari</a>, John Doe
            </div>
          </HStack>
        </footer>
      </Center>
  );
}
