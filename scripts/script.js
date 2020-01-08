let container = document.getElementById('container');
for(let i = 0; i < 110; i++){
    if(i%11 != 0){
        let cuadro = document.createElement('div');
        (i%2 == 0)?cuadro.classList.add('white'):cuadro.classList.add('gray');
        container.appendChild(cuadro);
    }

}