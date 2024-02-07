import { useEffect, useState } from "react";

export default function MemberCards() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/api/member_details")
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="members-card-container">
      <pre>{JSON.stringify(members, null, 2)}</pre>

      {members.length > 0 ? (
        members.map((member) => (
          <div key={member.SubmissionID} className="member-card">
            <h3>{member.Name}</h3>
            <p>Email: {member.Email}</p>
            <p>Phone: {member.PhoneNumber}</p>
            <p>Reason: {member.Reason}</p>
          </div>
        ))
      ) : (
        <p>No member details to display.</p>
      )}
    </div>
  );
}
