# git-hook

1. 在 .git/hook 下可以创建对应的 git hook 脚本

这些脚本在 git 执行到对应的流程的时候进行调用

比如 commit-msg 就会在 git commit 之后调用

需要注意的是，给的这个脚本必须是有可执行权限的

```js
chmod 777 commit-msg
```

2. 每次都需要在 .git/hook 下改代码太麻烦了
   可以在 .git/hook/commit-msg 脚本中写入执行 05/commit-msg.js 脚本的逻辑 以后我们执行改 commit-msg.js 的逻辑即可

3. 可以使用 zxjs 这个库来写脚本
