import { type } from "os";
import React, { FC, useEffect, useRef } from "react";

interface Props {
  style?: object;
  isFocus: boolean;
  placeholder?: string;
  value?: string;
  type: "submit" | "text" | "email" | "password";
  onChange: Function;
}

//인풋 커스터마이징
//focus
//focusOut
//inputValue
//placeholder
//style

const Input: FC<Props> = ({
  type,
  style,
  isFocus,
  placeholder,
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    isFocus ? inputRef.current?.focus() : null;
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };
  //초기 isFocus를 트루로 보내면 유즈이펙트 써서 분기처리 포커스 그러려면 레프 커런트 포커스 필요함
  return (
    <input
      style={style}
      value={value} //다른컴포넌트에서
      placeholder={placeholder}
      onChange={handleInputChange}
      ref={inputRef}
    ></input>
  );
};

export default Input;
