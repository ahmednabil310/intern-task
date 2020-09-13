import React, { Component } from "react";
import data from "../data/data.json";
import "antd/dist/antd.css";
import { List } from "antd";
import "./datalist.css";
export default class DataList extends Component {
  render() {
    const listData = data;
    return (
      <div className="list-container">
        <List
          className="list-view"
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 8,
          }}
          dataSource={listData}
          renderItem={(listData) => (
            <List.Item key={Math.random()}>
              <List.Item.Meta title={<p>{listData.name}</p>} />
              <p>{listData.age}</p>
              <p>{listData.country}</p>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
