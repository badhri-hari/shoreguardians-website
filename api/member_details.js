import axios from "axios";

async function getMembersDataFromGoogleAppsScript() {
  try {
    const response = await axios.get(
      "https://script.google.com/macros/s/AKfycbwsIYmcpnpEYIS-8rHNrNxsneZCm43oUjUOIggp1P0/dev",
      {
        headers: { Authorization: "Bearer YOUR_API_KEY" },
      }
    );
    return response.data;
    console.log(response);
  } catch (error) {
    console.error("Error fetching data from Google Apps Script:", error);
    throw error;
  }
}
