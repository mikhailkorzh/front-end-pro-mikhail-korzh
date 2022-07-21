const trafficLightLamps = document.querySelectorAll(".circle");
let activeLamp = 0;

setInterval(() => {
  lamplsSwitcher();
}, 1500);

function lamplsSwitcher() {
  trafficLightLamps[activeLamp].className = "circle";
  activeLamp++;

  if (activeLamp > 2) {
    activeLamp = 0;
  }

  const currentLight = trafficLightLamps[activeLamp];

  console.log(currentLight);
  console.log(`active lamp is ${trafficLightLamps[activeLamp].getAttribute("color")}`);
  currentLight.classList.add(currentLight.getAttribute("color"));
}

