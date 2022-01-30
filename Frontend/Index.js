const addBtn = document.getElementById("addBtn")
const todoTxt = document.getElementById("todoTxt")

addBtn.onclick = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://filipedev:5000/todo', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        value: todoTxt.value
    }));
};