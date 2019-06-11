var dom = document.getElementById("containerlyx2");
var myChart = echarts.init(dom, 'dark');
var app = {};
option = null;
option = {
    grid: {
        top: '14%',
        left: '16%',
        right: '15%',
        bottom: '0%',
        containLabel: true
    },
    tooltip : {
        // trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                var maxTime = params.value[1];
                var maxTimeh = parseFloat(maxTime/3600).toFixed(1);

                return params.seriesName + ' <br/>'
                + 'Id: ' + params.value[0] + ' <br/>'
                + 'Max time: ' + maxTimeh + 'h';
            }
            else {
                var maxTime = params.value;
                var maxTimeh = parseFloat(maxTime/3600).toFixed(1);
                return params.name + ' : ' + maxTimeh + 'h';
            }
        },
        // axisPointer:{
        //     show: true,
        //     type : 'cross',
        //     lineStyle: {
        //         type : 'dashed',
        //         width : 1
        //     }
        // }
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
        orient: 'vertical',
        itemWidth: 10,
        itemHeight: 10,
        symbolSize: 2,
        data: cate_names,
        left: '-1%',
        textStyle: {
            fontSize: 10,
            color: '#777777'
        }
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
                    color: '#777777'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            minInterval: 7200,
            axisLabel : {
                formatter: function(params){
                    return parseFloat(params/3600).toFixed(1) + 'h';
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle:{
                    color: '#777777'
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
                }
                // data: [[{
                //     name: cate_names[0] + '分布区间',
                //     xAxis: 'min',
                //     yAxis: 'min'
                // }, {
                //     xAxis: 'max',
                //     yAxis: 'max'
                // }]]
            },
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值', textStyle: {fontSize: 0}}
                    // { xAxis: 160 }
                ]
            }
        },
        {
            symbolSize: 5,
            name: cate_names[1],
            type:'scatter',
            data: cate_data[cate_names[1]],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                }
                // data: [[{
                //     name: cate_names[1] + '分布区间',
                //     xAxis: 'min',
                //     yAxis: 'min'
                // }, {
                //     xAxis: 'max',
                //     yAxis: 'max'
                // }]]
            },
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值', textStyle: {fontSize: 0}}
                    // { xAxis: 160 }
                ]
            }
        },
        {
            symbolSize: 5,
            name: cate_names[2],
            type:'scatter',
            data: cate_data[cate_names[2]],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                }
                // data: [[{
                //     name: cate_names[2] + '分布区间',
                //     xAxis: 'min',
                //     yAxis: 'min'
                // }, {
                //     xAxis: 'max',
                //     yAxis: 'max'
                // }]]
            },
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值', textStyle: {fontSize: 0}}
                    // { xAxis: 160 }
                ]
            }
        },
        {
            symbolSize: 5,
            name: cate_names[3],
            type:'scatter',
            data: cate_data[cate_names[3]],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                }
                // data: [[{
                //     name: cate_names[3] + '分布区间',
                //     xAxis: 'min',
                //     yAxis: 'min'
                // }, {
                //     xAxis: 'max',
                //     yAxis: 'max'
                // }]]
            },
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值', textStyle: {fontSize: 0}}
                    // { xAxis: 160 }
                ]
            }
        },
        {
            symbolSize: 5,
            name: cate_names[4],
            type:'scatter',
            data: cate_data[cate_names[4]],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                }
                // data: [[{
                //     name: cate_names[4] + '分布区间',
                //     xAxis: 'min',
                //     yAxis: 'min'
                // }, {
                //     xAxis: 'max',
                //     yAxis: 'max'
                // }]]
            },
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值', textStyle: {fontSize: 0}}
                    // { xAxis: 160 }
                ]
            }
        },
        {
            symbolSize: 5,
            name: cate_names[5],
            type:'scatter',
            data: cate_data[cate_names[5]],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                }
                // data: [[{
                //     name: cate_names[5] + '分布区间',
                //     xAxis: 'min',
                //     yAxis: 'min'
                // }, {
                //     xAxis: 'max',
                //     yAxis: 'max'
                // }]]
            },
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值', textStyle: {fontSize: 0}}
                    // { xAxis: 160 }
                ]
            }
        },
        {
            symbolSize: 5,
            name: cate_names[6],
            type:'scatter',
            data: cate_data[cate_names[6]],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                }
                // data: [[{
                //     name: cate_names[6] + '分布区间',
                //     xAxis: 'min',
                //     yAxis: 'min'
                // }, {
                //     xAxis: 'max',
                //     yAxis: 'max'
                // }]]
            },
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值', textStyle: {fontSize: 0}}
                    // { xAxis: 160 }
                ]
            }
        },
        {
            symbolSize: 5,
            name: cate_names[7],
            type:'scatter',
            data: cate_data[cate_names[7]],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                }
                // data: [[{
                //     name: cate_names[7] + '分布区间',
                //     xAxis: 'min',
                //     yAxis: 'min'
                // }, {
                //     xAxis: 'max',
                //     yAxis: 'max'
                // }]]
            },
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值', textStyle: {fontSize: 0}}
                    // { xAxis: 160 }
                ]
            }
        },
        {
            symbolSize: 5,
            name: cate_names[8],
            type:'scatter',
            data: cate_data[cate_names[8]],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed'
                    }
                }
                // data: [[{
                //     name: cate_names[8] + '分布区间',
                //     xAxis: 'min',
                //     yAxis: 'min'
                // }, {
                //     xAxis: 'max',
                //     yAxis: 'max'
                // }]]
            },
            // markPoint : {
            //     data : [
            //         {type : 'max', name: '最大值'},
            //         {type : 'min', name: '最小值'}
            //     ]
            // },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }
                },
                data : [
                    {type : 'average', name: '平均值', textStyle: {fontSize: 0}}
                    // { xAxis: 160 }
                ]
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}