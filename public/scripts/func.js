// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {

  if (mq.matches) {
      $('body, .row').addClass('v-align')
  } else {
    $('body, .row').removeClass('v-align')
  }

}
