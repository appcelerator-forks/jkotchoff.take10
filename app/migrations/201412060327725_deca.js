var moment = require('alloy/moment');
var now = moment();

var seeds = [
  {
    name: "Teacup Animals",
    image1: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_1.jpg').read()).toString(),
    image2: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_2.jpg').read()).toString(),
    image3: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_3.jpg').read()).toString(),
    image4: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_4.jpg').read()).toString(),
    image5: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_5.jpg').read()).toString(),
    image6: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_6.jpg').read()).toString(),
    image7: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_7.jpg').read()).toString(),
    image8: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_8.jpg').read()).toString(),
    image9: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_9.jpg').read()).toString(),
    image10: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/Teacup_10.jpg').read()).toString(),
    createdAt: now.format('YYYYMMDDHHmmss'),
    updatedAt: now.format('YYYYMMDDHHmmss')
  },
  {
    name: "Unlikely Animal Combinations",
    image1: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_1.jpg').read()).toString(),
    image2: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_2.jpg').read()).toString(),
    image3: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_3.jpg').read()).toString(),
    image4: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_4.jpg').read()).toString(),
    image5: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_5.jpg').read()).toString(),
    image6: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_6.jpg').read()).toString(),
    image7: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_7.jpg').read()).toString(),
    image8: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_8.jpg').read()).toString(),
    image9: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_9.jpg').read()).toString(),
    image10: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/UAC_10.jpg').read()).toString(),
    createdAt: now.format('YYYYMMDDHHmmss'),
    updatedAt: now.format('YYYYMMDDHHmmss')
  },
  {
    name: "Blue Mountains climbing",
    image1: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_1.jpg').read()).toString(),
    image2: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_2.jpg').read()).toString(),
    image3: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_3.jpg').read()).toString(),
    image4: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_4.jpg').read()).toString(),
    image5: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_5.jpg').read()).toString(),
    image6: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_6.jpg').read()).toString(),
    image7: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_7.jpg').read()).toString(),
    image8: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_8.jpg').read()).toString(),
    image9: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_9.jpg').read()).toString(),
    image10: Ti.Utils.base64encode(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images/blueys_10.jpg').read()).toString(),
    createdAt: now.format('YYYYMMDDHHmmss'),
    updatedAt: now.format('YYYYMMDDHHmmss')
  }
];

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
  
  console.log("creating seeds");
  _.each(seeds, function(seed){
    migrator.insertRow(seed);
  });
  console.log("data populated");
};

migration.down = function(migrator) {
  migrator.dropTable("deca");
};