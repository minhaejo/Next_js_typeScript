import React, { useState } from "react";

const InputTest = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form action="">
      <input type="text" value={value} onChange={onChange} />
    </form>
  );
};

export default InputTest;
