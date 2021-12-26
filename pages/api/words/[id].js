const { words } = require("./data.json");

// fetch single word
export default function handler(req, res) {
  console.log("req", req);

  const word = words.filter((w) => w.id === req.query.id);

  if (req.method === "GET") {
    res.status(200).json(word);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
