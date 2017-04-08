Template.bookmarkAdd.events({
	'submit form.form-add':function(e,tpl){
		e.preventDefault();
		var corpName=tpl.$("#bookmark_corpName").val();
		var capital=tpl.$("#bookmark_capital").val();
		var address=tpl.$("#bookmark_address").val();
		var legalName=tpl.$("#bookmark_legalName").val();
		var createdAt=tpl.$("#bookmark_createdAt").val();
		var json_data={corpName:corpName,capital:capital,address:address,legalName:legalName,createdAt:createdAt};
		Bookmarks.insert(json_data,function(err){
			if(!err){
				tpl.$("#bookmark_corpName").val('');
				tpl.$("#bookmark_capital").val('');
				tpl.$("#bookmark_address").val('');
				tpl.$("#bookmark_legalName").val('');
				tpl.$("#bookmark_createdAt").val('');
				Router.go('/');

			}

		});

	}
});