if (Meteor.isClient) {



	// Subscribe
	Meteor.subscribe("userData");

	// Events
	Template.home.events({
		'click .fa-sign-out': function () {
			Meteor.logout();
		},
		'click .fa-bell': function () {
			$('#overlay-curator-list').toggleClass('on');
			$('#overlay-curator-list-container').toggleClass('on');
			$('#header-container').toggleClass('on');
		}
	});

	// Helpers
	Template.post.helpers({
		lastPostUrl: function() {
			var post_data = Posts.findOne({}, {sort: {timestamp : -1}});
			if (!post_data) {
				return 'NOTHING';
			}
			var post_url = post_data.url
			var tweet_id = url('3', post_url);
			var name = url('1', post_url);
			console.log('ready');
			return new Handlebars.SafeString('<blockquote align="center" class="twitter-tweet"><p><a href="' + post_url + '">' + post_url + '</a></p><a href="https://twitter.com/' + name + '/statuses/' + tweet_id + '"></a></blockquote>');
		}
	});

	Template.post.rendered = function() {
		console.log('rendered');
		console.log('params', Router.current().params);
		twttr.widgets.load();
	};
}