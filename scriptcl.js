function clr() {
    document.getElementById('textvar').value = "";
}

function display(val) {
    document.getElementById('textvar').value = document.getElementById('textvar').value + val;
}

function Calculate() {
    let x = document.getElementById('textvar').value;
    let y = eval(x);
    document.getElementById('textvar').value = y;
}