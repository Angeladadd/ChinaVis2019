function DrawProportion() {
    var obj = {};
    obj.flag = false;
    var margin = {top: 15, right: 5, bottom: 5, left: 5},
        width = 250 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
    var svg = d3.select("#proportion")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    var classes = ['scholar','waiter','assistant','visitor','attendee','reporter','business','cook'];
    var day_number = ['All','1&2','1&3','2&3','1','2','3'];

    // var region_people = new Array(11);
    // for (var i = 0; i < 11; i++) {
    //     region_people[i] = {};
    //     region_people[i].region = region[i];
    //     region_people[i].people = 1;
    // }
    var radius = Math.min(width-10, height-10) / 2,
    g = svg.append("g")//.attr("transform", "translate(" + (width / 2 ).toString() + "," + (height/2+10) + ")");
    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.people; });
    var color = d3.scaleOrdinal()
        .domain(day_number)
        .range(["#FDD8D3",
            "#FF6F5F",
        "#FF9D75",
        "#FFE39F",
        "#A7D2D6",
        "#FFF9E9",
        "#FF9E92"]);

    // d3.select("#idx_proportion")
    //     .attr("transform", "translate(0,5)")
    //     .attr("width",20)
    //     .attr("height",200)
    //     .selectAll("rect")
    //     .data(day_number)
    //     .enter()
    //     .append("rect")
    //     .attr("y",function (d,i) {
    //         return i*15+10;
    //     })
    //     .attr("width",10)
    //     .attr("height",10)
    //     .attr("fill",function (d) {
    //         return color(d);
    //     });
    // d3.select("#idx_proportion")
    //     .selectAll("text")
    //     .data(day_number)
    //     .enter()
    //     .append("text")
    //     .attr("y",function (d,i) {
    //         return i*15+20;
    //     })
    //     .attr("x",15)
    //     .text(function (d) {
    //         return d;
    //     })
    //     .attr('fill','white')
    //     .style("font-size",12);


    var path = d3.arc()
        .outerRadius(radius*0.8)
        .innerRadius(radius*0.5);
    //
    var path0 = d3.arc()
        .outerRadius(radius*0.9)
        .innerRadius(radius*0.5);
    var label0 = d3.arc()
        .outerRadius(radius*0.9 + 6)
        .innerRadius(radius*0.9 + 6);
    //
    var arc = g.selectAll(".arc")
        .data(pie(people_proportion['visitor']))
        .enter().append("g")
        .attr("class", "arc");
    //
    //
        arc.append("path")
            .attr("d", path)
            .attr("fill", function (d) {
                return color(d.data);
            });
    //
        arc.append("text")
            .attr("transform", function (d) {
                var x2 = label0.centroid(d)[0];
                var y2 = label0.centroid(d)[1];
                var x3 = x2 < 0 ? x2 - 10: x2 + 5;
                return "translate(" + x3 + "," + y2 + ")";
            })
            .style("font-size","12px")
            .style("opacity",0)
            .text(function (d) {
                return d.data;
            });
    //     obj.arc = arc;
    //     obj.region_people=region_people;
    //     obj.update=function(){
    //         var flag = this.flag;
    //         var local_current_people = current_people;
    //         if(current_people_attr.region != null){
    //             var tmp = current_people_attr.region;
    //             current_people_attr.region = null;
    //             local_current_people = calculate_people();
    //             current_people_attr.region = tmp;
    //         }
    //         //if(people_list.length==0) return;
    //         var obj_arc = this.arc;
    //         var new_region_people = this.region_people;
    //         for(var i=0;i<11;i++) new_region_people[i].people=0;
    //         for(var i=0;i<local_current_people.length;i++){
    //             for(var j=0;j<11;j++){
    //                 if(local_current_people[i].region == new_region_people[j].region){
    //                     new_region_people[j].people++;
    //                 }
    //             }
    //         }
    //         obj_arc.data(pie(new_region_people));
    //         obj_arc.select("path")
    //         .attr("d", path)
    //         .attr("fill", function (d) {
    //             return color(d.data.region);
    //         });
    //         obj_arc.select("text")
    //             .attr("transform", function (d) {
    //             var x2 = label0.centroid(d)[0];
    //             var y2 = label0.centroid(d)[1];
    //             var x3 = x2 < 0 ? x2 - 10 : x2 + 5;
    //             return "translate(" + x3 + "," + y2 + ")";
    //         })
    //             .text(function (d) {
    //                 if(d.data.region == current_people_attr.region){
    //                     d3.select(this).select("path")
    //                         .attr("d", path0);
    //                     d3.select(this).select("text")
    //                         .style("opacity",1);
    //                     flag = true;
    //                 }
    //             return d.data.region;
    //             });
    //         obj_arc.on("mouseover",function(d,i) {
    //             if(flag == true) return;
    //     d3.select(this).select("path")
    //         .attr("d", path0);
    //     d3.select(this).select("text")
    //         .style("opacity",1);
    //     current_people_attr.region = d.data.region;
    //     current_people = calculate_people();
    //     if(current_people_attr.province == null) obj_province.update();
    //     if(current_people_attr.age == null) obj_age.update();
    //     if(current_people_attr.background == null) obj_bg.update();
    //     if(current_people_attr.school == null) obj_school.update();
    // });
    //
    //     obj_arc.on("mouseout", function (d, i) {
    //         if(flag == true) return;
    //         d3.select(this).select("path")
    //             .attr("d", path);
    //         d3.select(this).select("text")
    //             .style("opacity",0);
    //         current_people_attr.region = null;
    //         current_people = calculate_people();
    //         if(current_people_attr.province == null) obj_province.update();
    //     if(current_people_attr.age == null) obj_age.update();
    //     if(current_people_attr.background == null) obj_bg.update();
    //     if(current_people_attr.school == null) obj_school.update();
    //     })
    //         .on("click",function (d) {
    //             if(flag == true){
    //                 flag = false;
    //                 current_people_attr.region = null;
    //                 current_people = calculate_people();
    //                 obj_province.update();
    //                 obj_age.update();
    //                 obj_bg.update();
    //                 obj_school.update();
    //                 obj_people.update();
    //             }
    //             else {
    //                 flag = true;
    //                 obj_people.update();
    //             }
    //         });
    //
    //
    //     };
    //     return obj;
}