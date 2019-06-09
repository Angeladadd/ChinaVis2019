import csv
import json

# day1 data
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

# day2 data
with open("./static/data/day2.csv", "r") as file:
    day2_csv = csv.reader(file)
    i = 0
    data_day2 = []
    head_day = []
    for line in day2_csv:
        if i == 0:
            head_day = line
        else:
            datum = {head_day[0]: line[0], head_day[1]: line[1], head_day[2]: line[2]}
            data_day2.append(datum)
        i = i + 1

# day3 data
with open("./static/data/day3.csv", "r") as file:
    day3_csv = csv.reader(file)
    i = 0
    data_day3 = []
    head_day =[]
    for line in day3_csv:
        if i == 0:
            head_day = line
        else:
            datum = {head_day[0]: line[0], head_day[1]: line[1], head_day[2]: line[2]}
            data_day3.append(datum)
        i = i + 1

########################################################################
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


#####################################################################
# with open("./static/data/SensorDeployment.csv", "r") as csvfile:
#     sensorDeployment_csv = csv.reader(csvfile)
#     sensors = []
#     i = 0
#     for line in sensorDeployment_csv:
#         if i != 0:
#             sensors.append(line[0])
#         i += 1
#
# print(len(sensors))

# # time_sensor_number for day1
# sensor_people = {}
# for sensor in sensors:
#     sensor_people[sensor] = []
#
# time__sensor_people_day1 = {}
# for item in data_day1:
#     time = item['time']
#     for value in sensor_people.values():
#         if item['id'] in value:
#             value.remove(item['id'])
#             break
#     sensor_people[item['sid']].append(item['id'])
#     current_sensor_people = {}
#     for sensor, people in sensor_people.items():
#         current_sensor_people[sensor] = []
#         current_sensor_people[sensor].extend(people)
#     time__sensor_people_day1[time] = current_sensor_people
#
# # test: 检测每个时刻每个人是否只出现在一个传感器的位置
# test = True
# for key_time, value_sensor_people in time__sensor_people_day1.items():
#     id_times = {}
#     for key, value in value_sensor_people.items():
#         for id in value:
#             if id not in id_times.keys():
#                 id_times[id] = 1
#             else:
#                 id_times[id] += 1
#     for key, value in id_times.items():
#         if value != 1:
#             test = False
# print(test)
#
# time_sensor_number = []
# for time, sensor_people in time__sensor_people_day1.items():
#     for sensor, people in sensor_people.items():
#         if len(people) > 0:
#             time_sensor_number.append([time, sensor, len(people)])
# print(len(time_sensor_number))
# # 6473517
#
# with open("./static/data/time_sensor_number_day1_1.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[:1618379]:
#         csv_write.writerow(line)
#
# with open("./static/data/time_sensor_number_day1_2.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[1618379:3236758]:
#         csv_write.writerow(line)
#
# with open("./static/data/time_sensor_number_day1_3.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[3236758:4855137]:
#         csv_write.writerow(line)
#
# with open("./static/data/time_sensor_number_day1_4.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[4855137:]:
#         csv_write.writerow(line)

# # time_sensor_number for day2
# sensor_people = {}
# for sensor in sensors:
#     sensor_people[sensor] = []
#
# time__sensor_people_day2 = {}
# for item in data_day2:
#     time = item['time']
#     for value in sensor_people.values():
#         if item['id'] in value:
#             value.remove(item['id'])
#             break
#     sensor_people[item['sid']].append(item['id'])
#     current_sensor_people = {}
#     for sensor, people in sensor_people.items():
#         current_sensor_people[sensor] = []
#         current_sensor_people[sensor].extend(people)
#     time__sensor_people_day2[time] = current_sensor_people
#
# # test: 检测每个时刻每个人是否只出现在一个传感器的位置
# test = True
# for key_time, value_sensor_people in time__sensor_people_day2.items():
#     id_times = {}
#     for key, value in value_sensor_people.items():
#         for id in value:
#             if id not in id_times.keys():
#                 id_times[id] = 1
#             else:
#                 id_times[id] += 1
#     for key, value in id_times.items():
#         if value != 1:
#             test = False
# print(test)
#
# time_sensor_number = []
# for time, sensor_people in time__sensor_people_day2.items():
#     for sensor, people in sensor_people.items():
#         if len(people) > 0:
#             time_sensor_number.append([time, sensor, len(people)])
# print(len(time_sensor_number))
# # 6736759
#
# with open("./static/data/time_sensor_number_day2_1.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[:1684189]:
#         csv_write.writerow(line)
#
# with open("./static/data/time_sensor_number_day2_2.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[1684189:3368379]:
#         csv_write.writerow(line)
#
# with open("./static/data/time_sensor_number_day2_3.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[3368379:5052569]:
#         csv_write.writerow(line)
#
# with open("./static/data/time_sensor_number_day2_4.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[5052569:]:
#         csv_write.writerow(line)

# # time_sensor_number for day3
# sensor_people = {}
# for sensor in sensors:
#     sensor_people[sensor] = []
#
# time__sensor_people_day3 = {}
# for item in data_day3:
#     time = item['time']
#     for value in sensor_people.values():
#         if item['id'] in value:
#             value.remove(item['id'])
#             break
#     sensor_people[item['sid']].append(item['id'])
#     current_sensor_people = {}
#     for sensor, people in sensor_people.items():
#         current_sensor_people[sensor] = []
#         current_sensor_people[sensor].extend(people)
#     time__sensor_people_day3[time] = current_sensor_people
#
# # test: 检测每个时刻每个人是否只出现在一个传感器的位置
# test = True
# for key_time, value_sensor_people in time__sensor_people_day3.items():
#     id_times = {}
#     for key, value in value_sensor_people.items():
#         for id in value:
#             if id not in id_times.keys():
#                 id_times[id] = 1
#             else:
#                 id_times[id] += 1
#     for key, value in id_times.items():
#         if value != 1:
#             test = False
# print(test)
#
# time_sensor_number = []
# for time, sensor_people in time__sensor_people_day3.items():
#     for sensor, people in sensor_people.items():
#         if len(people) > 0:
#             time_sensor_number.append([time, sensor, len(people)])
# print(len(time_sensor_number))
# # 2813612
#
# with open("./static/data/time_sensor_number_day3_1.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[:1406806]:
#         csv_write.writerow(line)
#
# with open("./static/data/time_sensor_number_day3_2.csv", "w", newline="") as csvfile:
#     csv_write = csv.writer(csvfile)
#     csv_write.writerow(['time', 'sid', 'number'])
#
#     for line in time_sensor_number[1406806:]:
#         csv_write.writerow(line)

# # 计算每个人逗留传感器的最长时间以及对应的传感器 [id, max_time]
# people_time = {}
# people_start = {}
# for item in data_day1:
#     if item['id'] not in people_start.keys():
#         people_start[item['id']] = int(item['time'])
#         people_time[item['id']] = 0
#     else:
#         if int(item['time']) - people_start[item['id']] > people_time[item['id']]:
#             people_time[item['id']] = int(item['time']) - people_start[item['id']]
#             people_start[item['id']] = int(item['time'])
#         else:
#             people_start[item['id']] = int(item['time'])
#
# for item in data_day2:
#     if item['id'] not in people_start.keys():
#         people_start[item['id']] = int(item['time'])
#         people_time[item['id']] = 0
#     else:
#         if int(item['time']) - people_start[item['id']] > people_time[item['id']]:
#             people_time[item['id']] = int(item['time']) - people_start[item['id']]
#             people_start[item['id']] = int(item['time'])
#         else:
#             people_start[item['id']] = int(item['time'])
#
# for item in data_day3:
#     if item['id'] not in people_start.keys():
#         people_start[item['id']] = int(item['time'])
#         people_time[item['id']] = 0
#     else:
#         if int(item['time']) - people_start[item['id']] > people_time[item['id']]:
#             people_time[item['id']] = int(item['time']) - people_start[item['id']]
#             people_start[item['id']] = int(item['time'])
#         else:
#             people_start[item['id']] = int(item['time'])
#
# people_time_list = []
# for key, value in people_time.items():
#     people_time_list.append([int(key), value])
#
# print(people_time_list)
#
# jsonList = json.dumps(people_time_list)
# with open("./static/data/people_time.json", "w", newline="") as file:
#     json.dump(people_time_list, file)
