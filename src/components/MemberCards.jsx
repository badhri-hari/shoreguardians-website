import { useEffect, useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { Grid, Box, Avatar } from "@chakra-ui/react";

export default function MemberCards() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/api/member_details")
      .then((response) => response.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <Grid templateColumns="repeat(3, 1fr)" className="members-container-grid">
      {members.length > 0 ? (
        members.map((member) => (
          <Box className="members-container" key={member.SubmissionTime}>
            <div className="members-card">
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
                    src={member.PictureLink}
                    alt={`${member.Name}'s profile picture`}
                  />
                </div>
              </div>
            </div>
          </Box>
        ))
      ) : (
        <div className="members-card">Please wait...</div>
      )}
    </Grid>
  );
}
