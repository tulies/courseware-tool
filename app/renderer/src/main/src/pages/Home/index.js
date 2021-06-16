import React from "react";
import { Row, Col} from 'antd'
export default ()=>{
  return <div>
    启动
    <FileAddOutlined /> 新建课件
    <FolderOpenOutlined /> 打开课件
    <ImportOutlined /> 导入课件包
    <CodeOutlined /> 批量处理

    <Row gutter={[16, 16]}>
      <Col span={6} />
      <Col span={6} />
    </Row> 
  </div>
}