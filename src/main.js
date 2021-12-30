// seleccionar aleotariamente un bloque para cambairlo de color
// cambiar todos los cuadrados de color y elegir un cuadrado aleatroio
// agregarle un evento a ese bloque para cuando sea clickeado
// repetir el proceso
window.onload  = async () => {
    const CONFIG = {
        "easy": {
            "colors": ["#BA1EFA","#19CC01","#C23D2F" ],
            "choices": ["#B41DF0", "#119400", "#943024"]
        },
        "normal": {
            "colors": ["#F5C21B","#2B0DFA","#14F51F" ],
            "choices": ["#DEC20D", "#0F6FFF", "#5EFF08"]
        },
        "hard": {
            "colors": ["#FF4E00","#FF5294","#4EF5D6" ],
            "choices": ["#F54900", "#F54F8E", "#52FFDF"]
        }
    }
    const index = '../index.html'
    const colores = CONFIG[document.title.toLowerCase()].colors;
    const choices = CONFIG[document.title.toLowerCase()].choices;
    const BLOCKS = document.querySelectorAll('.block');
    const BLOCKSARR = Array.from(BLOCKS);

    const pickRandomNumber = (n) => { 
        return Math.floor(Math.random() * n);
    }

    const changeLevel = (L, Selected) => {
        for(let b in BLOCKSARR){
            BLOCKSARR[b].style.background = colores[L] ;
        };
        BLOCKSARR[Selected].style.background = choices[L];
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

