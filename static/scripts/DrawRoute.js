function drawMainActive(day_index){
    //处理参数
    var day = 0;
    switch(day_index) {
        case 1:
            day = 0;
            break;
        case 2:
            day = 1;
            break;
        case 3:
            day = 2;
                    break;
            }
            var sensor = sensor_all_floor;
            //布局
            //给的地图太智障了，我强行把x换成了y
            let margin = {top: 5, right: 5, bottom: 5, left: 5},
                width = 320 - margin.left - margin.right,
                height = 850 - margin.top - margin.bottom
                ,bias = height/3*2+20;
            let svg = d3.select("#day_route")
                .attr("height", width + margin.left + margin.right)
                .attr("width", height + margin.top + margin.bottom);
            let xLinear = d3.scaleLinear()
                .domain([BASIC_DATA.sensor.x_min, BASIC_DATA.sensor.x_max])
                .range([10,width]);
            let yLinear = d3.scaleLinear()
                .domain([BASIC_DATA.sensor.y_min,BASIC_DATA.sensor.y_max])
                .range([10,height/3*2]);
            var sensor_people = new Array(0);
            var sensor_width= 15;
            //var color1=d3.rgb(255,220,220);
            //var color2=d3.rgb(255,50,50);
            //var compute=d3.interpolate(color1,color2);
            var color_linear=d3.scaleLinear()
            .domain([0, BASIC_DATA.people_MAX])
            .range([0,1]);
            var color_label = {'0':0,'exit4':1,'exit1':1,'exit2':1,'exit3':1,
                'staircase1':2,'staircase2':2,'staircase3':2,'staircase4':2,
                'A':3,'B':3, 'C':3, 'exhibition':4, 'poster':5,
                'restroom1':6,'restroom2':6,'restroom3':6,
                'room1':7,'room2':7,'room3':7,'room4':7,'room5':7,'room6':7,
                'main':8,'register':9,
                'entry1':10,'entry2':10,'entry3':10,'entry4':10,
                'service':11,'dinner':12,'leisure':13};
            var color_pair=new Array(14);
            //color_pair[0] = {c1:d3.rgb(220,220,220),c2:d3.rgb(80,80,80)};
            var compute= new Array(14);
            var color1 = new Array(14);
            compute[0] = d3.interpolate(d3.rgb(200,200,200),d3.rgb(80,80,80));
            color1[0] = d3.rgb(200,200,200);
            for(var i =1;i<14;i++){
                var r =Math.floor(180+Math.random()*75),g=Math.floor(180+Math.random()*75), b=Math.floor(180+Math.random()*75);
                var color_light = d3.rgb(r,g,b);
                var color_dark = d3.rgb(parseInt(r/3),parseInt(g/3),parseInt(b/3));
                compute[i] = d3.interpolate(color_light,color_dark);
                color1[i] = color_light;
            }
            var label_color = {'attendee':	'#000000','conference manager':'#FF0000','reporter':'#00FF00',
            'worker':'#0000FF','guest':'#999900','cleaner':'#990099'};

            svg.selectAll(".sensor")
                .data(sensor)
                .enter()
                .append("rect")
                .attr("class","sensor")
                .attr("id", function (d,i) {
                    sensor_people[i] = 0;
                    return "sensor"+i.toString();
                })
                .attr("y",function (d) {

                    return xLinear(d.x)-sensor_width/2;
                })
                .attr("x",function (d) {
                    var base = 0;
                    if(d.floor != "1")
                        base += bias;
                    return base+yLinear(d.y)-sensor_width/2;
                })
                .attr("width",sensor_width)
                .attr("height",sensor_width)
                .attr("fill", function (d,i) {
                    return color1[color_label[d.label]];
                })
                .style("opacity",0.5);
            svg.selectAll(".position")
                .data(people[day])
                .enter()
                .append("circle")
                .attr("class","position")
                .attr("cy", function (d,i) {

                        return xLinear(d[0].x);})
                .attr("cx", function (d,i) {
                    var base = 0;
                        if(d[0].floor != "1")
                            base+=bias;
                    return base + yLinear(d[0].y);})
                .attr("r",2)
                .style("fill", function (d,i) {
                    var id = d[0].id;
                    var label = id_label[id];
                    return label_color[label];
                })
                .style("opacity",function (d,i) {
                    if(label_choose == 'all') return 1;
                    var id = d[0].id;
                    var label = id_label[id];
                    if(label == label_choose) return 1;
                    else return 0;
                });

            // function path(d){
            //     var path = d3.path();
            //     var x = yLinear(d[1].y);
            //     var y = xLinear(d[1].x);
            //     if(d[1].floor == '2')
            //         x+=bias;
            //     path.moveTo(x,y);
            //     for(var i=2;i<d.length-1;i++){
            //         var x = yLinear(d[i].y);
            //         var y = xLinear(d[i].x);
            //         if(d[i].floor == '2')
            //             x+=bias;
            //         path.lineTo(x,y);
            //     }
            //     return path;
            // }
            // svg.selectAll(".path")
            // .data(people[day])
            //     .enter()
            //     .append("path")
            //     .attr("class","path")
            //     .attr("fill","none")
            //     .attr("stroke","lightgray")
            //     .attr("stroke-width",.5)
            //     .attr("opacity",1)
            //     .attr("d",path);

            var obj = {};
            obj.svg = svg;
            obj.people = people[day];
            obj.point = new Array(people[day].length);
            obj.sensor = sensor_deployment;
            for(var i=0;i<people[day].length;i++){
                obj.point[i] = 0;
            }
            obj.update = function (currentTime){
                for(var i=0;i<this.people.length;i++){
                    if(!this.people[i][this.point[i]+1]) continue;
                    if(this.people[i][this.point[i]+1].time == currentTime) {
                        var old_sensor = this.people[i][this.point[i]].sensor_simple_id;
                        var new_sensor = this.people[i][this.point[i]+1].sensor_simple_id;
                        if(this.point[i]!= 0) sensor_people[old_sensor] -= 1;
                        sensor_people[new_sensor] += 1;
                        d3.select("#sensor"+old_sensor.toString())
                            .attr("fill", compute[color_label[sensor[old_sensor].label]](color_linear(sensor_people[old_sensor])));
                        d3.select("#sensor"+new_sensor.toString())
                            .attr("fill", compute[color_label[sensor[new_sensor].label]](color_linear(sensor_people[new_sensor])));
                        this.point[i]+=1;
                    }
                }
                var point = this.point;
                this.svg.selectAll(".position")
                    .transition()
                    .duration(100)
                    .attr("cy", function (d,i) {
                        return xLinear(d[point[i]].x);})
                    .attr("cx", function (d,i) {
                        var base = 0;
                        if(d[point[i]].floor != "1")
                            base+=bias;
                        return base + yLinear(d[point[i]].y);})
                    .style("opacity",function (d,i) {
                    if(label_choose == 'all') return 1;
                    var id = d[0].id;
                    var label = id_label[id];
                    if(label == label_choose) return 1;
                    else return 0;
                });
            };
            return obj;
}