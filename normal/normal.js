// const SELECTEDS = {0:'selectedUno',1:'selectedDos',2:'selectedTres', 3:'selectedCuatro'}

// const NIVELES = {0:'nivelDos',1:'nivelTres', 2:'nivelCuatro'}

// window.onload = async function(){
//     var bloques = Array.from(document.querySelectorAll('.block'));
//    async function game (nivel, choise, clase){
//     return new Promise((resolve, reject)=>{
//         bloques[choise].classList.add(clase);
//         bloques[choise].addEventListener('click', function(){
//             for(let x in bloques){
//                 bloques[x].classList.add(nivel)
//             }
//             resolve()
//         })
//     })    
//     } 
//     for(let i = 0; i<=4;i++){
//         await game(NIVELES[i], Math.floor(Math.random()*bloques.length), SELECTEDS[i]);
//     }
// }
