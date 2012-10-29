
enyo.kind({
  name: "Flickr.Row",
  kind: "enyo.CollectionRow",
  controller: "Flickr.RowController",
  classes: "row enyo-border-box",
  published: {
    isSelected: false
  },
  bindings: [
    {from: "controller.selected", to: "isSelected", oneWay: true}
  ],
  components: [
    {kind: "Flickr.Image", bindProperty: "smallImageUrl", bindTarget: "src", name: "image"},
    {bindProperty: "title", classes: "row-title", name: "title"}
  ],
  isSelectedChanged: function () {
    this.addRemoveClass("selected", this.isSelected);
  }
});