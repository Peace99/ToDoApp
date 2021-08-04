var fillTodo = () => {
  let tasks = JSON.parse(window.localStorage.getItem("tasks"));
  for (i of tasks) {
    let list = document.querySelector("#list");
    let li = document.createElement("li");
    li.innerHTML =
      `<span>${i.value}</span>` + " " + `<button class="delBtn">DEL</button>`;

    list.insertBefore(li, list.childNodes[0]);
    let del = document.querySelectorAll(".delBtn");
    del[0].addEventListener("click", function () {
      let index=Number(li.getAttribute("id")); 
       let item = getLocalStorage();
       item.splice(index, 1);
       localStorage.setItem("tasks", JSON.stringify(item));
       li.parentNode.removeChild(li);
     });
  }
};
if (window.localStorage.getItem("tasks")) {
fillTodo();
}

let btn = document.querySelector("#Add");
let list = document.querySelector("#list");
let element = document.getElementsByTagName("li");

btn.addEventListener("click", () => {
  const id = new Date().getTime().toString();
  let input = document.querySelector(".element input");
  let value = input.value;
  input.value = "";

  //if you enter an empty string, it alerts you to write something
  if (value === "") {
    alert("you must write something");
  }
  //
  else {
    let li = document.createElement("li");
    let element = document.getElementsByTagName("li");

    li.setAttribute("id", `${element.length}`);
    li.innerHTML =
      `<span>${value}</span>` + " " + `<button class="delBtn">DEL</button>`;

    list.insertBefore(li, list.childNodes[0]);
    del = document.querySelectorAll(".delBtn");
    del[0].addEventListener("click", function () {
     let index=Number(li.getAttribute("id")); 
      let item = getLocalStorage();
      item.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(item));
      li.parentNode.removeChild(li);
      
    });
    addToStorage(id, value);
  }

  
});
function addToStorage(id, value) {
  let arr = { id, value };
  let item = getLocalStorage();

  item.push(arr);
  localStorage.setItem("tasks", JSON.stringify(item));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (tem) {
    if (tem.id !== id) {
      return tem;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}

list.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});

list.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});
