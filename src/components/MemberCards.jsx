import { useEffect, useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";

export default function MemberCards() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/api/member_details")
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="members-container">
      {members.length > 0 ? (
        members.map((member) => (
          <div key={member.SubmissionID} className="members-card">
            <div className="members-card-container">
              <h1>{member.Name}</h1>
              <div className="members-card-contacts">
                <a href={member.Email} target="blank">
                  <EmailIcon style={{ color: "black", fontSize: "40px" }} />
                </a>
              </div>
              <div className="members-card-picture">
                {/* <Avatar
                  size="xl"
                  name={member.Name}
                  src="https://bit.ly/sage-adebayo"
                  alt={`${member.Name}'s profile picture`}
                /> */}
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
