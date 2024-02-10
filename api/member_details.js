import axios from "axios";

export default async function handler(req, res) {
  const apiKey = "SHOREGUARDIANS_SECRET_KEY";
  const url = `https://script.google.com/macros/s/AKfycbztwW7v4SHraoFeheKxZ69xGpezVxBMgCbuAqNwEoBLyz8FGDUYn6-NaScxTRtkc7hN/exec?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching member details" });
  }
}
