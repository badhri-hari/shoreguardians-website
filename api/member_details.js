import fetch from "node-fetch";

fetch(
  "https://script.google.com/macros/s/AKfycbwsIYmcpnpEYIS-8rHNrNxsneZCm43oUjUOIggp1P0/dev"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// function checkApiKey(req) {
//   const authHeader = req.headers.authorization;
//   if (
//     authHeader &&
//     authHeader.split(" ")[0] === "Bearer" &&
//     authHeader.split(" ")[1] === API_KEY
//   ) {
//     return true;
//   }
//   return false;
// }

// async function getMembersDataFromGoogleAppsScript() {
//   try {
//     const response = await fetch(
//       "https://script.google.com/macros/s/AKfycbyzaHPmAwohbOZIcAy4cel9-iSsN4gHMWmj6JljPUMS9yfM1JeAUQyG6EwLgPfMVw10/exec",
//       {
//         headers: { Authorization: "Bearer YOUR_API_KEY" },
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching data from Google Apps Script:", error);
//     throw error;
//   }
// }

// export default async (req, res) => {
//   if (!checkApiKey(req)) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   if (req.method === "GET") {
//     try {
//       const memberDetails = await getMembersDataFromGoogleAppsScript();
//       return res.status(200).json(memberDetails);
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   }
// };
