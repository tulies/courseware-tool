import { Button, Result } from "antd";
import React from "react";

const NoFoundPage = (props) => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary" onClick={() => props.history.push("/")}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
