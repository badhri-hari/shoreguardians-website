import axios from "axios";

export default async function handler(req, res) {
  const apiKey = "SHOREGUARDIANS_SECRET_KEY";
  const url = `https://script.google.com/macros/s/AKfycbze_dPJDXy99PgeLnNd4pHvY6pZmKaPrC9rsKAdzPeY1jxicUo2JWOUs1nB8d1p2-bW/exec?apiKey=${apiKey}`;

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
