enyo.kind({
  name: "Flickr.RowController",
  kind: "enyo.ModelController",
  url: enyo.Computed(function () {
    return enyo.format("http://farm%..static.flickr.com/%./%._%.",
      this.get("farm"), this.get("server"), this.get("id"), this.get("secret"));
  })
});

enyo.kind({
  name: "Flickr.Image",
  kind: "enyo.Image",
  classes: "thumbnail",
  published: {
    url: null,
    thumbnail: null
  },
  thumbnail: enyo.Computed(function () {
    return this.get("url") + "_s.jpg";
  }, "url"),
  thumbnailChanged: function () {
    this.set("src", this.get("thumbnail"));
  }

});

enyo.kind({
  name: "Flickr.Row",
  classes: "row",
  controllerClass: "Flickr.RowController",
  components: [
    {kind: "Flickr.Image", bindProperty: "url", bindTarget: "url", name: "image"},
    {name: "title", bindProperty: "title", classes: "row-title"}
  ]
});

enyo.kind({
  name: "Flickr.List",
  kind: "enyo.CollectionRepeater",
  controller: "Flickr.connector",
  components: [
    {kind: "Flickr.Row"}
  ]
});