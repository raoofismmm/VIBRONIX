// Event start: 8 Jan, 6:00 PM IST. Change the year here if needed.
const start = new Date("2027-01-08T18:00:00+05:30").getTime();
const ids = ["d","h","m","s"].map(i => document.getElementById(i));
function tick(){
  let t = Math.max(0, start - Date.now());
  const v = [Math.floor(t/864e5), Math.floor(t%864e5/36e5), Math.floor(t%36e5/6e4), Math.floor(t%6e4/1e3)];
  ids.forEach((el,i) => el.textContent = String(v[i]).padStart(2,"0"));
}
tick(); setInterval(tick, 1000);
