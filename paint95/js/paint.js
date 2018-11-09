
var Pizza = {};
Pizza.selectedTopping = undefined;



Pizza.placeToppings = function(){

document.getElementById("pizza").innerHTML("text");
    var divElement = document.createElement("div");
    divElement.id = "divID";
    divElement.style.backgroundColor= "yellow";
    divElement.style.width="10px";
    divElement.style.height = "10px";
    pizza.appendChild(divElement);
    
 }   


Pizza.bindPizzaClick = function(){
    var pizza = document.getElementById("pizza");
    pizza.addEventListener("click",Pizza.placeToppings);
    };

pizza.placeToppings();






Pizza.start = function(){
};

Pizza.start();