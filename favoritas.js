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

// lista0
var fav = JSON.parse(window.localStorage.getItem('fav'))
console.log(fav);
  for (var i = 0; i < fav.length; i++) {
  console.log(fav[i]);
fetch("https://api.themoviedb.org/3/tv/"+fav[i]+"?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
.then(res => res.json())
.then(data => {
  console.log(data);
      var favoritas = data
      var prepath = "https://image.tmdb.org/t/p/original"
      var trfavoritas = ""
       var nombre = favoritas.name
       var path = favoritas.poster_path
       var overview = favoritas.overview
       var valoracion = favoritas.vote_average
       trfavoritas = '<tr>'
       trfavoritas += '<td><img class="uk-preserve-width uk-border-circle" src="'+prepath+path+'" width="40" alt=""></td>                                                   <td class="uk-text-truncate">'+nombre+'</td>                                                 <td class="uk-table-link">                          <a class="uk-link-reset" href="detalle.html?id='+ favoritas.id+'">'+overview+'</a></td>                                                <td class="uk-text-nowrap">'+valoracion+'</td></tr>'
        console.log(trfavoritas);
        document.getElementById("tbfavoritas").innerHTML += trfavoritas;
      })
  }

}
