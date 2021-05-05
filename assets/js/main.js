/* Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti. */
var burgerGen = document.getElementById("burger-assemble");



burgerGen.addEventListener("click", function () {

    var couponCheck = document.getElementById("coupon").value;
    var discountMoney = 1.99;
    var discountAsd = 2.99;

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
        [ketchupCheck, ketchupCost],
        [cheeseCheck, cheeseCost],
        [tomatoCheck, tomatoCost],
        [eggCheck, eggCost],
        [lettuceCheck, lettuceCost],
        [mustardCheck, mustardCost]
    ];

    var burgerFinalCost = 4.99;
    //controllo sull'inserimento nome Hamburger
    if (document.getElementById("burgername").value === "") {
        alert("Dai un nome al tuo hamburger!");
        return;
    }
    //funzione di calcolo del costo Hamburger
    for (i = 0; i < ingredients.length; i++) {
        if (ingredients[i][0] == true) {
            burgerFinalCost += ingredients[i][1];
        }  
    }
    //funzione di calcolo del prezzo tramite coupon
    if (couponCheck === "GimmeMoney") {
        burgerFinalCost = burgerFinalCost - discountMoney;
    } else if (couponCheck === "AsdMania") {
        burgerFinalCost = burgerFinalCost - discountAsd;
    }
    document.getElementById("pricetag").innerHTML = burgerFinalCost + " €";
    console.log(burgerFinalCost);
    
})