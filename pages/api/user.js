import { API_URL } from "@/config/index";
import cookie from "cookie";

export default async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authprozed" });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);
    const strpiRes = await fetch(`${API_URL}/me`, {
      method: "GET",
      headers: {
        Authrization: `Bearer ${token}`,
      },
    });

    const user = await strpiRes.json();
    if (strpiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: "User forbidden" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ massage: `Methods ${req.method} is not allowed` });
  }
};
