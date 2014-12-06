var args = arguments[0] || {};

$.createWindow.orientationModes = [Ti.UI.PORTRAIT];

Alloy.Globals.createb = $.createBtn;

// set image placeholders up
//var image_size = parseInt((Ti.Platform.displayCaps.platformWidth - 14) / 5 * 0.95);
//var image_gap  = parseInt((Ti.Platform.displayCaps.platformWidth - 14) / 4 * 0.05);
//console.log("platform size: " + Ti.Platform.displayCaps.platformWidth +  " setting image size to: " + image_size + ", setting gap to: " + image_gap);
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
/*
for(var i = 0; i < images.length; i++) {
  images[i].width  = image_size;
  images[i].height = image_size;
  if(i != 0 && i != 5) {
    images[i].left   = image_gap;
  }
  images[i].top    = image_gap;
}
*/
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
  var i1 = (images[0].image != null) ? Titanium.Utils.base64encode(images[0].image).toString() : null;
  var i2 = (images[1].image != null) ? Titanium.Utils.base64encode(images[1].image).toString() : null;
  var i3 = (images[2].image != null) ? Titanium.Utils.base64encode(images[2].image).toString() : null;
  var i4 = (images[3].image != null) ? Titanium.Utils.base64encode(images[3].image).toString() : null;
  var i5 = (images[4].image != null) ? Titanium.Utils.base64encode(images[4].image).toString() : null;
  var i6 = (images[5].image != null) ? Titanium.Utils.base64encode(images[5].image).toString() : null;
  var i7 = (images[6].image != null) ? Titanium.Utils.base64encode(images[6].image).toString() : null;
  var i8 = (images[7].image != null) ? Titanium.Utils.base64encode(images[7].image).toString() : null;
  var i9 = (images[8].image != null) ? Titanium.Utils.base64encode(images[8].image).toString() : null;
  var i10 = (images[9].image != null) ? Titanium.Utils.base64encode(images[9].image).toString() : null;

  var now = moment();
  var deca = Alloy.createModel('deca', {
      name: decaName,
      image1: i1,
      image2: i2,
      image3: i3,
      image4: i4,
      image5: i5,
      image6: i6,
      image7: i7,
      image8: i8,
      image9: i9,
      image10: i10,
      dateCreated: now.format('YYYYMMDDHHmmss'),
      dateCreated: now.format('YYYYMMDDHHmmss')
  });
  deca.save();
  Alloy.Collections.deca.fetch();
  $.createWindow.close();
}

$.createWindow.open();
