var args = arguments[0] || {};

$.createWindow.orientationModes = [Ti.UI.PORTRAIT];

Alloy.Globals.createb = $.createBtn;

// set image placeholders up
var image_size = parseInt((Ti.Platform.displayCaps.platformWidth - 14) / 5 * 0.95);
var image_gap  = parseInt((Ti.Platform.displayCaps.platformWidth - 14) / 4 * 0.05);
var images = [
  $.image_1,
  $.image_2,
  $.image_3,
  $.image_4,
  $.image_5,
  $.image_6,
  $.image_7,
  $.image_8,
  $.image_9,
  $.image_10
];

for(var i = 0; i < images.length; i++) {
  images[i].width  = image_size;
  images[i].height = image_size;
  if(i != 0 && i != 5) {
    images[i].left   = image_gap;
  }
  images[i].top    = image_gap;
}

var insert_pos = 0;

function pickImage(e) {
  Titanium.Media.openPhotoGallery({
    success:function(event)
    {
      var cropRect = event.cropRect;
      var image = event.media;
  
      // set image view
      Ti.API.debug('Our type was: '+event.mediaType);
      if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
      {
        images[insert_pos].image = image;
        insert_pos++;

        if(insert_pos == images.length) {
          //TODO: we can set this to visible again if images can be deleted
          $.imageSelection.setVisible(false);
        }
        //$.image_1.image = image;
      }
      else
      {
        // is this necessary?
      }
  
      Titanium.API.info('PHOTO GALLERY SUCCESS cropRect.x ' + cropRect.x + ' cropRect.y ' + cropRect.y  + ' cropRect.height ' + cropRect.height + ' cropRect.width ' + cropRect.width);
  
    },
    cancel:function()
    {
  
    },
    error:function(error)
    {
    },
    allowEditing:true,
//    popoverView:popoverView,
//    arrowDirection:arrowDirection,
    mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
  });
}

var moment = require('alloy/moment');
var library = Alloy.createCollection('deca');

function saveDeca() {
  var decaName = $.decaName.value;
  if(decaName == '') {
    alert('Please enter a name for your Deca');
    return false;
  }
  if(insert_pos == 0) {
    alert('Please enter at least one image to your Deca');
    return false;
  }

  // http://stackoverflow.com/questions/6493055/appcelerator-titanium-base64-encode-blob-objects
console.log("deca name is: " + $.decaName.value);
  var encodedImage = Titanium.Utils.base64encode(images[0].image).toString();
console.log("image string is: " + encodedImage);

  var now = moment();
  var deca = Alloy.createModel('deca', {
      name: decaName,
      image1: encodedImage,
      dateCreated: now.format('YYYYMMDDHHmmss'),
      dateCreated: now.format('YYYYMMDDHHmmss')
  });
  deca.save();
  Alloy.Collections.deca.fetch();
  $.createWindow.close();
/*
        var decoded = Ti.UI.base64decode(encoded);
        images[insert_pos].image = decoded;
*/        
}

$.createWindow.open();
