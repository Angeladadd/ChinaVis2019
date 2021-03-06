sensor_people_log = new Array(0);
function drawMainActive(day_index, initial_time){
    //处理参数
    var day = parseInt(day_index);
   // console.log(day);
   // console.log(people[day]);
    var sensor = sensor_deployment;
    for(var i=0;i<sensor.length;i++){
           sensor_people_log[i] = new Array(0);
    }
            //布局
            //给的地图太智障了，我强行把x换成了y
            let margin = {top: 5, right: 5, bottom: 5, left: 5},
                width = 320 - margin.left - margin.right,
                height = 850 - margin.top - margin.bottom
                ,bias = height/3*2+35;
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
            // var label_color = {'attendee':'#000000','manager':'#FF0000','reporter':'#00FF00','guest':'#999900','ordinary worker':'#990099'};
            var label_color = {'scholar':'#ff0000','waiter':"#00ff00",'assistant':"#ff00ff",'reporter':'#0000ff','attendee':'#000000','visitor':'#ffff00','business':'#00ffff','cook':'#33ff66'};




    var old = svg.select('text'); if(old) old.remove();
    var old = svg.select('.people_poe'); if(old) old.remove();
    var Tooltip = svg.append("text")
            .style("opacity", 0)
            .style("font-size",14)
            .attr("class", "tooltip");

            var obj = {};
            obj.svg = svg;
            obj.people = people[day];
            console.log(day);
            obj.point = new Array(people[day].length);
            obj.sensor = sensor_deployment;
            obj.sensor_people_log = new Array(sensor.length);
            obj.Tooltip = Tooltip;

            for(var i=0;i<people[day].length;i++){
                obj.point[i] = 0;
                while(people[day][i][obj.point[i]].time<initial_time && obj.point[i]+1<people[day][i].length && people[day][i][obj.point[i]+1].time<initial_time){
                        obj.point[i] +=1;
                }
                //console.log(obj.point[i]);
            }
            for(var i=0;i<sensor.length;i++){
                sensor_people[i] = 0;
            }
            for(var i=0;i<people[day].length;i++){
                if(obj.point[i]==0) continue;
                var sid = people[day][i][obj.point[i]].sensor_simple_id;
                sensor_people[sid]+=1;
                sensor_people_log[sid].push(people[day][i][0].id);
            }
            //console.log(sensor_people.toString());


            svg.selectAll(".sensor")
                .data(sensor)
                .enter()
                .append("rect")
                .attr("class","sensor")
                .attr("id", function (d,i) {
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
                    //console.log("here");
                    return compute[color_label[sensor[i].label]](color_linear(sensor_people[i]));
                })
                .style("opacity",0.5)
                .on("mouseover",function (d,i) {

                                var people_dep = {'scholar':0,'attendee':0,'reporter':0,'business':0,'visitor':0,'cook':0,'assistant':0,'waiter':0};
                                for(var j=0;j<sensor_people_log[i].length;j++){
                                    people_dep[day_obj.map[sensor_people_log[i][j]]] += 1;
                                }
                                var people_list = new Array(0);
                                for (var x in people_dep){
                                    var tmp_obj = new Array(0);
                                    tmp_obj[0] = x;
                                    tmp_obj[1]= people_dep[x];
                                    if(tmp_obj[1]==0) continue;
                                    people_list.push(tmp_obj);
                                }
                                world_cloud.update_by_day(people_list);
                                // Tooltip
                                //     .style("opacity", 1)
                                //     .text(function () {
                                //         var str = "";
                                //         for(var j=0;j<people_list.length;j++){
                                //             str += people_list[j].text+":"+people_list[j].data+"人";
                                //         }
                                //         return str;
                                //     })
                                //     .attr("x", (d3.mouse(this)[0]+20) + "px")
                                //     .attr("y", (d3.mouse(this)[1]) + "px")
                                //     .call(wrap, 60);

                            })
                .on("mouseout",function (d,i) {
                                // Tooltip.style("opacity",0);
                    world_cloud.update_by_day(dayw[day]);
                            });
            var old = svg.select('#people_layer');
            if(old != null) old.remove();
            svg.append('g').attr('id',"people_layer")
                .selectAll(".position")
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
                    var label = day_obj[id];
                    return label_color[label];
                })
                .style("opacity",function (d,i) {
                    if(label_choose == 'all') return 1;
                    var id = d[0].id;
                    var label = day_obj.map[id];
                    if(label == label_choose) return 1;
                    else return 0;
                });

            // for(var i=0;i<sensor_people.length;i++){
            //     console.log(sensor_people[i]);
            // }
            obj.update = function(currentTime){
                var Tooltip = obj.Tooltip;

               // console.log(this.people);
                for(var i=0;i<this.people.length;i++){
                    if(!this.people[i][this.point[i]+1]) continue;
                    if(this.people[i][this.point[i]+1].time == currentTime) {
                        //console.log(i.toString());

                        var new_sensor = this.people[i][this.point[i]+1].sensor_simple_id;
                        //console.log(new_sensor.toString());
                        if(this.point[i]!= 0)
                        {
                            var old_sensor = this.people[i][this.point[i]].sensor_simple_id;
                            sensor_people[old_sensor] -= 1;
                            sensor_people_log[old_sensor].splice(sensor_people_log[old_sensor].indexOf(this.people[i][0].id),1);
                            //d3.select("#sensor"+old_sensor.toString())
                            //.attr("fill", compute[color_label[sensor[old_sensor].label]](color_linear(sensor_people[old_sensor])));
                        }
                        sensor_people[new_sensor] += 1;
                        sensor_people_log[new_sensor].push(this.people[i][0].id);
                        //console.log(this.sensor_people_log[new_sensor].toString());
                        //d3.select("#sensor"+new_sensor.toString())
                           // .attr("fill", compute[color_label[sensor[new_sensor].label]](color_linear(sensor_people[new_sensor])));
                        this.point[i]+=1;
                    }
                }
                //console.log("666");
                var point = this.point;
                // console.log(point);
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
                    .attr("r",2)
                    .attr("fill",function (d,i) {
                        var id = d[0].id;
                        var label = day_obj.map[id];
                        return label_color[label];
                    })
                    .style("opacity",function (d,i) {
                    if(label_choose == 'all') return 1;
                    var id = d[0].id;
                    var label = day_obj.map[id];
                    if(label == label_choose) return 1;
                    else return 0;
                });
                this.svg.selectAll(".sensor")
                    .transition()
                    .duration(100)
                .attr("fill", function (d,i) {
                    //console.log("here");
                    return compute[color_label[sensor[i].label]](color_linear(sensor_people[i]));
                });
            };
            obj.show_route = function (val) {
                if(val == null){
                    var p=svg.select('#path_layer');
                    if(p!=null) p.remove();
                    return;
                }
                function path(d){
                var path = d3.path();
                var x = yLinear(d[1].y);
                var y = xLinear(d[1].x);
                if(d[1].floor == '2')
                    x+=bias;
                path.moveTo(x,y);
                for(var i=2;i<d.length-1;i++){
                    var x = yLinear(d[i].y);
                    var y = xLinear(d[i].x);
                    if(d[i].floor == '2')
                        x+=bias;
                    path.lineTo(x,y);
                }
                return path;
            }
            var p = svg.select("#path_layer");
                if(p!=null) p.remove();
            svg.append('g').attr('id','path_layer').selectAll(".path")
            .data(people[day])
                .enter()
                .append("path")
                .attr("class","path")
                .attr("fill","none")
                .attr("stroke","black")
                .attr("stroke-width",.5)
                .attr("opacity",1)
                .attr("d",function (d,i) {
                    if(day_obj.map[d[0].id]==val)
                        return path(d);
                    else return null;
                });
            };
            return obj;
}
function route_change_day(day){
    route = drawMainActive(day,currentTime);
}
function wrap(text, width) {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.4, // ems
            y = text.attr("y"),
            x = text.attr("x"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
        }
    });
}
