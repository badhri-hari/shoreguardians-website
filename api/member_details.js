import fetch from "node-fetch";
const API_KEY = "YOUR_API_KEY";

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

async function getMembersDataFromGoogleAppsScript() {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyDOAKYy5q1PdW44wp-hXy-4mzwwHJSGZPy_8OfUMmYxXR5toLkix20vV0U0JAPhqie/exec",
    {
      headers: { Authorization: "Bearer YOUR_API_KEY" },
    }
  );
  return response.json();
}

export default async (req, res) => {
  if (!checkApiKey(req)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "GET") {
    try {
      const memberDetails = await getMembersDataFromGoogleAppsScript();
      return res.status(200).json(memberDetails);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
