function(doc) {
  if(!doc.tags) { return; }
  if(!doc.created_at) { return; }
  doc.tags.split(",").forEach(function(tag) {
    emit([tag.replace(/^\s|\s$/, ""), doc.created_at], doc);
  });
}
