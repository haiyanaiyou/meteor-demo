Template.bookmark.events({
	'click span.remove' :function(e,tpl){
		if(confirm('确定删除这个嘛？')){
			var id=this._id;
			Bookmarks.remove({_id:id});

		}

	},
	"click span.edit":function(e,tpl){

		Session.set('currentEditId',this._id);

	},
	//处理取消按钮
	'click .btn-cancel':function(e,tpl){
		e.preventDefault();
		Session.set('currentEditId',null);

	},
	//新修改的信息提交
	'submit form.form-edit':function(e,tpl){
		e.preventDefault();
		var id=this._id;
		var corpName=tpl.$('#bookmark_corpName_new').val();
		var address=tpl.$('#bookmark_address_new').val();
		var legalName=tpl.$('#bookmark_legalName_new').val();
		var createdAt=tpl.$('#bookmark_createdAt_new').val();

		Bookmarks.update({_id:id},{$set:{corpName:corpName,address:address,legalName:legalName,createdAt:createdAt}},function(err){
			if (!err) {
				tpl.$('#bookmark_address_new').val('');
				tpl.$('#bookmark_corpName_new').val('');
				Session.set('currentEditId',null);


			}

		});

	}
	//处理确定按钮
});
Template.bookmark.helpers({
	isEditing:function(){
		return Session.get('currentEditId') == this._id;
	},

});