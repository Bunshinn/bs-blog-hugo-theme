---
title: "shell命令行基础"
date: 2020-03-13T19:48:12+08:00
draft: false
author: bunshinn
tags: ["hugo", "themes"]
---

## 基础命令

```sh
# List information about the FILEs (the current directory by default).
ls 
# 命令行参数众多,初用时不易记住, 可通过help查看参数
ls --help
# manual, 各命令的操作手册
man ls  

# 常用命令
pwd # present(current) working directory
cd  #在文件夹间移动
head #查看文件头部信息
tail #查看文件尾部信息
cat #查看文件信息

mkdir dirname #创建目录
rmdir dirname #删除空目录
rm filename #删除文件
rm -r dirname #删除目录及目录下文件
cp file1 file2 #复制文件
mv file1 file2 #重命名文件

wget url #下载安装包文件
tar -xvf #解压tar/gz等压缩文件
find  #搜索文件
ps aux #当前运行的服务
```

## vi编辑器
```sh
# linux系统默认都会自带vim文本编辑器
vi path/to/filename #打开文件, 只读模式
`i`进入insert模式, 即可进行编辑
`Esc`进入命令行模式

输入`:q!`强制退出, 不保存
输入`:wq`保存并退出
输入`:q`退出
```


## 进阶
```sh 
nohup  # no hang up 的缩写，就是不挂断的意思。

# 压缩文件夹至tar.gz文件 ``
# 从帮助文件中查看用法
tar --help
tar -cf filename.tar dir
tar -tvf tarfile.tar 
tar zcvf FileName.tar.gz DirName
```
