import csv
import copy
sensor = {}
with open("./static/data/SensorDeployment.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        sensor[line[0]] = {'floor': line[1], 'x':line[2], 'y':line[3], 'simple_sid':line[4],'label':line[5]}
print (sensor)
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
cnt = 0
d_obj = {}
d_obj['x'] = -1
d_obj['y'] = -1
d_obj['floor'] = 1
d_obj['sensor_simple_id'] = 0

for i in range(0,len(data_day)):
    id = data_day[i]['id']
    sid = data_day[i]['sid']
    time = data_day[i]['time']
    obj = {}
    obj['x'] = int(sensor[sid]['x'])
    obj['y'] = int(sensor[sid]['y'])
    obj['floor'] = int(sensor[sid]['floor'])
    obj['sensor_simple_id'] = int(sensor[sid]['simple_sid'])
    obj['time'] = int(time)
    obj['id'] = int(id)
    if id in people_map.keys():
        people[people_map[id]].append(obj)
    else:
        people_map[id] = cnt
        cnt+=1
        people.append([])
        d_obj['id'] = int(id)
        d_obj['time'] = int(time)
        people[people_map[id]].append(copy.deepcopy(d_obj))
        people[people_map[id]].append(obj)
dd_obj = copy.deepcopy(d_obj)
dd_obj['time'] = 1000000
for x in people:
    dd_obj['id'] = x[0]['id']
    x.append(dd_obj)

fw = open("./static/data/people_day3.js",'w')
fw.write('var people_day3 = '+str(people))