import Link from "next/link";
import React from "react";
import { Menu } from "semantic-ui-react";
import Gnb from "./Gnb";

const Top = () => {
  let activeItem = "home";
  return (
    <>
      <Link href="/">
        <a>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ margin: 0 }}>
              <img
                style={{ width: 100, borderRadius: "50%" }}
                src="/images/mhLogo.jpeg"
                alt="logo"
              />
            </h1>
            <strong style={{ marginLeft: 10 }}>코딩민해</strong>
          </div>
        </a>
      </Link>
      <Gnb />
    </>
  );
};

export default Top;
