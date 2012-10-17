enyo.kind({
  name: "Flickr.PictureView",
  kind: "enyo.FittableRows",
  classes: "picture-view",
  fit: true,
  components: [
    {kind: "onyx.Toolbar", components: [{kind: "onyx.Button", content: "Back"}]},
    {kind: "Flickr.Imager"}
  ]
});