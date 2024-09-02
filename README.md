# React 学习笔记

- **版本**: React 18.3.1
- **官网**: [React 官方文档](https://zh-hans.react.dev)
- **本仓库Node版本推荐**: v18.20.4
- **启动**:**pnpm dev**  start被我改成了dev


### React 基本介绍

React 起源于 Facebook 的内部项目，因为当时市场上的所有 JavaScript MVC 框架都无法完全满足他们的需求。于是，Facebook 决定开发一个专门用于构建用户界面的 JavaScript 库，最初用于架设 Instagram 的网站。

React 的核心是构建用户界面的组件化库。它专注于高效地更新和渲染用户界面，并以其独特的设计理念和出色的性能迅速得到了广泛的关注和使用。React 于 2013 年 5 月开源，由于其逻辑简洁、高性能的特点，越来越多的开发者开始关注并采用它。

#### 核心理念：UI = fn(state)

在 React 中，用户界面（UI）可以简单地表示为 `UI = fn(state)`，其中：

- **state** 代表应用程序的当前状态，包括用户输入、数据等。
- **fn** 是一个函数，它根据 `state` 来生成或更新 UI。
- **React** 负责实现这一逻辑，当 `state` 变化时，React 会自动重新渲染（或更新）UI，使开发者无需手动操作 DOM，只需专注于如何描述 UI。

这种设计使得 React 成为一个革命性的工具，推动了前端开发的进步，越来越多的开发者将它视为未来 Web 开发的主流工具。

随着项目的不断发展，React 已从最初的 UI 引擎演变为前后端通用的 Web 应用解决方案。React 从诞生至今，持续给开发者带来各种惊喜。自 2015 年起，每年都会举行 React Conf 大会，介绍当年的新特性和发展方向。

![React Conference](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-10-27-072327.png)

- **React Conf 官网**: [https://conf.reactjs.org/](https://conf.reactjs.org/)
- **React Conf YouTube 频道**: [https://www.youtube.com/channel/UC1hOCRBN2mnXgN5reSoO3pQ](https://www.youtube.com/channel/UC1hOCRBN2mnXgN5reSoO3pQ)

### 重要版本更新

以下是 React 几个重要版本的重大更新：

- **React 16**:
  - 引入了 **Fiber** 架构，使得更新变得可中断、可分片，并具有优先级管理。

- **React 16.8**:
  - 推出了 **Hooks**，标志着从类组件正式过渡到函数组件，使得函数组件可以拥有状态和副作用。

- **React 17**:
  - 作为过渡版本，没有添加面向开发人员的新功能，主要侧重于**升级和简化 React 的内部实现**，为未来版本的改进打下基础。

- **React 18**:
  - 引入了 **Concurrent Rendering**，使 React 能够在后台准备更新，并在用户交互时立即更新界面。
  - **Transition API**: 帮助管理 UI 的优先级更新，改善用户体验。
  - **Suspense**: 提升了对异步操作的支持，允许开发者在数据加载时展示占位符内容。
  - **新的 Hooks**: 如 `useTransition`、`useDeferredValue` 等，为开发者提供更多控制渲染行为的工具。
  - **Offscreen**: 允许组件在后台渲染和保持状态，即使它们当前在屏幕上不可见。


### 搭建开发环境

虽然官方提供了通过 *CDN* 引入 *React* 的方式：*https://zh-hans.reactjs.org/docs/cdn-links.html*

但是实际开发中肯定是使用 *React* 的脚手架工具来搭建项目，*React* 官方提供了脚手架工具 *Create React App*：

*https://create-react-app.dev/*



快速开始：

```js
npx create-react-app my-app
cd my-app
npm start
```
