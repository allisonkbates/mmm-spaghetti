const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const h = 100;
const w = 500;
const svg = d3.select('body')
              .append('svg')
              .attr('width', w)
              .attr('height', h)

svg.selectAll('rect')
   .data(dataset)
   .enter()
   .append('rect')
   .attr('x', (d, i) => i * 30)
   .attr("y", (d, i) => d * 3)
   .attr("width", 25)
   .attr("height", 100)
   .attr("class", "bar");

   <!DOCTYPE html>
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js" type="text/javascript"></script>
  <script src="d3BarChart.js" type="text/javascript"></script>
  <script src="d3BarChart.css" type="text/css"></script>
</head>
<body>
  <h1 id="title">U.S. Gross Domestic Product</h1>
</body>
</html>