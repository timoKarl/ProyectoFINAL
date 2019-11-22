window.onload = function(){
//Header
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
.then(res => res.json())
.then(data => {
console.log(data);
var generos = data.genres
for (var i = 0; i < generos.length; i++) {
  var nombre = generos[i].name
  var idGenero = generos[i].id
  document.querySelector('#listaGeneros').innerHTML += '<li><a href=seriesxgenero.html?id="'+ idGenero +'">'+ nombre +'</a></li>'
}
for (var i = 0; i < generos.length; i++) {
  var nombre = generos[i].name
  var idGenero = generos[i].id
  document.querySelector('#listaGenerosCon').innerHTML += '<option>'+ nombre +'</option>'
}
for (var i = 0; i < generos.length; i++) {
  var nombre = generos[i].name
  var idGenero = generos[i].id
  document.querySelector('#listaGenerosSin').innerHTML += '<option>'+ nombre +'</option>'
}
  })
  //header

  var query = new URLSearchParams(location.search)

var orden = ""
var estreno = ""
var conGenero = ""
var sinGenero = ""
var keyWords = ""
if (query.has('id')){
  var idSerie = query.get('id');
}
fetch("https://api.themoviedb.org/3/discover/tv?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&sort_by="+orden+"&first_air_date_year="+estreno+"&page=1&with_genres="+conGenero+"&without_genres="+sinGenero+"&include_null_first_air_dates=fals&with_keywords="+keyWords)



}
