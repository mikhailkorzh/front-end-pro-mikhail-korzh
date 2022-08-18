//////////////////////////////Task#1////////////////////////////////////

const showMessage = new Promise((resolve) => {
  setTimeout(() => {
    resolve((message = "Hello my young Padawan! Wanna learn JS?"));
  }, 3000);
});

showMessage.then(() => {
  console.log(message);
});

//////////////////////////////Task#2////////////////////////////////////

const random = new Promise(function (resolve, reject) {
  const randomValue = Math.floor(Math.random() * 10);
  if (randomValue % 2 === 0) {
    resolve(randomValue);
  } else {
    reject(randomValue);
  }
});

random
  .then((randomData) => {
    console.log(randomData);
  })
  .catch((oddVal) =>
    console.error(
      `Error: ${oddVal} is odd value. Please generate it one more time`
    )
  );

//////////////////////////////Task#3////////////////////////////////////
console.log("first call")

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

async function showMessageAfterDelay() {
  await delay(4000).then(() => console.log("second call"));
}

showMessageAfterDelay();