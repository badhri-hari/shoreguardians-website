import { useState } from "react";
import { VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      <button onClick={toggleNav} className="nav-toggle-button">
        <CloseIcon
          className={`nav-toggle-button-icon ${
            navOpen ? "nav-toggle-button-active" : ""
          }`}
        />
        <HamburgerIcon
          fontSize={"large"}
          className={`nav-toggle-button-icon ${
            !navOpen ? "nav-toggle-button-active" : ""
          }`}
        />
      </button>

      <nav className={navOpen ? "nav-open" : "nav-closed"}>
        <VStack>
          <a href="/home" className="nav-links first">
            Home
          </a>
          <a href="/members" className="nav-links third">
            Members
          </a>
        </VStack>
      </nav>

      <div
        className={navOpen ? "overlay overlay-visible" : "overlay"}
        onClick={closeNav}
      ></div>
    </>
  );
}
