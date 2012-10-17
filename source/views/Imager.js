(function () {
  
  var imageLoadedTransform = function (value) {
    return !value;
  };
  
  enyo.kind({
    name: "Flickr.Imager",
    classes: "imager",
    fit: true,
    published: {
      imageLoaded: false,
      imageUrl: null
    },
    bindings: [
      {from: "Flickr.connector.selectedCid", to: "$.spinner.showing", oneWay: true},
      {from: "imageLoaded", to: "$.spinner.showing", oneWay: true, transform: imageLoadedTransform, autoSync: false}
    ],
    components: [
      {kind: "enyo.Image", classes: "center image", showing: false, name: "image"},
      {kind: "enyo.Image", classes: "center", src: "assets/spinner-large.gif", fit: true, showing: false, name: "spinner"}
    ],
    imageUrlChanged: function () {
      this.$.image.setSrc(this.get("imageUrl"));
      this.$.image.set("showing", true);
    }
  });
  
}());