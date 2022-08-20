import React, { FC } from "react";
import { DosmeticObjData } from "./model/dosmeticData";

interface Props {
  item: DosmeticObjData;
}
const ProductInfo: FC<Props> = ({ item }) => {
  return (
    <>
      <div>
        <img src={item.image_link} alt="" />
        <p>{item.id}</p>
      </div>
    </>
  );
};

export default ProductInfo;
