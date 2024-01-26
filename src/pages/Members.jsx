import { EmailIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
import Nav from "../components/Nav";

export default function Members() {
  const mailtoURL0 = `mailto:average.runner216@gmail.com&subject=Hey Badhri!`;
  const mailtoURL1 = `mailto:rishirajanmenon@gmail.com&subject=Hey Rishi!`;

  return (
    <>
      <Nav />
      <div className="members-founders-container">
        <div className="members-founders-card">
          <div className="members-founders-card-container">
            <h1>Badhri N Hari</h1>
            <p>Director</p>
            <div className="members-founders-card-contacts">
              <a href="https://www.instagram.com/badh.hari/" target="blank">
                <img
                  src="../../public/instagram-icon.svg"
                  className="members-founders-card-contacts-instagram"
                />
              </a>
              <a href={mailtoURL0} target="blank">
                <EmailIcon style={{ color: "black", fontSize: "40px" }} />
              </a>
            </div>
            <div className="members-founders-card-picture">
              <Avatar
                size={null}
                name="Badhri Hari"
                src="../../public/badhri-image.jpeg"
              />
            </div>
          </div>
        </div>
        <div className="members-founders-card">
          <div className="members-founders-card-container">
            <h1>Rishi Rajan Menon</h1>
            <p>President</p>
            <div className="members-founders-card-contacts">
              <a href="https://www.instagram.com/rishiii__13/" target="blank">
                <img
                  src="../../public/instagram-icon.svg"
                  className="members-founders-card-contacts-instagram"
                />
              </a>
              <a href={mailtoURL1} target="blank">
                <EmailIcon style={{ color: "black", fontSize: "40px" }} />
              </a>
            </div>
            <div className="members-founders-card-picture">
              <Avatar
                size={null}
                name="Sage Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
