# blogforzyd
做个项目加油！


项目名称:个人博客网站
项目目标:创建一个用户友好的个人博客网站，允许用户发布，编辑和管理博客文章，并支持用户评论和搜索功能
技术栈:
    前端:HTML CSS JAVASCRIPTE REACT
    后端:NODE.JS EXPESS
    数据库:MONGODB
    其他:Git Docker Nginx

功能需求
    用户注册、登录，注销
    用户个人信息管理
博客管理
    发布新文章
    编辑和删除文章
    查看文章列表
    查看单篇文章详情
评论系统
    添加评论
    查看评论列表
搜索功能
    通过标题或者内容搜索文章

系统设计
    前端设计
        首页设计：展示文章列表，支持分页
        文章详情展示页：显示文章内容和评论
        用户登录、注册页
        用户个人主页：显示用户信息以及用户发布的文章
    后端设计
        api设计:设计RESTful API ,包括用户，文章和评论的crud
        权限控制使用JWT进行用户身份验证
        数据库设计:使用MongoDB,设计用户和文章和评论三个合集
实施步骤
    环境搭建
        安装node.js MongoDB
        配置开发环境，使用Git进行版本控制
    前端开发
        使用react创建项目结构
        编写各个方面的组件和样式
    后端开发
        使用express创建服务器
        编写API接口
        集成JWT进行身份验证
    数据库设计
        设计MongoDB集合结构
        编写数据库操作代码
    功能实现
        用户注册，登录，注销
        文章发布，编辑，删除
        评论添加和查看功能
        搜索功能
    测试和部署
        进行单元测试和集成测试
        使用Docker打包应用
        使用Nginx配置服务器，部署应用

monogodb shell
    mongosh --host=localhost --port=27017
    use myblog
    db.createCollection('users')
    db.createCollection('posts')

node 
    node -v
    pnpm -v

npm config get registry
npm config set registry https://registry.npm.taobao.org

npm install -g create-react-app


npm install express mongoose cors body-parser jsonwebtoken bcryptjs
npm install typescript @types/node @types/express @types/mongoose ts-node
npm install @types/jsonwebtoken @types/bcryptjs

