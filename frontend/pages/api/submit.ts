// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import api from "../../utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { body } = req;
    console.log(body);
    const response = await api().post("submit", body);
    return res.status(response.status).json(response.data);
  }
  return res.status(405).json({ error: "Method not allowed" });
}
