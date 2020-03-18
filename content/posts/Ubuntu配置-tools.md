---
title: "Ubuntu配置-tools-eg:python,ipython"
date: 2020-03-14T19:58:12+08:00
draft: False
author: bunshinn
tags: ["ubuntu", "python"]
---

## ubuntu操作

- 列出已安装包 ```dpkg -l```  安装路径`dpkg -L | grep ftp`  查看软件版本 `aptitude  show ftp`  
- 移除安装包 ```apt-get autoremove --purge pkgname```
## python  
ubuntu 18.04默认已安装python3, 运行输入`python`显示未安装， 将python3软链接至python   

	whereis python3
	#python3: /usr/bin/python3 /usr/bin/python3.6
	link /usr/bin/python3 /usr/bin/python

## ipython安装-基于python3    
	sudo apt-get install ipython3
	# 创建快捷方式ipython
	link /usr/bin/ipython3 /usr/bin/ipython

## celery布署
```
#查看celery进程树, 结束任务时只需结束主进程
pstree -ap | grep celery

#celery启动
celery -A worker tasks -l info
```
参数说明:
```
  -A APP, --app APP
  -b BROKER, --broker BROKER
  --result-backend RESULT_BACKEND
  --loader LOADER
  --config CONFIG
  --workdir WORKDIR
  --no-color, -C
  --quiet, -q
  -l log级别, info/error等
```

## Flask布署  
使用gunicorn, 安装`pip3 install gunicorn`,
```
gunicorn -w 2 -b 127.0.0.1:5000 app:app -D

# 查看gunicorn主进程
pstree -ap | grep gunicorn
```
参数说明:
```
-w 处理进程数
-b 运⾏主机ip端⼝
-c CONFIG : CONFIG,配置⽂件的路径，通过配置⽂件启动；⽣产环境使⽤； 
​-b ADDRESS : ADDRESS，ip加端⼝，绑定运⾏的主机； 
​-w INT, --workers INT：⽤于处理⼯作进程的数量，为正整数，默认为1； 
​-k STRTING, --worker-class STRTING：要使⽤的⼯作模式，默认为sync异步，可以下载​eventlet和gevent并指定 
​--threads INT：处理请求的⼯作线程数，使⽤指定数量的线程运⾏每个worker。为正整数，默认为1。 
​--worker-connections INT：最⼤客户端并发数量，默认情况下这个值为1000。 
​--backlog int：未决连接的最⼤数量，即等待服务的客户的数量。默认2048个，⼀般不修改； 
​-p FILE, --pid FILE：设置pid⽂件的⽂件名，如果不设置将不会创建pid⽂件 
​--access-logfile FILE ： 要写⼊的访问⽇志⽬录--access-logformat STRING：要写⼊的访问⽇志格式 
​--error-logfile FILE, --log-file FILE ： 要写⼊错误⽇志的⽂件⽬录。 
​--log-level LEVEL ： 错误⽇志输出等级。 
​--limit-request-line INT ： HTTP请求头的⾏数的最⼤⼤⼩，此参数⽤于限制HTTP请求⾏的允​许⼤⼩，默认情况下，这个值为4094。值是0~8190的数字。 
​--limit-request-fields INT ： 限制HTTP请求中请求头字段的数量。此字段⽤于限制请求头字段的数量以防⽌DDOS攻击，默认情况下，这个值为100，这个值不能超过32768 
​--limit-request-field-size INT ： 限制HTTP请求中请求头的⼤⼩，默认情况下这个值为8190字节。值是⼀个整数或者0，当该值为0时，表示将对请求头⼤⼩不做限制 
​-t INT, --timeout INT：超过这么多秒后⼯作将被杀掉，并重新启动。⼀般设定为30秒； 
​-D, --daemon： 是否以守护进程启动，默认false； 
​--chdir： 在加载应⽤程序之前切换⽬录； 
​--graceful-timeout INT：默认情况下，这个值为30，在超时(从接收到重启信号开始)之后仍然活着的⼯作将被强⾏杀死；⼀般使⽤默认； 
​--keep-alive INT：在keep-alive连接上等待请求的秒数，默认情况下值为2。⼀般设定在1~5秒之间。 
​--reload：默认为False。此设置⽤于开发，每当应⽤程序发⽣更改时，都会导致⼯作重新启动。 
​--spew：打印服务器执⾏过的每⼀条语句，默认False。此选择为原⼦性的，即要么全部打印，要么全部不打印； 
​--check-config ：显示现在的配置，默认值为False，即显示。 
​-e ENV, --env ENV： 设置环境变量；
```