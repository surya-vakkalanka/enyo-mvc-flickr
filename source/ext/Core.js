function main () {
  enyo.singleton({
    name: "Flickr.connector",
    kind: "Flickr.SearchController"
  });
  
  Flickr.statusTransform = function (value) {
    return value === enyo.Collection.LOADING? true: false;
  };
}