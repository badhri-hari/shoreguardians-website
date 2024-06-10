import { HStack, Center, VStack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function Footer() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 425px)");

  return (
    <Center className="footer-container">
      <footer>
        {isSmallerScreen ? (
          <VStack className="glassmorphism-footer" padding={"10px"}>
            <img src="/shoreguardians-logo.png" className="footer-logo"></img>
            <div className="footer-text-container">
              Web Design Team:{" "}
              <a href="https://github.com/badhri-hari/" target="blank">
                Badhri Hari
              </a>
            </div>
          </VStack>
        ) : (
          <HStack className="glassmorphism-footer" padding={"10px"}>
            <img src="/shoreguardians-logo.png" className="footer-logo"></img>
            <div className="footer-text-container">
              Web Design Team:{" "}
              <a href="https://github.com/badhri-hari/" target="blank">
                Badhri Hari
              </a>
            </div>
          </HStack>
        )}
      </footer>
    </Center>
  );
}
