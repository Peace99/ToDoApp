let btn = document.querySelector("#Add");
let list = document.querySelector("#list");
let element = document.getElementsByTagName("li");

btn.addEventListener("click", () => {
const id = new Date().getTime().toString()
let input = document.querySelector(".element input");
let value = input.value;
input.value="";

  //if you enter an empty string, it alerts you to write something
  if (value === "") {
    alert("you must write something");
  }
  //
  else {
    let li = document.createElement("li");
    li.innerHTML =
     `<span>${value}</span>`+ " " + `<button class="delBtn">DEL</button>`;
   
    list.insertBefore(li, list.childNodes[0]);
    del = document.querySelectorAll(".delBtn");
    del[0].addEventListener("click", function () {
        li.parentNode.removeChild(li);
    });
  }
  
  addToStorage(id, value)
});
function addToStorage(id, value){
  arr = {id, value}
  let item = getLocalStorage()
//     if (getLocalStorage === null){
//         arr = []
// }
//     else {
//     arr = JSON.parse(getLocalStorage)
// }
  item.push(arr)
  localStorage.setItem("tasks", JSON.stringify(item))
}   

function removeFromLocalStorage(id) {
let items = getLocalStorage()

items = items.filter(function(tem){
  if (tem.id !== id) {
      return tem
  }
})
localStorage.setItem("tasks", JSON.stringify(items))
}

function getLocalStorage(){
  return localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : []
}

list.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});
