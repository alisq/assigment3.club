$(".close").click(function(){
  $("#countdown-container").fadeOut(200)
})

var countDownDate = new Date("Mar 30, 2020 20:00:00").getTime();

calculate();


var x = setInterval(function() {
  calculate();

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    //$("#countdown").innerHTML = "EXPIRED";
  }
}, 1000);


function calculate() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#countdown").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
}