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

function saveDeca() {
  alert("TODO");
}

$.createWindow.open();
