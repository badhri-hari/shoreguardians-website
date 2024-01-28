const API_KEY = "YOUR_API_KEY";

let memberDetails = [];

function checkApiKey(req) {
  const authHeader = req.headers.authorization;
  if (
    authHeader &&
    authHeader.split(" ")[0] === "Bearer" &&
    authHeader.split(" ")[1] === API_KEY
  ) {
    return true;
  }
  return false;
}

export default (req, res) => {
  if (!checkApiKey(req)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "POST") {
    try {
      const members = req.body.members;
      memberDetails = members;
      return res
        .status(200)
        .json({ message: "Member details updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === "GET") {
    return res.status(200).json(memberDetails);
  }
};
