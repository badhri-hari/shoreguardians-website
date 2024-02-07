import { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/react";
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
          // <div
          //   key={member.SubmissionID}
          //   className="members-card"
          //   style={{
          //     border: "1px solid #ccc",
          //     borderRadius: "5px",
          //     padding: "20px",
          //     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          //   }}
          // >
          //   <h3>{member.Name}</h3>
          //   <p>{member.Email}</p>
          //   <p>{member.PhoneNumber}</p>
          //   <p>{member.Reason}</p>
          // </div>
          <div key={member.SubmissionID} className="members-card-container">
            <div className="members-card">
              <h1>{member.Name}</h1>
              <div className="members-card-contacts">
                <a href={member.Email} target="blank">
                  <EmailIcon style={{ color: "black", fontSize: "40px" }} />
                </a>
              </div>
              <div className="members-card-picture">
                <Avatar
                  size={null}
                  name="{member.Name}"
                  src=""
                  alt="how-to-add-member-images?"
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
