const { words } = require("./data.json");

// fetch whole words
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(words);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
