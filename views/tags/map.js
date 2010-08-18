function(doc) {
  if(!doc.tags) { return; }
  doc.tags.split(",").forEach(function(tag) {
    emit(tag.replace(/^\s|\s$/, ""), 1);
  });
}
