var add = document.getElementById("add");
var write = document.getElementById("write");
var todolist = document.getElementById("todolist");
var myName = prompt('Enter your name, please: ');
alert("Good afternoon, " + myName);

add.addEventListener('click', mouseClick);
function mouseClick () {
    if(!(write.value === '')){
        var textto = `<li><input type = 'checkbox'><img src = "garba.png" alt = "garba">${write.value}</li>`;
        // console.log(textto);
        todolist.insertAdjacentHTML('afterbegin', textto);
        var check = document.getElementById(write.value);
        write.value = '';  
    }
    else{
        alert("Write a plan first!");
    }
}
todolist.addEventListener('click', imgclick);

function imgclick(event){
    var node = event.target;
    // console.log(node.tagName);
    if(node.tagName === 'IMG'){
        todolist.removeChild(node.parentNode);
    }
}

todolist.addEventListener('click', boxcheck);
function boxcheck(event){
    var node = event.target;
    if(node.type === 'checkbox') {
        if (node.parentNode.style.textDecoration === 'line-through') {
            node.parentNode.style.textDecoration = 'none';
        } else {
            node.parentNode.style.textDecoration = 'line-through';
        }
    }
}