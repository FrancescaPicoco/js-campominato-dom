
document.getElementById("btnPlayer").addEventListener("click" , function(){
    creaGriglia();
    
    
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
let risultato = "hai vinto";
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
    sixteenRndNumber = [];
    
    for (let i = 1; i <= 16 ; i++) {
        const indexCellaBomba = [i];
        let celleBomba = getRndInteger(1 , numeroCelletot);
        sixteenRndNumber.push(celleBomba);     
    }
    console.log("array delle celle bomba" , sixteenRndNumber);

    gridBuild.innerHTML = ""; 
    
    for (let i = 1; i <= numeroCelletot ; i++) {
    
        let cellaSingola = creaQuadratino(i , cellaFortunata);
        // calcoloHew ();  
        cellaSingola.style.width =  `calc(100% / ${cellePerRiga} )`;
        cellaSingola.style.height =  `calc(100% / ${cellePerRiga} )`;

        gridBuild.appendChild(cellaSingola);
    }     
}

function creaQuadratino(indexCell , cellaFortunata , indexCellaBomba) {
    let quadratino = document.createElement("div");
        quadratino.classList.add("square");      
        quadratino.innerText = (indexCell);
 
        quadratino.addEventListener("click" , function () {
            this.classList.toggle("black");
            console.log("valore della cella cliccata è" , indexCell);  
            quadratino.classList.toggle("stylenumber");
            if ( sixteenRndNumber.includes(indexCell)){
                console.log("HAI PERSO", indexCell);
            }else if (indexCell  == cellaFortunata) {
                console.log("hai vinto");     
                quadratino.classList.toggle("lucky");
                quadratino.innerText = ("YOU WIN");                
            }else if (sixteenRndNumber.includes(cellaFortunata)) {
                getRndInteger(1 , numeroCelletot);
            }else{
            }
        })
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


