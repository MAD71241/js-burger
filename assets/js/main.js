/* Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti. */
var burgerGen = document.getElementById("burger-assemble");
/* VARIABILI INGREDIENTI */
//prezzo burger
var baseBurger = 4.99;
//prezzo e checkbox ketchup
var ketchup = document.getElementById("ketchup").dataset;
var ketchupCost = Number(ketchup.price);
var ketchupCheck = document.getElementById("ketchup").checked;
console.log(ketchupCost);
//prezzo e checkbox cheese
var cheese = document.getElementById("cheese").dataset;
var cheeseCost = Number(cheese.price);
var cheeseCheck = document.getElementById("cheese").checked;
console.log(cheeseCost);
//prezzo e checkbox tomato
var tomato = document.getElementById("tomato").dataset;
var tomatoCost = Number(tomato.price);
var tomatoCheck = document.getElementById("tomato").checked;
console.log(tomatoCost);
//prezzo e checkbox egg
var egg = document.getElementById("egg").dataset;
var eggCost = Number(egg.price);
var eggCheck = document.getElementById("egg").checked;
console.log(eggCost);
//prezzo e checkbox lettuce
var lettuce = document.getElementById("lettuce").dataset;
var lettuceCost = Number(lettuce.price);
var lettuceCheck = document.getElementById("lettuce").checked;
console.log(lettuceCost);
//prezzo e checkbox mustard
var mustard = document.getElementById("mustard").dataset;
var mustardCost = Number(mustard.price);
var mustardCheck = document.getElementById("mustard").checked;

var ingredients = [
    [ketchupCheck, ketchupCost],
    [cheeseCheck, cheeseCost],
    [tomatoCheck, tomatoCost],
    [eggCheck, eggCost],
    [lettuceCheck, lettuceCost],
    [mustardCheck, mustardCost]
];


burgerGen.addEventListener("click", function () {
    var burgerFinalCost = baseBurger;
    for (i = 0; i < ingredients.length; i++) {
        if (ingredients[i][0] == true) {
            burgerFinalCost = baseBurger += ingredients[i][1];
        }
    }
    console.log(burgerFinalCost);
})