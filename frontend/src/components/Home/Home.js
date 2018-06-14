import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import 'jquery.tipsy/src/jquery.tipsy.css';

import d3 from 'd3';
import $ from 'jquery';
import tipsy from 'jquery.tipsy';
window.$ = window.jQuery = $;

class Home extends Component {
  componentDidMount() {
	  var data1 = {
		  "Site1": [{
			  "da": 22.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 29.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 24.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 38.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 37,
			  "date": "2015-01-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 34.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 49.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 55,
			  "date": "2015-05-01"
		  }, {
			  "da": 54.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 44.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 54,
			  "date": "2015-08-01"
		  }, {
			  "da": 72,
			  "date": "2015-09-01"
		  }],
		  "Site2": [{
			  "da": 68.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 60.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 64.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 78.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 78,
			  "date": "2015-01-01"
		  }, {
			  "da": 77.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 79.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 81.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 83,
			  "date": "2015-05-01"
		  }, {
			  "da": 85.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 74.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 85,
			  "date": "2015-08-01"
		  }, {
			  "da": 86,
			  "date": "2015-09-01"
		  }],
		  "Site3": [{
			  "da": 14.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 12.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 13.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 14.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 17,
			  "date": "2015-01-01"
		  }, {
			  "da": 15.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 24.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 32.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 29,
			  "date": "2015-05-01"
		  }, {
			  "da": 27.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 25.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 24,
			  "date": "2015-08-01"
		  }, {
			  "da": 34,
			  "date": "2015-09-01"
		  }],
		  "Site4": [{
			  "da": 36.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 34.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 36.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 35.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 32,
			  "date": "2015-01-01"
		  }, {
			  "da": 39.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 37.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 42.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 36,
			  "date": "2015-05-01"
		  }, {
			  "da": 36.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 39,
			  "date": "2015-08-01"
		  }, {
			  "da": 37,
			  "date": "2015-09-01"
		  }]
	  };

	  var data2 = {
		  "Site1": [{
			  "da": 22.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 29.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 24.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 38.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 37,
			  "date": "2015-01-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 34.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 49.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 55,
			  "date": "2015-05-01"
		  }, {
			  "da": 54.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 44.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 54,
			  "date": "2015-08-01"
		  }, {
			  "da": 72,
			  "date": "2015-09-01"
		  }, {
			  "da": 75,
			  "date": "2015-10-01"
		  }],
		  "Site2": [{
			  "da": 68.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 60.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 64.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 78.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 78,
			  "date": "2015-01-01"
		  }, {
			  "da": 77.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 79.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 81.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 83,
			  "date": "2015-05-01"
		  }, {
			  "da": 85.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 74.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 85,
			  "date": "2015-08-01"
		  }, {
			  "da": 86,
			  "date": "2015-09-01"
		  }, {
			  "da": 87,
			  "date": "2015-10-01"
		  }],
		  "Site3": [{
			  "da": 14.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 12.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 13.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 14.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 17,
			  "date": "2015-01-01"
		  }, {
			  "da": 15.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 24.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 32.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 29,
			  "date": "2015-05-01"
		  }, {
			  "da": 27.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 25.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 24,
			  "date": "2015-08-01"
		  }, {
			  "da": 34,
			  "date": "2015-09-01"
		  }, {
			  "da": 38,
			  "date": "2015-10-01"
		  }],
		  "Site4": [{
			  "da": 36.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 34.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 36.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 35.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 32,
			  "date": "2015-01-01"
		  }, {
			  "da": 39.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 37.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 42.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 36,
			  "date": "2015-05-01"
		  }, {
			  "da": 36.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 39,
			  "date": "2015-08-01"
		  }, {
			  "da": 37,
			  "date": "2015-09-01"
		  }, {
			  "da": 41,
			  "date": "2015-10-01"
		  }]
	  };

	  var data3 = {
		  "Site1": [{
			  "da": 22.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 29.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 24.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 38.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 37,
			  "date": "2015-01-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 34.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 49.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 55,
			  "date": "2015-05-01"
		  }, {
			  "da": 54.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 44.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 54,
			  "date": "2015-08-01"
		  }, {
			  "da": 72,
			  "date": "2015-09-01"
		  }, {
			  "da": 75,
			  "date": "2015-10-01"
		  }, {
			  "da": 73,
			  "date": "2015-11-01"
		  }],
		  "Site2": [{
			  "da": 68.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 60.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 64.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 78.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 78,
			  "date": "2015-01-01"
		  }, {
			  "da": 77.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 79.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 81.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 83,
			  "date": "2015-05-01"
		  }, {
			  "da": 85.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 74.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 85,
			  "date": "2015-08-01"
		  }, {
			  "da": 86,
			  "date": "2015-09-01"
		  }, {
			  "da": 87,
			  "date": "2015-10-01"
		  }, {
			  "da": 92,
			  "date": "2015-11-01"
		  }],
		  "Site3": [{
			  "da": 14.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 12.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 13.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 14.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 17,
			  "date": "2015-01-01"
		  }, {
			  "da": 15.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 24.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 32.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 29,
			  "date": "2015-05-01"
		  }, {
			  "da": 27.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 25.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 24,
			  "date": "2015-08-01"
		  }, {
			  "da": 34,
			  "date": "2015-09-01"
		  }, {
			  "da": 38,
			  "date": "2015-10-01"
		  }, {
			  "da": 49,
			  "date": "2015-11-01"
		  }],
		  "Site4": [{
			  "da": 36.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 34.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 36.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 35.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 32,
			  "date": "2015-01-01"
		  }, {
			  "da": 39.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 37.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 42.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 36,
			  "date": "2015-05-01"
		  }, {
			  "da": 36.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 39,
			  "date": "2015-08-01"
		  }, {
			  "da": 37,
			  "date": "2015-09-01"
		  }, {
			  "da": 41,
			  "date": "2015-10-01"
		  }, {
			  "da": 44,
			  "date": "2015-11-01"
		  }]
	  };

	  var data4 = {
		  "Site1": [{
			  "da": 22.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 29.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 24.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 38.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 37,
			  "date": "2015-01-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 34.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 49.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 55,
			  "date": "2015-05-01"
		  }, {
			  "da": 54.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 44.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 54,
			  "date": "2015-08-01"
		  }, {
			  "da": 72,
			  "date": "2015-09-01"
		  }, {
			  "da": 75,
			  "date": "2015-10-01"
		  }, {
			  "da": 73,
			  "date": "2015-11-01"
		  }, {
			  "da": 63,
			  "date": "2015-12-01"
		  }],
		  "Site2": [{
			  "da": 68.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 60.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 64.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 78.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 78,
			  "date": "2015-01-01"
		  }, {
			  "da": 77.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 79.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 81.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 83,
			  "date": "2015-05-01"
		  }, {
			  "da": 85.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 74.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 85,
			  "date": "2015-08-01"
		  }, {
			  "da": 86,
			  "date": "2015-09-01"
		  }, {
			  "da": 87,
			  "date": "2015-10-01"
		  }, {
			  "da": 92,
			  "date": "2015-11-01"
		  }, {
			  "da": 83,
			  "date": "2015-12-01"
		  }],			     
		  "Site3": [{
			  "da": 14.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 12.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 13.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 14.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 17,
			  "date": "2015-01-01"
		  }, {
			  "da": 15.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 24.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 32.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 29,
			  "date": "2015-05-01"
		  }, {
			  "da": 27.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 25.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 24,
			  "date": "2015-08-01"
		  }, {
			  "da": 34,
			  "date": "2015-09-01"
		  }, {
			  "da": 38,
			  "date": "2015-10-01"
		  }, {
			  "da": 49,
			  "date": "2015-11-01"
		  }, {
			  "da": 34,
			  "date": "2015-12-01"
		  }],
		  "Site4": [{
			  "da": 36.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 34.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 36.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 35.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 32,
			  "date": "2015-01-01"
		  }, {
			  "da": 39.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 37.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 42.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 36,
			  "date": "2015-05-01"
		  }, {
			  "da": 36.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 39,
			  "date": "2015-08-01"
		  }, {
			  "da": 37,
			  "date": "2015-09-01"
		  }, {
			  "da": 41,
			  "date": "2015-10-01"
		  }, {
			  "da": 44,
			  "date": "2015-11-01"
		  }, {
			  "da": 42,
			  "date": "2015-12-01"
		  }]
	  };

	  var margin = {
		  top: 20,
		  right: 80,
		  bottom: 30,
		  left: 50
	  },
			  width = 900 - margin.left - margin.right,
			  height = 440 - margin.top - margin.bottom;

	  var svg = d3.select("#d3-graph").append("svg")
			          .attr("id", "chart")
			          .attr("viewBox", "0 0 960 500")
			          .attr("preserveAspectRatio", "xMidYMid")
			          .attr("width", width + margin.left + margin.right)
			          .attr("height", height + margin.top + margin.bottom)
			          .append("g")
			          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	  function renderNewData(data) {
		  var parsedData = JSON.parse(data);
      debugger;
		  updateData(parsedData);
	  }

	  var listOfSiteColors = [];

	  function updateData(data) {

		  var parseDate = d3.time.format("%Y-%m-%d").parse;

		  var x = d3.time.scale()
				        .range([0, width]);

		  var y = d3.scale.linear()
				        .range([height, 0]).domain([0,100]);

		  var color = d3.scale.category20();

		  var xAxis = d3.svg.axis()
				            .scale(x)
				            .orient("bottom")
				            .outerTickSize(0);

		  var yAxis = d3.svg.axis()
				            .scale(y)
				            .orient("left")
				            .outerTickSize(0);

		  var line = d3.svg.line()
				           .interpolate("linear")
				           .x(function (d) {
					           return x(d.date);
				           })
				           .y(function (d) {
					           return y(d.da);
				           });

		  var fullDataSet = [];
		  for (var key in data) {
			  fullDataSet = fullDataSet.concat.apply(fullDataSet, data[key]);
		  }

		  fullDataSet.forEach(function (d) {
			  d.date = parseDate(d.date);
			  d.da = +d.da;
		  });

		  x.domain(d3.extent(fullDataSet, function (d) {
			  return d.date;
		  }));

		  y.domain(d3.extent(fullDataSet, function (d) {
			  return d.da;
		  }));

		  if (svg.selectAll(".y.axis")[0].length < 1) {
			  // Draw new y axis
			  svg.append("g")
				   .attr("class", "y axis")
				   .call(yAxis)
				   .append("text")
				   .attr("transform", "rotate(-90)")
				   .attr("y", 6)
				   .attr("dy", ".71em")
				   .style("text-anchor", "end")
				   .text("DA ");
		  } else {
			  svg.selectAll(".y.axis").transition().duration(1500).call(yAxis);
		  }

		  // Draw new x axis if none exists, else transition to a new x axis
		  if (svg.selectAll(".x.axis")[0].length < 1) {
			  svg.append("g")
				   .attr("class", "x axis")
				   .call(xAxis)
				   .attr("transform", "translate(0," + height + ")")
				   .call(xAxis);
		  } else {
			  svg.selectAll(".x.axis").transition().duration(1500).call(xAxis);
		  }

		  var myNewData = [];
		  var listOfSiteNames = [];
		  for (var key in data) {
			  myNewData.push(data[key]);
			  listOfSiteNames.push(key);
		  }

		  if (d3.selectAll(".line")[0].length < 1) {
			  var myNewSvg = svg.selectAll(".line").data(myNewData);
			  myNewSvg.enter()
				        .append("path")
				        .attr("class", "line")
				        .style("stroke", function (d, i) {
					        listOfSiteColors.push(color(i));
					        return color(i);
				        })
				        .style("fill", "none")
				        .attr("d", line)
				        .attr("id", function(d, i) { return i; })
				        .append("svg:title")
				        .text(function(d, i) { return listOfSiteNames[i]; });

			  var legend = svg.append("g").attr("class", "legend").selectAll(".color").data(listOfSiteColors)
					              .enter()
					              .append("g");

			  legend.append("text")
				      .attr("x", function(d, i) { return width + 50; })
				      .attr("y", function(d, i) { return 22.21*(i+1); })
				      .style("font-size", "12px")
				      .text(function(d, i) { return listOfSiteNames[i]; });

			  legend.append("rect")
				      .attr("x", function(d, i) { return width + 25; })
				      .attr("y", function(d, i) { return 12+22*i; })
				      .attr("width", 15)
				      .attr("height", 15)
				      .style("fill", function(d, i) { return d; });

			  var myCircleGroups = svg.selectAll("circle").data(myNewData)
					                      .enter()
					                      .append("g")
					                      .attr("class", "dot")
					                      .attr("id", function(d, i) { return i })
					                      .selectAll("circle")
					                      .data(function(d, i) { return myNewData[i]; })

			  myCircleGroups.enter()
				                        .append("circle")
				                        .attr("cx", function(d) { return x(d.date); })
				                        .attr("cy", function(d) { return y(d.da); })
				                        .attr("fill", function(d, i) { return listOfSiteColors[$(this).closest('g').attr('id')]; })
				                        .attr("r", 4)
				                        .attr("id", function(d) { return d.da; });
		  } else {
			  svg.selectAll(".line").data(myNewData)
				   .transition()
				   .duration(1500)
				   .attr("d", line);
			  var newSvg = svg.selectAll(".dot").data(myNewData);
			  var newCircles = newSvg.selectAll("circle")
					                     .data(function(d, i) { return myNewData[i]; });

			  newCircles.enter()
				          .append("circle")
				          .attr("cx", function(d) { return x(d.date); })
				          .attr("cy", function(d) { return y(d.da); })
				          .attr("fill", function() { return listOfSiteColors[$(this).closest('g').attr('id')]; })
				          .attr("r", 4)
				          .attr("id", function(d) { return d.da; });

			  newCircles.transition().duration(1500).attr("cx", function(d) { return x(d.date); })
				          .attr("cy", function(d) { return y(d.da); });

			  newCircles.exit().remove();
		  }

		  $('circle').tipsy({
			  gravity: 'w',
			  html: true,
			  title: function() {
				  var d = $(this).attr("id");
				  return d;
			  }
		  });
	  };

	  updateData(data1);

	  var data9 = {
		  "Site1": [{
			  "da": 22.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 29.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 24.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 38.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 37,
			  "date": "2015-01-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 34.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 49.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 55,
			  "date": "2015-05-01"
		  }, {
			  "da": 54.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 44.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 54,
			  "date": "2015-08-01"
		  }, {
			  "da": 72,
			  "date": "2015-09-01"
		  }],
		  "Site2": [{
			  "da": 68.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 60.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 64.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 78.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 78,
			  "date": "2015-01-01"
		  }, {
			  "da": 77.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 79.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 81.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 83,
			  "date": "2015-05-01"
		  }, {
			  "da": 85.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 74.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 85,
			  "date": "2015-08-01"
		  }, {
			  "da": 86,
			  "date": "2015-09-01"
		  }],
		  "Site3": [{
			  "da": 14.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 12.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 13.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 14.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 17,
			  "date": "2015-01-01"
		  }, {
			  "da": 15.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 24.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 32.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 29,
			  "date": "2015-05-01"
		  }, {
			  "da": 27.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 25.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 24,
			  "date": "2015-08-01"
		  }, {
			  "da": 34,
			  "date": "2015-09-01"
		  }],
		  "Site4": [{
			  "da": 36.0,
			  "date": "2014-09-01"
		  }, {
			  "da": 34.0,
			  "date": "2014-10-01"
		  }, {
			  "da": 36.0,
			  "date": "2014-11-01"
		  }, {
			  "da": 35.0,
			  "date": "2014-12-01"
		  }, {
			  "da": 32,
			  "date": "2015-01-01"
		  }, {
			  "da": 39.0,
			  "date": "2015-02-01"
		  }, {
			  "da": 37.0,
			  "date": "2015-03-01"
		  }, {
			  "da": 42.0,
			  "date": "2015-04-01"
		  }, {
			  "da": 36,
			  "date": "2015-05-01"
		  }, {
			  "da": 36.0,
			  "date": "2015-06-01"
		  }, {
			  "da": 38.0,
			  "date": "2015-07-01"
		  }, {
			  "da": 39,
			  "date": "2015-08-01"
		  }, {
			  "da": 37,
			  "date": "2015-09-01"
		  }]
	  };

	  function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min + 1) + min);
	  }

	  Date.isLeapYear = function (year) {
		  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
	  };

	  Date.getDaysInMonth = function (year, month) {
		  return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	  };

	  Date.prototype.isLeapYear = function () {
		  return Date.isLeapYear(this.getFullYear());
	  };

	  Date.prototype.getDaysInMonth = function () {
		  return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
	  };

	  Date.prototype.addMonths = function (value) {
		  var n = this.getDate();
		  this.setDate(1);
		  this.setMonth(this.getMonth() + value);
		  this.setDate(Math.min(n, this.getDaysInMonth()));
		  return this;
	  };

	  function valBetween(v, min, max) {
		  return (Math.min(max, Math.max(min, v)));
	  }

	  var max = 50;
	  var counter = 0;

	  (function next() {

		  if (counter++ >= max) return;

		  setTimeout(function() {
			  for (var i = 0; i < 4; i++) {
				  var currentSite = data9["Site" + parseInt(i+1)];

				  var lastItemObject = currentSite[currentSite.length-1];

				  var newNumber;
				  if (lastItemObject.da == 100) {
					  newNumber = getRandomInt(85,90);
				  } else if (lastItemObject.da == 0) {
					  newNumber = getRandomInt(10,15);
				  } else {
					  newNumber = valBetween(lastItemObject.da + getRandomInt(-10,10), 0, 100);
				  }

				  var previousDate = lastItemObject.date;

				  var previousYear = previousDate.toString().slice(0,4, 10);
				  var previousMonth = parseInt(previousDate.toString().slice(5,7), 10);
				  var previousDay = parseInt(previousDate.toString().slice(8,10), 10);
				  var currentDate = new Date(previousYear, previousMonth-1, previousDay);
				  currentDate.addMonths(1);

				  data9["Site" + parseInt(i+1)].push({"da": newNumber, "date": currentDate.toISOString().slice(0,10)});
			  };
			  var copiedData = JSON.parse(JSON.stringify(data9));
			  updateData(copiedData);
			  next();
		  }, 2300);
	  })();

	  var chart = $("#chart"),
			  aspect = chart.width() / chart.height(),
			  container = chart.parent();
	  $(window).on("resize", function() {
		  var targetWidth = container.width();
		  chart.attr("width", targetWidth);
		  chart.attr("height", Math.round(targetWidth / aspect));
	  }).trigger("resize");
  }

  render() {
    return (
      <div>
        <section class='grid-container-fluid alternate-container-fluid callout-container'>
          <div class='grid-container'>
            <div class='grid-x'>
              <div class='cell medium-offset-2 medium-4 text-center'>
				        <h2>Domain Tracking & Visualization</h2>
                <p class='lead'>Made for SEO Professionals</p>
              </div>
              <div class='cell medium-4 text-center'>
				        <svg width='400' height='200' viewbox='0 0 340 200' id='top-graph'>
					        <line x1='20' y1='155' x2='320' y2='155' style={{ stroke: 'black' }} />
					        <line x1='20' y1='0' x2='20' y2='155' style={{ stroke: 'black' }} />
					        <circle cx='50' cy='50' r='3' stroke='black' stroke-width='3' fill='black'>
						        <animate attributeName='cy' begin='0s' dur='4s' values='50;70;70;35;35;50;50' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </circle>
					        <line x1='50' y1='50' x2='100' y2='100' style={{ stroke: 'black' }}>
						        <animate attributeName='y1' begin='0s' dur='4s' values='50;70;70;35;35;50;50' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
						        <animate attributeName='y2' begin='0s' dur='4s' values='100;85;85;110;110;100;100' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </line>
					        <circle cx='100' cy='100' r='3' stroke='black' stroke-width='3' fill='black'>
						        <animate attributeName='cy' begin='0s' dur='4s' values='100;85;85;110;110;100;100' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </circle>
					        <line x1='100' y1='100' x2='150' y2='80' style={{ stroke: 'black' }}>
						        <animate attributeName='y1' begin='0s' dur='4s' values='100;85;85;110;110;100;100' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
						        <animate attributeName='y2' begin='0s' dur='4s' values='80;45;45;110;110;80;80' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </line>
					        <circle cx='150' cy='80' r='3' stroke='black' stroke-width='3' fill='black'>
						        <animate attributeName='cy' begin='0s' dur='4s' values='80;45;45;110;110;80;80' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </circle>
					        <line x1='150' y1='80' x2='200' y2='70' style={{ stroke: 'black' }}>
						        <animate attributeName='y1' begin='0s' dur='4s' values='80;45;45;110;110;80;80' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
						        <animate attributeName='y2' begin='0s' dur='4s' values='70;45;45;90;90;70;70' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </line>
					        <circle cx='200' cy='70' r='3' stroke='black' stroke-width='3' fill='black'>
						        <animate attributeName='cy' begin='0s' dur='4s' values='70;45;45;90;90;70;70' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </circle>
					        <line x1='200' y1='70' x2='250' y2='50' style={{ stroke: 'black' }}>
						        <animate attributeName='y1' begin='0s' dur='4s' values='70;45;45;90;90;70;70' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
						        <animate attributeName='y2' begin='0s' dur='4s' values='50;20;20;30;30;50;50' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </line>
					        <circle cx='250' cy='50' r='3' stroke='black' stroke-width='3' fill='black'>
						        <animate attributeName='cy' begin='0s' dur='4s' values='50;20;20;30;30;50;50' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </circle>
					        <line x1='250' y1='50' x2='300' y2='80' style={{ stroke: 'black' }}>
						        <animate attributeName='y1' begin='0s' dur='4s' values='50;20;20;30;30;50;50' keySplines='0.1 0.8 0.2 1; 
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
						        <animate attributeName='y2' begin='0s' dur='4s' values='25;40;40;60;60;25;25' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </line>
					        <circle cx='300' cy='25' r='3' stroke='black' stroke-width='3' fill='black'>
						        <animate attributeName='cy' begin='0s' dur='4s' values='25;40;40;60;60;25;25' keySplines='0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1;
								    0.1 0.8 0.2 1' calcMode='spline' repeatCount='indefinite'/>
					        </circle>
				        </svg>
              </div>
            </div>
          </div>
        </section>
        <section class='grid-container text-center section-container'>
	        <div class='grid-x features-grid'>
            <div class='cell'>
              <h2>Benefits</h2>
            </div>
            <div class='cell'>
              <p>Setup is painless and offers immediate benefits to both you and your clients.</p>
            </div>
            <div class='cell small-6 medium-4'>
              <i class='fi-wrench'></i>
			        <h4>Useful</h4>
			        <p>Track relative to your competitors.</p>
            </div>
            <div class='cell small-6 medium-4'>
              <i class='fi-graph-trend'></i>
			        <h4>Visual</h4>
			        <p>Visualize your metrics at a glance.</p>
            </div>
            <div class='cell small-6 medium-4'>
              <i class='fi-calendar'></i>
			        <h4>Automatic</h4>
			        <p>No maintenance on your part.</p>
            </div>
            <div class='cell small-6 medium-4'>
              <i class='fi-mail'></i>
			        <h4>Updates</h4>
			        <p>Summaries straight to your inbox.</p>
            </div>
            <div class='cell small-6 medium-4'>
              <i class='fi-star'></i>
			        <h4>Simple</h4>
			        <p>Only a URL and name required.</p>
            </div>
            <div class='cell small-6 medium-4'>
              <i class='fi-dollar'></i>
			        <h4>Free</h4>
			        <p>Tracking without any fees.</p>
            </div>
          </div>
        </section>
        <section class='grid-container-fluid alternate-container-fluid section-container-alternate'>
	        <div class='grid-container text-center'>
            <div class='grid-x'>
              <div class='cell'>
		            <h2>Ready to Sign Up?</h2>
              </div>
              <div class='cell'>
                <Link to='/register' class='button large'>Register</Link>
              </div>
            </div>
	        </div>
        </section>
        <section class='grid-container graph-container'>
          <div class='grid-x text-center'>
            <div class='cell'>
              <h2>Visualization</h2>
            </div>
            <div class='cell large-11 large-offset-1'>
              <div id='d3-graph'>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
