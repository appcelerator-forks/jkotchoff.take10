migration.up = function(migrator) {
  migrator.createTable({
    "columns": {
      "name":"TEXT",
      "image1":"BLOB",
      "image2":"BLOB",
      "image3":"BLOB",
      "image4":"BLOB",
      "image5":"BLOB",
      "image6":"BLOB",
      "image7":"BLOB",
      "image8":"BLOB",
      "image9":"BLOB",
      "image10":"BLOB",
      "createdAt":"TEXT",
      "updatedAt":"TEXT"
    }
  });
};

migration.down = function(migrator) {
  migrator.dropTable("deca");
};