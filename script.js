let input = document.querySelector(".add_toDo")
let submitBtn = document.querySelector(".add_btn")
let listContainer = document.querySelector(".list_container")

let storage = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

storage.forEach(createItem);
submitBtn.addEventListener("click" , () => {
        submitEvent()
});

input.addEventListener("keyup",function(e) {
    e.preventDefault();
    if(e.keyCode === 13){
        submitEvent();
    }
})











function submitEvent () {
    if (!input.value==""){
        createItem(input.value)

        storage.push(input.value);
        localStorage.setItem("items", JSON.stringify(storage));
        input.value = '';
    } else {
        alert("Ошибка: Пустое поле")
}}

function createItem (text) {
    let item = document.createElement("div")
    item.className = "list_item_container"



    item.innerHTML += `<a id="myValue">${text}<a>`
    item.innerHTML += `<button onclick class = "btn" id="delBtn">Delete</button>`

    
    listContainer.prepend(item)

    item.querySelector("#delBtn").addEventListener("click", function (e) {
        let x = item.querySelector("#myValue").textContent
        let buff = JSON.parse(localStorage.items)
        let index = buff.indexOf(x)
        if (index !== -1){
            buff.splice(index,1)
            localStorage.setItem("items",JSON.stringify(buff))
            storage = buff
        }
        this.parentNode.remove()
    })
}
