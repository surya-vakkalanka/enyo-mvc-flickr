enyo.app({
  name: "Flickr",
  store: "Flickr.Store",
  components: [
    {realtimeFit: true, kind: "enyo.Panels", arrangerKind: "enyo.CollapsingArranger", fit: true, components: [
      {kind: "Flickr.Main"},
      {kind: "Flickr.PictureView"}], classes: "panels enyo-unselectable enyo-fit"},
    {kind: "Flickr.DevStats"}
  ]
});
