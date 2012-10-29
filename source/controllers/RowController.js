enyo.kind({
  name: "Flickr.RowController",
  kind: "enyo.ModelController",
  published: {
    selectedCid: null
  },
  bindings: [
    {from: "Flickr.connector.selectedCid", to: "selectedCid", oneWay: true}
  ],
  handlers: {
    ontap: "tapped"
  },
  
  // for enyo.CollectionRepeater implementation
  //tapped: function () {
  //  return Flickr.connector.set("selectedCid", this.model.cid);
  //},
  
  // for enyo.CollectionList implementation
  tapped: function (inSender, inEvent) {
    Flickr.connector.set("selectedCid", Flickr.connector.collection.at(inEvent.index).cid);
  },
  
  // for enyo.CollectionRepeater implementation
  //selectedCidChanged: function () {
  //  console.log("selectedCidChanged?");
  //  var m = this.get("model"), s = this.get("selectedCid");
  //  // this only happens when new rows are created and bound before
  //  // the controller has been handed a model
  //  if (!m) return;
  //  return m.set({selected: m.cid === s});
  //}
});