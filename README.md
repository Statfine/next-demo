This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## 构建

### 以静态网页方式进行部署

| 环境              | 静态网页                                  |
|------------------|------------------------------------------|
| 构建命令           | yarn && yarn build && yarn next export   |
| 发布目录           | out                                      |


### 以Node服务端方式进行部署

| 环境              | 静态网页                                  |
|------------------|------------------------------------------|
| 构建命令           | yarn && yarn build                       |
| 发布目录           | yarn next start                          |