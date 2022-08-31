import axios, { Axios } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default function Admin() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  function checkLogin() {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        setIsLogin(true);
      }
      //로그인된거
      else {
        router.push("/login");
      }
    });
  }
  const logout = () => {
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      <h1>Hello minhae!</h1>
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </div>
  );
}
