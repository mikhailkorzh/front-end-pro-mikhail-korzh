let info = document.getElementsByClassName("text");

function changeLastChildColorFont() {
  let random = Math.floor(Math.random() * info.length);
  for (let i = 0; i < info.length; i++) {
    if (i === random) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      info[i].style.color = "#" + randomColor;
      break;
    }
  }
}

function replaceBlocks() {
  let footer = document.getElementById("footer");
  let main = document.getElementById("main");
  footer.replaceWith(main.cloneNode(true));
  main.replaceWith(footer.cloneNode(true));
}

genNew.addEventListener("click", changeLastChildColorFont);

changeLastChildColorFont();
replaceBlocks();

console.log(info);
