let btn = document.querySelector("#Add");
let list = document.querySelector("#list");
let element = document.getElementsByTagName("li");

btn.addEventListener("click", () => {

let input = document.querySelector(".element input");
let text = input.value;
input.value="";

  //if you enter an empty string, it alerts you to write something
  if (text === "") {
    alert("you must write something");
  }
  //
  else {
    let li = document.createElement("li");
    li.innerHTML =
     `<span>${text}</span>`+ " " + `<button class="delBtn">DEL</button>`;
   
    list.insertBefore(li, list.childNodes[0]);
    del = document.querySelectorAll(".delBtn");
    del[0].addEventListener("click", function () {
        li.parentNode.removeChild(li);
    });
  }
  

});

list.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});
