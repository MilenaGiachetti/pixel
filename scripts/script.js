
//creacion de grilla
let container = document.getElementById('container');
let gridMembers = new Array;
function makeGrid(){
    for(let i = 0; i < 990; i++){
        if(i%31 != 0){
            let square = document.createElement('div');
            (i%2 == 0)?square.classList.add('white'):square.classList.add('gray');
            gridMembers.push(square)
            container.appendChild(square);
        }
    }
};
makeGrid();

//agregar eventListeners
for(let i = 0 ; i< gridMembers.length; i++){
    gridMembers[i].addEventListener('mousedown', paint);
}
function paint(){
    this.classList.add('red');
}
//check if click is active
document.addEventListener('mousedown', addEvent);
document.addEventListener('mouseup', removeEvent);
function addEvent(){
    for(let i = 0 ; i< gridMembers.length; i++){
        gridMembers[i].addEventListener('mouseover', paint);
    }
}
function removeEvent(){
    for(let i = 0 ; i< gridMembers.length; i++){
        gridMembers[i].removeEventListener('mouseover', paint);
    }
}
//clear
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);
function clear(){
    for(let i = 0 ; i< gridMembers.length; i++){
        gridMembers[i].classList.remove('red');
    }
}