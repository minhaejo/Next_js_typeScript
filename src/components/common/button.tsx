import Link from "next/link";
import React, { FC } from "react";

interface Props {
  text: string; //버튼 텍스트
  style: object; //스타일 오브젝트
  clickFunction?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode; // 자식노드 옵셔널

  className?: string; //css
  href: string; // 이동할주소 next/link
  isLoginCheck?: boolean;
  isLoginFuction: Function;
  isNotLoginFuction: Function; //
}

const button: FC<Props> = ({
  text,
  style,
  clickFunction,
  href = "/", //기본 base URl
  className,
  children,
  isLoginCheck, //불리언값
  isLoginFuction, //조건부 호출도 가능한듯?
  isNotLoginFuction,
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (clickFunction) {
      clickFunction(e);
    }
  };
  return (
    <Link href={href}>
      <a>
        <button
          style={style ? style : {}}
          onClick={clickHandler}
          className={className}
        >
          {text}
        </button>
        {isLoginCheck ? isLoginFuction() : isNotLoginFuction()}
      </a>
    </Link>
  );
};

export default button;
