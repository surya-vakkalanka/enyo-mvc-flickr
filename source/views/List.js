enyo.kind({
  name: "Flickr.RowController",
  kind: "enyo.ModelController",
  create: function () {
    this.inherited(arguments);
    this.binding({
      from: "Flickr.connector.selectedCid",
      to: "selectedCid",
      oneWay: true
    });
  },
  handlers: {
    ontap: "tapped"
  },
  published: {
    url: null,
    selectedCid: null,
    selectedImageUrl: null
  },
  url: enyo.Computed(function () {
    return enyo.format("http://farm%..static.flickr.com/%./%._%.",
      this.get("farm"), this.get("server"), this.get("id"), this.get("secret"));
  }),

  tapped: function () {
    
    // LEFT OFF HERE: maybe use as object controller too and push
    // reference to image? let views intuitively use the correct
    // url?
    
    Flickr.connector.set("selectedCid", this.model.cid);
    this.owner.set("isSelected", true);
  },
  selectedCidChanged: function () {
    if (this.selectedCid === this.model.cid) return;
    this.owner.set("isSelected", false);
  }
});

enyo.kind({
  name: "Flickr.Image",
  kind: "enyo.Image",
  classes: "thumbnail",
  published: {
    url: null,
    thumbnail: null,
    original: null
  },
  thumbnail: enyo.Computed(function () {
    return this.get("url") + "_s.jpg";
  }, "url"),
  original: enyo.Computed(function () {
    return this.get("url") + ".jpg";
  }, "url")
});

enyo.kind({
  name: "Flickr.Row",
  classes: "row",
  controllerClass: "Flickr.RowController",
  published: {
    isSelected: false
  },
  components: [
    {kind: "Flickr.Image", bindProperty: "url", bindTarget: "url", name: "image"},
    {bindProperty: "title", classes: "row-title", name: "title"}
  ],
  isSelectedChanged: function () {
    this.addRemoveClass("selected", this.isSelected);
  }
});

enyo.kind({
  name: "Flickr.List",
  kind: "enyo.CollectionRepeater",
  controller: "Flickr.connector",
  components: [
    {kind: "Flickr.Row"}
  ]
});