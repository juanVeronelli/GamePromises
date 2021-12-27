// seleccionar aleotariamente un bloque para cambairlo de color
// cambiar todos los cuadrados de color y elegir un cuadrado aleatroio
// agregarle un evento a ese bloque para cuando sea clickeado
// repetir el proceso
window.onload  = async () => {
    const index = 'file:///E:/visual/html,%20js/colores/index/index.html'
    const colores = ["#BA1EFA","#19CC01","#C23D2F" ];
    const choises = ["#B41DF0", "#119400", "#943024"];
    const BLOCKS = document.querySelectorAll('.block');
    const BLOCKSARR = Array.from(BLOCKS);

    const pickRandomNumber = (n) => { 
        return Math.floor(Math.random() * n);
    }

    const changeLevel = (L, Selected) => {
        for(let b in BLOCKSARR){
            BLOCKSARR[b].style.background = colores[L] ;
        };
        BLOCKSARR[Selected].style.background = choises[L];
    };

    const Game = async (L) =>{
        return new Promise((resolve, reject) => {
            const Pick = pickRandomNumber(BLOCKSARR.length);
            changeLevel(L, Pick);
            BLOCKSARR[Pick].addEventListener('click', () => {
                resolve();
            }); 
            L === 3 ? win() : '';
        });        
    };

    const win = () => {
        setTimeout(() =>{
            window.location.href = index
        },1000)
    }

    for( let i = 0; i<=colores.length; i++){
        await Game(i);
    };
};

