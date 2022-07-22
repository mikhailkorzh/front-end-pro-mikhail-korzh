/*const list = document.querySelectorAll("ul > li:first-child");

for (let listElement of list) {
  console.log(listElement);
}

const list1 = document.querySelectorAll("ul.stars-list > li.star:first-child");*/

//console.log(list1);

/*for (let listElement of list1) {
  if (listElement.matches("li.star")) console.log(listElement);
}

const list2 = document.querySelectorAll("li.star");
for (const listElement of list2) {
  console.log(listElement.innerHTML);
}*/
//console.log(list2.closest('.stars-list'))
/*for (const cell of document.querySelectorAll("[cell-red]")) {
  let attribute = cell.getAttribute("cell-red");
  cell.style.background = attribute;
}*/

for (const cell of document.querySelectorAll("[cell-blue]")) {
  let attribute = cell.getAttribute("cell-blue");
  cell.style.background = attribute;
}

let flSkip = false;
if (!flSkip) console.log(flSkip);
console.log("/////////////////////");
for (let cell of document.querySelectorAll("[cell-red]")) {
  if (!flSkip) cell.setAttribute("cell-red", "lightRed");
  console.log(flSkip);
  flSkip = !flSkip;
}

let elem1 = document.getElementById("first-input");
elem1.onclick = () => {
  console.log("click");
};

elem1.addEventListener("mousedown", (event) =>
  console.log("moved mouse", event.target)
);

let elem2 = document.getElementById("second-input");

inputEventFn = (event) => {
  console.log("Hello", event.type, event.clientX, event.clientY);
  elem2.removeEventListener("click", inputEventFn);
  console.log("listener removed");
};

elem2.addEventListener("click", inputEventFn);

let form = document.getElementsByClassName("myForm");

console.log(document.forms.myForm);
console.log(document.forms[0].elements.fname.value);

document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(this.fname.value, this.lname.value);
});

document
  .getElementById("first-div")
  .addEventListener("click", () => console.log("div"));
document
  .getElementById("first-div-input")
  .addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("input", event.target.value);
  });

//////////////////////////////////////////////////////////////

let ul = document.getElementById("ul");
ul.addEventListener("click", function (event) {
  console.log(event.target);
  event.target.style.color = event.target.innerHTML;
});

let x, y, even = 0;

window.addEventListener("click", function (event) {
  console.log("Event target ====>", event);
  

//   if (even){
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
//     even = 0;
//   } else {
//     x = event.offsetX;
//     y = event.offsetY;
//     even = 1;
//   }
// ctx.beginPath();
//   ctx.moveTo(30, 50);
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
});

let el = document.getElementById("first-div");
el.addEventListener("input", function (event) {
  if (!parseInt(event.target.value)) {
    console.log("text only");
  } else {
    console.log(`${event.target.value} is digit`);
  }
});

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
ctx.strokeStyle = 'green';

let mouse = { x: 0, y: 0 };
let draw = false;

canvas.addEventListener('mousedown', function (e) {
  mouse.x = e.pageX - this.offsetLeft;
  console.log(e.pageX, e);
  mouse.y = e.pageY - this.offsetTop;
  console.log(e.pageY);
  draw = true;
  ctx.beginPath();
  ctx.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener('mousemove', function (e) {
  if (draw == true) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', function(e){              
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
  ctx.closePath();
  draw = false;
});
