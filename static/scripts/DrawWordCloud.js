function DrawWorldCloud(dayx){
   // var myWords = [{word: "Running", size: "10"}, {word: "Surfing", size: "20"}, {word: "Climbing", size: "50"}, {word: "Kiting", size: "30"}, {word: "Sailing", size: "20"}, {word: "Snowboarding", size: "60"} ]

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 200 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;


var label_color = {'scholar':'#ff0000','waiter':"#00ff00",'assistant':"#ff00ff",'reporter':'#0000ff','attendee':'#ffffff','visitor':'#ffff00','business':'#00ffff','cook':'#33ff66'};
// append the svg object to the body of the page
var svg = d3.select("#person_distribution").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
var day = new Array(3);

    day[0] = [['scholar',217],['waiter',141],['assistant',43],['reporter',112],['attendee',2688],['visitor',249],['business',139]];
    day[1] = [['scholar',248],['waiter',219],['assistant',47],['reporter',228],['attendee',2789],['visitor',764],['business',132],['cook',32]];
    day[2] = [['scholar',139],['waiter',83],['assistant',45],['reporter',118],['attendee',2273],['visitor',243],['business',51]];

  var myWords = new Array(0);
    var freq = new Array(0);
        for(var i=0;i<day[dayx].length;i++){
            freq[i] = parseInt(day[dayx][i][1]);
            //console.log(freq[i]);
        }
        //var max_freq = Math.max.apply(Math,freq);
        //var min_freq = Math.min.apply(Math,freq);
        var linear = d3.scaleLinear()
        .domain([Math.min.apply(Math,freq),Math.max.apply(Math,freq)])
        .range([10,28]);

        for(var i=0;i<day[dayx].length;i++){
            myWords[i] = {};
            myWords[i].word = day[dayx][i][0];
            //console.log(myWords)
            myWords[i].size = linear(freq[i]);
        }

// Constructs a new cloud layout instance. It run an algorythm to find the position of words that suits your requirements
// Wordcloud features that are different from one word to the other must be here
var layout = d3.layout.cloud()
  .size([width, height])
  .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
  .padding(5)        //space between words
  .rotate(function() { return ~~(Math.random() * 2) * 90; })
  .fontSize(function(d) { return d.size; })      // font size of words
  .on("end", draw);
layout.start();
var obj={};
obj.layout = layout;
obj.update_by_day=function (day_param){
    var myWords = new Array(0);
    var freq = new Array(0);
        for(var i=0;i<day[day_param].length;i++){
            freq[i] = parseInt(day[day_param][i][1]);
            //console.log(freq[i]);
        }
        //var max_freq = Math.max.apply(Math,freq);
        //var min_freq = Math.min.apply(Math,freq);
        var linear = d3.scaleLinear()
        .domain([Math.min.apply(Math,freq),Math.max.apply(Math,freq)])
        .range([14,30]);

        for(var i=0;i<day[day_param].length;i++){
            myWords[i] = {};
            myWords[i].word = day[day_param][i][0];
            //console.log(myWords)
            myWords[i].size = linear(freq[i]);
        }
        this.layout.words(myWords.map(function(d) { return {text: d.word, size:d.size}; }));
        this.layout.start();

    };
var Tooltip = svg.append("text")
            .style("opacity", 0)
            .style("font-size",14)
    .attr("fill","white")
            .attr("class", "tooltip");
// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here
function draw(words) {
    var old = svg.select('g');
    if(old!=null) old.remove();
  svg
    .append("g")
      .attr("transform", "translate(" + (layout.size()[0] / 2+20) + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size; })
        .style("fill", function (d) {
            return label_color[d.text];
        })
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
      .on("mouseover",function(d,i){
          Tooltip
                                    .style("opacity", 1)
                                    .text(day[dayx][i][1])
                                    .attr("x", "2px")
                                    .attr("y", "10px");
      })
      .on("mouseout",function (d,i) {
          Tooltip.style("opacity",0);
      })
        .text(function(d) { return d.text; });
}
return obj;

}