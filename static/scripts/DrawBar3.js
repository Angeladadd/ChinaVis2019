// console.log(D3permin);
groups = [];
groupData = [];
time = [];
for(var i in Object.keys(D3permin)){
    groups.push(Object.keys(D3permin)[i]);
    groupData.push(D3permin[Object.keys(D3permin)[i]]);
    
}
for(var j=0; j<groupData[0].length; j++){
    time.push(j);
}
// console.log(time);
// console.log(groups);
// console.log(groupData);

var dom = document.getElementById("containerlyx13");
var myChart = echarts.init(dom, 'dark');
var app = {};
option = null;
app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        itemWidth: 14,
        itemHeight: 7,
        itemGap: 0,
        textStyle: {
            fontSize: 9,
            color: '#777777'
        },
    	data: groups
    },
    grid: {
        top: '24%',
        left: '3%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    yAxis:  {
        type: 'value',
        axisLabel: {
            color: 'white'
        },
        axisLine: {
            lineStyle:{
                color: 'white'
            }
        }
    },
    xAxis: {
        type: 'category',
        data: time,
        axisLabel: {
            color: 'white'
        },
        axisLine: {
            lineStyle:{
                color: 'white'
            }
        }
    },
    series: [
        {
            name: groups[0],
            type: 'bar',
            stack: '总量',
            data: groupData[0]
        },
        {
            name: groups[1],
            type: 'bar',
            stack: '总量',
            data: groupData[1]
        },
        {
            name: groups[2],
            type: 'bar',
            stack: '总量',
            data: groupData[2]
        },
        {
            name: groups[3],
            type: 'bar',
            stack: '总量',
            data: groupData[3]
        },
        {
            name: groups[4],
            type: 'bar',
            stack: '总量',
            data: groupData[4]
        },
        {
            name: groups[5],
            type: 'bar',
            stack: '总量',
            data: groupData[5]
        },
        {
            name: groups[6],
            type: 'bar',
            stack: '总量',
            data: groupData[6]
        },
        {
            name: groups[7],
            type: 'bar',
            stack: '总量',
            data: groupData[7]
        },
        {
            name: groups[8],
            type: 'bar',
            stack: '总量',
            data: groupData[8]
        },
        {
            name: groups[9],
            type: 'bar',
            stack: '总量',
            data: groupData[9]
        },
        {
            name: groups[10],
            type: 'bar',
            stack: '总量',
            data: groupData[10]
        },
        {
            name: groups[11],
            type: 'bar',
            stack: '总量',
            data: groupData[11]
        },
        {
            name: groups[12],
            type: 'bar',
            stack: '总量',
            data: groupData[12]
        },
        {
            name: groups[13],
            type: 'bar',
            stack: '总量',
            data: groupData[13]
        },
        {
            name: groups[14],
            type: 'bar',
            stack: '总量',
            data: groupData[14]
        },
        {
            name: groups[15],
            type: 'bar',
            stack: '总量',
            data: groupData[15]
        },
        {
            name: groups[16],
            type: 'bar',
            stack: '总量',
            data: groupData[16]
        },
        {
            name: groups[17],
            type: 'bar',
            stack: '总量',
            data: groupData[17]
        },
        {
            name: groups[18],
            type: 'bar',
            stack: '总量',
            data: groupData[18]
        },
        {
            name: groups[19],
            type: 'bar',
            stack: '总量',
            data: groupData[19]
        },
        {
            name: groups[20],
            type: 'bar',
            stack: '总量',
            data: groupData[20]
        },
        {
            name: groups[21],
            type: 'bar',
            stack: '总量',
            data: groupData[21]
        },
        {
            name: groups[22],
            type: 'bar',
            stack: '总量',
            data: groupData[22]
        },
        {
            name: groups[23],
            type: 'bar',
            stack: '总量',
            data: groupData[23]
        },
        {
            name: groups[24],
            type: 'bar',
            stack: '总量',
            data: groupData[24]
        },
        {
            name: groups[25],
            type: 'bar',
            stack: '总量',
            data: groupData[25]
        },
        {
            name: groups[26],
            type: 'bar',
            stack: '总量',
            data: groupData[26]
        },
        {
            name: groups[27],
            type: 'bar',
            stack: '总量',
            data: groupData[27]
        },
        {
            name: groups[28],
            type: 'bar',
            stack: '总量',
            data: groupData[28]
        },
        {
            name: groups[29],
            type: 'bar',
            stack: '总量',
            data: groupData[29]
        },
        {
            name: groups[30],
            type: 'bar',
            stack: '总量',
            data: groupData[30]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}