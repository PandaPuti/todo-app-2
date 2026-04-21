const inputBox = document.getElementById('input-box');
const todoList = document.getElementById('list-container');
const container = document.getElementById('container');

document.body.addEventListener('keypress', function(e){
  if(e.code === "Enter"){
    addTask();
  }
})

function addTask(){
  if(inputBox.value.trim() == ""){
    alert('First enter your task')
  }
  else{
    const listElement = document.createElement('li');
    listElement.innerText = inputBox.value;
    todoList.appendChild(listElement);
    const span = document.createElement('span');
    span.innerHTML = "\u00d7";
    listElement.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

todoList.addEventListener('click', function(e){
 if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData()
 }
 else if(e.target.tagName === 'SPAN'){
  e.target.parentElement.remove()
  saveData()
 }
}, false);


function saveData(){
  localStorage.setItem("data", todoList.innerHTML);
}

function showList(){
  // console.log(localStorage.getItem('data'));
  todoList.innerHTML = localStorage.getItem('data');
}
showList();

function clearTask(){
  todoList.innerHTML = '';
}

function toggleTheme(){
  container.classList.toggle('dark');
}