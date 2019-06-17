function setDate() {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");
  const allHands = document.querySelectorAll(".hand")

  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const minutesDegrees = (minutes / 60) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if(secondsDegrees === 90) {
    allHands.forEach(hand => hand.style.transition = "none")
} else {
    allHands.forEach(hand => hand.style.transition = "")
}
  
}
setInterval(setDate, 1000);

