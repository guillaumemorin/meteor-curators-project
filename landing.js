if (Meteor.isClient) {

	Template.landing.events({
		'click .btn-info': function () {
			Meteor.loginWithTwitter({}, function() {});
		},
		'click .btn-primary': function () {
			Meteor.loginWithTwitter({}, function() {});
		}
	});

	// Render
	Template.landing.rendered = function () {
		$('#landing').toggleClass('on');
	};
}