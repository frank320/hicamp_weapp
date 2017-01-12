## 项目介绍

嗨学营 儿童电视 微信小程序 用于展示儿童电视内容

## 操作步骤

### 将项目克隆到本地

```bash
# 定位到任意目录
$ cd path/to/root

# 克隆仓库到指定的文件夹
$ git clone https://github.com/frank320/hicamp_weapp.git  --depth 1

# 进入指定的文件夹
$ cd [project-name]
```
### 安装项目NPM依赖

```bash
$ npm install

```


## 开发阶段

执行如下命令

```bash
# 启动监视
$ npm run watch
```

通过`微信Web开放者工具`打开项目根目录下`dist`文件夹，预览~


## 生产阶段

执行如下命令

```bash
# 启动编译
$ npm run build
```

生产阶段的代码会经过压缩处理，最终输出到`dist`下。

同样可以通过`微信Web开放者工具`测试。