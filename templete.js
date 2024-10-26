// Load the data
const iris = d3.csv("iris.csv");

// Once the data is loaded, proceed with plotting
iris.then(function(data) {
    // Convert string values to numbers
    data.forEach(function(d) {
        d.PetalLength = +d.PetalLength;
        d.PetalWidth = +d.PetalWidth;
    });

    // Define the dimensions and margins for the SVG
    let
        width = 600,
        height = 400;
    
    let margin = {
        top: 30,
        bottom: 50,
        left: 50,
        right: 30
    }

    // Create the SVG container
    let svg = d3.select('body')
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .style('background', '#lightyellow');
    
    // Set up scales for x and y axes
    // d3.min(data, d => d.bill_length_mm)-5
    const xScale = d3.scaleLinear()
                     .range([margin.left, width - margin.right])
                     .domain([d3.min(data, d => d.PetalWidth), d3.max(data, d => d.PetalWidth)])
                     .padding(0.5);

    const yScale = d3.scaleLinear()
                     .domain([d3.min(data, d => d.PetalWidth), d3.max(data, d => d.PetalWidth)])
                     .range([height - margin.bottom, margin.top]);

    const colorScale = d3.scaleOrdinal()
                         .domain(data.map(d => d.Species))
                         .range(d3.schemeCategory10);

    // Add scales     
    let xAxis = svg.append('g')
                   .call(d3.axisBottom().scale(xScale))
                   .attr('transform', `translate(0, ${height - margin.bottom})`)

    let yAxis = svg.append('g')
                .call(d3.axisLeft().scale(yScale))
                .attr('transform', `translate(${margin.left}, 0)`)

    // Add circles for each data point
    scatter = svg.selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .attr('cx', d => xScale(d.petalLength))
                .attr('cy', yScale(d.petalWidth))
                .attr('r', 5)
                .attr('fill', d => colorScale(d.Species));

    // Add x-axis label
    svg.append('text')
    .attr('x', width / 2)
    .attr('y', height - 15)
    .text('Petal Length (in cm)')
    .style('text-anchor', 'middle')

    // Add y-axis label
    svg.append('text')
       .attr('x', 0 - height / 2)
       .attr('y', 25)
       .text('Petal Width (in cm)')
       .attr('text-anchor', 'middle')
       .attr('transform', 'rotate(-90)')

    // Add legend
    const legend = svg.selectAll(".legend")
        .data(colorScale.domain())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => "translate(0," + i * 20 + ")");
});

iris.then(function(data) {
    // Convert string values to numbers
    

    // Define the dimensions and margins for the SVG
    

    // Create the SVG container
    

    // Set up scales for x and y axes
    

    // Add scales     
    

    // Add x-axis label
    

    // Add y-axis label
    

    const rollupFunction = function(groupData) {
        const values = groupData.map(d => d.PetalLength).sort(d3.ascending);
        const q1 = d3.quantile(values, 0.25);
        return { q1};
    };

    const quartilesBySpecies = d3.rollup(data, rollupFunction, d => d.Species);

    quartilesBySpecies.forEach((quartiles, Species) => {
        const x = xScale(Species);
        const boxWidth = xScale.bandwidth();

        // Draw vertical lines
        
        // Draw box
        
        // Draw median line
        
        
    });
});