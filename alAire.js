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
for (var i = 0; i < 5; i++) {
fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page=1")
.then(res => res.json())
.then(data => {
  console.log(data.results);
  var alaire = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var tralaire = ""
 for (var i = 0; i < alaire.length; i++) {
   var nombre = alaire[i].name
   var path = alaire[i].poster_path
   if (path == null) {
     prepath = ""
     path = "img/notfound.jpg"
   }
   var overview = alaire[i].overview
   var valoracion = alaire[i].vote_average

   tralaire = '<tr>'
   tralaire += '<td><img class="uk-preserve-width uk-border-circle" src="'+prepath+path+'" width="40" alt=""></td>                                                   <td class="uk-text-truncate">'+nombre+'</td>                                                 <td class="uk-table-link">                          <a class="uk-link-reset" href="detalle.html?id='+ alaire[i].id+'">'+overview+'</a></td>                                                <td class="uk-text-nowrap">'+valoracion+'</td></tr>'

    document.getElementById("tbalaire").innerHTML += tralaire;
}
})
}
}
