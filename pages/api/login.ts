// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }
  res.status(200).json({ name: "John Doe" });
  const { username, password } = req.body;
  console.log(req.body);
}
