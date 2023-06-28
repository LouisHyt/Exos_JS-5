const resultat = document.querySelector("#resultat");
const resultDiv = document.querySelector(".textResult");
const inputEuros = document.querySelector("#inputEuros");



inputEuros.addEventListener("input", e => {
    if(e.target.value.length == 0){
        resultDiv.style.display = "none";
        resultat.textContent = "";
        return
    }
    // if(typeof e.target.value !==)
    let francs = (e.target.value * 6.55957).toFixed(2);
    resultDiv.style.display = "block";
    resultat.textContent = francs;
})



