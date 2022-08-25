import axios from "axios";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import Head from "next/head";

import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { FC, useEffect, useState } from "react";
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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id;
  // TypeScript 3.7이 출시되면서 이제 선택적 연결( ?연산자)을 공식적으로 사용할 수 있습니다.
  // 따라서 표현식을 다음과 같이 단순화할 수 있습니다.
  // const data = change?.after?.data();
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  console.log(context);
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
