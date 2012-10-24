enyo.kind({
  name: "Flickr.RowController",
  kind: "enyo.ModelController",
  create: function () {
    this.inherited(arguments);
    this.binding({
      from: "Flickr.connector.selectedCid",
      to: "selectedCid",
      oneWay: true
    });
  },
  handlers: {
    ontap: "tapped"
  },
  published: {
    url: null,
    selectedCid: null,
    selectedImageUrl: null
  },

  tapped: function () {
    Flickr.connector.set("selectedCid", this.model.cid);
    this.set("isSelected", true);
  },
  selectedCidChanged: function () {
    if (this.selectedCid === this.model.cid) return;
    this.set("isSelected", false);
  }
});