const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const table = document.querySelector('#table');

function createTable(arr) {
  for (let i = 0; i < array.length; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < array[i].length; j++) {
      const td = document.createElement('td');
      td.innerHTML = arr[i][j];
      console.log(td);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

createTable(array);


