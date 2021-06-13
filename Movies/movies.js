//streaming services

var N = "Netflix";
var D = "Disney+";
var V = "Viaplay";
var VR = "Viaplay (Rent)";
var H = "HBO";
var OB = "Only Buy";

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
const light = [
  {imdb: "tt6139732", streaming: D}, {imdb: "tt0356470", streaming: VR},
  {imdb: "tt2771200", streaming: D}, {imdb: "tt0112697", streaming: [N, V]},
  {imdb: "tt1661199", streaming: D}, {imdb: "tt0367594", streaming: [N, V]},
  {imdb: "tt9214832", streaming: V}, {imdb: "tt7846844", streaming: N},
  {imdb: "tt0316396", streaming: V}, {imdb: "tt0892318", streaming: N},
  {imdb: "tt3281548", streaming: V}, {imdb: "tt1109624", streaming: [N, V]},
  {imdb: "tt4468740", streaming: [N, V]}, {imdb: "tt0120783", streaming: D},
  {imdb: "tt1024255", streaming: N}, {imdb: "tt1981677", streaming: N},
  {imdb: "tt0117008", streaming: N}, {imdb: "tt0059742", streaming: D},
  {imdb: "tt1485796", streaming: D}, {imdb: "tt0147800", streaming: D},
  {imdb: "tt0247638", streaming: D}, {imdb: "tt0457939", streaming: [N, V]},
  {imdb: "tt3470600", streaming: V}, {imdb: "tt8580274", streaming: N},
  {imdb: "tt0128853", streaming: V}, {imdb: "tt1289403", streaming: V},
  {imdb: "tt0211915", streaming: OB}, {imdb: "tt1570728", streaming: V},
]

const superhero = [
  {imdb: "tt0478970", streaming: D}, {imdb: "tt5095030", streaming: D},
  {imdb: "tt4154796", streaming: D}, {imdb: "tt4154756", streaming: D},
  {imdb: "tt1825683", streaming: D}, {imdb: "tt0468569", streaming: D},
  {imdb: "tt1211837", streaming: D}, {imdb: "tt6320628", streaming: N},
  {imdb: "tt2250912", streaming: V}, {imdb: "tt3501632", streaming: D},
];

const musicals = [
  {imdb: "tt6139732", streaming: D}, {imdb: "tt2771200", streaming: D},
  {imdb: "tt1485796", streaming: D}, {imdb: "tt3783958", streaming: VR},
  {imdb: "tt0058331", streaming: D}, {imdb: "tt2077886", streaming: OB},
  {imdb: "tt0059742", streaming: D}, {imdb: "tt1727824", streaming: VR},
  {imdb: "tt2066051", streaming: N}, {imdb: "tt0795421", streaming: N},
];

const cryFest = [
  {imdb: "tt0816692", streaming: V}, {imdb: "tt0102492", streaming: N},
  {imdb: "tt4481414", streaming: D}, {imdb: "tt0388795", streaming: [N, V]},
  {imdb: "tt0816442", streaming: D}, {imdb: "tt0281358", streaming: N},
  {imdb: "tt0308644", streaming: V},
];

function movies() {
  $.each(light, function(_, value) {
    var url = 'http://www.omdbapi.com/?i=' + value.imdb + '&apikey=20972512';
    $.getJSON(url, function(response){

      var colorBox;
      if(value.streaming == N) { colorBox = `bg-danger">`;
      } else if (value.streaming == D) { colorBox = `bg-info text-dark">`;
      } else if (value.streaming == V || value.streaming == VR){ colorBox = `bg-secondary">`;
      }else if (value.streaming == H){ colorBox = `bg-dark">`;
      } else if (value.streaming == OB){ colorBox = `bg-light text-dark">`;
      } else { colorBox = `bg-success">`;}

      document.getElementById("lightmovies").innerHTML +=
      firstPart + response.Poster + secondPart + response.Title +
      thirdPart + response.Title + fourthPart + response.imdbRating +
      fifthPart + response.Ratings[1].Value + sixthPart + colorBox + value.streaming + finalPart;
    });
  });

  $.each(superhero, function(_, value) {
    var url = 'http://www.omdbapi.com/?i=' + value.imdb + '&apikey=20972512';
    $.getJSON(url, function(response){

      var colorBox;
      if(value.streaming == N) { colorBox = `bg-danger">`;
      } else if (value.streaming == D) { colorBox = `bg-info text-dark">`;
      } else if (value.streaming == V || value.streaming == VR){ colorBox = `bg-secondary">`;
      }else if (value.streaming == H){ colorBox = `bg-dark">`;
      } else if (value.streaming == OB){ colorBox = `bg-light text-dark">`;
      } else { colorBox = `bg-light text-dark">`;}

      document.getElementById("superheroes").innerHTML +=
      firstPart + response.Poster + secondPart + response.Title +
      thirdPart + response.Title + fourthPart + response.imdbRating +
      fifthPart + response.Ratings[1].Value + sixthPart + colorBox + value.streaming + finalPart;
    });
  });

  $.each(musicals, function(_, value) {
    var url = 'http://www.omdbapi.com/?i=' + value.imdb + '&apikey=20972512';
    $.getJSON(url, function(response){

      var colorBox;
      if(value.streaming == N) { colorBox = `bg-danger">`;
      } else if (value.streaming == D) { colorBox = `bg-info text-dark">`;
      } else if (value.streaming == V || value.streaming == VR){colorBox = `bg-secondary">`;
      } else if (value.streaming == H){ colorBox = `bg-dark">`;
      } else if (value.streaming == OB){ colorBox = `bg-light text-dark">`;
      } else { colorBox = `bg-light text-dark">`;}

      var rotten;
      if(response.Ratings[1] === undefined){
        rotten = "None";
      } else {
        rotten = response.Ratings[1].Value;
      }

      document.getElementById("bestmusicals").innerHTML +=
      firstPart + response.Poster + secondPart + response.Title +
      thirdPart + response.Title + fourthPart + response.imdbRating +
      fifthPart + rotten + sixthPart + colorBox + value.streaming + finalPart;
    });
  });

  $.each(cryFest, function(_, value) {
    var url = 'http://www.omdbapi.com/?i=' + value.imdb + '&apikey=20972512';
    $.getJSON(url, function(response){

      var colorBox;
      if(value.streaming == N) { colorBox = `bg-danger">`;
      } else if (value.streaming == D) { colorBox = `bg-info text-dark">`;
      } else if (value.streaming == V || value.streaming == VR){colorBox = `bg-secondary">`;
      } else if (value.streaming == H){ colorBox = `bg-dark">`;
      } else if (value.streaming == OB){ colorBox = `bg-light text-dark">`;
      } else { colorBox = `bg-light text-dark">`;}

      var rotten;
      if(response.Ratings[1] === undefined){
        rotten = "None";
      } else {
        rotten = response.Ratings[1].Value;
      }

      document.getElementById("crymovies").innerHTML +=
      firstPart + response.Poster + secondPart + response.Title +
      thirdPart + response.Title + fourthPart + response.imdbRating +
      fifthPart + rotten + sixthPart + colorBox + value.streaming + finalPart;
    });
  });
}
