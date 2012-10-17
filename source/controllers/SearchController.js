enyo.kind({
  name: "Flickr.SearchController",
  kind: "enyo.CollectionController",
  collection: "Flickr.ImagesCollection",
  published: {
    searchString: null,
    page: 0,
    total: 0
  },
  
  search: function () {
    var p = {
      page: this.get("page"),
      string: this.get("searchString"),
      success: enyo.bind(this, this.processResults)
    };
    enyo.run(this.load, this, p);
  },
  
  searchStringChanged: function () {
    var s = this.get("searchString");
    if (s && s.length > 0) {
      this.search();
    }
  },
  
  processResults: function(results) {
    if (results.stat === "ok") {
      this.stopNotifications();
      this.set("total", results.total);
      this.reset(results.photos.photo);
      this.startNotifications();
    }
  }
});