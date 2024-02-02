import axios from "axios";

async function getMembersDataFromGoogleAppsScript() {
  try {
    const response = await axios.get(
      "https://script.google.com/macros/s/AKfycbwsIYmcpnpEYIS-8rHNrNxsneZCm43oUjUOIggp1P0/dev"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Google Apps Script:", error);
    throw error;
  }
}

const response = getMembersDataFromGoogleAppsScript();
console.log(response);
