define([
	"knockout"
], function(ko) {
	var ViewModel = function () {
		var self = this;

		self.greeting = ko.observable("Hello Knockout");
	};

	return ViewModel;
});