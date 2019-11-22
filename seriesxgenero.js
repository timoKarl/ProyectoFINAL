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
  var query = new URLSearchParams(location.search)
  if (query.has('id')){
    var idGenero = query.get('id');
  }
  idGener0 = JSON.parse(idGenero)
  console.log(idGener0);
//genero
//
// document.getElementById("orden").addEventListener("change", orden1());

// function orden1() {
// if (document.getElementById('orden').value=="1") {
//   orden = "popularity.desc"
// }else {
//   if (document.getElementById('orden').value=="2") {
//     orden = "popularity.asc"
//   }else {
//     if (document.getElementById('orden').value=="3") {
//       orden = "vote_average.desc"
//     }else {
//       if (document.getElementById('orden').value=="4") {
//         orden = "vote_average.asc"
//       }else {
//         if (document.getElementById('orden').value=="5") {
//           orden = "first_air_date.desc"
//         }else {
//           if (document.getElementById('orden').value=="6") {
//             orden = "first_air_date.asc"
//           }
//         }
//       }
//     }
//   }
// }
// }
var orden = "popularity.desc"
fetch("https://api.themoviedb.org/3/discover/tv?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&sort_by="+orden+"&page=1&with_genres="+idGener0)
.then(res => res.json())
.then(data => {
  console.log(data);
  var genero = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var ulgenero = document.getElementById("genero");
  var ligenero = ""
 for (var i = 0; i < genero.length; i++) {
   var nombre = genero[i].name
   var path = genero[i].poster_path
   if (path == null) {
     prepath = ""
     path = "img/notfound.jpg"
   }
   var overview = genero[i].overview.substring(0,100)
   var valoracion = genero[i].vote_average
    ligenero = '<a href="detalle.html?id='+ genero[i].id +'"><li>'
    ligenero +=     '<div class="uk-card uk-card-default ">'
    ligenero +=         '<div class="uk-card-media-top">'
    ligenero +=             '<img class="genero" src='+ prepath + path +' alt="">'
    ligenero +=         '</div>'
    ligenero +=         '<div class="uk-card-body">'
    ligenero +=             '<h3 class="uk-card-title">'+  nombre +'</h3>'
    ligenero +=             '<p>'+ overview + '...' +'</p>'
    ligenero +=             '<p>Valoracion: '+ valoracion +'</p>'
    ligenero +=         '</div>'
    ligenero +=     '</div>'
    ligenero += '</li></a>';
    ulgenero.innerHTML += ligenero;
}
})
//genero
//nombre generos
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
.then(res => res.json())
.then(data => {
  var generos = data.genres
  for (var i = 0; i < generos.length; i++) {
    if (generos[i].id == idGener0) {
      var nombreGenero = generos[i].name
      document.getElementById('nombreGenero').innerHTML = nombreGenero
    }
  }
})
//nombre genero
}
