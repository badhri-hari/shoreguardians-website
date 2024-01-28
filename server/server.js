import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());

const API_KEY = "YOUR_API_KEY";

app.use(
  cors({
    origin: "shoreguardians.vercel.app",
  })
);

function checkApiKey(req, res, next) {
  const authHeader = req.headers.authorization;
  if (
    authHeader &&
    authHeader.split(" ")[0] === "Bearer" &&
    authHeader.split(" ")[1] === API_KEY
  ) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}

app.post("/new_member", checkApiKey, async (req, res) => {
  try {
    const newMember = req.body;
    console.log(newMember);

    // TODO: Save the newMember data to your database or process as needed

    res.status(200);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
