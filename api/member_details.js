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
  try {
    const response = await fetch("GOOGLE_APPS_SCRIPT_WEB_APP_URL", {
      headers: { Authorization: "Bearer YOUR_API_KEY" },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data from Google Apps Script:", error);
    throw error;
  }
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
