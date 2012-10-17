(function () {

  window.main = main;

  function main () {
    enyo.singleton({
      name: "Flickr.connector",
      kind: "Flickr.SearchController"
    });
  }
  
}());