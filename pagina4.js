window.onload = function(){

  function Login(){
  var done=0;
  var usuario=document.login.usuario.value;
  var password=document.login.password.value;
  if (usuario=="USUARIO1" && password=="CONTRASEÑA1") {
  window.localsStorage="TU_PAGINA_WEB.HTML";
  }
  if (usuario=="USUARIO2" && password=="CONTRASEÑA2") {
  window.localStorage="TU_PAGINA_WEB.HTML";
  }
  if (usuario=="" && password=="") {
  window.localStorage="errorpopup.html";
  }
  }

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
fetch("https://api.themoviedb.org/3/discover/movie?api_key=f33095cc07bd4e913c0e2fdfc606109c&language=en-US&with_genres=80")
.then(res => res.json())
.then(data => {
  console.log(data.results);
  var populares = data.results;
  var genreid = populares[0].genre_ids;
  console.log(genreid[0])
  var prepath = "https://image.tmdb.org/t/p/original"
  var ulpopulares = document.getElementById("populares");
  var lipopulares = "";
 for (var i = 0; i < populares.length; i++) {
   var nombre = populares[i].title
   var path = populares[i].poster_path
   var overview = populares[i].overview.substring(0,100)
   var valoracion = populares[i].vote_average
    lipopulares = '<a href="detalle.html?id='+ populares[i].id +'"><li>'
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
    lipopulares += '</li></a>';
    console.log(lipopulares);
    ulpopulares.innerHTML += lipopulares;

}
})
//populares

}
document.getElementById("genid").innerHTML = "Crime";

/*Api key Bruno: f33095cc07bd4e913c0e2fdfc606109c*/
