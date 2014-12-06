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
_.each(imageBlobs, function(imageBlob){
  if(imageBlob != null) {
    $.decosPanel.add(Ti.UI.createImageView({
      width: Ti.Platform.displayCaps.platformWidth,
      height: Ti.Platform.displayCaps.platformWidth,
      image: Ti.Utils.base64decode(imageBlob)
    }));
  }
});

//$.decaWindow

//-  var attrs = model.toJSON();
//-  attrs.image1 = Ti.Utils.base64decode(attrs.image1);


$.decaWindow.open();
