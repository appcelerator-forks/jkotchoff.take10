exports.definition = {
  config: {
    "columns": {
      "name": "TEXT",
      "image1": "BLOB"
    },
    "adapter": {
      "type": "sql",
      "collection_name": "decas"
    }
  },
  extendCollection : function(Collection) {
    _.extend(Collection.prototype, {
      deleteRecord : function(opts) {
        var collection = this;
        var dbName = collection.config.adapter.db_name;
        var table = collection.config.adapter.collection_name;
        var columns = collection.config.columns;
        var names = [], q = [];
        for (var k in opts.query.columns) {
          names.push(opts.query.columns[k]);
          q.push("?");
        }
        var sql = "DELETE FROM " + table + " " + opts.query.sql;
        
        db = Ti.Database.open(collection.config.adapter.db_name);
        db.execute(sql, opts.query.params);
        db.close();
        collection.trigger('sync');
      },
      deleteAllRecords : function() {
        var collection = this;
        var dbName = collection.config.adapter.db_name;
        var table = collection.config.adapter.collection_name;
        var sql = "DELETE FROM " + collection.config.adapter.collection_name;
        
        db = Ti.Database.open(collection.config.adapter.db_name);
        db.execute(sql);
        db.close();
        collection.trigger('sync');
      }
    });
    return Collection;
  }
};




