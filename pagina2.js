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

function apiCall() {
  $.getJSON('https://api.themoviedb.org/3/discover/movie?api_key=f33095cc07bd4e913c0e2fdfc606109c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=12
')
}

}
  })

//header

/*Api key Bruno: f33095cc07bd4e913c0e2fdfc606109c*/
