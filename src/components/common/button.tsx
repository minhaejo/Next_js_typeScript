import Link from "next/link";
import React, { FC } from "react";

interface Props {
  type: "link" | "button";
  style?: object; //스타일 오브젝트
  clickFunction: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode; // 자식노드 옵셔널
  className?: string; //css
  href?: string; // 이동할주소 next/link
}

const Button: FC<Props> = ({
  style,
  clickFunction = () => {},
  href = "/", //기본 base URl
  className,
  type,
  children,
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (clickFunction) {
      clickFunction(e);
    }
  };
  return (
    <div>
      {type === "link" ? (
        <Link href={href}>
          <a>
            <button
              style={style ? style : {}}
              onClick={clickHandler}
              className={className}
            >
              {children}
            </button>
          </a>
        </Link>
      ) : null}
      {type === "button" ? (
        <button
          style={style ? style : {}}
          onClick={clickHandler}
          className={className}
        >
          {children}
        </button>
      ) : null}
      ;
    </div>
  );
};

export default Button;
