(function () {

  var statusTransform = function (value) {
    return value === enyo.Collection.LOADING? true: false;
  };

  enyo.kind({
    name: "Flickr.Header",
    kind: "onyx.Toolbar",
    bindings: [
      {from: "Flickr.connector.status", to: "$.spinner.showing", oneWay: true, transform: statusTransform}
    ],
    components: [
      {kind: "Flickr.Search"},
      {kind: "enyo.Image", src: "assets/spinner.gif", name: "spinner"}
    ]
  });
  
}());