import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  const apiKey = process.env.SHOREGUARDIANS_API_KEY;
  const url = `https://script.google.com/macros/s/AKfycbxpGBpy9-a1EFXFWM0Gz9QjYudYpyNvavYuJALzgkIdoTve-JQXigwGzDDiNugs1sM/exec?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const members = response.data.slice(1);
    res.status(200).json(members);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching member details" });
  }
}
