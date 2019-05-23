# Tutorial of git

## 下载repository，第一次下载代码库时使用，以后都不用

```
git clone https://github.com/Angeladadd/ChinaVis2019.git
cd /path/to/ChinaVis2019
git init
```
这时你已经在这个代码库中创建了你自己的分支，默认为master

## 修改并上传

下载好代码之后本地修改，修改后上传至github：

1. 检查修改
 
   ```
   git status
   ```
  会显示修改的文件
  
 2. 添加修改到本地暂存区，注意只上传你修改的与ChinaVis有关的代码
 
  ```
  git add <file>
  ```
  
  这时如果想要把代码从暂存区删除，可以使用git checkout -- <file>
 
 3. 提交修改，会提交所有暂存区的代码！在提交时请git status一下
  
  ```
  git commit -m "你做出的修改"
  ```
  
 4. 上传到远端仓库，如果没有意外切换分支操作，远端仓库就是本仓库，直接上传至master分支
  
  ```
  git push origin master
  ```
  
## 拉取最新代码

1. 进入ChinaVis2019
2. 拉取最新修改

  ```
  git pull origin master
  ```
  
建议每次修改之前都要拉取一下最新代码，以上为基本操作，具体操作可自行百度git
