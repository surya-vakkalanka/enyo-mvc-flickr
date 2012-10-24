(function () {
  
  var imageLoadedTransform = function (value) {
    return !value;
  };
  
  enyo.kind({
    name: "Flickr.Imager",
    classes: "imager",
    fit: true,
    controller: "Flickr.ImagerController",
    published: {
      imageLoaded: false,
      imageUrl: null
    },
    handlers: {
      onload: "imageDidLoad"
    },
    bindings: [
      {from: "Flickr.connector.selectedCid", to: "$.spinner.showing", oneWay: true},
      {from: "controller.imageUrl", to: "imageUrl", oneWay: true},
      {from: "imageUrl", to: "$.image.src", oneWay: true, autoSync: false},
      {from: "imageLoaded", to: "$.image.showing", oneWay: true},
      {from: "imageLoaded", to: "$.spinner.showing", oneWay: true, transform: imageLoadedTransform, autoSync: false}
    ],
    components: [
      {kind: "enyo.Image", fit: true, classes: "center image enyo-fit", showing: false, name: "image", srcChanged: function () {
        this.setNodeProperty("src", this.src);
        this.owner.set("imageLoaded", false);
      }},
      {kind: "enyo.Image", classes: "center", src: "assets/spinner-large.gif", fit: true, showing: false, name: "spinner"}
    ],
    imageDidLoad: function () {
      var b;
      if (!this.$.image.get("src")) return false;
      this.set("imageLoaded", true);
      b = this.$.image.getBounds();
      this.$.image.addRemoveClass("tall", b.height > b.width);
      return false;
    }
  });
  
}());