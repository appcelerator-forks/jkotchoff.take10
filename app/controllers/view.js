var args = arguments[0] || {};

var deca = Alloy.Collections.deca.get(args.decaId);

var imageBlobs = [
  deca.attributes.image1,
  deca.attributes.image2,
  deca.attributes.image3,
  deca.attributes.image4,
  deca.attributes.image5,
  deca.attributes.image6,
  deca.attributes.image7,
  deca.attributes.image8,
  deca.attributes.image9,
  deca.attributes.image10
];


var imageLib = require('fokkezb.image');

_.each(imageBlobs, function(imageBlob){
  if(imageBlob != null) {
    var width = Ti.Platform.displayCaps.platformWidth;
    if(Ti.Android){
      width = width / 2;
    }
    var height = Ti.Platform.displayCaps.platformHeight;
    if(Ti.Android){
      height = height / 2;
    }
    
    var imageView = Ti.UI.createImageView({
      width: width,
      height: height
    });
    imageView.image = Ti.Utils.base64decode(imageBlob);
    imageView.image = imageLib.crop(imageView.image, {width: width, height: height});
    $.decosPanel.add(imageView);
  }
});

//$.decaWindow

//-  var attrs = model.toJSON();
//-  attrs.image1 = Ti.Utils.base64decode(attrs.image1);

$.decaWindow.addEventListener('open', function(){
  if(OS_ANDROID) {
    var activity = $.decaWindow.getActivity();
    action_bar = activity.actionBar; 
    action_bar.title = deca.attributes.name;
  }
});


$.decaWindow.open();
