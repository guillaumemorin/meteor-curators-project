// Subscribe
Meteor.subscribe("userData");

// // Helpers
// Template.following.helpers({
// 	list: function() {
// 		return Meteor.users.find({}, {});
// 	},
// 	getLastPostId: function(user_id) {
// 		return Posts.findOne({user_id: user_id}, {sort: {timestamp : -1}})._id
// 	},
// });

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

Template.login.events({
	'click .btn-info': function () {
		Meteor.loginWithTwitter({}, function() {});
	},
	'click .btn-primary': function () {
		Meteor.loginWithTwitter({}, function() {});
	}
});

Template.modal.events({
	'click #url-post': function () {
		var data = {url: $('#url-input').val(), timestamp: new Date().getTime(), user_id: Meteor.userId()};
		Posts.insert({url: data.url, timestamp: data.timestamp, user_id: data.user_id});
	}
});

Template.post.rendered = function() {
	_render();
};

//Private
var _render = function () {
	var post_id = Router.current().params._id ? {_id: Router.current().params._id} : {};
	var post_data = Posts.findOne(post_id, {sort: {timestamp : -1}});
	var post_url = post_data.url
	var tweet_id = url('3', post_url);

	twttr.widgets.createTweet(
		tweet_id,
		document.getElementById('twitter_container'),
		{width: 400, align: 'center'}
	);

	SC.oEmbed(
		"http://soundcloud.com/forss/sets/soulhack",
		{color: "ff0066"},
		document.getElementById("soundcloud_container")
	);

	swfobject.embedSWF(
		"http://www.youtube.com/v/OJCuCMV5J2Q?enablejsapi=1&playerapiid=ytplayer&version=3",
		"youtube_container",
		"425",
		"356",
		"8",
		null,
		null,
		{ allowScriptAccess: "always" },
		{ id: "myytplayer" }
	);

	$('#instagram_container').append(
		'<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://instagram.com/p/tsxp1hhQTG/embed/captioned/?v=3" allowtransparency="true" frameborder="0" height="848" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="border: 0px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; box-shadow: rgba(0, 0, 0, 0.498039) 0px 0px 1px 0px, rgba(0, 0, 0, 0.14902) 0px 1px 10px 0px; margin: 1px; max-width: 658px; padding: 0px; width: calc(100% - 2px); background: rgb(255, 255, 255);border-radius: 4px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);display: block;padding: 0;"></iframe>'
	)
}