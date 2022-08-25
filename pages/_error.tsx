//500 오류는 구성 요소에 의해 클라이언트 측과 서버 측 모두에서 처리됩니다 Error.

import { NextPage, NextPageContext } from "next";
import { FC } from "react";

interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode: statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
