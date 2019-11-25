$.ajax({
  url: window.location.href + "?start=0",
  method: "GET",
  dataType: "json"
})
  .done(
    json => {
      console.log(json);
      json.map(jsonObject => {
        let offerCard = "<div class='offer-card'>";
        offerCard += "<div class='offer-summary'>" + jsonObject.summary + "</div>";
        offerCard += "<div class='offer-content'>" + jsonObject.content + "</div>";
        offerCard += "<div class='offer-pay'>" + jsonObject.pay + ' 원' + "</div>";
        offerCard += "<div class='offer-location'>" + jsonObject.location + "</div>";
        offerCard += "</div>";
        
        document.write(offerCard);
      })
    })
  .fail(() => {
    alert("data load fail")
  });

