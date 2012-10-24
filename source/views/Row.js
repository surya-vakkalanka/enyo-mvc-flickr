
enyo.kind({
  name: "Flickr.Row",
  classes: "row enyo-border-box",
  controllerClass: "Flickr.RowController",
  published: {
    isSelected: false
  },
  bindings: [
    {from: "controller.isSelected", to: "isSelected", oneWay: true}
  ],
  components: [
    {kind: "Flickr.Image", bindProperty: "smallImageUrl", bindTarget: "src", name: "image"},
    {bindProperty: "title", classes: "row-title", name: "title"}
  ],
  isSelectedChanged: function () {
    this.addRemoveClass("selected", this.isSelected);
  }
});