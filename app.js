var wallet = 100;

var apples = {
    name: 'apples',
    inventory: 0,
    marketPrice: randomNumber(50, 999) / 100,
    avgPrice: 0,
    purchasePrices: []
};
var oranges = {
    name: 'oranges',
    inventory: 0,
    marketPrice: randomNumber(50, 999) / 100,
    avgPrice: 0,
    purchasePrices: []
};
var bananas = {
    name: 'bananas',
    inventory: 0,
    marketPrice: randomNumber(50, 999) / 100,
    avgPrice: 0,
    purchasePrices: []
};
var grapes = {
    name: 'grapes',
    inventory: 0,
    marketPrice: randomNumber(50, 999) / 100,
    avgPrice: 0,
    purchasePrices: []
};

var fruits = [apples, oranges, bananas, grapes];


function buyFruit(fruitClicked) {
    fruitClicked.inventory += 1;
    fruitClicked.purchasePrices.push(fruitClicked.marketPrice);
    var avgPrice = 0;
    for (var i = 0; i < fruitClicked.purchasePrices.length; i++) {
        avgPrice += fruitClicked.purchasePrices[i];
        fruitClicked.avgPrice = avgPrice / fruitClicked.purchasePrices.length;
    }
    wallet -= Number(parseFloat(fruitClicked.marketPrice).toFixed(2));

};

function sellFruit(fruitClicked) {
  fruitClicked.inventory -= 1;
  wallet += Number(parseFloat(fruitClicked.marketPrice).toFixed(2));
};

function randomNumber(min, max, precision) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};


function priceGenerator () {
fruits[0].marketPrice = Number(parseFloat(fruits[0].marketPrice + randomNumber(-50, 50) / 100).toFixed(2));
fruits[1].marketPrice = Number(parseFloat(fruits[1].marketPrice + randomNumber(-50, 50) / 100).toFixed(2));
fruits[2].marketPrice = Number(parseFloat(fruits[2].marketPrice + randomNumber(-50, 50) / 100).toFixed(2));
fruits[3].marketPrice = Number(parseFloat(fruits[3].marketPrice + randomNumber(-50, 50) / 100).toFixed(2));

if (fruits[0].marketPrice > 9.99) {
  fruits[0].marketPrice = 9.99;
}
if (fruits[1].marketPrice > 9.99) {
  fruits[1].marketPrice = 9.99;
}
if (fruits[2].marketPrice > 9.99) {
  fruits[2].marketPrice = 9.99;
}
if (fruits[3].marketPrice > 9.99) {
  fruits[3].marketPrice = 9.99;
}
if (fruits[0].marketPrice < 0.50) {
  fruits[0].marketPrice = 0.50;
}
if (fruits[1].marketPrice < 0.50) {
  fruits[1].marketPrice = 0.50;
}
if (fruits[2].marketPrice < 0.50) {
  fruits[2].marketPrice = 0.50;
}
if (fruits[3].marketPrice < 0.50) {
  fruits[3].marketPrice = 0.50;
}
  // ^^^ We just needed to set the ACTUAL fruits[i].marketPrice, then append THAT value.

  $('#applesPrice').text(" ");
  $('#applesPrice').text(fruits[0].marketPrice);
  $('#orangesPrice').text(" ");
  $('#orangesPrice').text(fruits[1].marketPrice);
  $('#bananasPrice').text(" ");
  $('#bananasPrice').text(fruits[2].marketPrice);
  $('#grapesPrice').text(" ");
  $('#grapesPrice').text(fruits[3].marketPrice);
console.log(fruits[0]);
};

function priceTimer() {
  setInterval(priceGenerator, 15000);
};







$(function() {
    console.log('jQuery Working');
    console.log(fruits);

    $('#wallet').append(100);

    $('#applesPrice').append(apples.marketPrice);
    $('#orangesPrice').append(oranges.marketPrice);
    $('#bananasPrice').append(bananas.marketPrice);
    $('#grapesPrice').append(grapes.marketPrice);

priceTimer();


    $('.fruit').on('click', '.buyButton', function() {
        var index = $(this).attr("id");
        var fruitClicked = fruits[index];
        if (fruitClicked.marketPrice > wallet) {
            alert("NOT ENOUGH MONEY");
        } else {
            buyFruit(fruitClicked);
            console.log(fruitClicked);
            $(this).siblings('.inventory').text(fruitClicked.inventory);
            $('#wallet').text('Total Available Cash: $' + wallet);

        }
    });

    $('.fruit').on('click', '.sellButton', function() {
        index = $(this).attr("id");
         fruitClicked = fruits[index];
        if (fruitClicked.inventory == 0) {
            alert("YOU DON'T HAVE ANY OF THAT TO SELL!");
        } else {
            sellFruit();
            $(this).siblings('.inventory').text(fruitClicked.inventory);
            $('#wallet').text('Total Available Cash: $' + wallet);


      };
    });
  });
