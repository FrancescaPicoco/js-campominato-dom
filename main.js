document.getElementById("btnPlayer").addEventListener("click" , function(){
    creaGriglia();
    gameover=false;   
})   
function livelloDifficoltà () {
    let level = parseInt(document.getElementById("difficolta").value);
    console.log(level);
    let numeroCelletot = 100;
    if (level == 2){
       numeroCelletot=81;
    }
    else if (level == 3){
        numeroCelletot=49;
    }
    return numeroCelletot;
}
let highscore = 0;
let sixteenRndNumber = [];
function creaGriglia() {  
    const gridBuild = document.getElementById("grid");
    gridBuild.classList.add("griglia");

    const numeroCelletot = livelloDifficoltà(); 
    console.log("numero celle totali" , numeroCelletot);

    let cellePerRiga = Math.sqrt(numeroCelletot);
    console.log("numero celle per riga" , cellePerRiga);

    const cellaFortunata = getRndInteger(1,numeroCelletot);
    console.log("numero della cella fortunata" , cellaFortunata)
    sixteenRndNumber = []
    for (let i = 1; i <= 16 ; i++) {
        let celleBomba = getRndInteger(1 , numeroCelletot);  //creo const per richiamare funzione numeri random
        if (!sixteenRndNumber.includes(celleBomba)){    //se cella bomba !NON! è presente nell'array
            sixteenRndNumber.push(celleBomba);     //pusho il numero dentro l'array
        } else if (sixteenRndNumber.includes(celleBomba)) {                                    //altrimenti
            let NuovoNumero = getRndInteger(1,numeroCelletot);       //genero un altro numero
            sixteenRndNumber.push(NuovoNumero);     //e lo pusco nell'array
        }                                        //cosi da avere sempre 16 caratteri nell'array            
    }
    console.log("array delle celle bomba" , sixteenRndNumber);

    gridBuild.innerHTML = ""; 
    
    for (let i = 1; i <= numeroCelletot ; i++) {
    
        let quadratino = creaQuadratino(i);  
        quadratino.style.width =  `calc(100% / ${cellePerRiga} )`;
        quadratino.style.height =  `calc(100% / ${cellePerRiga} )`;

        quadratino.addEventListener("click" , function () {
            this.classList.toggle("black");
            console.log("valore della cella cliccata è" , i);  
            quadratino.classList.toggle("stylenumber");
            const numeroCelleValide = numeroCelletot - sixteenRndNumber
           
            if(!gameover){
                if (i  == cellaFortunata) {
                    console.log("hai vinto");     
                    quadratino.classList.toggle("lucky");
                    quadratino.innerText = ("YOU WIN");
                }else if (sixteenRndNumber.includes(cellaFortunata)) {
                    getRndInteger(1 , numeroCelletot);              
                }else if (!sixteenRndNumber.includes(i)){ //se non hai beccato la bomba                 
                    document.getElementById("punti").innerHTML= `Punteggio : ${highscore}`;
                    if( highscore < numeroCelleValide){
                       highscore++                  
                       console.log(highscore);
                    } else if(highscore == numeroCelleValide){
                       alert("hai cliccato tutte le celle possibili")
                    } else{}
                }
                quadratino.classList.add("done")
                console.log("continua cosi +10 punti");
                }else if ( sixteenRndNumber.includes(i)) {
                    gameover = true;
                    quadratino.classList.add("bomba")
                    alert("BOMBAAAA")
                    console.log("HAI PERSO", i);                   
                }
            } 
                           
        )}
        gridBuild.appendChild(quadratino);
    }            
};

function creaQuadratino(indexCell) {
    let quadratino = document.createElement("div");
        quadratino.classList.add("square");      
        quadratino.innerText = (indexCell);
    return quadratino; 
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


//calcoloHeW();
//let numeroCelletot;
//let cellePerRiga;

/*function calcoloHeW () {
    numeroCelletot = livelloDifficoltà();
    console.log("numero totale delle celle" , numeroCelletot);
    let cellePerRiga = Math.sqrt(numeroCelletot);
    console.log("numero celle per riga" , cellePerRiga);
    for (let i = 0; i < numeroCelletot; i++) {
       let cellaHeW = creaQuadratino(i);
        cellaHeW.style.height = `calc (100% / ${cellePerRiga})`;
        cellaHeW.style.width = `calc (100% / ${cellePerRiga})`;
        
    }
}*/
