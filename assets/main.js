let dieRoll = new Array(); //individual rolls
let dieRollTotal = 0; //total number of rolls

let dieRollCount = document.getElementById("dice-roll");
let rollBtn = document.getElementById("roll-btn");
let display_dieRollTotal = document.getElementById("dice-roll-total");
let showAllRollsBtn = document.getElementById("display-all-rolls");
let showAllRolls = document.getElementById("all-rolls");

/* store a random roll*/
rollBtn.addEventListener("click", function(){
    showAllRollsBtn.disabled = false;
    if(Number(dieRollCount.value) <= 0){
        alert("How many dice should I roll?");
    }
    else{
        let rollCount = Number(dieRollCount.value);
        dieRoll = []; //clear previous roll
        for(let toss = 0; toss < rollCount; toss++){
            dieRoll.push(generateDieFace());
        }
        display_dieRollTotal.textContent = dieRollSum(dieRoll);
    }
});

/* What die are we rolling? */
function generateDieFace(){
    return Math.floor(Math.random() * (6) + 1);
}

/* Add them together */
function dieRollSum (allTosses){
    let sum = 0;
    for(let eachFace = 0; eachFace < allTosses.length; eachFace++){
        sum += allTosses[eachFace];
    }
    return sum;
}

/* Display each roll */
showAllRollsBtn.addEventListener("click", function(){
    if(dieRoll.length == 0){
        alert("No dice have yet been rolled");
    }
    else{
        showAllRolls.textContent = "";
        for(let eachFace = 0; eachFace < dieRoll.length; eachFace++){
            let dieFace = document.createElement("li");
            let dieFaceNumber = document.createTextNode(dieRoll[eachFace]);
            dieFace.appendChild(dieFaceNumber);
            showAllRolls.appendChild(dieFace);   
        } 
        showAllRollsBtn.disabled = true;   
    }
})