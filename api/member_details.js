import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  const apiKey = process.env.SHOREGUARDIANS_API_KEY;
  const url = `https://script.google.com/macros/s/AKfycbzMvXfwnKnv3hI4La_ev6eEvUpzFn-oonk69o--7LwOHChzsdn8Fxs5Hb0h3SavTwE3/exec?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);

    const data = response.data;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; img-src 'self' https://lh3.googleusercontent.com data:; script-src 'self'"
    );

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Error fetching member details" });
  }
}
