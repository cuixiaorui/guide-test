# 基于 husky 做 git hook

安装 husky

```js
npm install -D husky
```

2. 在 packgae.json 中添加 prepare 脚本

```js
{
"scripts": {
"prepare": "husky install"
}
}
```

prepare 脚本会在 npm install（不带参数）之后自动执行。也就是说当我们执行 npm install 安装完项目依赖后会执行 husky install 命令，该命令会创建.husky/目录并指定该目录为 git hooks 所在的目录。

3. 添加 git hooks，运行一下命令创建 git hooks

```js
npx husky add .husky/pre-commit "npm run test"
```

运行完该命令后我们会看到.husky/目录下新增了一个名为 pre-commit 的 shell 脚本。也就是说在在执行 git commit 命令时会先执行 pre-commit 这个脚本。pre-commit 脚本内容如下：

```js
#!/bin/sh
. "$(dirname "$0")/\_/husky.sh"
npm run test
```
可以看到该脚本的功能就是执行 npm run test 这个命令
