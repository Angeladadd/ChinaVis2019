function DrawWorldCloud(dayx){
   // var myWords = [{word: "Running", size: "10"}, {word: "Surfing", size: "20"}, {word: "Climbing", size: "50"}, {word: "Kiting", size: "30"}, {word: "Sailing", size: "20"}, {word: "Snowboarding", size: "60"} ]

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 350 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#person_distribution").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
var day = new Array(3);

    day[0] = day1_obj.count;
    day[1] = day2_obj.count;
    day[2] = day3_obj.count;

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
        .range([0,45]);

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
        .range([20,45]);

        for(var i=0;i<day[day_param].length;i++){
            myWords[i] = {};
            myWords[i].word = day[day_param][i][0];
            //console.log(myWords)
            myWords[i].size = linear(freq[i]);
        }
        this.layout.words(myWords.map(function(d) { return {text: d.word, size:d.size}; }));
        this.layout.start();
    }
// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here
function draw(words) {
    var old = svg.select('g');
    if(old!=null) old.remove();
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size; })
        .style("fill", "white")
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}
return obj;

}