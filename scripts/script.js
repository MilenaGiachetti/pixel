
//creacion de grilla
let container = document.getElementById('container');
let gridMembers = new Array;
let changeInput = document.getElementById('changeInput');
function makeGrid(){
    for(let i = 0; i <= ((+changeInput.value)*(+changeInput.value)+(+changeInput.value)) ; i++){
            if(i%(+changeInput.value+1) != 0){

            let square = document.createElement('div');
            (i%2 == 0)?square.classList.add('white'):square.classList.add('gray');
            gridMembers.push(square)
            container.appendChild(square);
        }
    }
};
makeGrid();
//console.log(window.getComputedStyle(container, null).gridTemplateColumns);
//cambio de current color
let currentColor = document.getElementById('currentColor');
let basicColors = document.querySelectorAll(' #basicColors div');
for(let i = 0 ; i< basicColors.length; i++){
    basicColors[i].addEventListener('click', changeCurrentColor);
}
function changeCurrentColor(){
    let newColor = this.getAttribute('class');
    currentColor.classList = '';
    currentColor.classList.add(`${newColor}`);
}

//agregar eventListeners
for(let i = 0 ; i< gridMembers.length; i++){
    gridMembers[i].addEventListener('click', paint);
    gridMembers[i].addEventListener('mouseup', paint);
    gridMembers[i].addEventListener('mousedown', paint);

}
function paint(){
    this.classList = '';
    this.classList.add(`${currentColor.classList.value}`);
}
//check if click is active
container.addEventListener('mousedown', addEvent);
container.addEventListener('mouseup', removeEvent);
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
        container.removeChild(gridMembers[i]);
    }
    gridMembers = [];
    makeGrid();
}

let changeGrid = document.getElementById('changeGrid');
changeGrid.addEventListener('click', changeGridSize)
function changeGridSize(){
    clear();
    let columnNumber = +changeInput.value;
    container.style["grid-template-columns"] = `repeat(${columnNumber}, 1fr)`;
    container.style["grid-template-rows"] = `repeat(${columnNumber}, 1fr)`;
   // container.style["grid-template-columns"] = "repeat(40, 1fr)";
    /*for(let i = 0; i < 992; i++){
        if(i%31 != 0){
            let square = document.createElement('div');
            (i%2 == 0)?square.classList.add('white'):square.classList.add('gray');
            gridMembers.push(square)
            container.appendChild(square);
        }
    }*/
}
//            grid-template-columns: repeat(30, 1fr);
//grid-template-rows: repeat(30, 1fr);