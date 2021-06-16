import { Button, Result } from "antd";
import React from "react";

const NoFoundPage = (props) => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => props.history.push("/")}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
