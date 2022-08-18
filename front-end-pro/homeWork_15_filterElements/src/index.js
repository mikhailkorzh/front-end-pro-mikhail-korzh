import "./styles/style.css";

const getCharactersButton = document.getElementById("button");
const container = document.querySelector("div.container");
const maleCheckBox = document.getElementById("male");
const femaleCheckBox = document.getElementById("female");
const aliveCheckBox = document.getElementById("alive");
const deadCheckBox = document.getElementById("dead");

maleCheckBox.addEventListener("click", () => {
  getCharacters(maleCheckBox, charactersList, "Male");
});

femaleCheckBox.addEventListener("click", () => {
  getCharacters(femaleCheckBox, charactersList, "Female");
});

aliveCheckBox.addEventListener("click", () => {
  getCharacters(aliveCheckBox, charactersList, "Alive");
});

deadCheckBox.addEventListener("click", () => {
  getCharacters(deadCheckBox, charactersList, "Dead");
});

let charactersList = [];

const charactesID = function getCharactesID() {
  let charactersArray = [];
  for (let i = 0; i < 299; i++) {
    charactersArray.push(i);
  }
  return charactersArray.toString();
};

const charactersApi = `https://rickandmortyapi.com/api/character/${charactesID()}`;

showCharacters();

async function showCharacters() {
  await fetch(charactersApi)
    .then((data) => data.json())
    .then(setData)
    .then(drawCharacter);
}

function setData(data) {
  return (charactersList = data);
}

function drawCharacter(data) {
  console.log(data);
  data.forEach((element) => {
    createCard(element);
  });
}

function createCard(character) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("title");
  const cardTitleH1 = document.createElement("h1");
  cardTitleH1.innerHTML = character.name;
  cardTitle.append(cardTitleH1);

  const cardStatus = document.createElement("div");
  cardStatus.classList.add("status");
  const cardLiveStatus = document.createElement("div");
  cardLiveStatus.classList.add("live-status");
  character.status === "Dead" ? cardLiveStatus.classList.add("dead") : "";

  const cardStatusP = document.createElement("p");
  const cardStatusPText = document.createTextNode(
    `${character.species} -- ${character.status}`
  );
  cardStatus.append(cardLiveStatus);
  cardStatusP.append(cardStatusPText);
  cardStatus.append(cardStatusP);
  cardTitle.append(cardStatus);
  cardInfo.append(cardTitle);

  const cardContent = document.createElement("div");
  cardContent.classList.add("content");
  const cardContentText = document.createTextNode(character.location.name);
  cardContent.append(cardContentText);
  cardInfo.append(cardContent);

  card.append(cardInfo);

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const image = document.createElement("img");
  image.src = character.image;
  image.alt = "Some image";
  cardImage.append(image);
  card.append(cardImage);

  container.append(card);
}

function getCharacters(webElement, characters, option) {
  container.replaceChildren();
  if (webElement.checked === true) {
    disableUnusedCheckboxes(option);
    filterCharacters_(characters, option);
  } else {
    container.replaceChildren();
    drawCharacter(characters);
  }
}

function disableUnusedCheckboxes(option) {
  const checkboxData = [
    {
      name: maleCheckBox,
      status: "Male",
    },
    {
      name: femaleCheckBox,
      status: "Female",
    },
    {
      name: aliveCheckBox,
      status: "Alive",
    },
    {
      name: deadCheckBox,
      status: "Dead",
    },
  ];

  checkboxData.forEach((element) => {
    if (element.status != option) {
      element.name.checked = false;
    }
  });
}

function filterCharacters_(characters, filterValue) {
  characters.forEach((element) => {
    if (element.gender === filterValue || element.status === filterValue) {
      createCard(element);
    }
  });
}
