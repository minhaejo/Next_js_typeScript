import React, { FC } from "react";
import { Button, Divider } from "semantic-ui-react";
import { DosmeticObjData } from "./model/dosmeticData";
import styles from "./ProductInfo.module.css";

interface Props {
  item: DosmeticObjData;
}
const ProductInfo: FC<Props> = ({ item }) => {
  const { image_link, name, price, description } = item;
  console.log(item);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* img */}
        <div className="img">
          <img src={image_link} alt="" />
        </div>
        {/* img */}
        {/* p info */}
        <div className="product-info" style={{ marginLeft: 20 }}>
          <strong style={{ fontSize: 20 }}>{name}</strong>
          <div>
            <strong style={{ color: "aqua", fontSize: 18, marginTop: 5 }}>
              ${price}
            </strong>
          </div>
          <div>
            <span style={{ fontWeight: "bold", marginLeft: 3 }}>
              {item.product_type}
            </span>
          </div>
          <div>
            <Button style={{ marginTop: 5 }} color="orange">
              구매하기
            </Button>
          </div>
        </div>
        {/* p info */}
      </div>
      <Divider></Divider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong>Description</strong>
        <p className={styles.tit_item}>{description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
