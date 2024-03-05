// DOM Reference Elements
var desc = document.querySelector(".price");

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
    .catch(err.alert('Wrong City'));

  // Function to diplay weather on html document
function displayData(metal) {
    desc.innerText=`${metal.price}`
  
  }