import React from "react";
import { Typography, Form, Input, Button, Tooltip, Space } from "antd";
import { FolderOpenOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import qs from 'qs'
import { useHistory, useLocation } from "react-router-dom";

/* electron */
import { remote } from "electron";

// electron
// const { re} = window.require('electron')
export default () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location)
  const { isWebRouter } = qs.parse(location.search.replace(/^\?/, ''));
  // qs.parse(props.location.search.replace(/^\?/, ''))
  console.log('前一跳', window.document.referrer)
  console.log("isWebRouter", isWebRouter, window.location.href);
  function onFinish() { }
  function onFinishFailed() { }
  return (
    <div className={styles.setupNew}>
      <div className="above-box">
        <Typography style={{ marginBottom: 30 }}>
          <Typography.Title level={5}>新建课件</Typography.Title>
        </Typography>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="项目路径"
            name="username"
          // rules={[{ required: true, message: "请输入项目存放路径!" }]}
          >
            <Input
              addonAfter={
                <Tooltip title="Extra information">
                  <FolderOpenOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
            />
          </Form.Item>
        </Form>
      </div>
      <div className="action-footer">
        <Space>
          <Button
            onClick={() => {
              console.log(history);
              if (parseInt(isWebRouter) === 1) {
                window.history.back();
              } else {
                remote.getCurrentWindow().close();
              }
            }}
          >
            取消
          </Button>
          <Button type="primary">确定</Button>
        </Space>
      </div>
    </div>
  );
};
