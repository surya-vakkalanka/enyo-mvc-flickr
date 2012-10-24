enyo.kind({
  name: "Flickr.List",
  kind: "enyo.CollectionList",
  controller: "Flickr.ListController",
  classes: "list-scroller",
  fit: true,
  components: [
    {name: "item", kind: "Flickr.Row"},
    {classes: "more-row", name: "more", components: [
      {kind: "onyx.Button", classes: "onyx-dark more-button", content: "more photos", ontap: "showMore"},
      {kind: "enyo.Image", src: "assets/spinner.gif", classes: "more-spinner", name: "spinner"}]}
  ]
});


//enyo.kind({
//  name: "Flickr.List",
//  kind: "enyo.Scroller",
//  classes: "list-scroller",
//  controller: "Flickr.connector",
//  fit: true,
//  bindings: [
//    {from: "Flickr.connector.length", to: "$.more.showing", oneWay: true},
//    {from: "Flickr.connector.status", to: "$.spinner.showing", oneWay: true, transform: Flickr.statusTransform}
//  ],
//  components: [
//    {kind: "enyo.CollectionRepeater", controller: "Flickr.connector", components: [{kind: "Flickr.Row"}]},
//    {classes: "more-row", name: "more", components: [
//      {kind: "onyx.Button", classes: "onyx-dark more-button", content: "more photos", ontap: "showMore"},
//      {kind: "enyo.Image", src: "assets/spinner.gif", classes: "more-spinner", name: "spinner"}]}
//  ]
//});