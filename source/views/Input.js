enyo.kind({
  name: "Flickr.Input",
  kind: "onyx.Input",
  handlers: {
    onchange: "changed"
  },
  changed: function () {
    // TODO: this really points out something interesting
    // about the way enyo.Input works...
    this.set("value", this.get("value"));
  }
});