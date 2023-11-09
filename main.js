
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

function creaGriglia() {  
    const gridBuild = document.getElementById("grid");
    gridBuild.classList.add("griglia");

    const numeroCelletot = livelloDifficoltà(); 
    console.log("numero celle totali" , numeroCelletot);

    let cellePerRiga = Math.sqrt(numeroCelletot);
    console.log("numero celle per riga" , cellePerRiga);
    //let quadratino = creaQuadratino();
    //quadratino.style.width = `calc (100% / ${cellePerRiga})`;
    //quadratino.style.height = `calc (100% / ${cellePerRiga})`;

    gridBuild.innerHTML = ""; 
    
    for (let i = 1; i <= numeroCelletot ; i++) {
        
        //let stringaCella = creaQuadratino(i);
        let cellaSingola = creaQuadratino(i);
    
        // calcoloHew ();  
        const vediamo = `calc (100% / ${cellePerRiga} )`;
        console.log(vediamo , "RISULTATO CALC");

        cellaSingola.style.width =  "50px";//`calc (100% / ${cellePerRiga} )`;
        cellaSingola.style.height = "50px";// `calc (100% / ${cellePerRiga} )`;

        gridBuild.appendChild(cellaSingola);
    }     
}

function creaQuadratino(indexCell) {
    let quadratino = document.createElement("div");
        quadratino.classList.add("square");

        /*const numeroCelletot = livelloDifficoltà(); 
         console.log("numero celle totali" , numeroCelletot);

         let cellePerRiga = Math.sqrt(numeroCelletot);
         console.log("numero celle per riga" , cellePerRiga);*/
       
        quadratino.innerText = (indexCell);
        //quadratino.style.width += `calc (100% / ${cellePerRiga} )`;
        //quadratino.style.height += `calc (100% / ${cellePerRiga} )`;
        quadratino.addEventListener("click" , function () {
            this.classList.toggle("black");
            console.log("valore della cella cliccata è" , indexCell);  
            quadratino.classList.toggle("stylenumber");
        })
    return quadratino; 
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


