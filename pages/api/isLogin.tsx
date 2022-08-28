// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
};
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.json({ name: req.cookies.a_name });
};
//페이지 안이니까 next에서 제공하는 라우팅을 쓸 수 있음 ,
//리스폰스 상태가 200이면 제이슨에서 쿠키네임을 전달받음
//근데 이상호작용이 어떻게 이루어지는 구조인지 ?
//login페이지와 api login이 post로 상호작용을하고 api login page가 res를 넘겨줌 200과 메세지와 셋헤더를
//그럼 얘한테 가는거? 근데 왜?
