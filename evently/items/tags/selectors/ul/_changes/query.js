function(e) {
  var params = e.data.args[1];
  return {
    view : "docs-by-tag",
    limit : 25,
    startkey : [params.tag, {}],
    endkey : [params.tag],
    descending : true
  }
}
