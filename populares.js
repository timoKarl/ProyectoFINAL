
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
fetch("https://api.themoviedb.org/3/tv/popular?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page="+i)
.then(res => res.json())
.then(data => {
  console.log(data.results);
  var populares = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var trpopulares = ""
 for (var i = 0; i < populares.length; i++) {
     var nombre = populares[i].name
     var path = populares[i].poster_path
     if (path == null) {
       prepath = ""
       path = "img/notfound.jpg"
     }
     var overview = populares[i].overview
     var valoracion = populares[i].vote_average

     trpopulares = '<tr>'
     trpopulares += '<td><img class="uk-preserve-width uk-border-circle" src="'+prepath+path+'" width="40" alt=""></td>                                                   <td class="uk-text-truncate">'+nombre+'</td>                                                 <td class="uk-table-link">                          <a class="uk-link-reset" href="detalle.html?id='+ populares[i].id+'">'+overview+'</a></td>                                                <td class="uk-text-nowrap">'+valoracion+'</td></tr>'

    document.getElementById("tbpopulares").innerHTML += trpopulares;
}
})
}
}
/*probando infinite scroll
var listElm = document.querySelector("#infinite-list");

// Add 20 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 5; i++) {
    var item = document.createElement("li");
    item.innerText = "Item" + nextItem++;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener("scroll", function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

// Initially load some items.
loadMore();
*/
