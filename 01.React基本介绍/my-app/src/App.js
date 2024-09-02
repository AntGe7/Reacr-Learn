// 导入logo图片资源
import logo from './logo.svg';
// 导入App的样式表
import './App.css';

/**
 * App函数组件
 * 该组件是应用的入口点，负责渲染应用的主要结构
 * 包括一个头部，展示应用的logo和一个链接到React官网的按钮
 * 不接受参数，返回一个React元素
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 导出App组件作为默认导出，使得其他模块可以使用这个组件
export default App;