import { useEffect, useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";

export default function MemberCards() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Correctly chain the promise to setMembers after the response is converted to JSON
    fetch("/api/member_details")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setMembers(data)); // Set the state with the resulting data
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
