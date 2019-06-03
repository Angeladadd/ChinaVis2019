from flask import Flask, render_template
import csv

app = Flask(__name__)

data_day1 = []
with open("./static/data/day1.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        data_day1.append({'id': line[0], 'sid': line[1], 'time':line[2]})

data_day2 = []
with open("./static/data/day1.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        data_day2.append({'id': line[0], 'sid': line[1], 'time':line[2]})

data_day3 = []
with open("./static/data/day1.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        data_day3.append({'id': line[0], 'sid': line[1], 'time':line[2]})


sensor = []
with open("./static/data/SensorDeployment.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        sensor.append({'sid': line[0], 'floor': line[1], 'x':line[2], 'y':line[3], 'simple_sid':line[4]})

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

day = 1
time = 25240


@app.route('/getSensorNumber', methods=['GET', 'POST'])
def select():
    global day
    global time
    if request.method == "POST":
        day = request.form.get('day')
        time = request.form.get('time')
    else:
        day = request.args.get('day')
        time = request.args.get('time')
    day = 1
    time = 25240
    with open('./static/data/time__sensor_number_day%s' % day, 'r') as csvfile:
        time__sensor_number_csv = csv.reader(csvfile)
        sensor_number = {}
        i = 0
        for line in time__sensor_number_csv:
            if i is not 0:
                if str(line[0]) == str(time):
                    sensor_number[line[1]] = line[2]
            i += 1
        print(sensor_number)

    return jsonify({'sensor_number': sensor_number})

if __name__ == '__main__':
    app.run(debug=True)
