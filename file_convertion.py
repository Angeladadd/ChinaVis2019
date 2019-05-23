import csv

# app = Flask(__name__)

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

# CDF for day1
last_time = data_day1[0]['time']
set_id = [data_day1[0]['id']]
number_time_day1 = [last_time, float(len(set_id) / 3564)]
for line in data_day1:
    if line[head_day[0]] not in set_id:
        set_id.append(line[head_day[0]])
    datum = [line[head_day[2]], float(len(set_id) / 3564)]
    if line[head_day[2]] == last_time:
        del number_time_day1[-1]
        number_time_day1.append(datum)
    else:
        last_time = line[head_day[2]]
        datum[0] = last_time
        number_time_day1.append(datum)
number_time_day1.append([last_time, float(0)])

with open("./static/data/number_time_day1.csv", "w", newline="") as csvfile:
    csv_write = csv.writer(csvfile)
    for line in number_time_day1:
        csv_write.writerow([line[0], line[1]])

# CDF for day2
last_time = data_day2[0]['time']
set_id = [data_day2[0]['id']]
number_time_day2 = [last_time, float(len(set_id) / 4434)]
for line in data_day2:
    if line[head_day[0]] not in set_id:
        set_id.append(line[head_day[0]])
    datum = [line[head_day[2]], float(len(set_id) / 4434)]
    if line[head_day[2]] == last_time:
        del number_time_day2[-1]
        number_time_day2.append(datum)
    else:
        last_time = line[head_day[2]]
        datum[0] = last_time
        number_time_day2.append(datum)
number_time_day2.append([last_time, float(0)])

with open("./static/data/number_time_day2.csv", "w", newline="") as csvfile:
    csv_write = csv.writer(csvfile)
    for line in number_time_day2:
        csv_write.writerow([line[0], line[1]])

# CDF for day3
last_time = data_day3[0]['time']
set_id = [data_day3[0]['id']]
number_time_day3 = [last_time, float(len(set_id) / 2930)]
for line in data_day3:
    if line[head_day[0]] not in set_id:
        set_id.append(line[head_day[0]])
    datum = [line[head_day[2]], float(len(set_id) / 2930)]
    if line[head_day[2]] == last_time:
        del number_time_day3[-1]
        number_time_day3.append(datum)
    else:
        last_time = line[head_day[2]]
        datum[0] = last_time
        number_time_day3.append(datum)
number_time_day3.append([last_time, float(0)])

with open("./static/data/number_time_day3.csv", "w", newline="") as csvfile:
    csv_write = csv.writer(csvfile)
    for line in number_time_day3:
        csv_write.writerow([line[0], line[1]])
