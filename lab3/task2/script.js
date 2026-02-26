'use strict';

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.className = 'todo-item';

  const leftBlock = document.createElement('div');
  leftBlock.className = 'todo-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done');
  });

  leftBlock.appendChild(checkbox);
  leftBlock.appendChild(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';

  const icon = document.createElement('img');
  icon.src = 'https://cdn-icons-png.flaticon.com/256/18260/18260804.png';
  icon.alt = 'Delete';

  deleteBtn.appendChild(icon);

  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(leftBlock);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
});