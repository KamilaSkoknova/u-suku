const day1Btn = document.getElementById("day1-btn");
const day2Btn = document.getElementById("day2-btn");
const day3Btn = document.getElementById("day3-btn");

day1Btn.addEventListener("click", function() {
  document.getElementById("day2").style.display = "none";
  document.getElementById("day3").style.display = "none";

  document.getElementById("day1").style.display = "block";
});

day2Btn.addEventListener("click", function() {
  document.getElementById("day1").style.display = "none";
  document.getElementById("day3").style.display = "none";

  document.getElementById("day2").style.display = "block";
});

day3Btn.addEventListener("click", function() {
  document.getElementById("day2").style.display = "none";
  document.getElementById("day1").style.display = "none";

  document.getElementById("day3").style.display = "block";
});

window.addEventListener ("scroll", function() {
  document.getElementById("btn-to-top").style.visibility = "visible";
})
