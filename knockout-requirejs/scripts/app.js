require.config({
	paths: {
		"jquery": "lib/jquery-1.8.3.min",
		"knockout": "lib/knockout-2.2.0",
		"domReady": "lib/domReady"
	},
	shim: {
		// "jquery-ui": ["jquery"]
	}
});

require([
	"knockout",
	"viewmodels/main",
	"domReady!"
], function(ko, ViewModel) {
	ko.applyBindings(new ViewModel());
});