import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Dimmer, Divider, Header, Loader, Segment } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";
import { DosmeticData } from "../src/components/model/dosmeticData";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState<DosmeticData | []>([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  function getData() {
    axios.get(API_URL).then((res) => setApiData(res.data));
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
