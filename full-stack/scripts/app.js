require.config({
	baseUrl: './scripts',

	paths: {
		'jquery': 'lib/jquery-1.8.2.min',
		'knockout': 'lib/knockout-2.2.0',
		'domReady': 'lib/domReady'
	},
	shim: {
		// 'jquery-ui': ['jquery']
	}
});

require([
	'knockout',
	'viewModels/main',
	'domReady!'
], function(ko, MainViewModel) {
    ko.applyBindings(new MainViewModel());
});