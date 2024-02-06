import axios from "axios";

export default async function handler(req, res) {
  const url =
    "https://script.googleusercontent.com/macros/echo?user_content_key=GQBGRfYGJ3zwbfkFN6ws1h9myh309eRESAsqNzT8L-5UqCgGLhrm7-AnvWSY5mpIGV000PmMIZnDUzGJy66RaEafFjlRJOmCm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIURuQLlkRa5YohIF8FebwdrsRnSdNrTq4RgqB3Xi1NFuQm6K6Bjh1FFghBl97br2w&lib=MN4McHg5VF7hVJ1wlZo-Il2s80ntowcNA";

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching member details:", error);
    res.status(500).json({ error: "Error fetching member details" });
  }
}
