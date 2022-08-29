import type { NextApiRequest, NextApiResponse } from "next";

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === "POST") {
//     res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
//     res.statusCode = 200;
//     res.json({ message: "ok" });
//   }
// };

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "ok" });
};
// res.statusCode = 200;
// res.json({ name: null });
// res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure"); 코드분석
//"a_name 쿠키의 이름을 말한다 Mike 쿠키의 값을 나타냄
//Max-Age=3600 약 1시간

// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: "John Doe" });
// }
