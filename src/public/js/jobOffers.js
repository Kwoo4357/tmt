let start = 0;
let isListEnd = false;
let modal = document.getElementById("offer-information-modal");
let span = document.getElementsByClassName("close")[0];



const parseJsonObjToOfferComponent = (jsonObject) => {
  let offerComponent = document.createElement('div');
  offerComponent.id = jsonObject._id;
  offerComponent.className = "offer-card";
  
  let offerComponentString = "";
  offerComponentString += "<div class='offer-summary'>" + jsonObject.summary + "</div>";
  offerComponentString += "<div class='offer-content'>" + jsonObject.content + "</div>";
  offerComponentString += "<div class='offer-pay'>" + "급여 : <b>" + jsonObject.pay + '</b> 원' + "</div>";
  offerComponentString += "<div class='offer-location'>" + "근무 지역 : <b>" + jsonObject.location + "</b></div>";
  offerComponentString += "<div class='offer-register-date'>" + "게시일 : " + jsonObject.registerDate.split("T")[0] + "</div>";
  offerComponent.innerHTML = offerComponentString;
  
  return offerComponent;
};

const setModalContent = (jsonObject) => {
  let modalContent = document.getElementById("offer-information");
  let contentHTML = "";
  
  contentHTML += "<div class='modal-title'>" + jsonObject.summary + "</div>";
  contentHTML += "<div class='modal-text'>" + jsonObject.content + "</div>";
  contentHTML += "<div class='modal-sub-information'>" + "급여 : <b>" + jsonObject.pay + '</b> 원' + "</div>";
  contentHTML += "<div class='modal-sub-information'>" + "근무 지역 : " + jsonObject.location + "</div>";
  contentHTML += "<div class='modal-sub-information'>" + "게시일 : " + jsonObject.registerDate.split("T")[0] + "</div>";
  contentHTML += "<div class='employer-information'>";
  contentHTML += "<div class='employer-information-label'> 작성자 정보 </div>";
  contentHTML += "<div class='modal-sub-information'>" + "이름 : " + jsonObject.employerName + "</div>";
  contentHTML += "<div class='modal-sub-information'>" + "연락처 : " + jsonObject.employerPhone + "</div>";
  contentHTML += "<div class='modal-sub-information'>" + "메일 : " + jsonObject.employerMail + "</div>";
  contentHTML += "</div>";
  
  modalContent.innerHTML = contentHTML;
};

const offerCardClickListener = (event) => {
  $.ajax({
    url: window.location.href + "/details/" + event.currentTarget.id,
    method: "GET",
    dataType: "json"
  })
    .done(json => {
      setModalContent(json);
      modal.style.display = "block";
    })
    .fail(() => {
      alert("data load fail");
    });
};


const loadAndRenderOffers = () => {
  if (isListEnd) return;
  $.ajax({
    url: window.location.href + "?start=" + start,
    method: "GET",
    dataType: "json"
  }).done(jsonArray => {
      if (jsonArray.length < 5) isListEnd = true;
      start += jsonArray.length;
      jsonArray.map(jsonObject => {
        let offerComponent = parseJsonObjToOfferComponent(jsonObject);
        offerComponent.addEventListener('click', offerCardClickListener);
        $(".offer-list").append(offerComponent);
      });
    }
  )
    .fail(() => {
      alert("data load fail");
    });
};

const parseJsonObjToLocation = (jsonObject) => {
  let locationRadio = document.createElement('div');
  locationRadio.innerHTML = "<li>" + '<input type="radio" name="location" value="' + jsonObject.name + '"> ' + jsonObject.name + "</li>";
  return locationRadio.firstChild;
};

const loadAndRenderLocations = () => {
  if (isListEnd) return;
  $.ajax({
    url: window.location.href + "/locations",
    method: "GET",
    dataType: "json"
  }).done(jsonArray => {
      jsonArray.map(jsonObject => {
        let location = parseJsonObjToLocation(jsonObject);
        $(".location-list").append(location);
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
      loadAndRenderOffers();
    }
  });
  loadAndRenderOffers();
  loadAndRenderLocations();
});


// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) modal.style.display = "none";
};
