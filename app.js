const remarksInput = document.querySelector("#remarks");
const ol = document.querySelector("ol");
const category = document.querySelector("#language")
const total = document.querySelector("#total");
const price = document.querySelector("#price");

const allTodos = [];

function renderTodo() {
  ol.innerHTML = "";

  for (let i = 0; i < allTodos.length; i++) {
    ol.innerHTML += `
      <li>
        ${allTodos[i].category}
        (${allTodos[i].remarks})
        - ${allTodos[i].date}

        <div class="actions">
          <button onclick="deleteTodo(${i})">Delete</button>
          <button onclick="editTodo(${i})">Edit</button>
        </div>
      </li>
    `;
  }
}
let date = new Date()
today = date.getDate()
todayMonth = date.toLocaleString("default", { month: "short" }) 
todayYear = date.getFullYear()


function addTodo() {
  
  // allTodos.push(category.value +  `(${remarksInput.value})`+ `(${today} , ${todayMonth} , ${todayYear})` , price.value );
  allTodos.push({
    category: category.value,
    remarks: remarksInput.value,
    amount: Number(price.value),
    date: `${today} ${todayMonth} ${todayYear}`
  });
  renderTodo();
  totalExpense()
  remarksInput.value = "";
  category.value = "";
  price.value= "";
}

function deleteTodo(index) {
  console.log("todo deleted", index);
  allTodos.splice(index, 1);
  renderTodo();
  totalExpense()
}
function editTodo(index) {
  console.log("todo edited", index);
  const updatedVal = prompt("enter updated value", allTodos[index]);
  allTodos[index] = updatedVal
  renderTodo()
  totalExpense()
}

function totalExpense() {
  let sum = 0;

  for (let i = 0; i < allTodos.length; i++) {
    sum += allTodos[i].amount;
  }

  total.innerHTML = "Total Expense: Rs " + sum;
}
totalExpense()