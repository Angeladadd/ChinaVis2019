function DrawProportion() {
    var obj = {};
    obj.flag = false;
    var margin = {top: 0, right: 0, bottom: 0, left: 0},
        width = 240 - margin.left - margin.right,
        height = 185 - margin.top - margin.bottom;
    var classes = ['scholar','waiter','assistant','visitor','attendee','reporter','business','cook'];
    var day_number = ['全到','1,2天到','1,3天到','2,3天到','只第1天','只第2天','只第3天'];
    var radius = Math.min(width-20, height-30) / 2;
    var color = d3.scaleOrdinal()
        .domain(day_number)
        .range(["#FDD8D3",
            "#FF6F5F",
        "#FF9D75",
        "#FFE39F",
        "#A7D2D6",
        "#FFF9E9",
        "#FF9E92"]);

    d3.select("#proportion").append("g")
        .attr("id","idx_proportion")
        .attr("transform", "translate(0,0)")
        .attr("width",40)
        .attr("height",100)
        .selectAll("rect")
        .data(day_number)
        .enter()
        .append("rect")
        .attr("y",function (d,i) {
            return i*15+10;
        })
        .attr("width",10)
        .attr("height",10)
        .attr("fill",function (d) {
            return color(d);
        });
    d3.select("#idx_proportion")
        .selectAll("text")
        .data(day_number)
        .enter()
        .append("text")
        .attr("y",function (d,i) {
            return i*15+20;
        })
        .attr("x",15)
        .text(function (d) {
            return d;
        })
        .attr('fill','white')
        .style("font-size",12);
    var data = new Array(7);
        for (var i=0;i<7;i++){
            data[day_number[i]] = people_proportion['visitor'][i];
        }
        console.log(data);
    var svg = d3.select("#proportion")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + (width / 2 + 40) + "," + (height / 2+10) + ")");

        var pie = d3.pie()
            .value(function(d) {return d.value; })
            .sort(function(a, b) { return d3.ascending(a.key, b.key);} ); // This make sure that group order remains the same in the pie chart
  var data_ready = pie(d3.entries(data));
  var u = svg.selectAll("path")
    .data(data_ready);
  u
    .enter()
    .append('path')
    .merge(u)
    .transition()
    .duration(1000)
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1);
    u
    .exit()
    .remove();

    obj.u = u;
    obj.update_by_class = function (classes) {
        var p = document.getElementById("hhh");
        p.innerHTML="人员类型："+classes;
        var data = new Array(7);
        for (var i=0;i<7;i++){
            data[day_number[i]] = people_proportion[classes][i];
        }
        var data_ready = pie(d3.entries(data));
         var u = svg.selectAll("path")
    .data(data_ready);
    u.enter()
    .append('path')
    .merge(u)
    .transition()
    .duration(200)
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1);
    u
    .exit()
    .remove();
    };
    return obj;
}
function changeClass(val){
    proportion_obj.update_by_class(val);
    ChangeLabelChoose(val);
}