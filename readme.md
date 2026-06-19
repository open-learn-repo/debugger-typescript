### 此项目是一个调试TypeScript的项目

#### 调试脚本

> 该调试是基于`tsc`来调试`typescript`的

位置在：`.vscode/launch.json`中`name`为`debugger typescript for tsc`的脚本

具体作用：

1. 启用调试前执行配置`preLaunchTask`中的`tsc:build`，他会从`tasks.json`中需找该`label`的任务
2. 调试中
3. 调试后会执行配置中`postDebugTask`中的`rimraf:clean-tsc-compileFile`，他会从`tasks.json`中需找该`label`的任务

❗上面其实一种调试过程中会产生编译文件的方式，如果你希望`typescript`调试不产生编译文件，可以按下面步骤做

1. 添加`tsconfig.json`的配置：

   ```json
   {
       // ...other config
       "allowImportingTsExtensions": true, // 导入ts文件需要以.ts扩展名结尾
       "noEmit": true, // 编译时，不生成js文件
       // ...other config
   }
   ```

2. 修改`package.json`的配置

   ```json
   {
       // ...other config
       "type": "module",
       // ...other config
   }
   ```

3. 在`.vscode/launch.json`脚本中去掉无效的配置`postDebugTask`

