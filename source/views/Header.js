enyo.kind({
  name: "Flickr.Header",
  kind: "onyx.Toolbar",
  bindings: [
    {from: "Flickr.connector.status", to: "$.spinner.showing", oneWay: true, transform: Flickr.statusTransform}
  ],
  components: [
    {kind: "Flickr.Search"},
    {kind: "enyo.Image", src: "assets/spinner.gif", name: "spinner"}
  ]
});