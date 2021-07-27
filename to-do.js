let input = document.querySelector(".element input")
let btn = document.querySelector("#Add")
let list = document.querySelector("#list")
let element = document.getElementsByTagName('li')

btn.addEventListener("click", () => {
    let text = input.value 
    //if you enter an empty string, it alerts you to write something
    if (text === "") {
        alert('you must write something')
    }
    //
    else{
        let li = document.createElement("li")
        li.innerHTML = text
        list.insertBefore(li, list.childNodes[0])
        list.value += ""
    }
    
    let del = document.querySelectorAll(".delBtn")
    for (var i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function(){
        list.removeChild(list.childNodes[0])
    })

    document.querySelector("#todo").value = ""
}
})



list.addEventListener("click", function(e) {
    if(e.target.tagName == 'LI')
    {
        e.target.classList.toggle('checked')
    }
})

