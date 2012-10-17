enyo.kind({
  name: "Flickr.PictureView",
  kind: "enyo.FittableRows",
  classes: "picture-view",
  fit: true,
  bindings: [
    {from: "Flickr.connector.selectedCid", to: "$.toolbar.showing", oneWay: true}
  ],
  components: [
    {kind: "onyx.Toolbar", components: [{kind: "onyx.Button", content: "Back", name: "back"}], name: "toolbar"},
    {kind: "Flickr.Imager"}
  ]
});