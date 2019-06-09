var dom = document.getElementById("containerlyx2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    // title : {
    //     text: '男性女性身高体重分布',
    //     subtext: '抽样调查来自: Heinz  2003'
    // },
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
                return params.seriesName + ' <br/>'
                + 'id: ' + params.value[0] + ' <br/>'
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
    legend: {
        data: cate_names,
        left: 'center',
        color: '#555555'
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
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
            name: cate_names[0],
            type:'scatter',
            data: cate_data[cate_names[0]],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                },
                data: [[{
                    name: cate_names[0] + '分布区间',
                    xAxis: 'min',
                    yAxis: 'min'
                }, {
                    xAxis: 'max',
                    yAxis: 'max'
                }]]
            },
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
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