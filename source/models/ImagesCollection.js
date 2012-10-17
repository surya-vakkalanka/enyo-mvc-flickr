enyo.kind({
  name: "Flickr.ImagesCollection",
  kind: "enyo.Collection",
  model: "Flickr.ImageModel",
  url: "http://api.flickr.com/services/rest/",
  fetch: function (options) {
    var c = options.success;
    options.url = this.url;
    options.success = enyo.bind(this, this.didFetch, c);
    this.set("status", enyo.Collection.LOADING);
    Flickr.store.sync(options);
  },
  didFetch: function (next, sender, response) {
    this.set("status", enyo.Collection.OK);
    next(response);
  }
});