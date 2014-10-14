// DB
Following = new Mongo.Collection("following");
Posts = new Mongo.Collection("posts");

if (Meteor.isClient) {
	Meteor.startup(function () {
		Accounts.loginServiceConfiguration.insert({
			service     : 'twitter',
			consumerKey : '',
			secret      : ''
		});
	});
}

if (Meteor.isServer) {

	Meteor.publish("lastpost", function () {
		return Posts.find({});
	});

	Meteor.publish("userData", function () {
		return Meteor.users.find({}, {fields: {'services': 1, 'last_post_id': 1}});
	});

	Meteor.startup(function () {
		// code to run on server at startup
	});
}