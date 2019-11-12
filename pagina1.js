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
//Registro
function registro(){
if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){
        document.form.submit();
    }
    else{
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
    }
}
//Registro
//log in
function go(){
if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){
        document.form.submit();
    }
    else{
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
    }
}
//log in
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

//Valoradas
fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page=1")
.then(res => res.json())
.then(data => {
  console.log(data.results);
  var valoradas = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var ulvaloradas = document.getElementById("valoradas");
  var livaloradas = ""
 for (var i = 0; i < valoradas.length; i++) {
   var nombre = valoradas[i].name
   var path = valoradas[i].poster_path
   var overview = valoradas[i].overview.substring(0,100)
   var valoracion = valoradas[i].vote_average
  livaloradas = '<a href="detalle.html?id='+ valoradas[i].id +'"><li>'
  livaloradas +=     '<div class="uk-card uk-card-default ">'
  livaloradas +=         '<div class="uk-card-media-top">'
  livaloradas +=             '<img class="valoradas" src='+ prepath + path +' alt="">'
  livaloradas +=         '</div>'
  livaloradas +=         '<div class="uk-card-body">'
  livaloradas +=             '<h3 class="uk-card-title">'+  nombre +'</h3>'
  livaloradas +=             '<p>'+ overview + '...' +'</p>'
  livaloradas +=             '<p>Valoracion: '+ valoracion +'</p>'
  livaloradas +=         '</div>'
  livaloradas +=     '</div>'
  livaloradas += '</li></a>'
    ulvaloradas.innerHTML += livaloradas;
}
})
//Valoradas

//Al aire Hoy
fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page=1")
.then(res => res.json())
.then(data => {
  console.log(data.results);
  var aire = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var ulaire = document.getElementById("aire");
  var liaire = ""
 for (var i = 0; i < aire.length; i++) {
   var nombre = aire[i].name
   var path = aire[i].poster_path
   var overview = aire[i].overview.substring(0,100)
   var valoracion = aire[i].vote_average
  liaire  = '<a href="detalle.html?id='+ aire[i].id +'"><li>'
  liaire +=     '<div class="uk-card uk-card-default ">'
  liaire +=         '<div class="uk-card-media-top">'
  liaire +=             '<img class="aire" src='+ prepath + path +' alt="">'
  liaire +=         '</div>'
  liaire +=         '<div class="uk-card-body">'
  liaire +=             '<h3 class="uk-card-title">'+  nombre +'</h3>'
  liaire +=             '<p>'+ overview + '...' +'</p>'
  liaire +=             '<p>Valoracion: '+ valoracion +'</p>'
  liaire +=         '</div>'
  liaire +=     '</div>'
  liaire += '</li></a>'
    ulaire.innerHTML += liaire;
}
})
//Al Aire Hoy
}
