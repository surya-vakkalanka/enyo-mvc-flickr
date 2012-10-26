enyo.kind({
  name: "Flickr.ImageModel",
  kind: "enyo.Model",
  imageUrlPrefix: enyo.Computed(function () {
    return enyo.format("http://farm%..static.flickr.com/%./%._%.",
      this.get("farm"), this.get("server"), this.get("id"), this.get("secret"));
  }),
  smallImageUrl: enyo.Computed(function () {
    return enyo.format("%._s.jpg", this.get("imageUrlPrefix"));
  }),
  largeImageUrl: enyo.Computed(function () {
    return enyo.format("%..jpg", this.get("imageUrlPrefix"));
  }),
  
  defaults: {
    selected: false
  }
});