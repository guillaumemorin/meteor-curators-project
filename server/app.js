Meteor.publish("lastpost", function () {
	return Posts.find({});
});

Meteor.publish("userData", function () {
	return Meteor.users.find({}, {fields: {'services': 1, 'last_post_id': 1}});
});

Meteor.startup(function () {
	Accounts.loginServiceConfiguration.insert({
		service     : 'twitter',
		consumerKey : '',
		secret      : ''
	});
});