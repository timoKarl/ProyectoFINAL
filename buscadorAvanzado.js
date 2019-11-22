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
if (query.has('conGenero')){
  var conGenero1 = query.get('conGenero')
  if (conGenero1 != "genero") {
    preConGenero = "&with_genres="
    conGenero = conGenero1
  }
}

var preSinGenero = ""
var sinGenero = ""
if (query.has('sinGenero')){
  var sinGenero1 = query.get('sinGenero')
  if (sinGenero1 != "genero") {
    preSinGenero = "&without_genres="
    sinGenero = sinGenero1
  }
}

var preKeyWords = ""
var keyWords = ""
if (query.has('keyWords')){
  preKeyWords = "&with_keywords="
  var keyWords = query.get('keyWords')
}
fetch("https://api.themoviedb.org/3/discover/tv?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&sort_by="+orden+"&first_air_date_year="+estreno+"&page=1&with_genres="+conGenero+"&without_genres="+sinGenero+"&include_null_first_air_dates=fals&with_keywords="+keyWords)

document.getElementById("mensaje").style.display = "none";
document.getElementById("lista").style.display = "none";
var url = "https://api.themoviedb.org/3/discover/tv?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&sort_by="+orden+"&air_date.gte="+estreno+"&page=1&timezone=America%2FNew_York"+preConGenero+conGenero+preSinGenero+sinGenero+"&include_null_first_air_dates=false&with_keywords="+keyWords
console.log(url);
fetch(url)
.then(res => res.json())
.then(data => {
// if (conGenero != "genero" && sinGenero != "genero") {
// document.getElementById("mensaje").style.display = "block";
// document.getElementById("mensaje").innerHTML +="<h2>Solo puedes seleccionar un genero a la vez</h2>";
// }else {
  console.log(data.results);
  document.getElementById("lista").style.display = "block";
  var resultados1 = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var trresultados1 = ""
 for (var i = 0; i < resultados1.length; i++) {
     var nombre = resultados1[i].name
     var path = resultados1[i].poster_path
     if (path == null) {
       prepath = ""
       path = "img/notfound.jpg"
     }
     var overview = resultados1[i].overview
     var valoracion = resultados1[i].vote_average

     trresultados1 = '<tr>'
     trresultados1 += '<td><img class="uk-preserve-width uk-border-circle" src="'+prepath+path+'" width="40" alt=""></td>                                                   <td class="uk-text-truncate">'+nombre+'</td>                                                 <td class="uk-table-link">                          <a class="uk-link-reset" href="detalle.html?id='+ resultados1[i].id+'">'+overview+'</a></td>                                                <td class="uk-text-nowrap">'+valoracion+'</td></tr>'

    document.getElementById("tbresultados1").innerHTML += trresultados1;
}
// }
})
