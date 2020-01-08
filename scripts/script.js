let container = document.getElementById('container');
for(let i = 0; i < 110; i++){
    if(i%11 != 0){
        let square = document.createElement('div');
        (i%2 == 0)?square.classList.add('white'):square.classList.add('gray');
        container.appendChild(square);
    }

}

