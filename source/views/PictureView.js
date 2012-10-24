enyo.kind({
  name: "Flickr.PictureView",
  kind: "enyo.FittableRows",
  classes: "picture-view enyo-fit",
  fit: true,
  components: [
    {kind: "Flickr.Imager"}
  ]
});