// BY UVESH PATEL


// GIVEN JSON OBJECT
let jsonObj={
  "data": [
      {
          "name": "Cosmetics",
          "productList": [
              {
                  "name": "Hair  kaif Oil",
                  "price": 122
              },
              {
                  "name": "Face wash",
                  "price": 123
              }
          ]
      },
      {
          "name": "Household",
          "productList": [
              {
                  "name": "Hair Oil",
                  "price": 122
              },
              {
                  "name": "Face wash",
                  "price": 123
              }
          ]
      }
  ]
}
// CART ARRAY
var cart=[];

// SCRIPTS TO ADD DATA FROM JSON
document.getElementById("p1").innerHTML=`Name: ${jsonObj.data[0]["productList"][0]["name"]}`;
document.getElementById("p2").innerHTML=`Name: ${jsonObj.data[0]["productList"][1]["name"]}`;
document.getElementById("p3").innerHTML=`Name: ${jsonObj.data[1]["productList"][0]["name"]}`;
document.getElementById("p4").innerHTML=`Name: ${jsonObj.data[1]["productList"][1]["name"]}`;

document.getElementById("price1").innerHTML=`Price: ${jsonObj.data[0]["productList"][0]["price"]}`;
document.getElementById("price2").innerHTML=`Price: ${jsonObj.data[0]["productList"][1]["price"]}`;
document.getElementById("price3").innerHTML=`Price: ${jsonObj.data[1]["productList"][0]["price"]}`;
document.getElementById("price4").innerHTML=`Price: ${jsonObj.data[1]["productList"][1]["price"]}`;

// FUNCTIONS FOR ADDING TO CART

function add1(){
  console.log("Product Added to the cart.");
  cart.push(jsonObj.data[0]["productList"][0]);
  console.log(cart);
}
function add2(){
  console.log("Product Added to the cart.");
  cart.push(jsonObj.data[0]["productList"][1]);
  console.log(cart);
}
function add3(){
  console.log("Product Added to the cart.");
  cart.push(jsonObj.data[1]["productList"][0]);
  console.log(cart);
}
function add4(){
  console.log("Product Added to the cart.");
  cart.push(jsonObj.data[1]["productList"][1]);
  console.log(cart);
}


//FUNCTIONS FOR REMOVING


function remove1(){
  console.log("Product removed from the cart. ");
  cart.splice( cart.indexOf(jsonObj.data[0]["productList"][0]), 1 );
  console.log(cart);
}

function remove2(){
  console.log("Product removed from the cart. ");
  cart.splice( cart.indexOf(jsonObj.data[0]["productList"][1]), 1 );
  console.log(cart);
}
function remove3(){
  console.log("Product removed from the cart. ");
  cart.splice( cart.indexOf(jsonObj.data[1]["productList"][0]), 1 );
  console.log(cart);
}
function remove4(){
  console.log("Product removed from the cart. ");
  cart.splice( cart.indexOf(jsonObj.data[1]["productList"][1]), 1 );
  console.log(cart);
}
