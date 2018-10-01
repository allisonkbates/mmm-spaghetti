
//hello world!
d3.select("body")
  .append("span")
  .text("Hello, world!");

//fixed dataset
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const h = 100;
const w = 500;
const svg = d3.select('body')
              .append('svg')
              .attr('width', w)
              .attr('height', h);

svg.selectAll('rect')
   .data(dataset)
   .enter()
   .append('rect')
   .attr('x', (d, i) => i * 30)
   .attr("y", (d, i) => d * 3)
   .attr("width", 25)
   .attr("height", 100)
   .attr('class', 'bar');

//json dataset
const svg2 = d3.select("body")
               .append('svg')
               .attr('width', w + 100)
               .attr('height', h + 100);

d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json").then(function(data) {
  svg2.selectAll('rect')
      .dataset(data.data)
      .enter()
      .append('rect')
      .attr("x", (d, i))
     .append('span')
     .text(data.data);
  console.log(data.data);
});

//console.log(dataset2.data);