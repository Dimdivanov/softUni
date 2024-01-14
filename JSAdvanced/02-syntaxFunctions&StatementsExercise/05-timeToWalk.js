function timeToWalk(steps, footprintMeter, speed) {
  let distance = steps * footprintMeter;
  let speedMeters = speed / 3.6;
  let time = distance / speedMeters;

  let rest = Math.floor(distance / 500);
  time += rest * 60;

  let sec = Math.round(time % 60);
  let min = Math.floor(time / 60);
  let hours = Math.floor(min / 60);
  min -= hours * 60;

  let hoursPrt = hours < 10 ? `0${hours}` : `${hours}`;
  let minsPrt = min < 10 ? `0${min}` : `${min}`;
  let secPrt = sec < 10 ? `0${sec}` : `${sec}`;
  console.log(`${hoursPrt}:${minsPrt}:${secPrt}`);
}
timeToWalk(4000, 0.6, 5);
