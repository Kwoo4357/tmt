$('#offer-register-form').on('submit', function (e) {
  e.preventDefault();
  $.ajax({
    url: window.location.pathname,
    type: "POST",
    data: $(this).serialize()
  }).done(()=>{alert("제출 완료"); this.reset();})
    .fail(()=>{alert("오류 발생")});
});
