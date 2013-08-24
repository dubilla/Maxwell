/* global define */
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/entry.html',
	'chart'
], function($, _, Backbone, entryTemplate, Chart) {
	'use strict';

	var EntryView = Backbone.View.extend({
		template: _.template(entryTemplate),
		getChart: function() {
			return this.chart;
		},
		loadChart: function($wrapper, data) {
			//Get context with jQuery - using jQuery's .get() method.
			var ctx = $wrapper.find('#myChart').get(0).getContext('2d');
			this.setChart(new Chart(ctx));
			this.getChart().Line(data);
		},
		render: function() {
			var entryPoints = this.model.get('data'),
				graphingData = this.model.createGraphingData(entryPoints);

			this.$el.addClass('entry').html(this.template());
			this.loadChart(this.$el, graphingData);
			return this;
		},
		setChart: function(chart) {
			this.chart = chart;
		}
	});

	return EntryView;
});