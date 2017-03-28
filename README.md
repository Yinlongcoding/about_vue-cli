# A summary of the use of webpack

##### 题记：
   最近几天在对自己写的词典项目进行*webpack*打包处理，该篇用以记录过程和踩过的坑。  
   词典项目基于 Vue-cli ,所以也会是一个关于 vue_2.0和 webpack打包整个过程记录。

##### 准备工作：
npm 安装响应的依赖库：
    Node.js & npm ？ continue ：[download Node.js](https://nodejs.org/en/)
```node
    npm install webpack vue-cli -g  // 全局安装方便使用
```

###### 构建 Vue-cli 项目环境
在这之前需要创建一个文件夹用以存放你项目： //  本例：Floder: node
```node
    vue init webpack [name]
? Generate project in current directory? Yes
  This will install Vue 2.x version of the template.
  For Vue 1.x use: vue init webpack#1.0 

? Project name dictionary               // 项目名称
? Project description A Vue.js project  // 项目介绍
? Author Sliver <wnhoper@gmail.com>     // 作者
? Vue build standalone                  // 构建独立
? Install vue-router? Yes               // vue-router 路由
? Use ESLint to lint your code? Yes     
? Pick an ESLint preset Standard         
? Setup unit tests with Karma + Mocha? No  // 一下两项为测试使用依赖 
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "node".            // 这个是我根文件夹 app是其子集

   To get started:                        
   
     npm install
     npm run dev
   
   Documentation can be found at https://vuejs-templates.github.io/webpack

    npm install   // 时间可能会久一点，耐心等待
    npm run dev   // 稍等片刻，vue 会穿件一个server port:8080, 浏览器会主动打开
```
![img](/images/cli.png) ![img](/images/floder.png)  
##### 开工

