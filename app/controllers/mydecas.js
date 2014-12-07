var args = arguments[0] || {};

Alloy.Collections.deca.fetch();

function transformData(model) {
  var attrs = model.toJSON();
//  attrs.image1 = Ti.Utils.base64decode(attrs.image1);
  attrs.decaId = model.id;
  console.log("setting decaid to: " + model.id);
  return attrs;
}

function showDeca(e) {
  Ti.API.info('source id: ' + e);
  Ti.API.info('source obj: ' + JSON.stringify(e));
  Ti.API.info('deca id: ' + e.row.decaId);

  var decaId = Ti.Android ? e.rowData.decaId : e.row.decaId;

  Alloy.createController('view', {decaId: decaId});
}

$.myDecas.addEventListener('open', function(){
  if(OS_ANDROID) {
    var activity = $.myDecas.getActivity();
    action_bar = activity.actionBar; 
    action_bar.title = "My Decas";
  }
});

$.myDecas.open();
