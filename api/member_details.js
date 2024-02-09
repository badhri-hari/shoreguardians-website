import axios from "axios";

export default async function handler(req, res) {
  const apiKey = "SHOREGUARDIANS_SECRET_KEY";
  const url = `https://script.google.com/macros/s/AKfycbztwW7v4SHraoFeheKxZ69xGpezVxBMgCbuAqNwEoBLyz8FGDUYn6-NaScxTRtkc7hN/exec?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (
      response.headers["content-type"] &&
      response.headers["content-type"].includes("application/json")
    ) {
      res.status(200).json(response.data);
    } else {
      console.error("Received non-JSON response");
      res
        .status(500)
        .json({ error: "Expected JSON response, got something else." });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching member details" });
  }
}
