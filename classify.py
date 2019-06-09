import csv
import copy
people = []
fenhuichang_dalao = ['10201','10301','10401','10501','10601','10701']
room5_dalao = ['21001','21101']
zhuhuichang_dalao = ['10220','10221','10222','10223','10224','10320','10321','10322','10323','10324','10325','10326','10327']
zhuhuichang_jizhe = ['10419','10519','10609','10709','10809','10909','11009','11119',
                     '11120','11121','11122','11123','11124','11125','11126','11127',
                     '10427','10527','10627','10727','10827','10927','11027']
erloukongdi = []
kanmen = ['10110','11301','11402','11404','11405','11406','11407','11410','10119','11415','11417',
          '10515','10518','10815','11115','10818','11118']
fuwu = ['register','service','door']
xiaohuodong = ['room1','room2','room3','room6']
xiaohuodong_people_list = [[],[],[],[]]
huichang = ['main','A','B','C','room5']
activity_places = ['poster','exhibition','leisure','dinner']

room_people = [0,0,0,0] #上面四个room人口随时间的变化

scholar_id = [] #坐在会场答疑的 ok
waiter_id = [] #服务台 签到台 门口站岗 展厅站岗 ok
assistant_id = [] #在room里发礼物的 ok
reporter_id = [] #主会场后排 存疑
attendee_id = [] #在主会场和分会场待了很久的人 ok
visitor_id = [] #只去了海报展厅 ok
business_id = [] #二楼闲聊 ok
cooker_id = [] #只在中午去了餐厅 没人
other_id = [] #其他人

people_mark = {}

fw = open('./static/data/day3_cluster.js','w')

for i in range(2,15):
    col = str(i)
    if len(col) == 1:
        col = '0'+col
    for j in range(6,10):
        row = '0'+str(j)
        erloukongdi.append('2'+col+row)
sensor = {}
with open("./static/data/SensorDeployment.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        sensor[line[0]] = line[5]

data_day = []
with open("./static/data/day3.csv", "r") as file:
    csvfile = csv.reader(file)
    i = 0
    for line in csvfile:
        if i != 0:
            data_day.append({'id': line[0], 'sid': line[1], 'time': line[2]})
        i += 1
people_map = {}
people = []
for x in data_day:
    if x['id'] in people_map.keys():
        people_map[x['id']].append(x)
    else :
        people_map[x['id']] = []
        people_map[x['id']].append(x)
        people.append(x['id'])
for x in people:
    people_mark[x] = 0
# print (people_mark)
#专家学者
for x in people:
    if people_mark[x] == 1:
        continue
    activity = people_map[x]
    flag = 0
    for y in activity:
        for z in fenhuichang_dalao:
            if y['sid'] == z:
                flag = 1
                break
        if flag == 1:
            break
        else:
            for z in zhuhuichang_dalao:
                if y['sid'] == z:
                    flag=1
                    break
        if flag == 1:
            break
        else:
            for z in room5_dalao:
                if y['sid'] == z:
                    flag = 1
                    break
        if flag == 1:
            break
    if flag == 1:
        scholar_id.append(x)
        people_mark[x] = 1

fw.write("var scholar = "+str(scholar_id)+';\n')
# print ('scholar')
# print (scholar_id)

#服务员
time = 7200
sensor_tmp = copy.deepcopy(sensor)
for x in kanmen:
    sensor_tmp[x]='door'
for x in people:
    if people_mark[x] == 1:
        continue
    flag = 0
    activity = people_map[x]
    for i in range(0,len(activity)):
        if (sensor_tmp[activity[i]['sid']] in fuwu) and (int(activity[i+1]['time'])-int(activity[i]['time'])>=time):
            flag = 1
            break
    if flag == 1:
        waiter_id.append(x)
        people_mark[x] = 1
# print (waiter_id)
fw.write("var waiter = "+str(waiter_id)+';\n')

#room里发礼物的工作人员

people_place = {}
for x in people:
    people_place[x] = -1

for x in data_day:
    id = x['id']
    sid = x['sid']

    if people_place[id] != -1 and (sensor[people_place[id]] in xiaohuodong):
        index = xiaohuodong.index(sensor[people_place[id]])
        room_people[index] -= 1
        xiaohuodong_people_list[index].remove(id)
    if sensor[sid] in xiaohuodong:
        index = xiaohuodong.index(sensor[sid])
        room_people[index] += 1
        xiaohuodong_people_list[index].append(id)

    for i in range(0,4):
        if room_people[i]>10:
            assistant_id += xiaohuodong_people_list[i][:11]
assistant_id = list(set(assistant_id))
for x in assistant_id:
    people_mark[x] = 1
# print (assistant_id)
fw.write("var assistant = "+str(assistant_id)+';\n')

#送饭的或蹭饭的 没有人
for x in people:
    if people_mark[x] == 1:
        continue
    activity = people_map[x]
    places = []
    flag = 0
    for i in range(0,len(activity)):
        place = sensor[activity[i]['sid']]
        if place not in places:
            places.append(place)
    if 'dinner' in places or 'leisure' in places:
        flag =1
    for y in huichang:
        if y in places:
            flag = 0
    for y in ['poster','exhibition','room1','room2','room3','room4','room5','room6']:
        if y in places:
            flag = 0
    if flag == 1:
        cooker_id.append(x)
        people_mark[x] = 1
# print (cooker_id)
fw.write("var cook = "+str(cooker_id)+';\n')

#二楼闲聊
time = 1200
sensor_tmp = copy.deepcopy(sensor)
for x in erloukongdi:
    #print (x)
    sensor_tmp[x] = 'xianliao'
for x in people:
    if people_mark[x] == 1:
        continue
    activity = people_map[x]
    init_time = -1
    flag = 0
    for i in range(0, len(activity)):
        if sensor_tmp[activity[i]['sid']] == 'xianliao':
            if init_time == -1:
                init_time = int(activity[i]['time'])
            else:
                if int(activity[i]['time'])-init_time >= time:
                    flag = 1
                    break
        else:
            init_time = -1
    if flag == 1:
        business_id.append(x)
        people_mark[x] = 1
fw.write("var business = "+str(business_id)+';\n')
# print (business_id)

# 只是来参观一下
for x in people:
    if people_mark[x] == 1:
        continue
    activity = people_map[x]
    flag = 0
    places = []
    for i in range(0,len(activity)):
        place = sensor[activity[i]['sid']]
        if place not in places:
            places.append(place)
    for y in activity_places:
        if y in places:
            flag = 1
    for y in huichang:
        if y in places:
            flag = 0
            break
    if flag == 1:
        visitor_id.append(x)
        people_mark[x] = 1
# print (visitor_id)
fw.write("var visitor = "+str(visitor_id)+';\n')

#记者 存疑
time = 1000
sensor_tmp = copy.deepcopy(sensor)
for x in zhuhuichang_jizhe:
    sensor_tmp[x] = 'jizhe'
for x in people:
    if people_mark[x] == 1:
        continue
    activity = people_map[x]
    init_time = -1
    flag = 0
    for i in range(0,len(activity)):
        if sensor_tmp[activity[i]['sid']] == 'jizhe':
            if init_time == -1:
                init_time = int(activity[i]['time'])
            else:
                if int(activity[i]['time'])-init_time>=time:
                    flag = 1
                    break
        else:
            init_time = -1
    if flag == 1:
        reporter_id.append(x)
        people_mark[x] = 1
# print (reporter_id)
fw.write("var reporter = "+str(reporter_id)+';\n')

# 与会者，这里会与很多类别有交集，优先考虑其他类别
time = 600
for x in people:
    if people_mark[x] == 1:
        continue
    activity = people_map[x]
    init_time = -1
    flag = 0
    for i in range(0,len(activity)):
        if sensor[activity[i]['sid']] in huichang:
            if init_time == -1:
                init_time = int(activity[i]['time'])
            else:
                if int(activity[i]['time'])-init_time >= time:
                    flag = 1
                    break
        else:
            init_time = -1
    if flag == 1:
        attendee_id.append(x)
        people_mark[x] = 1
fw.write("var attendee = "+str(attendee_id)+';\n')
# print (len(attendee_id))
# print (len(people))

# 不知道什么人
for x in people:
    if people_mark[x] == 0:
        other_id.append(x)
fw.write("var other = "+str(other_id)+'\n')
fw.write("var count=[['scholar',"+str(len(scholar_id))+\
         "],['waiter'," +str(len(waiter_id))+\
"],['assistant'," +str(len(assistant_id))+\
"],['reporter'," +str(len(reporter_id))+\
"],['attendee'," +str(len(attendee_id))+\
"],['visitor'," +str(len(visitor_id))+\
"],['business'," +str(len(business_id))+\
"],['cook'," +str(len(cooker_id))+\
"],['other'," +str(len(other_id))+"]];\n")
fw.write("var day3_obj = {count:count,list:[scholar,waiter,assistant,reporter,attendee,visitor,business,cook,other]};\n")
