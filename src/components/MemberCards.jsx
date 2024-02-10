import { useEffect, useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";

export default function MemberCards() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/api/member_details")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.map((member) => {
          let imageSrc = "https://bit.ly/sage-adebayo";
          if (member.Picture && member.Picture.includes("open?id=")) {
            const fileId = member.Picture.split("open?id=")[1];
            imageSrc = `https://drive.usercontent.google.com/download?id=${fileId}&export=view`;
          }
          return { ...member, Picture: imageSrc };
        });
        setMembers(transformedData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="members-container">
      {members.length > 0 ? (
        members.map((member) => (
          <div key={member.SubmissionTime} className="members-card">
            <div className="members-card-container">
              <h1>{member.Name}</h1>
              <div className="members-card-contacts">
                <a
                  href={`mailto:${member.Email}?subject=Hey ${member.Name}!`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <EmailIcon style={{ color: "black", fontSize: "20px" }} />
                </a>
              </div>
              <div className="members-card-picture">
                <Avatar
                  size="sm"
                  name={member.Name}
                  src={member.Picture}
                  alt={`${member.Name}'s profile picture`}
                />
                <img
                  src="https://drive.google.com/uc?export=view&id=17Tes_BRfeiTbE6TXidWRU-NDBsMV7rof"
                  alt="Test Image"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="members-card">Please wait...</div>
      )}
    </div>
  );
}
