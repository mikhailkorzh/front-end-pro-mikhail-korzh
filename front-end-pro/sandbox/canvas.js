const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let myColor = "black";

document.getElementById("color").oninput = function () {
  myColor = this.value;
  console.log(myColor);
};

document.getElementById('clicked').onclick = function(){
  console.log('clicked');
}

document.getElementById('clicked').addEventListener('click', c)

// ctx.fillStyle = "red";
// ctx.fillRect(100, 50, 150, 75);
// ctx.fillStyle = "blue";
// ctx.fillRect(150, 100, 100, 50);

// canvas.addEventListener("click", function (e) {
//   ctx.clearRect(100, 50, 150, 75);
// });

// ctx.strokeStyle = "green";
// ctx.lineWidth = "10";
// ctx.rect(50, 10, 100, 100);
// ctx.stroke();
// ctx.fillStyle = "orange";
// ctx.fill();

// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.lineWidth = "10";
// ctx.moveTo(100, 50);
// ctx.lineTo(150, 150);
// ctx.lineCap = "round";
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "blue";
// ctx.lineWidth = "10";
// ctx.moveTo(150, 150);
// ctx.lineTo(200, 50);
// ctx.lineCap = "round";
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "blue";
// ctx.lineWidth = "10";
// ctx.moveTo(150, 150);
// ctx.lineTo(250, 100);
// ctx.lineCap = "round";
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "blue";
// ctx.lineWidth = "10";
// ctx.moveTo(200, 50);
// ctx.lineTo(250, 100);
// ctx.lineCap = "round";
// //ctx.lineCap = 'butt';
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "yellow";
// ctx.lineWidth = "5";
// ctx.moveTo(300, 200);
// ctx.lineTo(350, 50);
// ctx.lineTo(400, 150);
// //ctx.lineTo(300, 200);
// ctx.closePath();
// ctx.fillStyle = "red";

// ctx.stroke();
// ctx.fill();

// ctx.clearRect(0, 0, 400, 200);
//ctx.clear;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(x, y);
// canvas.onmousedown = function (event) {
//   canvas.onmousemove = function (event) {
//     let x = event.offsetX;
//     let y = event.offsetY;
//     ctx.fillRect(x - 5, y - 5, 5, 5);
//     ctx.fillStyle = myColor;
//   };
//   canvas.onmouseup = function () {
//     canvas.onmousemove = null;
//   };
// };

const pi = Math.PI;

// ctx.arc(150, 100, 75, 0, 2 * pi, false);
// ctx.lineWidth = "5";
// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "green";
// ctx.stroke();
// ctx.fill();

// ctx.clearRect(0, 0, 400, 200);

canvas.onmousemove = function (event) {
  let x = event.offSetX;
  ctx.clearRect(0, 0, 400, 200);
  ctx.arc(200, 100, Math.abs(x - 200), 0, 2 * pi, false);
  ctx.stroke();
  ctx.fill();
};


document.getElementById("clicked").addEventListener("click", myFunction);

function myFunction() {
  console.log('clicked');
}