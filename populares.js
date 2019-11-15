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
fetch("https://api.themoviedb.org/3/tv/popular?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page=1")
.then(res => res.json())
.then(data => {
  console.log(data.results);
  var populares = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var trpopulares = ""
 for (var i = 0; i < populares.length; i++) {
   var nombre = populares[i].name
   var path = populares[i].poster_path
   var overview = populares[i].overview
   var valoracion = populares[i].vote_average

   trpopulares = '<tr>'
   trpopulares += '<td><img class="uk-preserve-width uk-border-circle" src="'+prepath+path+'" width="40" alt=""></td>                                                   <td class="uk-text-truncate">'+nombre+'</td>                                                 <td class="uk-table-link">                          <a class="uk-link-reset" href="detalle.html?id='+ populares[i].id+'">'+overview+'</a></td>                                                <td class="uk-text-nowrap">'+valoracion+'</td></tr>'
    console.log(trpopulares);
    document.getElementById("tbpopulares").innerHTML += trpopulares;
}
})
}
