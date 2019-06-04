import csv
import numpy as np

with open("./static/data/day1.csv", "r") as file:
    day1_csv = csv.reader(file)
    i = 0
    data_day1 = []
    head_day = []
    for line in day1_csv:
        if i == 0:
            head_day = line
        else:
            datum = {head_day[0]: line[0], head_day[1]: line[1], head_day[2]: line[2]}
            data_day1.append(datum)
        i = i + 1

# print(data_day1)

# with open("./static/data/day2.csv", "r") as file:
#     day2_csv = csv.reader(file)
#     i = 0
#     data_day2 = []
#     head_day = []
#     for line in day2_csv:
#         if i == 0:
#             head_day = line
#         else:
#             datum = {head_day[0]: line[0], head_day[1]: line[1], head_day[2]: line[2]}
#             data_day2.append(datum)
#         i = i + 1
#
# with open("./static/data/day3.csv", "r") as file:
#     day3_csv = csv.reader(file)
#     i = 0
#     data_day3 = []
#     head_day =[]
#     for line in day3_csv:
#         if i == 0:
#             head_day = line
#         else:
#             datum = {head_day[0]: line[0], head_day[1]: line[1], head_day[2]: line[2]}
#             data_day3.append(datum)
#         i = i + 1
#
# # CDF for day1
# last_time = data_day1[0]['time']
# set_id = [data_day1[0]['id']]
# number_time_day1 = [last_time, float(len(set_id) / 3564)]
# for line in data_day1:
#     if line[head_day[0]] not in set_id:
#         set_id.append(line[head_day[0]])
#     datum = [line[head_day[2]], float(len(set_id) / 3564)]
#     if line[head_day[2]] == last_time:
#         del number_time_day1[-1]
#         number_time_day1.append(datum)
#     else:
#         last_time = line[head_day[2]]
#         datum[0] = last_time
#         number_time_day1.append(datum)
# number_time_day1.append([last_time, float(0)])
#
# with open("./static/data/number_time_day1.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     for line in number_time_day1:
#         csv_write.writerow([line[0], line[1]])
#
# # CDF for day2
# last_time = data_day2[0]['time']
# set_id = [data_day2[0]['id']]
# number_time_day2 = [last_time, float(len(set_id) / 4434)]
# for line in data_day2:
#     if line[head_day[0]] not in set_id:
#         set_id.append(line[head_day[0]])
#     datum = [line[head_day[2]], float(len(set_id) / 4434)]
#     if line[head_day[2]] == last_time:
#         del number_time_day2[-1]
#         number_time_day2.append(datum)
#     else:
#         last_time = line[head_day[2]]
#         datum[0] = last_time
#         number_time_day2.append(datum)
# number_time_day2.append([last_time, float(0)])
#
# with open("./static/data/number_time_day2.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     for line in number_time_day2:
#         csv_write.writerow([line[0], line[1]])
#
# # CDF for day3
# last_time = data_day3[0]['time']
# set_id = [data_day3[0]['id']]
# number_time_day3 = [last_time, float(len(set_id) / 2930)]
# for line in data_day3:
#     if line[head_day[0]] not in set_id:
#         set_id.append(line[head_day[0]])
#     datum = [line[head_day[2]], float(len(set_id) / 2930)]
#     if line[head_day[2]] == last_time:
#         del number_time_day3[-1]
#         number_time_day3.append(datum)
#     else:
#         last_time = line[head_day[2]]
#         datum[0] = last_time
#         number_time_day3.append(datum)
# number_time_day3.append([last_time, float(0)])
#
# with open("./static/data/number_time_day3.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     for line in number_time_day3:
#         csv_write.writerow([line[0], line[1]])

with open("./static/data/SensorDeployment.csv", "r") as csvfile:
    sensorDeployment_csv = csv.reader(csvfile)
    sensors = []
    i = 0
    for line in sensorDeployment_csv:
        if i is not 0:
            sensors.append(line[0])
        i += 1

# print(sensors)
print(len(sensors))

sensor_people = {}
for sensor in sensors:
    sensor_people[sensor] = []

time__sensor_people_day1 = {}
for item in data_day1:
    time = item['time']
    # 特定时刻传感器的人数
    for value in sensor_people.values():
        if item['id'] in value:
            value.remove(item['id'])
            break
    sensor_people[item['sid']].append(item['id'])
    # print(sensor_people)
    current_sensor_people = {}
    for k, vs in sensor_people.items():
        current_vs = []
        for v in vs:
            current_vs.append(v)
        current_sensor_people[k] = current_vs
    time__sensor_people_day1[time] = current_sensor_people

# print(time__sensor_people_day1)

# test: 检测每个时刻每个人是否只出现在一个传感器的位置
test = True
for key_time, value_sensor_people in time__sensor_people_day1.items():
    id_times = {}
    for key, value in value_sensor_people.items():
        for id in value:
            if id not in id_times.keys():
                id_times[id] = 1
            else:
                id_times[id] += 1
    for key, value in id_times.items():
        if value is not 1:
            test = False
print(test)

with open("./static/data/time__sensor_number_day1.csv", "w", newline="") as csvfile:
    csv_write = csv.writer(csvfile)
    csv_write.writerow(['time', 'sid', 'number'])

    for time, sensor_people in time__sensor_people_day1.items():
        sensor_number = {}
        for sensor, people in sensor_people.items():
            sensor_number[sensor] = len(people)
            if len(people) > 0:
                print(time + " " + sensor + " " + str(len(people)))
                csv_write.writerow([time, sensor, len(people)])
