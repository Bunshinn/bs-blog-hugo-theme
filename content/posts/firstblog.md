---
title: "first blog"
date: 2020-03-13T19:48:12+08:00
draft: true
author: bunshinn
tags: ["hugo", "themes"]
---

## Mermaid支持  
使用hugo的shortcodes语法

{{< mermaid >}}
graph LR
A-->B
{{< /mermaid >}}


## Flowchart.js支持  
使用hugo的shortcodes

{{< flowchart >}}
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
{{< /flowchart >}}