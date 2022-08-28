import axios, { Axios } from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Admin() {
  const router = useRouter();
  function checkLogin() {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
      }
      //로그인된거
      else {
        router.push("/login");
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return <div>admin</div>;
}
