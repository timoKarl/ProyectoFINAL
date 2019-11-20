/*window.addEventListener("load", function() {
var queryString = location.search;
var searchParams = new URLSearchParams(queryString);
var busqueda = document.querySelector('busqueda')
var inputo = document.getElementsByClassName('.uk-search-input')
var input = inputo.setAttribute("value", busqueda)
console.log("Hola puto")


});
*/
window.addEventListener("load", function() {
  var queryString = location.search; //Capturamos la query string del navegador

  var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString

  var busqueda = searchParams.get("busqueda"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").
  var input = document.querySelector(".uk-search-input")
  input.setAttribute("value", busqueda)

  var page = 1;
  vermas()

  function vermas() {

    var url = "https://api.themoviedb.org/3/search/tv?api_key=7246c48f98d8db92d443b21af0633a14&language=en-US&query=" + busqueda + '&page=' + page

    fetch(url)
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {


        var destino = document.querySelector(".resultados");
        var datosFinales = datos.results;
        var titulo = document.querySelector(".primero");

        titulo.innerText = busqueda;


        console.log(datos, page);

        console.log(datos);

        if (datos.results.length === 0 && page == 1) {
          titulo.innerText = "No se encontraron resultados";
          titulo.style.textTransform = "none";
          titulo.style.padding = "20%"
          titulo.style.textAlign = "center"
          titulo.style.color = "Red"
        }

        for (var i = 0; i < datosFinales.length; i++) {
          if (datos.results[i].poster_path == null) {
            var foto = document.querySelector('.resultados');
            foto.innerHTML += '<li><a href="info_serie.html?id=' + datos.results[i].id + '"> ' + '<img src="img/notfound.jpg">' + '</a></li>'
          }
          else {
            destino.innerHTML += '<li><a href="info_serie.html?id=' + datos.results[i].id + '"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
          }
        }
        if (datos.total_pages == page) {
          console.log('cortamo');
          window.removeEventListener('scroll', scrolled)
          return
          // alert("No se encuentran resultados")
        }
      })

  }
  window.addEventListener('scroll', scrolled)

  function scrolled(e) {
    var myDiv = document.querySelector('body')
    if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
      // scrolledToBottom(e);
      page++
      vermas()
    }

  }









});
