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

@app.route('/', methods=['GET', 'POST'])
def select():
    return render_template('index.html', number_time_day1=number_time_day1, number_time_day2=number_time_day2, number_time_day3=number_time_day3,
                           sensor=sensor[1:], data_day1=data_day1[1:],data_day2=data_day2[1:],data_day3=data_day3[1:])


if __name__ == '__main__':
    app.run(debug=True)
