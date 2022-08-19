import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DosmeticObjData } from "../../src/components/model/dosmeticData";
import ProductInfo from "../../src/components/ProductInfo";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<DosmeticObjData | []>([]);
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => setItem(res.data));
  }
  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <ProductInfo item={item} />
    </div>
  );
};

export default Post;

//클릭하면 상세페이지 이도ㅓㅇ해야함
//새로운 데이터 요청이있어야해 그냥 저 고유한 id를 가진 url
//
//router // useRouter
