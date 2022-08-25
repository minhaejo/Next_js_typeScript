import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Dimmer, Divider, Header, Loader, Segment } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";
import { DosmeticData } from "../src/components/model/dosmeticData";
import { env } from "process";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState<DosmeticData>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  //브라우저환경이라 넥스트 퍼블릭 언더바 붙이는거임
  //nodejs환경에선 없어도됨 그런거 어떻게 구분함?
  //getServerSideProps:
  //외부데이터를 서버에서 받아와 초기 데이터로 설정하고 페이지로 전달한다 .
  // 즉 화면이 그려지기 전에 먼저 서버측에서 실행됨
  // 페이지 요청 시마다 실행된다 .

  function getData() {
    axios.get(API_URL!).then((res) => setApiData(res.data));
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header style={{ paddingTop: "10px", marginLeft: "10px" }}>
            베스트상품
          </Header>
          <Divider />
          <ItemList apiData={apiData.slice(0, 9)} />
          <Divider />
          <Header style={{ marginLeft: "10px" }}>신상품</Header>
          <ItemList apiData={apiData.slice(9)} />
          <Divider />
        </>
      )}
    </div>
  );
};

export default Home;
