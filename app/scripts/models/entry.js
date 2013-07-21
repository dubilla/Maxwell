/* global define */
define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	'use strict';

	var Entry = Backbone.Model.extend({
		defaults: {
			graphingData: {
				labels : ['Game 1','Game 2','Game 3','Game 4','Game 5','Game 6','Game 7'],
				datasets : [
					{
						fillColor : 'rgba(220,220,220,0.5)',
						strokeColor : 'rgba(220,220,220,1)',
						pointColor : 'rgba(220,220,220,1)',
						pointStrokeColor : '#fff',
						data : []
					}
				]
			}
		},
		createGraphingData: function(entryPoints) {
			var graphingData = this.defaults.graphingData;
			graphingData.datasets[0].data = entryPoints;
			return graphingData;
		}
	});

	return Entry;
});