// DOM Reference Elements
var price10k = document.querySelector(".price10k");
var price14k = document.querySelector(".price14k");
var price18k = document.querySelector(".price18k");
var price22k = document.querySelector(".price22k");
var price24k = document.querySelector(".price24k");


var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-90ztrlt55ljoy-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
  .then(response => response.json())
  .then(
    displayData)
    .catch(err.alert('Wrong Price'));

  // Function to diplay weather on html document
function displayData(metal) {
    price10k.innerText=`${metal.price_gram_10k}`
    price14k.innerText=`${metal.price_gram_14k}`
    price18k.innerText=`${metal.price_gram_18k}`
    price22k.innerText=`${metal.price_gram_22k}`
    price24k.innerText=`${metal.price_gram_24k}`

  }