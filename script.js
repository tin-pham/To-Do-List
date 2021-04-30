const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');
const input = document.querySelector('input');

const toDoList = document.getElementById('to-do-list');

submitButton.addEventListener('click', () => {
  let div = document.createElement('div');
  toDoList.appendChild(div);

  let li = document.createElement('li');
  li.textContent = input.value;

  let delButton = deleteButton(div);
  let doneButton = doneBtn(div);
  div.appendChild(li);
  div.appendChild(delButton);
  div.appendChild(doneButton);
  input.value = '';
});

function deleteButton(div) {
  let deleleButton = document.createElement('button');

  deleleButton.textContent = 'X';

  deleleButton.addEventListener('click', () => {
    div.innerHTML = '';
  });

  return deleleButton;
}

function doneBtn(div) {
  let doneButton = document.createElement('button');

  doneButton.textContent = 'Done';

  doneButton.addEventListener('click', () => {
    div.innerHTML = '';
  });

  return doneButton;
}

clearButton.addEventListener('click', () => {
  toDoList.innerHTML = '';
});
