// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import api from "../../utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { slug, ...params } = req.query;
    const response = await api().get("balanceSheet", params);
    return res.status(response.status).send(response.data);
  }
  res.status(405).json({ error: "Method not allowed" });
}
