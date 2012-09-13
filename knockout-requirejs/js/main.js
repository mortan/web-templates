require.config({
	paths: {
		'jquery': 'lib/jquery-1.8.1.min',
		'knockout': 'lib/knockout-2.1.0',
		'domReady': 'lib/domReady'
	},
	shim: {
		// 'jquery-ui': ['jquery']
	}
});

require([
	'knockout',
	'viewmodels/index',
	'domReady!'
], function(ko, ViewModel) {
	ko.applyBindings(new ViewModel());
});