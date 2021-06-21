// 选择题(单选题&多选题)  testType = 1 或者 testType = 2 （1:单选 2:多选）
export default {
  // 测验类型
  testType: "",
  // 测验标题
  testTitle: "",
  // 知识点标签
  tag: "",
  // 配置项
  config: {},
  // 问题题目
  question: {
    content: "",
    imgPath: [""], // 图片路径
    audioPath: [],
    videoPath: [],
    rtxt: "", // 富文本内容，适合很多内容时
  },
  // 答案选项
  options: [
    {
      answer: 1,
      content: "",
      rtxt: "", // 父文本，预留
    },
    {
      answer: 0,
      content: "",
      rtxt: "", // 父文本，预留
    },
  ],
};
