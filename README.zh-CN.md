简体中文 | [English](./README.md)

# NPM-TEMPLATE

NPM-TEMPLATE 是一个基于 [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) 和 [rollup](https://rollupjs.org/guide/en/) 的 NPM 模版项目，当然你完全可以忽略 React，直接从简单的 JavaScript 项目开始！

该项目提供对 `.js`, `.ts`, `.tsx` 文件类型的支持

**注意，rollup.config.js 内的 input 参数（指明入口文件）需要正确配置**

[master](https://github.com/Y-lonelY/npm-template/tree/master) 已支持的 npm 库：

- [import-import-lazy](https://www.npmjs.com/package/react-import-lazy)
- [cell-render](https://www.npmjs.com/package/cell-render)
- [react-error-catcher](https://www.npmjs.com/package/react-error-catcher)

[pure](https://github.com/Y-lonelY/npm-template/tree/pure) 已支持的 npm 库：

- [ele-utility](https://www.npmjs.com/package/ele-utility)


## 如何开始

### 发布

1. 在当前项目内执行 `npm install`，引入相关依赖
2. 在 `src/` 目录下开发（当然，你可以修改 `rollup.config.js` 内的 `input` 来修改这一规则）
3. 执行 `npm run build` 在根目录下生成 `index.js` 文件，将该文件发布到 npm 平台

### 本地测试

实际上在 `example/` 目录下，通过 `create react app` 添加了一个 React 项目的单元，你需要做的就是将生成的目标文件引入到 `example/node_module` 内

- `cd example` 进入到 example 目录
- `yarn add ../` 引入根目录作为依赖
- `yarn start` 启动项目，进行测试


### 支持 TypeScript

首先，你需要执行 `npm install --save typescript @types/node @types/react @types/react-dom @types/jest` and `npm install --save-dev @rollup/plugin-typescript` 来支持编辑和打包！

然后，你需要添加一些配置，来使其生效：
- 从 `tsconfig.json` 内清除 `outDir` 属性, 不然在打包时会产生错误
- 在 `package.json` 内配置 `types` 属性来引入声明文件
- 在 `package.json` 内配置 `files` 属性来开启白名单，发布指定的文件到 npm

注意：`dependencies` 需要正确配置来支持 `.d.ts` 文件的打包，参看 [publish](https://www.tslang.cn/docs/handbook/declaration-files/publishing.html) 获取更多细节


### 关于 React

大多数情况下，你并不想打包诸如 `React` 等依赖包，因为在你的项目内大概率已经引入了相关的依赖

你可以配置 `rollup.config.js` 文件内的 `external` 属性来达到这一目的，它不会整体打包 `react` 项目，只是转换成 `var React = require('react');` 来进行引入，所以你必须确保在你自己的项目内已经引入了 `react` 


## 如何发布一个 package 到 npm

### 重要配置

一些重要的配置如下：

1. name
2. version，版本号的使用参考 [semver](https://semver.org/lang/zh-CN/)
3. description
4. author
5. license
6. repository
7. keywords

### 依赖管理

当我们发布一个 package 时，正确地配置依赖是相当重要的。

`dependencies` 用来管理依赖，这些依赖能够确保你的库最终正确运行

`devDependencies` 用来管理仅在开发时需要引入的依赖，比如 `eslint`，当其他人通过 `yarn add xxx` 引入你的包时，devDependencies 内的包不会被引入

`peerDependencies` 常用来为某个组件编写插件时对依赖包进行管理。它要求用户已经引入了指定依赖，比如，你想为 webpack 写一个插件，但是其中用到了一些 webpack 方法，此时如果你将 webpack 添加到 dependencies 内，则意味着项目内会有两个版本的 webpack：一个来自项目本身，另一个来自你的插件。这是不合理的，因此通过 peerDependencies 来告诉用户，“嗨，如果你需要执行我的插件，需要先安装 webpack 哦！“ 这就给了用户选择依赖版本和升级包版本的自由！

### 入口

通过 `main` 来配置发布 node modules 的基础入口，比如 `"main": "dist/index.js"`

通过 `files` 来配置发布包需要包含的文件/目录，比如你在 `.gitignore` 内配置了忽略 `dist` 目录，但是在发布时，需要告诉 npm 去包含该文件，则此时通过 `"files": ["dist"]` 解决


## Q&A

1. `Rollup can't see named export from commonjs module`

解决：改变引入方式，如下所示：

```javascript
// bad
import { test } from 'test-package'

// good
import * as Test from 'test-package'

const { test } = Test
```

