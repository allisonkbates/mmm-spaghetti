const w = 1000;
const h = 1000;

const svg2 = d3.select("body")
               .append('svg')
               .attr('width', w)
               .attr('height', h);

d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json").then(function(data) {
  svg2.selectAll('rect')
      .data(data.data)
      .enter()
      .append('rect')
      .attr("x", (d, i) => i * 3)
      .attr("y", (d, i) => h - d[1]/20)
      .attr("width", 2)
      .attr("height", (d, i) => d[1]/20)
      .attr('class', 'bar');
});
