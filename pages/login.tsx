import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
  const router = useRouter();
  function login() {
    axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        //로그인 성공
        router.push("/admin");
      }
    });
  }
  //버튼을 누르는 시점에서 서버자체에 요청이감
  //서버는 내가 특정 제약을 걸지않았기때문에 200을 반드시 반환함
  //그럼 그 응답값이 지금 다시돌아와서 200을받았음
  //router푸시 에드민을 하게된거임

  //page안에 login.tsx r가 pages/api/login.tsx 랑 상호작용을함 포스트 요청을 보냈고 api.login안에서 포스트 요청을 감지
  // 감지한 그 응답값을
  return (
    <div style={{ padding: "100px 0 ", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue" onClick={login}>
          login
        </Button>
      </Form>
    </div>
  );
}
