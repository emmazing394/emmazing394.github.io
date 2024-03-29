const allMovies = [
  {imdb: "tt6139732", streaming: [D], category: [LIGHT, MUSIC, LAUGH]}, //Aladdin
  {imdb: "tt0356470", streaming: [VR], category: [LIGHT]}, //A cinderella story
  {imdb: "tt2771200", streaming: [D], category: [LIGHT, MUSIC]}, //Beauty and the beast
  {imdb: "tt0112697", streaming: [N], category: [LIGHT]}, //Clueless
  {imdb: "tt1661199", streaming: [D], category: [LIGHT]}, //Cinderella
  {imdb: "tt0367594", streaming: [V], category: [LIGHT]}, //charlie and the chocolate factory
  {imdb: "tt9214832", streaming: [OB], category: [LIGHT, LAUGH]}, //Emma
  {imdb: "tt7846844", streaming: [N], category: [LIGHT]}, //Enola Holmes
  {imdb: "tt14641788", streaming: [N], category: [LIGHT]}, //Enola Holmes 2
  {imdb: "tt0316396", streaming: [VR], category: [LIGHT]}, //Peter pan
  {imdb: "tt0892318", streaming: [V], category: [LIGHT]}, //Letters to juliet
  {imdb: "tt3281548", streaming: [H, V], category: [LIGHT]}, //Little women
  {imdb: "tt1109624", streaming: [H, N, V], category: [LIGHT]}, //paddington
  {imdb: "tt4468740", streaming: [N, V], category: [LIGHT]}, //paddington 2
  {imdb: "tt0120783", streaming: [D], category: [LIGHT]}, //the parent trap
  {imdb: "tt1024255", streaming: [V], category: [LIGHT]}, //Wild child
  {imdb: "tt1981677", streaming: [V], category: [LIGHT]}, //Pitch perfect
  {imdb: "tt0117008", streaming: [N], category: [LIGHT]}, //Matilda
  {imdb: "tt0059742", streaming: [D], category: [LIGHT, MUSIC]}, //the sound of music
  {imdb: "tt1485796", streaming: [D], category: [LIGHT, MUSIC]}, //the greatest showman
  {imdb: "tt0147800", streaming: [D], category: [LIGHT]}, //10 things I hate about you
  {imdb: "tt0247638", streaming: [D], category: [LIGHT]}, //The princess diaries 
  {imdb: "tt3470600", streaming: [N, V], category: [LIGHT]}, //Sing
  {imdb: "tt8580274", streaming: [N], category: [LIGHT]}, //Eurovision
  {imdb: "tt0128853", streaming: [V], category: [LIGHT]}, //You've got mail
  {imdb: "tt1289403", streaming: [V], category: [LIGHT]}, //Guernsey ...
  {imdb: "tt0211915", streaming: [OB], category: [LIGHT]}, //Amelie
  {imdb: "tt1570728", streaming: [H], category: [LIGHT, LAUGH, PLOTTWIST]}, //Crazy stupid love
  {imdb: "tt0478970", streaming: [D], category: [ACTION]}, //Ant-man 
  {imdb: "tt5095030", streaming: [D], category: [ACTION, LAUGH]}, //Ant-man and the wasp
  {imdb: "tt4154796", streaming: [D], category: [EPIC]}, //Avengers Endgame
  {imdb: "tt4154756", streaming: [D], category: [EPIC, PLOTTWIST]}, //Avengers Infinity war
  {imdb: "tt1825683", streaming: [D], category: [ACTION]}, //Black panther
  {imdb: "tt0468569", streaming: [H], category: [EPIC]}, //The dark knight
  {imdb: "tt1211837", streaming: [D], category: [ACTION]}, //Doctor strange
  {imdb: "tt6320628", streaming: [V], category: [ACTION]}, //Spider-man far from home
  {imdb: "tt3501632", streaming: [D], category: [ACTION, LAUGH]}, //Thor: ragnarök
  {imdb: "tt3783958", streaming: [OB], category: [MUSIC]}, //La la land
  {imdb: "tt0058331", streaming: [D], category: [MUSIC]}, //Mary Poppins
  {imdb: "tt2077886", streaming: [OB], category: [MUSIC]}, //phantom of the opera
  {imdb: "tt1727824", streaming: [D, H, V], category: [MUSIC]}, //bohemian rhapsody
  {imdb: "tt2066051", streaming: [VR], category: [MUSIC]}, //rocketman
  {imdb: "tt0795421", streaming: [N, V], category: [MUSIC]}, //Mamma mia!
  {imdb: "tt0816692", streaming: [H], category: [CRY, EPIC]}, //Interstellar
  {imdb: "tt0102492", streaming: [VR], category: [CRY]}, //My girl
  {imdb: "tt4481414", streaming: [D], category: [CRY, TOUCHING]}, //Gifted
  {imdb: "tt0388795", streaming: [OB], category: [CRY, LOVE]}, //Brokeback mountain
  {imdb: "tt0816442", streaming: [D], category: [CRY, TOUCHING]}, //The Book thief
  {imdb: "tt0281358", streaming: [VR], category: [CRY]}, //A walk to remember
  {imdb: "tt0308644", streaming: [V], category: [CRY]}, //Finding neverland
  {imdb: "tt0105323", streaming: [OB], category: [TOUCHING]}, //Scent of a woman
  {imdb: "tt2084970", streaming: [H, N, V], category: [TOUCHING]}, //The imitation game
  {imdb: "tt0111161", streaming: [H], category: [TOUCHING, PLOTTWIST]}, //Shawshank
  {imdb: "tt2543472", streaming: [VR], category: [TOUCHING]}, //Wonder
  {imdb: "tt0109830", streaming: [N, V], category: [TOUCHING]}, //Forrest Gump
  {imdb: "tt3741834", streaming: [OB], category: [TOUCHING]}, //Lion
  {imdb: "tt2584384", streaming: [D], category: [LAUGH]}, //Jojo Rabbit
  {imdb: "tt2283362", streaming: [H, V], category: [LAUGH]}, //Jumanji welcome to the jungle
  {imdb: "tt7975244", streaming: [H], category: [LAUGH]}, //Jumanji the next level
  {imdb: "tt0381707", streaming: [N], category: [LAUGH]}, //White chicks
  {imdb: "tt0482571", streaming: [V], category: [PLOTTWIST, EPIC]}, //Prestige
  {imdb: "tt2250912", streaming: [OB], category: [ACTION, PLOTTWIST]}, //spider-man homecoming
  {imdb: "tt6751668", streaming: [OB], category: [PLOTTWIST, EPIC]}, //Parasite
  {imdb: "tt8721424", streaming: [N], category: [MUSIC, LIGHT, CRY, TOUCHING]}, //Tick tick boom
  {imdb: "tt9639470", streaming: [OB], category: [PLOTTWIST]}, //Last night in soho
  {imdb: "tt2802144", streaming: [D], category: [ACTION, LAUGH]}, //Kingsman 1
  {imdb: "tt4649466", streaming: [D], category: [ACTION, LAUGH]}, //Kingsman 2
  {imdb: "tt5164214", streaming: [VR], category: [LIGHT]}, //OCEANS 8
  {imdb: "tt8579674", streaming: [VR], category: [EPIC]}, //1917
  {imdb: "tt8946378", streaming: [VR], category: [PLOTTWIST]}, //Knives out
  {imdb: "tt6264654", streaming: [D], category: [LAUGH, ACTION]}, //Free guy
  {imdb: "tt1392214", streaming: [N, V], category: [EPIC]}, //prisoners
  {imdb: "tt10872600", streaming: [V], category: [ACTION, EPIC]}, //spider-man no way home
  {imdb: "tt14664414", streaming: [N], category: [CRY, LOVE]}, //young royals
  {imdb: "tt10638036", streaming: [N], category: [LIGHT, LOVE]}, //heartstopper
  {imdb: "tt0249462", streaming: [V], category: [CRY, TOUCHING, LIGHT]}, //billy elliot
  {imdb: "tt0398286", streaming: [D], category: [LIGHT]}, //tangled
];

/**
 * tt9639470
 */