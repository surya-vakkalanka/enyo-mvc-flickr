enyo.kind({
  name: "Flickr.DevStats",
  classes: "dev-stats",
  bindings: [
    {from: "Flickr.connector.length", to: "$.length.content", oneWay: true},
    {from: "Flickr.connector.selectedCid", to: "$.cid.content", oneWay: true},
    {from: "Flickr.connector.lastResultLength", to: "$.lastLength.content", oneWay: true},
    {from: "Flickr.connector.page", to: "$.page.content", oneWay: true},
    {from: "Flickr.connector.totalAvailable", to: "$.available.content", oneWay: true}
  ],
  components: [
    {components: [
      {tag: "label", content: "Collection Length: "},
      {tag: "span", content: 0, name: "length"}]},
    {components: [
      {tag: "label", content: "Selected cid: "},
      {tag: "span", name: "cid"}]},
    {components: [
      {tag: "label", content: "Last result length: "},
      {tag: "span", name: "lastLength"}]},
    {components: [
      {tag: "label", content: "Current page: "},
      {tag: "span", name: "page"}]},
    {components: [
      {tag: "label", content: "Available total: "},
      {tag: "span", name: "available"}]}
  ]
});