import { useRouter } from "next/router";
import React from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

const Gnb = () => {
  const router = useRouter();
  let activeItem;

  //data는 시멘틱 유아이에서 제공하는 데이터여서 추론을 사용해서 얻어왔고 임포트해왔음
  //data는 name ,active 이런 내부내용임
  const goLink = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    if (data.name === "home") {
      router.push("/");
    }
    if (data.name === "about") {
      router.push("/about");
    }
  };

  return (
    <div>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={goLink}
        />
        <Menu.Item
          name="contact us"
          active={activeItem === "contact"}
          onClick={() => {
            router.push("/contact");
          }}
        />
      </Menu>
    </div>
  );
};

export default Gnb;
