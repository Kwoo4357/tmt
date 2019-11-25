$.ajax({
  url: window.location.href + "?start=0",
  method: "GET",
  dataType: "json"
})
  .done(json => {console.log(json);})
  .fail(()=>{alert("data load fail")});

