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
       var idSerie = favoritas.id
       var path = favoritas.poster_path
       var overview = favoritas.overview
       var valoracion = favoritas.vote_average
       trfavoritas = '<tr>'
       trfavoritas += '<td><img class="uk-preserve-width uk-border-circle" src="'+prepath+path+'" width="40" alt=""></td>                                     <td class="uk-text-truncate">'+nombre+'</td>                                     <td class="uk-table-link">                                                       <a class="uk-link-reset" href="detalle.html?id='+ favoritas.id+'">'+overview+'</a></td>                                                                          <td class="uk-text-nowrap">'+valoracion+'</td><td class="uk-text-nowrap"><a href="#" id="agregar-favoritos"><p id="textoFavoritos">Eliminar de favoritos</p></a></td></tr>'
        document.getElementById("tbfavoritas").innerHTML += trfavoritas;

        // Agregar/eliminar
  var idSerie2 = JSON.parse(idSerie)
  console.log(idSerie2);
  if (window.localStorage.getItem('fav') !== null) {
    if (JSON.parse(window.localStorage.getItem('fav')).indexOf(idSerie2) != -1) {
    }else {
      document.getElementById('agregar-favoritos').innerHTML = 'Agregar a favoritos';
    }
  }
  document.getElementById("agregar-favoritos").addEventListener("click", function(e) {
    e.preventDefault();
    if (window.localStorage.getItem('fav') !== null) {
      if (JSON.parse(window.localStorage.getItem('fav')).indexOf(idSerie2) != -1) {
        document.getElementById('agregar-favoritos').innerHTML = 'Agregar de favoritos'
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
})
}

}
