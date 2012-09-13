$(function () {
	var ViewModel = function() {
		var self = this;

		self.greeting = ko.observable('Hello Knockout');
	};

	ko.applyBindings(new ViewModel());
});