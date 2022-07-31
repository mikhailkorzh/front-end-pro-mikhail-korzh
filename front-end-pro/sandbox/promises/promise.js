let a = 7;

//console.log(a);

let b = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve((a = 99));
  }, 2000);
});

b.then(function () {
  console.log(a);
});

// async function f1() {
//   await fetch("https://rickandmortyapi.com/api/episode/7")
//   .then(data => data.json())
//   .then(data => console.log(data.name))
// }

// async function f2(func) {
//   console.log(func.id);
// }

// let res = {};

// async function f3() {
//   await fetch("https://rickandmortyapi.com/api/episode/7")
//     .then((data) => data.json())
//     .then(setRes)
//     .then(display);
// }

// let setRes = (data) => {
//   return (res = data);
// };

// function display(data) {
//   console.log(data.name);
// }

// f3();

/////////////////////////////

// console.log("Request data...");

// setTimeout(() => {
//   console.log("Preparing data...");
//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received!");
//   }, 3000);
// }, 2000);

console.log("Request data...");

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparing data...");
    const backendData = {
      server: "aws",
      port: 2000,
      status: "working",
    };
    resolve(backendData);
  }, 2000);
});

p.then((data) => {
  console.log("Promice#1 received!", data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  });
})
  .then((clientData) => {
    console.log("Promice#2 received!", clientData);
  })
  .catch((err) => console.error("Error: ", err));

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

sleep(4000).then(() => console.log("after 4s"));

Promise.all([sleep(5000), sleep(6000)]).then(() => {
  console.log("All promises");
});

Promise.race([sleep(5000), sleep(2000)]).then(() => {
  console.log("R promises");
});

//////////////////////////////////////////

let myFunc = (callBack) => {
  const a = [1, 2, 3];
  const elem = document.getElementsByClassName("out1");
  console.log(elem);
  callBack(elem, a);
};

let out = (elem, arr) => {
  elem.innerHTML = arr.join("-");
};

myFunc(out);
