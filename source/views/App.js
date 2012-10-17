enyo.app({
  name: "Flickr",
  layoutKind: "enyo.FittableRowsLayout",
  store: "Flickr.Store",
  components: [
    {kind: "enyo.Panels", arrangerKind: "enyo.CollapsingArranger", fit: true, components: [
      {kind: "Flickr.Main"},
      {kind: "Flickr.PictureView"}]}
  ]
});
