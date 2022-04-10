# 班级空间 - 后端

## 接口文档
链接: https://www.apifox.cn/apidoc/shared-1e6b5955-a652-422c-92b2-3bc81a65b9c8

访问密码 : 0hG7LbnR

## 目录结构

```sh
├── api    # 定义处理函数
├── db       # 数据库连接配置
├── main.js      # 启动入口文件
├── node_modules
├── package-lock.json
├── package.json
├── router        # 请求路由定义
├── middleware    # 中间件
├── dto          # 返回包装器
├── test          # 单元测试
├── utils        # 工具函数
└── service      # 基本功能函数
```

## 如何运行项目

1. `npm install`
2. `npm run start`

## 请求逻辑
1. 客户端发起请求
2. 中间件处理
3. 请求路由匹配，交给处理函数
4. 处理函数调用基本功能函数处理
5. 包装请求结果返回
