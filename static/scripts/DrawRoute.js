function drawMainActive(day_index, floor_index){
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
            var sensor;
            switch (floor_index) {
                case 1:
                    sensor = sensor_floor1;
                    break;
                case 2:
                    sensor = sensor_floor2;
                    break;
            }
            //布局
            //给的地图太智障了，我强行把x换成了y
            let margin = {top: 10, right: 30, bottom: 30, left: 60},
                width = 400 - margin.left - margin.right,
                height = 600 - margin.top - margin.bottom;
            let svg = d3.select("#day_route")
                .attr("height", width + margin.left + margin.right)
                .attr("width", height + margin.top + margin.bottom);
            let xLinear = d3.scaleLinear()
                .domain([BASIC_DATA.sensor.x_min, BASIC_DATA.sensor.x_max])
                .range([10,width]);
            let yLinear = d3.scaleLinear()
                .domain([BASIC_DATA.sensor.y_min,BASIC_DATA.sensor.y_max])
                .range([10,height]);
            var sensor_people = new Array(0);
            var sensor_width= 15;
            var color1=d3.rgb(255,240,240);
            var color2=d3.rgb(255,50,50);
            var compute=d3.interpolate(color1,color2);
            var color_linear=d3.scaleLinear()
            .domain([0, BASIC_DATA.people_MAX])
            .range([0,1]);
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
                    return yLinear(d.y)-sensor_width/2;
                })
                .attr("width",sensor_width)
                .attr("height",sensor_width)
                .attr("fill", color1)
                .style("opacity",0.5);
            svg.selectAll(".position")
                .data(people[day])
                .enter()
                .append("circle")
                .attr("class","position")
                .attr("cy", function (d,i) {
                    //var new_sensor = d[0].sensor_simple_id;
                    //sensor_people[new_sensor] += 1;
                    return xLinear(d[0].x);})
                .attr("cx", function (d,i) {
                    return yLinear(d[0].y);})
                .attr("r",2)
                .style("fill", "blue")
                .style("opacity",function (d,i) {
                    return 1;});

            var obj = {};
            obj.svg = svg;
            obj.people = people[day];
            // var terminal = "terminal";
            // for(var i=0;i<people[day].length;i++){
            //     people[day][i].push(terminal);
            // }
            obj.point = new Array(people[day].length);
            obj.sensor = sensor;
            for(var i=0;i<people[day].length;i++){
                obj.point[i] = 0;
            }
            obj.update = function (currentTime){
                //console.log("!");
                for(var i=0;i<this.people.length;i++){
                    if(!this.people[i][this.point[i]+1]) continue;
                    if(this.people[i][this.point[i]+1].time == currentTime) {
                        var old_sensor = this.people[i][this.point[i]].sensor_simple_id;
                        var new_sensor = this.people[i][this.point[i]+1].sensor_simple_id;
                        if(this.point[i]!= 0) sensor_people[old_sensor] -= 1;
                        sensor_people[new_sensor] += 1;
                        d3.select("#sensor"+old_sensor.toString())
                            .attr("fill", compute(color_linear(sensor_people[old_sensor])));
                        d3.select("#sensor"+new_sensor.toString())
                            .attr("fill", compute(color_linear(sensor_people[new_sensor])));
                        this.point[i]+=1;
                    }
                //     else{
                //         var old_sensor = this.people[i][this.point[i]].sensor_simple_id;
                //         if(this.point[i]!= 0) sensor_people[old_sensor] -= 1;
                //         d3.select("#sensor"+old_sensor.toString())
                //             .attr("fill", compute(color_linear(sensor_people[old_sensor])));
                //         this.point[i]+=1;
                //     }
                }
                var point = this.point;
                this.svg.selectAll(".position")
                    .transition()
                    .duration(100)
                    .attr("cy", function (d,i) {
                        return xLinear(d[point[i]].x);})
                    .attr("cx", function (d,i) {
                        return yLinear(d[point[i]].y);})
                    .attr("r",function (d,i) {
                        // if(d[point[i]]==terminal)
                        //     return 0;
                        // else
                        return 2;
                    })
                    .style("fill", "blue")
                    .style("opacity",function (d,i) {
                        return 1;});
            };
            return obj;
}