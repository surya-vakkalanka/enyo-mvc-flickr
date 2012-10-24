enyo.kind({
  name: "Flickr.ListController",
  kind: "enyo.CollectionListController",
  bindings: [
    {from: "Flickr.connector.collection", to: "collection"}
  ]
});