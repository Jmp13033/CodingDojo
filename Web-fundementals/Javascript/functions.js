//function pizzaoven(crust,saucetype,cheeses,toppings) {
   // var pizza = {};
    //pizza.crust = crust;
    //pizza.cheeses = cheeses
    //pizza.saucetype = saucetype
    //pizza.toppings = toppings
    //return pizza

//}
//var pizza1 = pizzaoven("deep-dish","tradition",["monzerella"],["pepperoni","sausage"])
//console.log(pizza1)

//var pizza2 = pizzaoven("hand-tossed","marinara",["monzerella", "Fetta"],["mushhrooms","olives"])
//console.log(pizza2)


// var pizza3 = pizzaoven("greek","white-sauce",["gooda", "parmeasion"],["tomatoe","cucumber"])
//console.log(pizza3)

// var pizza4 = pizzaoven("hand-tossed","marinara",["string", "gpooda"],["nbb","peperoni"])
// console.log(pizza4)








var crust = ["deep-dish", "Honey Glazed", "Thin crust", "italian"];
var sauce = ["red sauce", "white sauce", "yellow sauce", "green"] ; 
var  cheesetypes= ["Monzerella", "parmesion",] ; 
var toppings = ["pepperoni", "mushrooms", "anchovies"] ;

function random(arr) 
{
    var i =  Math.floor( arr.length * Math.random()) // here is where we are getting a random interger
    return arr[i] // we return that item in the list variable array[i]

}


function randomPizza()
{
    var pizza = {}; // 
    pizza.crust = random(crust)
    pizza.sauce = random(sauce)
    pizza.cheesetypes = random(cheesetypes)
    pizza.toppings = random(toppings);

    return pizza


    }

    var pizzatoppings = randomPizza()
    console.log(pizzatoppings)

    


