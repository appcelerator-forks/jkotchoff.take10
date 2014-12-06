function createDeca() {
  Alloy.createController('create');
}
function viewDecas() {
  //TODO
}
function aboutTake10() {
  //TODO
}

$.index.orientationModes = [Ti.UI.PORTRAIT];

//Alloy.Collections.deca.deleteAllRecords();

Alloy.Collections.deca.fetch();
$.index.open();

function transformData(model) {
  var attrs = model.toJSON();
  attrs.image1 = Ti.Utils.base64decode(attrs.image1);
  //attrs.image1 = "/default.png"; 
  return attrs;
}
