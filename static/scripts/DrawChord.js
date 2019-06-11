function drawChord(date,currentTime){

    if(date === 2) all_data = D3trans;
	else if (date === 1) all_data = D2trans;
	else all_data = D1trans;
	if(currentTime < 27000) t = 0;
	else t = Math.floor((currentTime - 27000)/600);

    var region = [];
    for(i in D1trans[0]){
        if(i=='0') region.push('passage');
        else region.push(i);
    }
    var m=[];
    // console.log(all_data)
    // console.log("t:"+t)
    // console.log(all_data[t])
    for(j in all_data[t]){
        // console.log(j);
        // console.log(all_data[t][j]);
        var tmp=[];
        for(k in all_data[t][j]){
            // console.log(D1trans[i][j][k]);
            tmp.push(all_data[t][j][k]);
        }
        // console.log(tmp);
         m.push(tmp);
    }

    // console.log(m);
    var matrix = m;
    // console.log(matrix);


    var svg = d3.select('#chord').select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        outerRadius = Math.min(width, height) * 0.5 - 50,
        innerRadius = outerRadius - 40;

    var formatValue = d3.formatPrefix(",.0", 1e3);

    var chord = d3.chord()
        .padAngle(0.05)
        .sortSubgroups(d3.descending);

    var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    var ribbon = d3.ribbon()
        .radius(innerRadius);

    var color = d3.scaleOrdinal()
        .domain(region)
        .range([ "#FFDD89", "#957244", "#F26223", "#D2B48C","#FF6347","#A0522D","#8B4513","#B8860B", "#D2691E","#FFDD89", "#957244", "#F26223", "#D2B48C","#FF6347","#A0522D","#8B4513","#B8860B", "#D2691E","#FFDD89", "#957244", "#F26223", "#D2B48C","#FF6347","#A0522D","#8B4513","#B8860B", "#D2691E","#A0522D","#8B4513","#B8860B", "#D2691E"]);
        // .range(['#99CC99','#99CCCC','#FFFFCC','#CCFFFF','#FFCCCC','#CCCCFF','#FF9966','#FF6666']);

    var g = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .datum(chord(matrix));

    var group = g.append("g")
         .attr("transform", "translate(70,0)")
        .attr("class", "groups")
    .selectAll("g")
    .data(function(chords) { return chords.groups; })
    .enter().append("g");

    group.append("path")
        .style("fill", function(d) { return color(d.index); })
        .style("stroke", function(d) { return d3.rgb(color(d.index)).darker(); })
        .attr("d", arc)

    var groupTick = group.selectAll(".group-tick")
    .data(function(d) { return groupTicks(d, 1e3); })
    .enter().append("g")
        .attr("class", "group-tick")
        .attr("transform", function(d) { return "rotate(" + (d.angle * 180 / Math.PI - 90) + ") translate(" + outerRadius + ",0)"; });

    groupTick.append("line")
        .attr("x2", 6);

    groupTick
    .filter(function(d) { return d.value % 5e3 === 0; })
    .append("text")
        .attr("x", 8)
        .attr("dy", ".35em")
        .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180) translate(0)" : null; })
        .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
        .text(function(d) { return region[d.index]; });

    g.append("g")
        .attr("class", "ribbons")
        .attr("transform", "translate(70,0)")
    .selectAll("path")
    .data(function(chords) { return chords; })
    .enter().append("path")
        .attr("d", ribbon)
        .style("fill", function(d) { return color(d.target.index); })
        .style("stroke", function(d) { return d3.rgb(color(d.target.index)).darker(); })
        .append('title')
        .text(function(d){return 'from '+region[d.source.index]+' to '+region[d.target.index]+' : '+d.source.value +','+ 'from '+ region[d.target.index]+' to '+region[d.source.index]+' : '+d.target.value;});
    // Returns an array of tick angles and values for a given group and step.
    function groupTicks(d, step) {
    var k = (d.endAngle - d.startAngle) / d.value;
    return d3.range(0, d.value, step).map(function(value) {
        return {value: value, angle: value * k + d.startAngle};
    });
    }

    var color1 = d3.scaleOrdinal()
        .domain(region.slice(0,16))
        .range([ "#FFDD89", "#957244", "#F26223", "#D2B48C","#FF6347","#A0522D","#8B4513","#B8860B", "#D2691E","#FFDD89", "#957244", "#F26223", "#D2B48C","#FF6347","#A0522D","#8B4513"]);
    var color2 = d3.scaleOrdinal()
        .domain(region.slice(16,32))
        .range([ "#B8860B", "#D2691E","#FFDD89", "#957244", "#F26223", "#D2B48C","#FF6347","#A0522D","#8B4513","#B8860B", "#D2691E","#A0522D","#8B4513","#B8860B", "#D2691E"]);
    let legendOrdinal1 = d3.legendColor()
            .shapeRadius(4)
			.shape('circle')
            // .scale(11,3)
            .scale(color1)

            // .attr("r","8px")

		let legend1= svg.append('g')
			.classed('legend-color', true)
			.attr('text-anchor', 'start')
			.attr('transform','translate(20,30)')
			.style('font-size','9px')
            .attr("fill","rgb(255,255,255)")
			.call(legendOrdinal1);
    let legendOrdinal2 = d3.legendColor()
            .shapeRadius(4)
			.shape('circle')
            // .scale(11,3)
            .scale(color2)

            // .attr("r","8px")

		let legend2 = svg.append('g')
			.classed('legend-color', true)
			.attr('text-anchor', 'start')
			.attr('transform','translate(90,30)')
			.style('font-size','9px')
            .attr("fill","rgb(255,255,255)")
			.call(legendOrdinal2);


		let legendSize = d3.legendSize()
			.scale(region)
			.shape('circle')
			.shapePadding(10)
			.labelAlign('end');
}