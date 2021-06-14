//streaming services

var N = "Netflix";
var D = "Disney+";
var V = "Viaplay";
var VR = "Viaplay (Rent)";
var H = "HBO";
var OB = "Only Buy";

//categories
var SUPER = "SuperHeroes";
var LIGHT = "Light";
var MUSIC = "Musicals";
var CRY = "Cry";

//---------------------HTML cards-----------------------------
const firstPart = `<div class="col">
  <div class="card bg-dark" style="max-width: 250px; text-align: center;">
  <img src="`;

const secondPart = `" class="card-img-top" alt="`;

const thirdPart = `" style="max-height: 80%;">
<div class="card-body">
  <h5 class="card-title text-light">`;

const fourthPart =`</h5>
<p class="card-text"><div class="btn-group" role="group"><button class="btn btn-warning btn-sm" style="pointer-events: none;"><b>IMDB: `;

const fifthPart = `/10</b></button><button class="btn btn-danger btn-sm" style="pointer-events: none;"><b>RT: `;

const sixthPart = `</b></button></div> </p>
<p class="card-text text-light">Available at: <span class="badge `;

const finalPart = `</span></p>
</div>
</div>
</div>
`;

//-------------------------list movies-------------------
const allMovies = [
  {imdb: "tt6139732", streaming: D, category: LIGHT}, {imdb: "tt0356470", streaming: VR, category: LIGHT}, {imdb: "tt2771200", streaming: D, category: LIGHT},
  {imdb: "tt0112697", streaming: [N, V], category: LIGHT}, {imdb: "tt1661199", streaming: D, category: LIGHT}, {imdb: "tt0367594", streaming: [N, V], category: LIGHT},
  {imdb: "tt9214832", streaming: V, category: LIGHT}, {imdb: "tt7846844", streaming: N, category: LIGHT}, {imdb: "tt0316396", streaming: V, category: LIGHT},
  {imdb: "tt0892318", streaming: N, category: LIGHT}, {imdb: "tt3281548", streaming: V, category: LIGHT}, {imdb: "tt1109624", streaming: [N, V], category: LIGHT},
  {imdb: "tt4468740", streaming: [N, V], category: LIGHT}, {imdb: "tt0120783", streaming: D, category: LIGHT}, {imdb: "tt1024255", streaming: N, category: LIGHT},
  {imdb: "tt1981677", streaming: N, category: LIGHT}, {imdb: "tt0117008", streaming: N, category: LIGHT}, {imdb: "tt0059742", streaming: D, category: LIGHT},
  {imdb: "tt1485796", streaming: D, category: LIGHT}, {imdb: "tt0147800", streaming: D, category: LIGHT}, {imdb: "tt0247638", streaming: D, category: LIGHT},
  {imdb: "tt0457939", streaming: [N, V], category: LIGHT}, {imdb: "tt3470600", streaming: V, category: LIGHT}, {imdb: "tt8580274", streaming: N, category: LIGHT},
  {imdb: "tt0128853", streaming: V, category: LIGHT}, {imdb: "tt1289403", streaming: V, category: LIGHT}, {imdb: "tt0211915", streaming: OB, category: LIGHT},
  {imdb: "tt1570728", streaming: V, category: LIGHT},

  {imdb: "tt0478970", streaming: D, category: SUPER}, {imdb: "tt5095030", streaming: D, category: SUPER}, {imdb: "tt4154796", streaming: D, category: SUPER},
  {imdb: "tt4154756", streaming: D, category: SUPER}, {imdb: "tt1825683", streaming: D, category: SUPER}, {imdb: "tt0468569", streaming: D, category: SUPER},
  {imdb: "tt1211837", streaming: D, category: SUPER}, {imdb: "tt6320628", streaming: N, category: SUPER}, {imdb: "tt2250912", streaming: V, category: SUPER},
  {imdb: "tt3501632", streaming: D, category: SUPER},

  {imdb: "tt6139732", streaming: D, category: MUSIC}, {imdb: "tt2771200", streaming: D, category: MUSIC}, {imdb: "tt1485796", streaming: D, category: MUSIC},
  {imdb: "tt3783958", streaming: VR, category: MUSIC}, {imdb: "tt0058331", streaming: D, category: MUSIC}, {imdb: "tt2077886", streaming: OB, category: MUSIC},
  {imdb: "tt0059742", streaming: D, category: MUSIC}, {imdb: "tt1727824", streaming: VR, category: MUSIC}, {imdb: "tt2066051", streaming: N, category: MUSIC},
  {imdb: "tt0795421", streaming: N, category: MUSIC},

  {imdb: "tt0816692", streaming: V, category: CRY}, {imdb: "tt0102492", streaming: N, category: CRY}, {imdb: "tt4481414", streaming: D, category: CRY},
  {imdb: "tt0388795", streaming: [N, V], category: CRY}, {imdb: "tt0816442", streaming: D, category: CRY}, {imdb: "tt0281358", streaming: N, category: CRY},
  {imdb: "tt0308644", streaming: V, category: CRY},
];

//function
function movies() {
  $.each(allMovies, function(_, value) {
    var url = 'http://www.omdbapi.com/?i=' + value.imdb + '&apikey=20972512';
    $.getJSON(url, function(response){

      var colorBox;
      if(value.streaming == N) { colorBox = `bg-danger">`;
      } else if (value.streaming == D) { colorBox = `bg-info text-dark">`;
      } else if (value.streaming == V || value.streaming == VR){ colorBox = `bg-secondary">`;
      }else if (value.streaming == H){ colorBox = `bg-dark">`;
      } else if (value.streaming == OB){ colorBox = `bg-light text-dark">`;
      } else { colorBox = `bg-success">`;}

      var rotten;
      if(response.Ratings[1] === undefined){
        rotten = "None";
      } else {
        rotten = response.Ratings[1].Value;
      }

      if(value.category == LIGHT) {
        document.getElementById("lightmovies").innerHTML +=
        firstPart + response.Poster + secondPart + response.Title +
        thirdPart + response.Title + fourthPart + response.imdbRating +
        fifthPart + rotten + sixthPart + colorBox + value.streaming + finalPart;
      } else if (value.category == SUPER) {
        document.getElementById("superheroes").innerHTML +=
        firstPart + response.Poster + secondPart + response.Title +
        thirdPart + response.Title + fourthPart + response.imdbRating +
        fifthPart + rotten + sixthPart + colorBox + value.streaming + finalPart;
      } else if (value.category == MUSIC) {
        document.getElementById("bestmusicals").innerHTML +=
        firstPart + response.Poster + secondPart + response.Title +
        thirdPart + response.Title + fourthPart + response.imdbRating +
        fifthPart + rotten + sixthPart + colorBox + value.streaming + finalPart;
      } else if (value.category == CRY) {
        document.getElementById("crymovies").innerHTML +=
        firstPart + response.Poster + secondPart + response.Title +
        thirdPart + response.Title + fourthPart + response.imdbRating +
        fifthPart + rotten + sixthPart + colorBox + value.streaming + finalPart;
      }

    });
  });
}
