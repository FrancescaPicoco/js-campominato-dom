
document.getElementById("btnPlayer").addEventListener("click" , function(){
    creaGriglia();
})   

function creaGriglia() {
    let numeroCelle = 100
    const gridBuild = document.getElementById("grid");
    gridBuild.classList.add("griglia");
    //gridBuild.innerHTML = "";
    for (let i = 1; i <= numeroCelle ; i++) {
        let indexCell = creaQuadratino(i);
        creaQuadratino(indexCell)
        console.log(indexCell);
        gridBuild.appendChild(indexCell);
    }    
}

function creaQuadratino(indexCell) {
    let quadratino = document.createElement("div");
        quadratino.classList.add("square");
        //quadratino.innerHTML += `${indexCell}`
        quadratino.innerText = (indexCell);
        quadratino.addEventListener("click" , function () {
            this.classList.toggle("black");
            console.log(indexCell)  
            quadratino.classList.toggle("stylenumber");
        })
    return quadratino;    
}