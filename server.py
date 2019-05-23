from flask import Flask, render_template
import csv

app = Flask(__name__)

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
    return render_template('index.html', number_time_day1=number_time_day1, number_time_day2=number_time_day2, number_time_day3=number_time_day3)


if __name__ == '__main__':
    app.run(debug=True)
