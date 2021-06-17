import React from "react";
import { Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;
export default () => {
  return (
    <Paragraph style={{ marginTop: 40 }}>
      <Title level={4} style={{ color: "#555555", fontWeight: "normal" }}>
        最近
      </Title>
      <dl>
        <dd>
          <Link>ceibs-course-001</Link>{" "}
          <Text style={{ marginLeft: 10 }}>~/data/www</Text>
        </dd>
        <dd>
          <Link>ck-002</Link>{" "}
          <Text style={{ marginLeft: 10 }}>~/data/www/out</Text>
        </dd>
        <dd>
          <Link>ceibs-course-xyz-xx</Link>{" "}
          <Text style={{ marginLeft: 10 }}>~/data/workspace</Text>
        </dd>
        <dd>
          <Link>keguan-xjs</Link>{" "}
          <Text style={{ marginLeft: 10 }}>~/data/www/</Text>
        </dd>
        <dd>
          <Link>More...</Link>
        </dd>
      </dl>
    </Paragraph>
  );
};
