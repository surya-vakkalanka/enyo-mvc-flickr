enyo.kind({
  name: "Flickr.Imager",
  classes: "imager",
  fit: true,
  components: [
    {kind: "enyo.Image", classes: "center image"},
    {kind: "enyo.Image", classes: "center", src: "assets/spinner-large.gif", fit: true}
  ]
});