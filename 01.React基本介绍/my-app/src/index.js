// 导入React库，用于构建用户界面
import React from 'react';
// 导入ReactDOM库，用于将React元素渲染到HTML文档中
import ReactDOM from 'react-dom';
// 导入CSS文件，用于应用全局样式
import './index.css';
// 导入App组件，作为应用的入口
import App from './App';
// 导入reportWebVitals工具，用于报告Web应用的关键性能指标
// import reportWebVitals from './reportWebVitals';

// 创建React应用的根组件
const root = ReactDOM.createRoot(document.getElementById('root'));
// 将根组件渲染为React应用
root.render(
  // 使用StrictMode来帮助发现开发过程中的问题
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// 如果你想在应用中开始测量性能，可以传递一个函数来记录结果
// （例如：reportWebVitals(console.log)）
// 或者发送到分析端点。了解更多：https://bit.ly/CRA-vitals
// reportWebVitals();