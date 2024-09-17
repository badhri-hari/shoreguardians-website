import { useEffect, useState } from "react";

import { EmailIcon } from "@chakra-ui/icons";
import { Grid, Box, Avatar, Center, Input } from "@chakra-ui/react";

export default function MemberCards() {
  const [members, setMembers] = useState([]);
  const [memberCount, setMemberCount] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/member_details")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
        setMemberCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching member details:", error);
        setMemberCount(null);
      });
  }, []);

  const filteredMembers = members.filter((member) =>
    member.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Center pb={10} px="4" className="members-header">
        {memberCount !== null ? `Our ${memberCount} Members` : "Our Members"}
      </Center>
      <Center pb={10} px="4">
        <Input
          placeholder="Search members..."
          value={searchTerm}
          maxLength={11}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </Center>
      <Center>
        <div className="members-grid-desktop">
          <Grid
            templateColumns="repeat(3, 1fr)"
            className="members-container-grid"
          >
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
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
                          <EmailIcon
                            style={{ color: "black", fontSize: "20px" }}
                          />
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
              <div className="members-card">No members found...</div>
            )}
          </Grid>
        </div>

        <div className="members-grid-mobile">
          <Grid
            templateColumns="repeat(1, 1fr)"
            className="members-container-grid"
          >
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
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
                          <EmailIcon
                            style={{ color: "black", fontSize: "20px" }}
                          />
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
              <div className="members-card">No members found...</div>
            )}
          </Grid>
        </div>
      </Center>
    </>
  );
}
