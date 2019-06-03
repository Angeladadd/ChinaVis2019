## 全局数据的获取

全局数据的获取改到了head里，现在以data_time_dayx命名，需要的全局数据尽量从head里面加载，不要在画图的时候加载！

## 文件结构
js代码尽量写在.js里，在html里面调函数，在运行的时候chrome需要清除浏览数据才能更新js，因为以前调用过的js会缓存到浏览器中

## TODO
简单版的主图已上传，路线，颜色，大小，透视等功能待加。
需要后端整理数据结构：
* people = [[{time:###,x:###,y:###,floor:###,sid:###},{time:###,x:###,y:###,floor:###,sid=###},...],[...],[...]]
  其中每一个people[i]表示一个人，people[i]中的列表time为递增序列
* people_map = {###11:###21, ###12: ###22}, 其中###1x为id, ###2x为该id对应的人在people中的index

处理一下直接保存成json吧

## 前后端交互说明
数据格式   sensor_number = {sid: number of people, ...}
url: /getSensorNumber
methods: GET 和 POST
后端获取day和time分别是：'day', 'time'（现在只有day=1用于测试）
前端获取 sensor_number
PS: 前端检查一下数据类型
