from flask import Flask, render_template, request, jsonify
import csv

app = Flask(__name__)

i = 0
sensor = []
with open("./static/data/SensorDeployment.csv", "r") as file:
    csvfile = csv.reader(file)
    for line in csvfile:
        sensor.append({'sid': line[0], 'floor': line[1], 'x':line[2], 'y':line[3], 'simple_sid':line[4],'label':line[5]})
        i += 1

@app.route('/', methods=['GET', 'POST'])
def select():
    return render_template('index.html', sensor=sensor[1:])


if __name__ == '__main__':
    app.run(debug=True)
