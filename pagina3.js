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
  document.querySelector('#listaGeneros').innerHTML += '<li><a href=generos.html?id="'+ idGenero +'">'+ nombre +'</a></li>'
}
  })
//header

//populares
fetch("https://api.themoviedb.org/3/tv/popular?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page=1")
.then(res => res.json())
.then(data => {
  console.log(data.results);
  var populares = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var ulpopulares = document.getElementById("populares");
  var lipopulares = ""
 for (var i = 0; i < populares.length; i++) {
   var nombre = populares[i].name
   var path = populares[i].poster_path
   var overview = populares[i].overview.substring(0,100)
   var valoracion = populares[i].vote_average
  lipopulares += '<a href="detalle.html?id='+ populares[i].id +'"><li>'
  lipopulares +=     '<div class="uk-card uk-card-default ">'
  lipopulares +=         '<div class="uk-card-media-top">'
  lipopulares +=             '<img class="populares" src='+ prepath + path +' alt="">'
  lipopulares +=         '</div>'
  lipopulares +=         '<div class="uk-card-body">'
  lipopulares +=             '<h3 class="uk-card-title">'+  nombre +'</h3>'
  lipopulares +=             '<p>'+ overview + '...' +'</p>'
  lipopulares +=             '<p>Valoracion: '+ valoracion +'</p>'
  lipopulares +=         '</div>'
  lipopulares +=     '</div>'
  lipopulares += '</li></a>'
    ulpopulares.innerHTML += lipopulares;
}
})
//populares
}
