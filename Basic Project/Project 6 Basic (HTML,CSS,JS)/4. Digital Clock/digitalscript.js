const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const seconeEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateclock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m< 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  seconeEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateclock();
  }, 1000);
}
updateclock();