import React from "react";
import { Typography } from "antd";
import {
  FileAddOutlined,
  FolderOpenOutlined,
  ImportOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Title, Paragraph, Link } = Typography;
export default () => {
  const history = useHistory();
  return (
    <Paragraph>
      <Title level={4} style={{ color: "#555555", fontWeight: "normal" }}>
        启动
      </Title>
      <dl>
        <dd>
          <Link
            onClick={() => {
              history.push("/setup/new?isWebRouter=1");
            }}
          >
            <FileAddOutlined /> 新建课件
          </Link>
        </dd>
        <dd>
          <Link href="/docs/spec/overview">
            <FolderOpenOutlined /> 打开课件
          </Link>
        </dd>
        <dd>
          <Link href="/docs/resources">
            <ImportOutlined /> 导入课件包
          </Link>
        </dd>
        <dd>
          <Link href="/docs/resources">
            <CodeOutlined /> 批量处理...
          </Link>
        </dd>
      </dl>
    </Paragraph>
  );
};
