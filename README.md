# leave phone number
 二维码挪车电话，功能使用qrcode 以服务端地址生成一个二维码，扫描二维码跳转到服务端的页面，页面唤起拨打号码按钮。
# 启动服务
```js
node server.js
```
在服务器以守护进程开启服务代理, 先安装pm2 node进程管理工具:
```js
npm install pm2
pm2 start server.js
```