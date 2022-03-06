//streaming services

var N = "Netflix";
var D = "Disney+";
var V = "Viaplay";
var VR = "Viaplay (Rent)";
var H = "HBO";
var OB = "Unknown";

//categories
var EPIC = "Epic";
var ACTION = "Action";
var LIGHT = "Light";
var MUSIC = "Musicals";
var CRY = "Cry";
var TOUCHING = "Touching";
var LAUGH = "Laugh";
var PLOTTWIST = "Plottwist";

//---------------------HTML cards-----------------------------
const firstPart = `<div class="col">
  <div class="card bg-light" style="max-width: 250px; text-align: center;">
  <img src="`;

const secondPart = `" class="card-img-top" alt="`;

const thirdPart = `" style="max-height: 80%;">
<div class="card-body">
  <h5 class="card-title text-dark">`;

const fourthPart =`</h5>
<p class="card-text"><div class="btn-group" role="group"><button class="btn btn-warning btn-sm" style="pointer-events: none;"><b>IMDB: `;

const fifthPart = `/10</b></button><button class="btn btn-danger btn-sm" style="pointer-events: none;"><b>RT: `;

const sixthPart = `</b></button></div> </p>
<p class="card-text text-dark">Available at: `;

const finalPart = `</p>
</div>
</div>
</div>
`;

//--------------------------------------------------------------------
function movies() {
  $.each(allMovies, function(_, value) {
    var url = 'http://www.omdbapi.com/?i=' + value.imdb + '&apikey=20972512';

    $.getJSON(url, function(response){
      
      var rotten;
      if(response.Ratings[1] === undefined){
        rotten = "None";
      } else {
        rotten = response.Ratings[1].Value;
      }

      var movie_info = firstPart + response.Poster + secondPart + response.Title +
      thirdPart + response.Title + fourthPart + response.imdbRating +
      fifthPart + rotten + sixthPart;

      var colorBox;
      //console.log(value.streaming);

      $.each(value.streaming, function(i, val){
        //console.log(response.Title, val);

        colorBox = `<span class="badge `;
        if(val == N) { 
          colorBox += `bg-danger">`;
        } 
        else if (val == D) { 
          colorBox += `bg-info text-dark">`;
        } 
        else if (val == V || val == VR){ 
          colorBox += `bg-pink text-dark">`;
        }
        else if (val == H){ 
          colorBox += `bg-dark border border-light">`;
        } 
        else if (val == OB){ 
          colorBox += `bg-secondary">`;
        } 
        else { 
          colorBox += `bg-success">`;
        }

        colorBox += val + `</span> `;
        movie_info += colorBox;
        //console.log(colorBox);
      })

      movie_info += finalPart;

      //console.log(value.imdb, response.Title);
      console.log(colorBox);

      $.each(value.category, function(index, cat){
        
        if(cat == LIGHT) {
          document.getElementById("lightmovies").innerHTML += movie_info;
        } 
        else if (cat == ACTION) {
          document.getElementById("action").innerHTML += movie_info;
        } 
        else if (cat == MUSIC) {
          document.getElementById("bestmusicals").innerHTML += movie_info;
        } 
        else if (cat == CRY) {
          document.getElementById("crymovies").innerHTML += movie_info;
        } 
        else if (cat == TOUCHING) {
          document.getElementById("touching").innerHTML += movie_info;
        } 
        else if (cat == LAUGH) {
          document.getElementById("laughing").innerHTML += movie_info;
        } 
        else if (cat == PLOTTWIST) {
          document.getElementById("plottwist").innerHTML += movie_info;
        }
        else if (cat == EPIC) {
          document.getElementById("epic").innerHTML += movie_info;
        }
      });
    });
  });
}
