

//https://bl.ocks.org/d3noob/0e276dc70bb9184727ee47d6dd06e915

d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json").then(function(data) {
  var fullData = data.data;
  var parseTime = d3.timeParse("%d-%b-%y");
  fullData.forEach(function(d) {
    date = parseTime(d[0]);
  });
  console.log(date);  

  const w = 1000;
  const h = 1000;
  const padding = 60;
  const svg = d3.select("body")
               .append('svg')
               .attr('width', w)
               .attr('height', h);

  svg.selectAll('rect')
     .data(data.data)
     .enter()
     .append('rect')
     .attr("x", (d, i) => i * 3 + padding)
     .attr("y", (d, i) => h - d[1]/20 - padding)
     .attr("width", 6)
     .attr("height", (d, i) => d[1]/20)
     .attr('class', 'bar');

console.log(data.data);
});
/*

    
  const xAxis = d3.axisBottom(xScale);

  svg.append("g")
     .attr("transform", "translate(0, " + (h - padding) + ")")
     .call(xAxis);  

       const xScale = d3.scaleLinear()
  .domain([0, d3.max(data, (d, i) => i * 3)])
  .range([padding, w - padding*2]); 
*/
