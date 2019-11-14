// @TODO: YOUR CODE HERE!
//Create Margins
var width = parseInt(d3.select("#scatter").style("width"));

var height = width - width / 3.9;

var margin = 20;

var tPadBot = 40;
var tPadLeft = 60;
var svgWidth = 960;
var svgHeight = 500;

var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr('chart');

var circRadius;
function circRadius() {
    if (width <= 500) {
        circRadius = 5;}
        else {circRadius = 10;}}
circRadius();

var chartGroup = svg.append("g")
    .attr("class",`xaxis`);
var xaxis = d3.select(".xaxis"):

d3.csv("data.csv", function(err, healthdata){
    if(err) throw err;
    healthdata.forEach(function(record){
        record.smokes = +record.smokes;
        record.age = +record.age;
        record.poverty = +record.poverty;
        record.healthcare = +record.healthcare;
        record.obesity = +record.obesity;
    });
    
    console.log(Record)
    
    console.log("x-axis data");
    console.log(d3.min(healthdata, d=>d["poverty"]));
    console.log(d3.max(healthdata, d=>d["poverty"]));
    console.log("y-axis data");
    console.log(d3.min(healthdata, d=>d["healthcare"]));
    console.log(d3.max(healthdata, d=>d["healthcare"]));
    
    console.log(d3.max(healthdata, d=>d["obesity"]));
    console.log(d3.min(healthdata, d=>d["obesity"]));

    var xLinearScale = d3.scaleLinear()
    .domain([d3.min(healthdata, d => d.poverty)-0.5, d3.max(healthdata, d => d.poverty)+0.5, 30])
    .range([0, width]);

    var yLinearScale = d3.scaleLinear().domain([d3.min(healthdata, d => d.healthcare)-1, d3.max(healthdata, d => d.healthcare)+1.1])
    .range([height, 0]);

    var xAxis = d3.axisBottom(xLinearScale);
    var yAxis = d3.axisLeft(yLinearScale);

    var xAxis = chartGroup.append("g")
    .classed("x-axis", true)
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

    // creating y axis
    
    chartGroup.append("g")
    .call(yAxis);

    var gdots =  chartGroup.selectAll("g.dot")
        .data(censusRecord)
        .enter()
        .append('g');
// Circles
var circles = chart.selectAll("circle").data(healthdata).enter();
  
var c=circles
  .append("circle")  
  .classed("stateCircle", true)
  .attr("cx", d => xLinearScale(d.poverty))
  .attr("cy", d => yLinearScale(d.healthcare))
  .attr("red", "15")
  .attr("opacity", ".5");
   

circles.append("text").text(d=>d.abbr)
    .classed("stateText", true)
    .attr("x", d => xLinearScale(d.poverty)-4)
    .attr("y", d => yLinearScale(d.healthcare)+2)
    .style("font-size","10px")
    .classed("fill-text", true);

// Hover rules
circles.append("circle")
    .on("mouseover", function(d) {
      toolTip.show(d, this);
      d3.select(this).style("stroke", "blue");
    })
    .on("mouseout", function(d) {
      toolTip.hide(d);
      d3.select(this).style("stroke", "teal");
    });
$(selector).hover(inFunction,outFunction) {
    toolTip.show(d, this);
  })

//Labels
chartGroup.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 20)
.attr("x", 0)
.attr("dy", "1em")
.attr("class", "axisText")
.text("Healthcare");

chartGroup.append("text")
.attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
.attr("class", "axisText")
.text("Poverty");
    
});
