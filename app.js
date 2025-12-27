const remarksInput = document.querySelector("#remarks");
const ol = document.querySelector("ol");
const category = document.querySelector("#language")

const allTodos = [];

function renderTodo() {
  ol.innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    ol.innerHTML += `<li>
                ${allTodos[i]}
                <div class="actions">
                    <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
                    <button class="edit-btn" onclick="editTodo(${i})">Edit</button>
                </div>
            </li>`;
  }
}
let date = new Date()
today = date.getDate()
todayMonth = date.getMonth()
todayYear = date.getFullYear()


function addTodo() {
  allTodos.push(category.value +  `(${remarksInput.value})`+ `(${today} , ${todayMonth} , ${todayYear})` );

  renderTodo();
  remarksInput.value = "";
  category.value = "";
}

function deleteTodo(index) {
  console.log("todo deleted", index);
  allTodos.splice(index, 1);
  renderTodo();
}
function editTodo(index) {
  console.log("todo edited", index);
  const updatedVal = prompt("enter updated value", allTodos[index]);
  //   allTodos.splice(index , 1 , updatedVal)
  allTodos[index] = updatedVal

  renderTodo()
}

