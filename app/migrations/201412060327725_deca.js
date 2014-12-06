migration.up = function(migrator) {
  migrator.createTable({
    "columns": {
      "name":"TEXT",
      "image1":"BLOB",
      "createdAt":"TEXT",
      "updatedAt":"TEXT"
    }
  });
};

migration.down = function(migrator) {
  migrator.dropTable("deca");
};