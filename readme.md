```
🕙 分享是一种美德，右上随手点个 🌟 Star，谢谢
```




## 1.项目简介

​      使用gpt技术，能快速生成语言内容，例如文案、情书和题目。用户只需输入关键词，可提高工作效率和创造力。结合gpt的强大的问答系统和知识图谱，为用户提供全面、准确的答案。不仅能够回答简单问题，还能够针对复杂的问题给出详细的解答。问支持编程全能，利用gpt生成代码，帮助用户减少编程工作量。此外，超级AI大脑能随着地球数据增长不断强化自身能力，提供更优秀的智能应用。



## 2.开源项目完整运行步骤

### 2.1开源项目后端代码运行步骤

#### 2.1.1环境配置

**运行环境**：JDK1.8

**开发工具：** Idea、Maven

**默认已启动中间件：**[Nacos2.0.0++](https://nacos.io/)、[Mysql8.0](http://mysql.p2hp.com/)、[Redis](https://redis.io/)、[Minio](http://www.minio.org.cn/)

**配置及获取  flagstudioToken:**  [flagstudio]( http://flagstudio.baai.ac.cn/)

如果觉得以上麻烦，推荐使用phpStudy简化环境配置：[phpstudy](https://www.xp.cn/)

#### 2.1.2后端代码运行

通过git拉取代码到本地后，项目结构如图：

<table>
    <tr>
        <td ><img src="https://ai.oss.mj.ink/chatgpt/github/1682411107813.png"/></td>
    </tr>
</table>

因为本项目依赖BladeX框架而搭建，因此在项目正式运行之前，我们需要再检查一遍本项目的正确maven路径,而后导入bladex-tool(本项目版本为2.9.1)工具包。

之后我们还需要配置nacos文件，**打开nacos,新增chatgpt_open命名空间，空间id为chatgpt_open**,而后分别新增配置blade.yaml、blade-dev.yaml文件。

如图：(在这里关于一些中间件的地址已有示例，具体还需与个人本地的地址相对应进行配置)

<table>
    <tr>
        <td ><img src="https://ai.oss.mj.ink/chatgpt/github/Snipaste_2023-04-28_11-17-57.png"/></td>
    </tr>
</table>



**关于blade.yaml文件、blade-dev.yaml文件以及相关工具包请阅读本项目中的doc文件夹。**

在配置完成后，根据下图提示配置本地项目中nacos地址，使项目加入nacos管理，如图：

<table>
    <tr>
        <td ><img src="https://ai.oss.mj.ink/chatgpt/github/Snipaste_2023-04-28_11-12-24.png"/></td>
    </tr>
</table>

配置好nacos后分别在项目中**启动**以下6个服务，并能被nacos正常访问到，如图：

<table>
    <tr>
        <td ><img src="https://ai.oss.mj.ink/chatgpt/github/%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%88%AA%E5%9B%BE.jpg"/></td>
    </tr>
</table>

至此，后端代码运行成功！

### 2.2开源项目前端代码运行步骤

#### 2.2.1项目前端前台代码运行

**前台运行环境：** 无需配置node.js

**开发工具：** HBuilder X

官方下载对应软件HBuilder X，安装步骤非常简单，如图:

官方地址：[Windows - HBuilderX 文档 (dcloud.net.cn)](https://hx.dcloud.net.cn/Tutorial/install/windows)

<table>
    <tr>
        <td ><img src="https://ai.oss.mj.ink/chatgpt/github/Snipaste_2023-04-28_02-54-21.png"/></td>
    </tr>
</table>



通过提供的git地址拉取代码到本地后，将下载好的项目文件夹拖曳到打开的HBuilder X下，项目结构如图：

<table>
    <div >
    <td ><img src="https://ai.oss.mj.ink/chatgpt/github/Snipaste_2023-04-25_17-17-50.png"/></td>
</div>
</table>

其中，需要注意网关地址是否与nacos中对应网关服务显示地址一致，如图：

 <table>
     <div >
    <td ><img src="https://ai.oss.mj.ink/chatgpt/github/Snipaste_2023-04-28_02-16-13.png" width="85%"/></td>
 </div>
</table>

 <table> 
     <div >
 <td ><img src="https://ai.oss.mj.ink/chatgpt/github/Snipaste_2023-04-28_02-12-02.png" width="85%"/></td>   
 </div></table>

运行项目，选择使用chorm运行项目，如图：

<table>
    <tr>
        <td ><img src="https://ai.oss.mj.ink/chatgpt/github/Snipaste_2023-04-25_17-27-20.png"/></td>
    </tr>
</table>

进入页面需要认证，点击发送验证码，输入123456即可(有需要可添加上阿里云短信配置即可)。


#### 2.2.2项目前端后台代码运行

**后台运行环境：** node12.13.0

**开发工具：** vscode

通过git拉取代码到本地，在配置好node.js环境的前提下，使用vs打开文件夹，运行命令npm i, npm run serve启动项目，如图：

<table>
    <tr>
        <td ><img src="https://ai.oss.mj.ink/chatgpt/github/%E5%90%8E%E5%8F%B0%E5%89%8D%E7%AB%AF.png"/></td>
    </tr>
</table>











