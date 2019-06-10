function drawBubble(date,currentTime){

	if(date == 3) all_data = D3per10min;
	else if (date == 2) all_data = D2per10min;
	else all_data = D1per10min;
	if(currentTime < 27000) t = 0;
	else t = (currentTime - 27000)/6000;
    dat = [];
    for(i in all_data){
        // console.log(i);

        if(i != 0){
        	if(all_data[i][t] != 0){
        		tmp = {cat:i , name: i, value: all_data[i][t],icon: i, desc: ``};
        		dat.push(tmp);
			}
        	// for(j in all_data[i].sidcount){
            // // console.log(j);
			// 	if(j != "0"){
			// 		tmp = {cat:j , name: j, value: all_data[i].sidcount[j],
			// 		icon: j, desc: ``};
			// 		dat.push(tmp);
			// 	}
        	// }
		}
    }
    data = dat;

	let svg = d3.select('#bubble').select('svg');
		let width = +svg.attr('width'); // get width in pixels
		let height = +svg.attr('height');
		let centerX = width * 0.5;
		let centerY = height * 0.5;
		let strength = 0.05;
		let focusedNode;

		let format = d3.format(',d');

		let scaleColor = d3.scaleOrdinal(['#99CC99','#99CCCC','#FFFFCC','#CCFFFF','#FFCCCC','#CCCCFF','#FF9966','#FF6666']);

		// use pack to calculate radius of the circle
		let pack = d3.pack()
			.size([width , height ])
			.padding(1.5);

		let forceCollide = d3.forceCollide(d => d.r + 1);

		// use the force
		let simulation = d3.forceSimulation()
			// .force('link', d3.forceLink().id(d => d.id))
			.force('charge', d3.forceManyBody())
			.force('collide', forceCollide)
			// .force('center', d3.forceCenter(centerX, centerY))
			.force('x', d3.forceX(centerX ).strength(strength))
			.force('y', d3.forceY(centerY ).strength(strength));

		// reduce number of circles on mobile screen due to slow computation
		if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
			data = data.filter(el => {
				return el.value >= 50;
			});
		}

		let root = d3.hierarchy({ children: data })
			.sum(d => d.value);

		// we use pack() to automatically calculate radius conveniently only
		// and get only the leaves
		let nodes = pack(root).leaves().map(node => {
			// console.log('node:', node.x, (node.x - centerX) * 2);
			const data = node.data;
			return {
				x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
				y: centerY + (node.y - centerY) * 3,
				r: 0, // for tweening
				radius: node.r, //original radius
				id: data.cat + '.' + (data.name.replace(/\s/g, '-')),
				cat: data.cat,
				name: data.name,
				value: data.value,
				icon: data.icon,
				desc: data.desc,
			}
		});
		simulation.nodes(nodes).on('tick', ticked);

		// svg.style('background-color', '#eee');
		let node = svg.selectAll('.node')
			.data(nodes)
			.enter().append('g')
			.attr('class', 'node')
			.call(d3.drag()
				.on('start', (d) => {
					if (!d3.event.active) simulation.alphaTarget(0.2).restart();
					d.fx = d.x;
					d.fy = d.y;
				})
				.on('drag', (d) => {
					d.fx = d3.event.x;
					d.fy = d3.event.y;
				})
				.on('end', (d) => {
					if (!d3.event.active) simulation.alphaTarget(0);
					d.fx = null;
					d.fy = null;
				}));

		node.append('circle')
			.attr('id', d => d.id)
			.attr('r', 0)
			.style('fill', d => scaleColor(d.cat))
			.transition().duration(2000).ease(d3.easeElasticOut)
				.tween('circleIn', (d) => {
					let i = d3.interpolateNumber(0, d.radius);
					return (t) => {
						d.r = i(t);
						simulation.force('collide', forceCollide);
					}
				})

		node.append('clipPath')
			.attr('id', d => `clip-${d.id}`)
			.append('use')
			.attr('xlink:href', d => `#${d.id}`);

		// display text as circle icon
		node.filter(d => !String(d.icon).includes('img/'))
			.append('text')
			.classed('node-icon', true)
			.attr('clip-path', d => `url(#clip-${d.id})`)
			.selectAll('tspan')
			.data(d => d.icon.split(';'))
			.enter()
				.append('tspan')
				.attr('x', 0)
				.attr('y', (d, i, nodes) => (13 + (i - nodes.length / 2 - 0.5) * 10))
				.text(name => name)
				.attr("font-size",12);

		// display image as circle icon
		node.filter(d => String(d.icon).includes('img/'))
			.append('image')
			.classed('node-icon', true)
			.attr('clip-path', d => `url(#clip-${d.id})`)
			.attr('xlink:href', d => d.icon)
			.attr('x', d => - d.radius * 0.7)
			.attr('y', d => - d.radius * 0.7)
			.attr('height', d => d.radius * 2 * 0.7)
			.attr('width', d => d.radius * 2 * 0.7)

		node.append('title')
			.text(d => (d.name + '\n' + format(d.value)));

		let legendOrdinal = d3.legendColor()
			.scale(scaleColor)
			.shape('circle');

		let legend = svg.append('g')
			.classed('legend-color', true)
			.attr('text-anchor', 'start')
			.attr('transform','translate(20,30)')
			.style('font-size','12px')
			.attr("fill","rgb(255,255,255)")
			.call(legendOrdinal);

		let sizeScale = d3.scaleOrdinal()
  			.domain(['less use', 'more use'])
  			.range([5, 10] );

		let legendSize = d3.legendSize()
			.scale(sizeScale)
			.shape('circle')
			.shapePadding(10)
			.labelAlign('end');

		// let legend2 = svg.append('g')
		// 	.classed('legend-size', true)
		// 	.attr('text-anchor', 'start')
		// 	.attr('transform', 'translate(150, 25)')
		// 	.style('font-size', '12px')
		// 	.call(legendSize);

		let infoBox = node.append('foreignObject')
			.classed('circle-overlay hidden', true)
			.attr('x', -350 * 0.5 * 0.8)
			.attr('y', -350 * 0.5 * 0.8)
			.attr('height', 350 * 0.8)
			.attr('width', 350 * 0.8)
				.append('xhtml:div')
				.classed('circle-overlay__inner', true);


		infoBox.append('p')
			.classed('circle-overlay__body', true)
			.html(d => d.desc);



		d3.select(document).on('click', () => {
			let target = d3.event.target;
			// check if click on document but not on the circle overlay
			if (!target.closest('#circle-overlay') && focusedNode) {
				focusedNode.fx = null;
				focusedNode.fy = null;
				simulation.alphaTarget(0.2).restart();
				d3.transition().duration(2000).ease(d3.easePolyOut)
					.tween('moveOut', function () {
						console.log('tweenMoveOut', focusedNode);
						let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
						return function (t) {
							focusedNode.r = ir(t);
							simulation.force('collide', forceCollide);
						};
					})
					.on('end', () => {
						focusedNode = null;
						simulation.alphaTarget(0);
					})
					.on('interrupt', () => {
						simulation.alphaTarget(0);
					});

				// hide all circle-overlay
				d3.selectAll('.circle-overlay').classed('hidden', true);
				d3.selectAll('.node-icon').classed('node-icon--faded', false);
			}
		});

		function ticked() {
			node
				.attr('transform', d => `translate(${d.x},${d.y})`)
				.select('circle')
					.attr('r', d => d.r);
		}
}
