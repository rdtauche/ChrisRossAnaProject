// DOM Reference Elements
var price10k = document.querySelector(".price10k");
var price14k = document.querySelector(".price14k");
var price18k = document.querySelector(".price18k");
var price22k = document.querySelector(".price22k");
var price24k = document.querySelector(".price24k");
var silver10k = document.querySelector(".silver10k");
var silver14k = document.querySelector(".silver14k");
var silver18k = document.querySelector(".silver18k");
var silver22k = document.querySelector(".silver22k");
var silver24k = document.querySelector(".silver24k");
var tag = document.createElement('script');

var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-snjrwf2sltf1m8qw-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
  .then(response => response.json())
  .then(
    displayData1)
    // .catch(err.alert('Wrong Price'));
    .catch(function(err){
      alert(err,"Wrong Price")
    });
  // Function to diplay gold prices on html document
function displayData1(metal) {
  console.log(metal, "---")
    price10k.innerText=`${metal.price_gram_10k}`
    price14k.innerText=`${metal.price_gram_14k}`
    price18k.innerText=`${metal.price_gram_18k}`
    price22k.innerText=`${metal.price_gram_22k}`
    price24k.innerText=`${metal.price_gram_24k}`

  }

  // RT:  silver prices
  fetch("https://www.goldapi.io/api/XAG/USD", requestOptions)
  .then(response => response.json())
  .then(
    displayData2)
    // .catch(err.alert('Wrong Price'));
    .catch(function(err){
      alert(err,"Wrong Price")
    });
  // Function to diplay silver prices on html document
function displayData2(metal) {
  console.log(metal)
    silver10k.innerText=`${metal.price_gram_10k}`
    silver14k.innerText=`${metal.price_gram_14k}`
    silver18k.innerText=`${metal.price_gram_18k}`
    silver22k.innerText=`${metal.price_gram_22k}`
    silver24k.innerText=`${metal.price_gram_24k}`

  }

  // RT: display day.js todays date
  var today = dayjs();
  $("#day").text(today.format("MMM D, YYYY"));



      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '1200',
          width: '650',
          videoId: 'xuuNZQwhEn4&ab',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

      var player;

      
      

      let map;

      async function initMap() {
        const position = { lat: 40.11361407316967, lng: -75.34241537590464 };
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
      
        map = new Map(document.getElementById("map"), {
          zoom: 18,
          center: position,
          mapId: "DEMO_MAP_ID",
        });
      
        const marker = new AdvancedMarkerElement({
          map: map,
          position: position,
          title: "The Jewelry Exchange",
        });
      }
      
      initMap();
