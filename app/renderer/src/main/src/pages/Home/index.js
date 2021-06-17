import React from "react";
import { Typography, Row, Col } from "antd";
import Guide from "./views/Guide";
import Recent from "./views/Recent";
import Setup from "./views/Setup";

const { Title } = Typography;

export default () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: 40,
          width: "100%",
          maxWidth: 800,
          minWidth: 650,
          margin: "0 auto",
        }}
      >

        <Typography style={{ marginBottom: 30 }}>
          <Title level={2} style={{ marginBottom: 0, color: "#555555" }}>
            Ceibs Courseware Tool
          </Title>
          <Title
            level={3}
            style={{ marginTop: 0, color: "#555555", fontWeight: "normal" }}
          >
            中欧课件制作工具
          </Title>
        </Typography>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Setup></Setup>
            <div style={{ marginTop: 10 }}></div>
            <Recent></Recent>
          </Col>
          <Col span={12}>
            <Guide></Guide>
          </Col>
        </Row>
      </div>
    </div>
  );
};
