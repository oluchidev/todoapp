
const input = document.getElementById("input-items");
const addBtn = document.getElementById("add-btn");
const ol = document.querySelector(".items");
const lis = ol.children;

function addList() {
    if(input.value !== ""){
        const li = document.createElement("li");
        li.innerText = input.value;
        ol.appendChild(li)
        createDeleteIcon(li)
        input.value = "";
    }
}

function addListKeyPress(event) {
    if(event.which === 13 ){
        addList()
    }
}

function createDeleteIcon(li) {
const del = document.createElement("img");
del.src = "images/delicon.png";
li.appendChild(del);


del.addEventListener('click', () => {
    ol.removeChild(li)
    li.removeChild(del)
})

 return li ;
}

for (let i = 0; i < lis.length; i++) {
    createDeleteIcon(lis[i]) 
}


addBtn.addEventListener('click', addList);
input.addEventListener('keypress',addListKeyPress)