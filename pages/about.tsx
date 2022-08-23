import React from "react";
import { Divider } from "semantic-ui-react";

const about = () => {
  return (
    <div style={{ paddingTop: 10 }}>
      <div className="ui list">
        <div className="item">
          <i className="users icon"></i>
          <div className="content" style={{ fontSize: "15px" }}>
            회사소개
          </div>
        </div>
        <div style={{ height: "300px" }}>
          <Divider />
          <div className="item" style={{ display: "flex", paddingTop: "10px" }}>
            <i className="marker icon"></i>
            <div className="content">New York, NY</div>
          </div>
          <div className="item" style={{ display: "flex" }}>
            <i className="mail icon"></i>
            <div className="content">
              <a href="mailto:jack@semantic-ui.com">robo888@naver.com</a>
            </div>
          </div>
          <div className="item" style={{ display: "flex" }}>
            <i className="linkify icon"></i>
            <div className="content">
              <a href="http://www.semantic-ui.com">minhae_domestic</a>
            </div>
          </div>
          <div
            style={{
              height: "100px",
              lineHeight: "187px",
              marginLeft: "2px",
              fontSize: "16px",
              fontWeight: 500,
              color: "aqua",
            }}
          >
            문의사항
          </div>
          <Divider />
          <div className="ui form">
            <div className="field">
              <label>제목</label>
              <input type="text" />
            </div>
            <div className="ui form">
              <div className="field">
                <label style={{ margin: 0 }}>Text</label>
                <textarea></textarea>
              </div>
            </div>
            <Divider />
            <button className="ui primary button">Save</button>
            <button className="ui button" style={{ marginLeft: "5px" }}>
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
