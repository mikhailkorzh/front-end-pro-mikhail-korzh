const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let myColor = "black";
const palette = document.getElementById("color");

const freeStyleDrawButton = document.getElementById("freeStyle");
const linesDrawButton = document.getElementById("line");

freeStyleDrawButton.addEventListener("click", drowInFreeStyle);

linesDrawButton.addEventListener("click", drawLines);

function drowInFreeStyle() {
  ctx.clearRect(0, 0, 400, 200);
  palette.value = "#000000";
  canvas.onclick = null;
  canvas.onmousedown = function () {
    canvas.onmousemove = function (event) {
      let x = event.offsetX;
      let y = event.offsetY;
      ctx.fillRect(x - 5, y - 5, 5, 5);
      palette.oninput = function () {
        myColor = this.value;
        ctx.fillStyle = myColor;
        console.log(myColor);
      };
    };
    canvas.onmouseup = function () {
      canvas.onmousemove = null;
    };
  };
}

function drawLines() {
  canvas.onmousemove = null;
  canvas.onmousedown = null;
  ctx.clearRect(0, 0, 400, 200);
  palette.value = "#000000";
  ctx.lineWidth = "5";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  canvas.onclick = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
    palette.oninput = function () {
      myColor = this.value;
      ctx.strokeStyle = myColor;
      ctx.beginPath();
      ctx.moveTo(x, y);
      console.log(myColor);
    };
  };
}
