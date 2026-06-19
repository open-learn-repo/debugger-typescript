### 此项目是一个调试TypeScript的项目

#### 调试脚本

> 该调试是基于`tsc`来调试`typescript`的

位置在：`.vscode/launch.json`中`name`为`debugger typescript for tsc`的脚本
具体作用：
	1. 启用调试前执行配置`preLaunchTask`中的`tsc:build`，他会从`tasks.json`中需找该`label`的任务
	2. 调试中
	3. 调试后会执行配置中`postDebugTask`中的`rimraf:clean-tsc-compileFile`，他会从`tasks.json`中需找该`label`的任务