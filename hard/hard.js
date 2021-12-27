window.onload = async () =>{
    const index = 'file:///E:/visual/html,%20js/colores/index/index.html';
    const bloques = Array.from(document.querySelectorAll('.block'));
    const colores = ["#FF4E00","#FF5294","#4EF5D6" ];
    const choises = ["#F54900", "#F54F8E", "#52FFDF"];

    const pickRandomNumber = (lenght) => {
        return Math.floor(Math.random() * lenght);
    }

    const changeLevel = (i,pick) => {
        for(let bloque in bloques){
            bloques[bloque].style.background = colores[i];
        }
        bloques[pick].style.background = choises[i]
    }
    
    const game = (i) =>{
        return new Promise((resolve, reject) =>{
            const pick = pickRandomNumber(bloques.length);
            changeLevel(i, pick);
            bloques[pick].addEventListener('click', ()=>{
                resolve()
            });
            i === 3 ? win() : ''
        })
    }

    const win = () => {
        setTimeout(() =>{
            window.location.href = index
        },1000)
    }

    for(let i = 0; i<=colores.length; i++){
        await game(i);
    }
    
}