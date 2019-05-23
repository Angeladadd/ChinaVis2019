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
    let margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 600 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;
    let svg = d3.select("#day_route")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    let xLinear = d3.scaleLinear()
        .domain([BASIC_DATA.sensor.x_min, BASIC_DATA.sensor.x_max])
        .range([10,width]);
    let yLinear = d3.scaleLinear()
        .domain([BASIC_DATA.sensor.y_min,BASIC_DATA.sensor.y_max])
        .range([10,height]);
    svg.selectAll(".sensor")
        .data(sensor)
        .enter()
        .append("circle")
        .attr("class","sensor")
        .attr("cx",function (d) {
            return xLinear(d.x);
        })
        .attr("cy",function (d) {
            return yLinear(d.y);
        })
        .attr("r",2)
        .style("fill", "grey");
        svg.selectAll(".position")
            .data(people[day])
            .enter()
            .append("circle")
            .attr("class","position")
            .attr("cx", function (d,i) {
                return xLinear(d[0].x);})
            .attr("cy", function (d,i) {
                return yLinear(d[0].y);})
            .attr("r",4)
            .style("fill", "blue")
            .style("opacity",function (d,i) {
                    return 1;});
    var obj = {};
    obj.svg = svg;
    obj.people = people[day];
    obj.point = new Array(people[day].length);
    for(var i=0;i<people[day].length;i++){
        obj.point[i] = 0;
    }
    obj.update = function (currentTime){
          //console.log("!");
        for(var i=0;i<this.people.length;i++){
            if(!this.people[i][this.point[i]+1]) continue;
            if(this.people[i][this.point[i]+1].time == currentTime)
              this.point[i]+=1;
        }
        var point = this.point;
        this.svg.selectAll(".position")
            .transition()
            .duration(100)
            .attr("cx", function (d,i) {
                return xLinear(d[point[i]].x);})
            .attr("cy", function (d,i) {
                return yLinear(d[point[i]].y);})
            .attr("r",4)
            .style("fill", "blue")
            .style("opacity",function (d,i) {
                return 1;});
        };
    return obj;
}