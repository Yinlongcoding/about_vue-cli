## A summary of Vue-cli

#### 题记：
   最近几天在对自己写的词典项目进行**webpack**打包处理，该篇用以记录过程和踩过的坑。  
   词典项目基于**Vue-cli** ,所以也会是一个关于 vue_2.0和 webpack打包整个过程记录。

##### 技术栈  
`Vue.js, Vue-router, Vuex, Axios, Element.ui`

#### 目录：
 - 准备工作  
 - [构建环境](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/created_vue-cli.mdown)
 - [热身组件](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/learning_components.mdown)
 - [UI 依赖](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/about_ElementUi.mdown)
 - 依赖插件
     + [vue-router](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/vue-router.mdown)
     + [axios](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/axios.mdown)
     + [vuex](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/vuex.mdown)
 - [模块拆分](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/modules_disassemble.mdown)
 - [邂逅问题](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/some_questions.mdown)
 - [项目总结](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/summary.mdown)  


#### 准备工作：
npm 安装响应的依赖库：
    Node.js & npm ？ continue ：[download Node.js](https://nodejs.org/en/)
```node
    npm install webpack vue-cli -g  // 全局安装方便使用
```
