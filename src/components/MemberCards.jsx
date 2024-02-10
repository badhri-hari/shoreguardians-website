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
          const fileId = member.Picture.split("/d/")[1].split("/")[0];
          const directLink = `https://drive.google.com/uc?export=view&id=${fileId}`;
          return { ...member, Picture: directLink };
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
                  src="https://bit.ly/sage-adebayo"
                  alt={`${member.Name}'s profile picture`}
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
