//author liuyuxiang
function drawFlow() {
     // set the dimensions and margins of the graph
            var margin = {top: 30, right: 30, bottom: 30, left: 50},
                width = 400 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom;

            // append the svg object to the body of the page
            var svg = d3.select("#liuyuxiang").select("#vis1")
              .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform",
                      "translate(" + margin.left + "," + margin.top + ")");
            var data = data_time_day1;
            // List of groups (here I have one group per column)
            var allGroup = ['day1', 'day2', 'day3'];

            // add the options to the button
            d3.select("#selectButton")
              .selectAll('myOptions')
              .data(allGroup)
              .enter()
              .append('option')
              .text(function (d) { return d; }) // text showed in the menu
              .attr("value", function (d) { return d; }) // corresponding value returned by the button

            // add the x Axis
            var x = d3.scaleLinear()
              .domain([25240, 72091])
              .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            // add the y Axis
            var y = d3.scaleLinear()
                      .domain([0, 1])
                      .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y));
            // Plot the area
            var curve = svg
              .append('g')
              .append("path")
                .attr("class", "mypath")
                .datum(data)
                .attr("fill", "#725D82")
                .attr("opacity", ".8")
                .attr("stroke", "#000")
                .attr("stroke-width", 1)
                .attr("stroke-linejoin", "round")
                .attr("d",  d3.line()
                  .curve(d3.curveBasis)
                    .x(function(d) { return x(+d.time); })
                    .y(function(d) { return y(+d.proportion); })
                )
                .interpolate("cardinal");

              // A function that update the chart when slider is moved?
              function updateChart(selectedGroup) {
                if(selectedGroup == 'day1'){
                  data = data_time_day1;
                }
                if(selectedGroup == 'day2'){
                  data = data_time_day2;
                }
                if(selectedGroup == 'day3'){
                  data = data_time_day3;
                }
                // update the chart
                curve
                  .datum(data)
                  .transition()
                  .duration(1000)
                  .attr("d",  d3.line()
                    .curve(d3.curveBasis)
                      .x(function(d) { return x(+d.time); })
                      .y(function(d) { return y(+d.proportion); })
                  );
              }

              // Listen to the slider?
              d3.select("#selectButton").on("change", function(d){
                selectedGroup = this.value;
                updateChart(selectedGroup)
              })
}