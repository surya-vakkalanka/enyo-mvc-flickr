enyo.kind({
  name: "Flickr.ListController",
  kind: "enyo.CollectionListController",
  published: {
    selectedCid: null
  },
  bindings: [
    {from: "Flickr.connector.collection", to: "collection"},
    {from: "selectedCid", to: "Flickr.connector.selectedCid", oneWay: true}
  ],
  setupItem: function (inSender, inEvent) {
    var m = this.collection.at(inEvent.index),
        c = this.collection.at(inEvent.index+1);
    this.inherited(arguments);
    m.set({selected: inEvent.selected? true: false});
    if (inEvent.selected) this.set("selectedCid", m.cid);
    this.owner.$.more.canGenerate = !c;
  },
  showMore: function () {
    Flickr.connector.showMore();
    return true;
  }
});