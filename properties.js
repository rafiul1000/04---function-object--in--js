var shoppingCart = {
    books: 1,
    sunglass: 1,
    keyboard: 2,
    mouse: 1,
    pen: 20
}

// When you know the Specific pProperty name , use dot (.) notation to get the property value.
var penCount = shoppingCart.pen;

// alternative system
// When you know the Specific pProperty name , use dot (.) notation to get the property value.
var penCount2 = shoppingCart['pen']

var properties = Object.keys(shoppingCart)

// console.log(properties)

var values = Object.values(shoppingCart);
console.log(values);


// console.log(shoppingCart);