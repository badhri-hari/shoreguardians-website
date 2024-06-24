import { HStack, Center, VStack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function Footer() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 425px)");
  const sahanaMail = "mailto:sahanaselvasankari@gmail.com?subject=Hey Sahana!";

  return (
    <Center className="footer-container">
      <footer>
        {isSmallerScreen ? (
          <VStack className="glassmorphism-footer" padding={"10px"}>
            <img src="/shoreguardians-logo.png" className="footer-logo"></img>
            <div className="footer-text-container">
              Web Design and Content Team:{" "}
              <a href="https://github.com/badhri-hari/" target="blank">
                Badhri Hari
              </a>
              {/* &nbsp;,&nbsp;&nbsp;
              <a href={sahanaMail} target="_blank" rel="noreferrer">
                Sahana S
              </a> */}
            </div>
          </VStack>
        ) : (
          <HStack className="glassmorphism-footer" padding={"10px"}>
            <img src="/shoreguardians-logo.png" className="footer-logo"></img>
            <div className="footer-text-container">
              Web Design and Content Team:{" "}
              <a href="https://github.com/badhri-hari/" target="blank">
                Badhri Hari
              </a>
              {/* &nbsp;,&nbsp;&nbsp;
              <a href={sahanaMail} target="_blank" rel="noreferrer">
                Sahana S
              </a> */}
            </div>
          </HStack>
        )}
      </footer>
    </Center>
  );
}
