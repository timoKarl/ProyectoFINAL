
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
  document.querySelector('#listaGeneros').innerHTML += '<li><a href=pagina3.html?id="'+ idGenero +'">'+ nombre +'</a></li>'
}
  })
}

fetch("https://api.themoviedb.org/3/discover/movie?api_key=f33095cc07bd4e913c0e2fdfc606109c&language=en-US")
.then(res => res.json())
.then(data => {
  console.log(data.results);
  var genclick = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var ulgenclick = document.getElementById("genclick");
  var ligenclick = ""
 for (var i = 0; i < genclick.length; i++) {
   var nombre = genclick[i].name
   var path = genclick[i].poster_path
   var overview = genclick[i].overview.substring(0,100)
   var valoracion = genclick[i].vote_average
    ligenclick = '<a href="detalle.html?id='+ genclick[i].id +'"><li>'
    ligenclick +=     '<div class="uk-card uk-card-default ">'
    ligenclick +=         '<div class="uk-card-media-top">'
    ligenclick +=             '<img class="genclick" src='+ prepath + path +' alt="">'
    ligenclick +=         '</div>'
    ligenclick +=         '<div class="uk-card-body">'
    ligenclick +=             '<h3 class="uk-card-title">'+  nombre +'</h3>'
    ligenclick +=             '<p>'+ overview + '...' +'</p>'
    ligenclick +=             '<p>Valoracion: '+ valoracion +'</p>'
    ligenclick +=         '</div>'
    ligenclick +=     '</div>'
    ligenclick += '</li></a>';
    console.log(ligenclick);
    ulgenclick.innerHTML += ligenclick;
}
})

//header

/*Api key Bruno: f33095cc07bd4e913c0e2fdfc606109c*/
