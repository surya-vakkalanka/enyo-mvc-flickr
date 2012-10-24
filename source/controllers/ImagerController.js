enyo.kind({
  name: "Flickr.ImagerController",
  kind: "enyo.Controller",
  published: {
    selectedCid: null,
    imageUrl: null
  },
  bindings: [
    {from: "Flickr.connector.selectedCid", to: "selectedCid", oneWay: true}
  ],
  selectedCidChanged: function () {
    var cid = this.selectedCid, m;
    if (!cid) return;
    
    // TODO: this is an example of where using the store as the
    // global cache is quite handy...
    m = Flickr.connector.collection.getByCid(cid);
    if (!m) this.set("imageUrl", null);
    else this.set("imageUrl", m.get("largeImageUrl"));
  }
});