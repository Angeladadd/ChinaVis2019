from flask import Flask, render_template, request, jsonify
import csv

app = Flask(__name__)

data_day1 = []
with open("./static/data/day1.csv", "r") as file:
    csvfile = csv.reader(file)
    i = 0
    for line in csvfile:
        if i != 0:
            data_day1.append({'id': line[0], 'sid': line[1], 'time': line[2]})
        i += 1

data_day2 = []
with open("./static/data/day1.csv", "r") as file:
    csvfile = csv.reader(file)
    i = 0
    for line in csvfile:
        if i != 0:
            data_day2.append({'id': line[0], 'sid': line[1], 'time': line[2]})
        i += 1

data_day3 = []
with open("./static/data/day1.csv", "r") as file:
    csvfile = csv.reader(file)
    i = 0
    for line in csvfile:
        if i != 0:
            data_day3.append({'id': line[0], 'sid': line[1], 'time': line[2]})
        i += 1

number_time_day1 = []
with open("./static/data/number_time_day1.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        number_time_day1.append({'time': line[0], 'proportion': line[1]})

number_time_day2 = []
with open("./static/data/number_time_day2.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        number_time_day2.append({'time': line[0], 'proportion': line[1]})

number_time_day3 = []
with open("./static/data/number_time_day3.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        number_time_day3.append({'time': line[0], 'proportion': line[1]})

#
# @app.route('/', methods=['GET', 'POST'])
# def select():
#     return render_template('index.html', number_time_day1=number_time_day1, number_time_day2=number_time_day2, number_time_day3=number_time_day3,
#                            sensor=sensor[1:], data_day1=data_day1[1:],data_day2=data_day2[1:],data_day3=data_day3[1:])


day = 1
time = 25240


def read_time_sensor_number(phase):
    global find_begin
    global find_end
    with open('./static/data/time_sensor_number_day%s_%s.csv' % (day, phase), 'r') as csvfile:
        time__sensor_number_csv = csv.reader(csvfile)
        sub_sensor_number = {}
        i = 0
        for line in time__sensor_number_csv:
            if i != 0:
                if str(line[0]) == str(time):
                    print(str(line[0]) + " " + str(time))
                    find_begin = True
                    sub_sensor_number[line[1]] = line[2]
                if find_begin and (str(line[0]) != str(time)):
                    find_end = True
                    break
            i += 1
    return sub_sensor_number, find_end


@app.route('/getSensorNumber', methods=['GET', 'POST'])
def getSensorNumber():
    global day
    global time
    global find_begin
    global find_end
    if request.method == "POST":
        day = request.form.get('day')
        time = request.form.get('time')
    else:
        day = request.args.get('day')
        time = request.args.get('time')
    find_begin = False
    find_end = False
    sensor_number = {}
    phases = [4, 4, 2]
    for phase in range(1, phases[day - 1]):
        if not find_end:
            print(phase)
            sub_sensor_number, find_end = read_time_sensor_number(phase=phase)
            sensor_number.update(sub_sensor_number)
    # print(sensor_number)
    return jsonify({'sensor_number': sensor_number})


@app.route('/getPeoplePlacement', methods=['GET', 'POST'])
def getPeoplePlacement():
    global day
    global time
    if request.method == "POST":
        day = request.form.get('day')
        time = request.form.get('time')
    else:
        day = request.args.get('day')
        time = request.args.get('time')
    with open("./static/data/SensorDeployment.csv", "r") as csvfile:
        csv_read = csv.reader(csvfile)
        sensors_placement = {}
        i = 0
        for line in csv_read:
            if i != 0:
                sensors_placement[line[0]] = {'floor': line[1], 'x': line[2], 'y': line[3]}
            i += 1

    if day == 1:
        data = data_day1
    elif day == 2:
        data = data_day2
    else:
        data = data_day3

    people_placement = {}
    for item in data:
        if int(item['time']) <= time:
            people_placement[item['id']] = sensors_placement[item['sid']]
    print(people_placement)

    return jsonify({"people_placement": people_placement})


if __name__ == '__main__':
    app.run(debug=True)
