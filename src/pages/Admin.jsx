import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [memberName, setMemberName] = useState("");
  const [memberSocial, setMemberSocial] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const navigate = useNavigate();

  const correctPassword = "shoreguardians-admin123";

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClose = () => {
    if (password === correctPassword) {
      setIsAdmin(true);
      setShowModal(false);
    } else if (password === "") {
      navigate("/");
    } else {
      alert("Incorrect password!");
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/new_member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberName,
          memberSocial,
          memberEmail,
        }),
      });

      if (response.status !== 200) {
        console.error("There was an error in adding the member.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>Welcome Admin!</h2>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button onClick={handleClose}>
              {password === "" ? "Close" : "Enter"}
            </button>
          </div>
        </div>
      )}

      {isAdmin && (
        <>
          <h1>Add a new member:</h1>
          <input
            type="text"
            placeholder="Enter full name"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
          />
          <input
            type="url"
            placeholder="Enter social media link"
            value={memberSocial}
            onChange={(e) => setMemberSocial(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email"
            value={memberEmail}
            onChange={(e) => setMemberEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}

const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  },
};
