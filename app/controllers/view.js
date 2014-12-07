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


//var imageLib = require('fokkezb.ui');
var imageLib = require('fokkezb.image');

_.each(imageBlobs, function(imageBlob){
  if(imageBlob != null) {
/*    
    var imageView = imageLib.createView({
      height: Ti.Platform.displayCaps.platformHeight - 50,
      width : Ti.UI.FILL,
      backgroundImage: Ti.Utils.base64decode(imageBlob),
      backgroundSize: 'cover'
    });
*/    
    var width = Ti.Platform.displayCaps.platformWidth;
    var height = Ti.Platform.displayCaps.platformHeight;
    var imageView = Ti.UI.createImageView({
      width: "100%",
      height: (Ti.Android ? height / 6 : height)
    });
    imageView.image = Ti.Utils.base64decode(imageBlob);
    imageView.image = imageLib.crop(imageView.image, (width / 2), (height / 6));

    $.decosPanel.add(imageView);
  }
});

$.decaWindow.addEventListener('open', function(){
  if(OS_ANDROID) {
    var activity = $.decaWindow.getActivity();
    action_bar = activity.actionBar; 
    action_bar.title = deca.attributes.name;
  } else {
    $.decaWindow.setTitle(deca.attributes.name);
  }
});


//$.decaWindow.open();
