import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Dimmer, Divider, Header, Loader, Segment } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";
import { DosmeticData } from "../src/components/model/dosmeticData";
import { env } from "process";

interface Props {
  list: DosmeticData;
}

const Home: NextPage<Props> = ({ list }) => {
  //브라우저환경이라 넥스트 퍼블릭 언더바 붙이는거임
  //nodejs환경에선 없어도됨 그런거 어떻게 구분함?
  //getServerSideProps:
  //외부데이터를 서버에서 받아와 초기 데이터로 설정하고 페이지로 전달한다 .
  // 즉 화면이 그려지기 전에 먼저 서버측에서 실행됨
  // 페이지 요청 시마다 실행된다 .

  return (
    <div>
      <>
        <Header style={{ paddingTop: "10px", marginLeft: "10px" }}>
          베스트상품
        </Header>
        <Divider />
        <ItemList apiData={list.slice(0, 9)} />
        <Divider />
        <Header style={{ marginLeft: "10px" }}>신상품</Header>
        <ItemList apiData={list.slice(9)} />
        <Divider />
      </>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // TypeScript 3.7이 출시되면서 이제 선택적 연결( ?연산자)을 공식적으로 사용할 수 있습니다.
  // 따라서 표현식을 다음과 같이 단순화할 수 있습니다.
  // const data = change?.after?.data();
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl!);
  const data = res.data;
  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
};
