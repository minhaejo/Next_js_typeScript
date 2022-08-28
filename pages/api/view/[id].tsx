import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
};

// export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
//   res.status(200).json({ id: req.query.id!.toString() });
// };
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.json({ id: req.query.id!.toString() });
};

//다이나믹 라우팅 localhost:3000/api/view/대괄호
