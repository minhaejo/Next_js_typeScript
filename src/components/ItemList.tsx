import React, { FC } from "react";
import { Grid, Loader } from "semantic-ui-react";

import { DosmeticData, DosmeticObjData } from "./model/dosmeticData";
import styles from ".//ItemList.module.css";
import Link from "next/link";

interface Props {
  apiData: DosmeticData;
}
const ItemList: FC<Props> = ({ apiData }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid columns={3} style={{ display: "flex", justifyContent: "center" }}>
          <Grid.Row style={{ textAlign: "center" }}>
            {apiData.map((item: DosmeticObjData) => (
              <Grid.Column key={item.id} style={{ boxShadow: "none" }}>
                <Link href="/detail/[id]" as={`/detail/${item.id}`}>
                  <a>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{ width: 180, alignSelf: "center" }}
                        src={item.image_link}
                        alt="img"
                      />
                      <div>
                        <strong className={styles.item_name}>
                          {item.name}
                        </strong>
                      </div>
                      <div>
                        <span>
                          {item.category} {item.product_type}
                        </span>
                      </div>
                      <div>
                        <strong style={{ color: "aqua", fontSize: "15px" }}>
                          {item.price}
                        </strong>
                      </div>
                    </div>
                  </a>
                </Link>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default ItemList;
