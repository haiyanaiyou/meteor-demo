
Template.bookmarkList.helpers({
	bookmarks:function(){

			var bookmarks=Bookmarks.find();
			return bookmarks;
	}

});
Template.bookmarkList.events({
 	'click button.find' (event,template){

 		var value=template.$('#search').val();
 		console.log(value);
 		Router.go('search',{'search':value})


 	}
});
