import axios from "axios";

export default async function handler(req, res) {
  let { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "No URL provided" });
  }

  if (url.includes("drive.google.com")) {
    const fileIdMatch = url.match(/id=([^&]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      url = `https://drive.googleusercontent.com/uc?id=${fileIdMatch[1]}&export=download`;
    } else {
      return res.status(400).json({ error: "Invalid Google Drive URL" });
    }
  }

  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });
    res.setHeader("Content-Type", response.headers["content-type"]);
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ error: "Error fetching image" });
  }
}
