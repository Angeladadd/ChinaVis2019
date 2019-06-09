// console.log(people_time);
var dom = document.getElementById("containerlyx2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    //  title : {
    //      text: '最长逗留时间分布',
    //  },
    grid: {
        top: '12%',
        left: '0%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        // trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return 'sid: ' + params.value[0] + ' <br/>'
                + 'max time: ' + params.value[1];
            }
            else {
                return params.name + ' : ' + params.value;
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
            color: 'lightgrey',
                formatter: '{value}'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle:{
                    color: '#555555'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
            color: 'lightgrey',
                formatter: '{value}'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle:{
                    color: '#555555'
                }
            }
        }
    ],
    series : [
        {
            symbolSize: 5,
            type:'scatter',
            data: people_time,
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值'},
                    { xAxis: 160 }
                ]
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}