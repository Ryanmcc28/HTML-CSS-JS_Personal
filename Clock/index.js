function findTime() {
  let temp = new Date();

  let time = "";

  time += temp.getHours().toString().padStart(2, "0");
  time += temp.getMinutes().toString().padStart(2, "0");
  time += temp.getSeconds().toString().padStart(2, "0");
  time += temp.getMilliseconds().toString().padStart(3, "0");

  for (let index = 0; index < time.length; index++) {
    const element = time[index];
    document.getElementById(`p${index}`).src = `${element}.png`;
  }
}

setInterval(findTime, 1);
findTime();
