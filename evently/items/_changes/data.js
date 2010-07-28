function(data) {
  // $.log(data)
  var d;
  return {
    items : data.rows.map(function(r) {
      r.value.tags = r.value.tags.split(', ').map(function(t) {
        return {
          tag : t,
          uri : "#/tag/"+encodeURIComponent(t)
        };
      });
      return r.value;
    })
  };
}
