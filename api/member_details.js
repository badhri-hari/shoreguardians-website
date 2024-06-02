import axios from "axios";

export default async function handler(req, res) {
  const apiKey = "SHOREGUARDIANS_SECRET_KEY";
  const url = `https://script.google.com/macros/s/AKfycby-UX_a1vyZzNGJZywanMFZhVPpfssCQ47L1xrqPrFVZiT-6V7k3VBZA2M7v6sHK6Wo/exec?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const members = response.data.slice(1);
    res.status(200).json(members);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching member details" });
  }
}
