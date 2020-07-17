window.addEventListener('load', start);

function start(event) {
    event.preventDefault();
}

document.querySelector('#red').addEventListener('input', setColor);
document.querySelector('#green').addEventListener('input', setColor);
document.querySelector('#blue').addEventListener('input', setColor);

function setColor (event) {
    var red   = document.querySelector('#red').value;
    var green = document.querySelector('#green').value;
    var blue  = document.querySelector('#blue').value;

    document.querySelector('#iptRed').value   = red;
    document.querySelector('#iptGreen').value = green;
    document.querySelector('#iptBlue').value  = blue;

    var colorSelected = `rgb(${red}, ${green}, ${blue})`;

    document.querySelector('#result').style.backgroundColor = colorSelected;
    document.querySelector('#rgb').innerHTML = colorSelected;
}
