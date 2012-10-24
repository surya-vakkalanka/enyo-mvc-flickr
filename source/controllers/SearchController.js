enyo.kind({
  name: "Flickr.SearchController",
  kind: "enyo.CollectionController",
  collection: "Flickr.ImagesCollection",
  published: {
    searchString: null,
    page: 1,
    total: 0,
    selectedCid: null,
    selectedImageUrl: null,
    
    // dev stuff
    lastResultLength: 0,
    totalAvailable: 0
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
      this.page = 1;
      enyo.asyncMethod(this, this.search);
      this.set("selectedCid", null);
    }
  },
  
  processResults: function(results) {
    
    // for the developers block only...
    this.set("lastResultLength", results.photos.photo.length);
    this.set("totalAvailable", results.photos.total);
    
    if (results.stat === "ok") {
      this.stopNotifications();
      this.set("total", results.total);
      if (this.get("page") > 1) {
        this.add(results.photos.photo, {silent: true});
  
        // avoid unnecessarily setting off the "add" event
        // since we know we don't have anyone listening...
        this.collection.didAdd();
      } else this.reset(results.photos.photo);
      this.startNotifications();
    }
  },
  
  showMore: function () {
    this.set("page", this.page+1);
    this.search();
  }
});