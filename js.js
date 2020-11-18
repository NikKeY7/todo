let n = 1;
            var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
       div.remove();
    } else if(ev.target.tagName === "P") {
        var div = ev.target.parentNode;
        ev.target.remove();
        div.style.textDecoration = "line-through";
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = n+". "+document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Введите ваше дело!");
    } else {
       document.getElementById('list').appendChild(li);
       n++;
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("");
    span.className = "close";
    span.appendChild(txt);
    var suc = document.createElement('p');
    suc.className = 'success';
    li.appendChild(span);
    li.appendChild(suc);
}
