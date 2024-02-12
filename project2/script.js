// JavaScript for Countdown Timer
function countdown() {
  var countDownDate = new Date().getTime() + 600000; // 10 minutes
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if less than 10
    seconds = seconds < 10 ? "0" + seconds : seconds; // Add leading zero if less than 10
    document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}
countdown();

// JavaScript for Slide-in Form
setTimeout(function() {
  document.getElementById("slide-in-form").style.display = "block";
}, 15000);

// JavaScript for Sign Up Button
function signUp() {
  document.getElementById("slide-in-form").style.display = "block";
}
