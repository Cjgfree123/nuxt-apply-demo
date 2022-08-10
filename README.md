# nuxt2-learn
nuxt2 入门

## 运行

```
// 打包出静态文件
npm run build 

// 根据打包出的静态文件，渲染html(每次客戶端代碼發生變更，nodemon將會將聽到，并重新进行打包)
npm run dev
```

## 页面部分结构

### pages

```
pages
|_____detail
        |______ _id.vue
        |______ index.vue

|_______user
        |______ _id.vue
                 |______ _name.vue
```
    
```
detail/:id
user/:id/:name
```

### layouts

```
layouts
    |____ default.vue (所有页面导航)
    |____ error.vue (404页面，指定使用 not found 页面布局)
```

## 注意

1. 

(1) 每次客户端代码发生变更，nodemon将会监听到，并重新进行打包。

(2) nuxt.config.js文件发生变更后，需要重新执行 `npm run dev`。

2. 

(1) 配置背景色，基础路由(nuxt-link,nuxt-view),layout:"notfound"来指定了一个布局

(2) 动态路由(通过配置路由参数)

3. 异步请求函数(asyncData  fetch)

asyncData 

```
(1) 可以在服务端、客户端执行。
(2) 在服务端执行的话，通过服务端获取数据
(3) 在客户端执行ajax的话，会把返回的结果，合并到data上
(4) asyncData只在页面组件中才有(即src/pages下面的文件才拥有该方法)
```

fetch

```
(1) 不需要返回结果
(2) 服务端和客户端都执行
(3) 一般用来操作vuex
```

## todo

1. Cannot read property 'onRequest' of undefined(报错)  异步请求

   在文件 plugins/axios.js:2:
