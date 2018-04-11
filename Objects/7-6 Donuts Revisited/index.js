/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach (function(donut) {
    donutType = donut.type;
    donutCost = donut.cost;
    console.log(donutType + " donuts cost $" + donutCost + " each");
    donut=donut+1;
});
