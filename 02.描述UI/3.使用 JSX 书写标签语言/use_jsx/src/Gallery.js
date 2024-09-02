// 错误  组件首字母应该大写
// function profile() {
//   // 返回一个图像元素，用于展示Katherine Johnson的图片
//   return 
//   <div>
//       <img
//   src="https://i.imgur.com/MK3eW3Am.jpg"
//   alt="Katherine Johnson"
// />
//   </div>
// }

// 错误  return下一行的代码会忽略
// function Profile() {
//   // 返回一个图像元素，用于展示Katherine Johnson的图片
//   return 
//   <div>
//       <img
//   src="https://i.imgur.com/MK3eW3Am.jpg"
//   alt="Katherine Johnson"
// />
//   </div>
// }

//正确  定义一个名为Profile的函数组件
function Profile() {
    // 返回一个图像元素，用于展示Katherine Johnson的图片
    return (
      <div>
        <img
          src="https://i.imgur.com/MK3eW3Am.jpg"
          alt="Katherine Johnson"
        />
      </div>
    )
  }

  function  Gallery() {
    return (
        <section>
        <h1>了不起的科学家</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    )
  }

  export default Gallery