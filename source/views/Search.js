enyo.kind({
  name: "Flickr.Search",
  kind: "onyx.InputDecorator",
  layoutKind: "enyo.FittableColumnsLayout",
  classes: "search",
  bindings: [
    {from: "$.input.value", to: "Flickr.connector.searchString", oneWay: true}
  ],
  components: [
    {kind: "Flickr.Input", fit: true, value: "Japan", name: "input"},
    {kind: "enyo.Image", src: "assets/search-input-search.png"}
  ]
});