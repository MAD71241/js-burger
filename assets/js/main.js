/* Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti. */
var burgerGen = document.getElementById("burger-assemble");

//prezzo burger
var baseBurger = 4.99;



burgerGen.addEventListener("click", function () {

    //prezzo e checkbox ketchup
    var ketchup = document.getElementById("ketchup").dataset;
    var ketchupCost = Number(ketchup.price);
    var ketchupCheck = document.getElementById("ketchup").checked;
    //prezzo e checkbox cheese
    var cheese = document.getElementById("cheese").dataset;
    var cheeseCost = Number(cheese.price);
    var cheeseCheck = document.getElementById("cheese").checked;
    //prezzo e checkbox tomato
    var tomato = document.getElementById("tomato").dataset;
    var tomatoCost = Number(tomato.price);
    var tomatoCheck = document.getElementById("tomato").checked;
    //prezzo e checkbox egg
    var egg = document.getElementById("egg").dataset;
    var eggCost = Number(egg.price);
    var eggCheck = document.getElementById("egg").checked;
    //prezzo e checkbox lettuce
    var lettuce = document.getElementById("lettuce").dataset;
    var lettuceCost = Number(lettuce.price);
    var lettuceCheck = document.getElementById("lettuce").checked;
    //prezzo e checkbox mustard
    var mustard = document.getElementById("mustard").dataset;
    var mustardCost = Number(mustard.price);
    var mustardCheck = document.getElementById("mustard").checked;

    var ingredients = [
        [document.getElementById("ketchup").checked, ketchupCost],
        [document.getElementById("cheese").checked, cheeseCost],
        [document.getElementById("tomato").checked, tomatoCost],
        [document.getElementById("egg").checked, eggCost],
        [document.getElementById("lettuce").checked, lettuceCost],
        [document.getElementById("mustard").checked, mustardCost]
    ];

    var burgerFinalCost = baseBurger;
    for (i = 0; i < ingredients.length; i++) {
        if (ingredients[i][0] == true) {
            Number(burgerFinalCost = baseBurger += ingredients[i][1]);
        }
        document.getElementById("pricetag").innerHTML = burgerFinalCost + " €";
    }
})