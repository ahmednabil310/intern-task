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
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 8,
          }}
          dataSource={listData}
          renderItem={(listData) => (
            <List.Item key={listData.title} actions={[]}>
              <List.Item.Meta
                title={<a href={listData.name}>{listData.name}</a>}
                description={listData.age}
              />
              {listData.country}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
