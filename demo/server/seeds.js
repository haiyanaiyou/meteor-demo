if(Bookmarks.find().count() ===0){
    Bookmarks.insert({
        corpName:'hw',
        unifiedCode:'0001',
        capital:'300',
        address:'上海a区从弄',
        landlinePhone:'3002000',
        legalName:'jane',
        legalId:'123456789999',
        legalPhone:'1123456',
        createdAt:'2011-03-12'
    });
    Bookmarks.insert({
        corpName:'hw1',
        unifiedCode:'0001',
        capital:'300',
        address:'上海g区h弄',
        landlinePhone:'3002001',
        legalName:'phone',
        legalId:'123456789999',
        legalPhone:'1123456',
        createdAt:'2010-08-12'
    });
    Bookmarks.insert({
        corpName:'hw1',
        unifiedCode:'0001',
        capital:'300',
        address:'上海c区h3弄',
        landlinePhone:'3002002',
        legalName:'jane2',
        legalId:'123456789999',
        legalPhone:'1123456',
        createdAt:'1996-03-08'
    });

}