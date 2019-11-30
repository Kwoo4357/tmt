let start = 0;
let isListEnd = false;

const parseJsonObjToOfferComponent = (jsonObject) => {
  let offerComponent = document.createElement('div');
  offerComponent.id = jsonObject._id;
  offerComponent.className = "offer-card";
  
  let offerComponentString = "";
  offerComponentString += "<div class='offer-summary'>" + jsonObject.summary + "</div>";
  offerComponentString += "<div class='offer-content'>" + jsonObject.content + "</div>";
  offerComponentString += "<div class='offer-pay'>"  + "급여 : <b>"+ jsonObject.pay + '</b> 원' + "</div>";
  offerComponentString += "<div class='offer-location'>" +"근무 지역 : <b>" + jsonObject.location + "</b></div>";
  offerComponentString += "<div class='offer-register-date'>" +"게시일 : "+ jsonObject.registerDate.split("T")[0] + "</div>";
  offerComponent.innerHTML = offerComponentString;
  
  return offerComponent;
};

const loadAndRenderList = () => {
  if(isListEnd) return;
  $.ajax({
    url: window.location.href + "?start=" + start,
    method: "GET",
    dataType: "json"
  }).done(jsonArray => {
      if (jsonArray.length < 5) isListEnd = true;
      start += jsonArray.length;
      jsonArray.map(jsonObject => {
        let offerComponent = parseJsonObjToOfferComponent(jsonObject);
        $(".offer-list").append(offerComponent);
      });
    }
  )
    .fail(() => {
      alert("data load fail");
    });
};

$(function () {
  $(window).scroll(function () {
    let $window = $(this);
    let scrollTop = $window.scrollTop();
    let windowHeight = $window.height();
    let documentHeight = $(document).height();
    
    if (scrollTop + windowHeight + 30 > documentHeight) {
      loadAndRenderList();
    }
  });
  loadAndRenderList();
});
