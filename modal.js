
if (Meteor.isClient) {
	// Events
	Template.modal.events({
		'click #url-post': function () {
			var data = {url: $('#url-input').val(), timestamp: new Date().getTime(), user_id: Meteor.userId()};
			// console.log(data);
			// check(data, {
			// 	url: String,
			// 	timestamp: Number
			// });
			Posts.insert({url: data.url, timestamp: data.timestamp, user_id: data.user_id});
		}
	});
}