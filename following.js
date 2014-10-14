if (Meteor.isClient) {

	// Helpers
	Template.following.helpers({
		list: function() {
			return Meteor.users.find({}, {});
		},
		getLastPostId: function(user_id) {
			console.log('>>>>', user_id)
			return Posts.findOne({user_id: user_id}, {sort: {timestamp : -1}})._id
		},

	});
}