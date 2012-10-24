enyo.kind({
  name: "Flickr.Store",
  kind: "enyo.Store",
  apiKey: "2a21b46e58d207e4888e1ece0cb149a5",
  pageSize: 200,
  method: "flickr.photos.search",
  format: "json",
  sync: function (options) {
    var p = this.paramsFor(options);
    return new enyo.JsonpRequest({url: options.url, callbackName: "jsoncallback"})
      .response(options.success).go(p);
  },
  paramsFor: function (options) {
    return {
      method: this.method,
      format: this.format,
      api_key: this.apiKey,
      per_page: this.pageSize,
      page: options.page || 1,
      text: options.string || ""
    };
  }
});