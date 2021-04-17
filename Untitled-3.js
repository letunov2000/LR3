var a = 0;
var b = 0;

document.getElementById('btn').addEventListener('click', Hello)

function Hello(c) {
    a = document.getElementById('myA').value;
    b = document.getElementById('myB').value;
    if (a == b) {
        alert("числ a, b равны");
    }
}