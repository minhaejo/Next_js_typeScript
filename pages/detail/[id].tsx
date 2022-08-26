import axios from "axios";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from "next";
import Head from "next/head";

import React, { FC } from "react";
import { DosmeticObjData } from "../../src/components/model/dosmeticData";

import ProductInfo from "../../src/components/ProductInfo";

interface Props {
  item: DosmeticObjData;
  name: string;
}

const Post: FC<Props> = ({ item, name }) => {
  return (
    <div>
      {item && (
        <>
          <Head>
            <title>HOME | 코딩민해 </title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name}환경입니다.
          <ProductInfo item={item} />
        </>
      )}
    </div>
  );
};

export default Post;

//동적 경로를 사용하는 페이지에서 (정적 사이트 생성) 이라는 함수를 내보낼 때
//getStaticPathsNext.js는 에서 지정한 모든 경로를 정적으로 미리 렌더링합니다.
//프로덕션 환경에서 빌드하는 동안에만 실행되며 런타임에는 호출되지 않습니다.
//getStaticPaths 와 getStaticProps 함께 사용해야 합니다
//getStaticPaths , getServerSideProps 와 함께 사용할 수 없습니다 .
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
    ],
    fallback: true, // can also be true or 'blocking'
    //빌드시에 만들어지는건 변함없음 //getStaticProps
    //저기에있는 3개 말고 나머지들은 최초 접속시에 생성
    //두번째부터 기록해서 정적 페이지 제공
  };
}
// getStaticProps: 빌드 시 데이터를 fetch하여 static 페이지를 생성
// getStaticPaths: pages/**/[id].tsx 형태의 동적 라우팅 페이지 중, 빌드 시에 static하게 생성할 페이지를 정함

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  //항상 서버에서 실행되고 클라이언트에서는 실행되지 않습니다
  //getStaticProps페이지 에서만 내보낼 수 있습니다 . 페이지가 아닌 파일, , 또는 에서는 내보낼 수 없습니다 ._app_document_error
  // TypeScript 3.7이 출시되면서 이제 선택적 연결( ?연산자)을 공식적으로 사용할 수 있습니다.
  // 따라서 표현식을 다음과 같이 단순화할 수 있습니다.
  // const data = change?.after?.data();
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
};
//진짜 프롭스네 썅 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
//하 FC해서 프롭스로 받아와야했음
//그리고 옵셔널하게 연속적으로 쓰는걸 배움
//GetServerSidePropsContext에는 여러가지 키와 벨류가있음 (프로퍼티)
//또한 호출시점은 굳이 호출하는게 아니라 외부 데이터를 서버에서 받아와 초기 데이터로 설정하고 페이지로 전달한다.
//페이지 요청 시마다 실행된다. 라는게 모토임

// 언제 쓰는가?
// getServerSideProps는 데이터 요청시 인출해야 페이지를 미리 렌더링해야하는 경우에만.
// TTFB (Time to First byte)는 getStaticProps서버가 모든 요청에 ​​대해 결과를 계산해야하고 추가 구성 없이는 결과를 CDN에 의해 ​​캐시 할 수 없기 때문에 더 느립니다.

// 데이터를 미리 렌더링 할 필요가없는 경우 클라이언트 측에서 데이터를 가져 오는 것을 고려해야합니다.

//클릭하면 상세페이지 이도ㅓㅇ해야함
//새로운 데이터 요청이있어야해 그냥 저 고유한 id를 가진 url
//
//router // useRouter
