import React, { FC } from "react";
import { DosmeticObjData } from "./model/dosmeticData";

interface Props {
  item: DosmeticObjData | [];
}
const ProductInfo: FC<Props> = ({ item }) => {
  console.log(item);
  return <div></div>;
};

export default ProductInfo;
