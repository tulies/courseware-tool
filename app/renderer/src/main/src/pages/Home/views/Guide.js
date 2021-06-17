import React from "react";
import { Typography, Button } from "antd";
import {
  ThunderboltOutlined,
  BulbOutlined,
  RocketOutlined,
} from "@ant-design/icons";
const { Title, Paragraph } = Typography;

export default () => {
  return (
    <Paragraph>
      <Title level={4} style={{ color: "#555555", fontWeight: "normal" }}>
        入门
      </Title>
      <dl>
        <dd>
          <Button block style={{ textAlign: "left", marginBottom: 5 }}>
            <ThunderboltOutlined /> 开始使用 CC Tool
          </Button>
        </dd>
        <dd>
          <Button block style={{ textAlign: "left", marginBottom: 5 }}>
            <BulbOutlined /> 了解基础知识
          </Button>
        </dd>
        <dd>
          <Button block style={{ textAlign: "left", marginBottom: 5 }}>
            <RocketOutlined /> 提高工作效率
          </Button>
        </dd>
      </dl>
    </Paragraph>
  );
};
