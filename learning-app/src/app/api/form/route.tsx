import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const data = await req.json()
    const data = req.body;
    const id = await createItem(data);
    res.json({ id });
}

function createItem(data: any) {
    throw new Error("Function not implemented.");
}
