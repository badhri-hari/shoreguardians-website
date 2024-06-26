import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  const apiKey = process.env.SHOREGUARDIANS_API_KEY;
  const url = `https://script.google.com/macros/s/AKfycbwepVB46QaCcvrT1iDesIl_fo-u4FAoz1vPoF-5RZZmFgcNP7Y5k23bldvw2Z69AUcF/exec?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);

    const data = response.data;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Error fetching member details" });
  }
}
