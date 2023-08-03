var shoppingCart = {
    books: 1,
    sunglass: 1,
    keyboard: 2,
    mouse: 1,
    pen: 20
}

var shoppingItems = ['books', 'sunglass', 'mouse', 'pen'];
var friendsAge = ['20', '25', '21', '23'];

var friendsAge = {
    rahim: 20,
    karim: 25,
    salam: 21,
    kalam: 23
}



var shoppingCart = {
    books: 1,
    sunglass: 1,
    keyboard: 2,
    mouse: 1,
    pen: 20,
   
}

var keys = Object.keys(shoppingCart);
// console.log(keys);

var values = Object.values(shoppingCart);
// console.log(values);


var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen'];

for(var i = 0; i < keys.length; i ++) {
    var propertyName = keys[i];
    
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}


// for in loop

for(var propertyName in shoppingCart){
    
    var value = shoppingCart[propertyName];

    console.log(propertyName, value);
}