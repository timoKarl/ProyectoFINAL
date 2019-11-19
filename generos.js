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
    })
    //header

// lista
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
.then(res => res.json())
.then(data => {
console.log(data.genres);
var generos = data.genres
var trgeneros = ""
var trgeneros2 = ""
for (var i = 0; i < generos.length; i++) {
  var nombreGenero = generos[i].name
  var idGenero = generos[i].id
   trgeneros = '<tr>'
   trgeneros += '<td class="uk-table-link"><a class="uk-link-reset" href="seriesxgenero.html?id='+ idGenero+'">'+nombreGenero+'</a></td></tr>'
    document.getElementById("tbgeneros").innerHTML += trgeneros;
        }
  })
}
