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

fetch("https://www.goldapi.io/api/XAU/USD/20240301", requestOptions)
  .then(response => response.text())
  .then(
    displayData)
    .catch(err.alert('Wrong City'));

  // Function to diplay weather on html document
function displayData(metal) {
    desc.innerText=`${metal}`
  
  }