enyo.kind({
  name: "Flickr.ListController",
  kind: "enyo.CollectionListController",
  published: {
    selectedCid: null
  },
  bindings: [
    {from: "Flickr.connector.collection", to: "collection"}
  ],
  setupItem: function (inSender, inEvent) {
    var m = this.collection.at(inEvent.index),
        c = this.collection.at(inEvent.index+1);
    m.set({selected: inEvent.selected? true: false});
    this.inherited(arguments);
    if (inEvent.selected) this.set("selectedCid", m.cid);
    this.owner.$.more.canGenerate = !c;
  },
  showMore: function () {
    Flickr.connector.showMore();
    return true;
  }
});