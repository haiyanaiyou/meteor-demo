Router.configure({
    layoutTemplate:'layout'
});
Router.route('/',{name:'bookmarkList'});
Router.route('/add',{name:'bookmarkAdd'});
Router.route('/search/:search',{name:'search',template:'searchList',data:function(){

        console.log(this.params);
        var value = this.params.search;
            var clt = {};
            clt = {$or:[{corpName:value},{address:value},{createdAt:value}]};
            console.log(clt);
            return {bookmarks:Bookmarks.find(clt)}
}});
