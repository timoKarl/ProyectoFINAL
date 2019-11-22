// mostrasr / ocultar
var x = document.getElementById("relacionadosdiv");
x.style.display = "none";
function mostrar() {
  if (x.style.display = "none") {
    x.style.display = "block"
  }else {
    x.style.display = "none"
  }
}
//mostrar / ocultar

window.onload = ()=>{

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

  var query = new URLSearchParams(location.search)
  if (query.has('id')){
    var idSerie = query.get('id');
  }
  fetch("https://api.themoviedb.org/3/tv/"+ idSerie +"?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
  .then(res => res.json())
  .then(data => {
    var nombre = data.name;
    var prepath = "https://image.tmdb.org/t/p/original"
    var path = data.poster_path
    if (path == null) {
      prepath = ""
      path = "img/notfound.jpg"
    }
    var generos = data.genres
    var pGeneros = document.querySelector('#generos')
    for (var i = 0; i < generos.length; i++) {
      var xGenero = generos[i].name
      var idGenero = generos[i].id
      pGeneros.innerHTML += "<a href='seriesxgenero.html?id=" + idGenero + "'>" + xGenero + ",  </a>";
    }
    document.querySelector('#div1').innerHTML += '<img class="img" src="'+ prepath + path +'" alt="">'
    document.querySelector('#titulo').innerHTML =  nombre;
    var idiomaOriginal = data.original_language
    if (idiomaOriginal== "en") {
      idiomaOriginal = "Ingles"
    } else if (idiomaOriginal=="ja") {
      idiomaOriginal = "Japones"
    } else if (idiomaOriginal=="es") {
      idiomaOriginal = "Español"
    }
    document.querySelector('#idioma').innerHTML += idiomaOriginal
    var sinopsis = data.overview
    document.querySelector('#overview').innerHTML += sinopsis
    var mas = data.homepage
    document.querySelector('#leerMas').innerHTML += '<a class="uk-button uk-button-text" href='+mas+'>Mas</a>'
    var puntaje = data.vote_average
    document.querySelector('#puntaje').innerHTML += puntaje + "/10"
    var ulEpisodio = data.last_episode_to_air.name
    var fechaUlEpisodio = data.last_episode_to_air.air_date
    document.querySelector('#ulEpisodio').innerHTML += ulEpisodio + " emitido el " + fechaUlEpisodio
    if (data.next_episode_to_air == null) {
      document.querySelector('#proxEpisodio').style.display = "none";
    }else {
    var proxEpisodio = data.next_episode_to_air.name
    var fechaProxEpisodio = data.next_episode_to_air.air_date
    document.querySelector('#proxEpisodio').innerHTML += proxEpisodio + " el " + fechaProxEpisodio
  }
    var temporadas = data.number_of_seasons
    document.querySelector('#temporadas').innerHTML += temporadas
    var episodios = data.number_of_episodes
    document.querySelector('#episodios').innerHTML += episodios


})

// Trailers
fetch("https://api.themoviedb.org/3/tv/"+ idSerie +"/videos?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US").then(res => res.json())
.then(data => {
var videoResults = data.results
  // console.log(videoResults);
var videoNombre = ""
var videoLink = ""
for (var i = 0; i < videoResults.length; i++) {
  videoNombre = videoResults[i].name
  videoLink = videoResults[i].key
  document.querySelector('#videosTodos').innerHTML += '<a class="uk-button uk-button-default" href="#modal-media-youtube" uk-toggle><p id="videoNombre">'+ videoNombre +'</p></a><div id="modal-media-youtube" class="uk-flex-top" uk-modal><div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical"><button class="uk-modal-close-outside" type="button" uk-close></button><div id="videos"><iframe class="SameSite" src="https://www.youtube.com/embed/'+ videoLink +'" width="500" height="281" frameborder="0" uk-video></iframe></div></div></div>'
}
})
// Trailers
// Favoritos2

var idSerie2 = JSON.parse(idSerie)
console.log(idSerie2);
if (window.localStorage.getItem('fav') !== null) {
  if (JSON.parse(window.localStorage.getItem('fav')).indexOf(idSerie2) != -1) {
    document.getElementById('agregar-favoritos').innerHTML = 'Eliminar de favoritos';
  }
}
document.getElementById("agregar-favoritos").addEventListener("click", function(e) {
  e.preventDefault();
  if (window.localStorage.getItem('fav') !== null) {
    if (JSON.parse(window.localStorage.getItem('fav')).indexOf(idSerie2) != -1) {
      document.getElementById('agregar-favoritos').innerHTML = 'Agregar a favoritos'
      // la serie esta en fav. la quito
      var fav1 = JSON.parse(window.localStorage.getItem('fav'))
      console.log(fav1);
      var index = fav1.indexOf(idSerie2);
      if (index > -1) {
        fav1.splice(index, 1);
        window.localStorage.setItem('fav' , JSON.stringify(fav1))
      }
      console.log("elimino de fav");
    }else {
      // no esta. asi que la agrego
      document.getElementById('agregar-favoritos').innerHTML = 'Eliminar de favoritos'
    var fav = JSON.parse(window.localStorage.getItem('fav'))
    fav.push(idSerie2);
    console.log(fav);
    window.localStorage.setItem('fav', JSON.stringify(fav))
    console.log("agrego a fav");
    }
  }else {
    //aca llego si NO esta guardado fav en el local. entonces creo que array con la serie clickeada
    console.log(idSerie2);
  window.localStorage.setItem('fav', JSON.stringify([idSerie2]))
}
})
// Favoritos2

//relacionados
fetch("https://api.themoviedb.org/3/tv/"+ idSerie +"/recommendations?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page=1")
.then(res => res.json())
.then(data => {
  var relacionados = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var ulrelacionados = document.getElementById("relacionados");
  var lirelacionados = ""
 for (var i = 0; i < relacionados.length; i++) {
   var nombre = relacionados[i].name
   var path = relacionados[i].poster_path
   var overview = relacionados[i].overview.substring(0,100)
   var valoracion = relacionados[i].vote_average
    lirelacionados = '<a href="detalle.html?id='+ relacionados[i].id +'"><li>'
    lirelacionados +=     '<div class="uk-card uk-card-default ">'
    lirelacionados +=         '<div class="uk-card-media-top">'
    lirelacionados +=             '<img class="relacionados" src='+ prepath + path +' alt="">'
    lirelacionados +=         '</div>'
    lirelacionados +=         '<div class="uk-card-body">'
    lirelacionados +=             '<h3 class="uk-card-title">'+  nombre +'</h3>'
    lirelacionados +=             '<p class="relacionados">'+ overview + '...' +'</p>'
    lirelacionados +=             '<p>Valoracion: '+ valoracion +'</p>'
    lirelacionados +=         '</div>'
    lirelacionados +=     '</div>'
    lirelacionados += '</li></a>';
    // console.log(lirelacionados);
    ulrelacionados.innerHTML += lirelacionados;
}
})
//relacionados
}
