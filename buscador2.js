window.onload = function() {
  var queryString = new URLSearchParams(location.search)
  var busco = queryString.get("buscador")
  var usuario = localStorage.getItem("user")
  if (usuario != null) {
    document.querySelector("button.btn-log").style.display = "none"
    document.querySelector("li.prefes").style.display = "block"
    document.querySelector("li.saludop").style.display = "block"
    document.querySelector("p.saludo").innerHTML = "Hola " + usuario
    document.querySelector("li.lg").style.display = "block"


  }
  var cont= 2;
  window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        fetch("https://api.themoviedb.org/3/search/tv?api_key=7246c48f98d8db92d443b21af0633a14&language=en-US&query="+busco+"&page="+ cont+"&include_adult=false")
          .then(function(respuesta) {
            return respuesta.json()
            console.log(respuesta);
          })
          .then(function(informacion) {
                var arrayBusqueda = informacion.results
                console.log(arrayBusqueda);
                for (var i = 0; i < arrayBusqueda.length; i++) {
                  var png = arrayBusqueda[i].poster_path;
                  var id = arrayBusqueda[i].id
                  document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=pelicula.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
                }
          })
          .catch(function(error) {
            console.log("Error: " + error);
          })
      }
  };




fetch("https://api.themoviedb.org/3/search/movie?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES&query="+busco+"&page=1&include_adult=false")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
        var arrayBusqueda = informacion.results
        console.log(arrayBusqueda);
        for (var i = 0; i < arrayBusqueda.length; i++) {
          var png = arrayBusqueda[i].poster_path;
          var id = arrayBusqueda[i].id
          document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=pelicula.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
        }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })


  //ESTO ES Generos
  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=3e7db3a288e409d2f1823c536f9d81f0&language=es-ES")
    .then(function(respuesta) {
      return respuesta.json()
      console.log(respuesta);
    })
    .then(function(informacion) {
      var arrayGeneros = informacion.genres
      for (var i = 0; i < arrayGeneros.length; i++) {
        var nombre = arrayGeneros[i].name
        var id = arrayGeneros[i].id
        var li;
        li = '<li>'
        li += '<a href=genero.html?idGenero=' + id + '&genero='+nombre+'>' + nombre + '</a>'
        li += '</li>'

        document.querySelector("ul.gen").innerHTML += li
      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
    document.querySelector("form.buscar").onsubmit = function(e) {
    var busco = document.buscar.buscador.value;
    // var buscadorInput = document.querySelector("input")
    if (busco.length <= 3) {
      e.preventDefault()
      UIkit.notification({message: 'Ingrese mas de tres caracteres', status: 'warning',  timeout: 2000})
  }else {

  }
}
//LOGIN
document.querySelector("form.login").onsubmit = function(e) {

  var usuario = document.login.user.value;
  localStorage.setItem('user', usuario);
  var mail = document.login.mail.value;
  var genero= document.login.genero.value;
  var formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (usuario== '' || mail== '' && mail.value.match(formatEmail)== null  || genero== '') {
    e.preventDefault()
    UIkit.notification({message: 'Porfavor, complete el formulario', status: 'warning',  timeout: 2000})
  }else {
    e.preventDefault()
    UIkit.notification().close()
    localStorage.setItem("user", usuario)
    document.querySelector("button.btn-log").style.display = "none"
    document.querySelector("li.prefes").style.display = "block"
    document.querySelector("li.saludop").style.display = "block"
    document.querySelector("p.saludo").innerHTML = "Hola " + usuario
    document.querySelector(".uk-modal-close-default").click()
    document.querySelector("li.lg").style.display = "block"
    var nombre = document.querySelector("input.name").value

  }



}
document.querySelector("a.logout").onclick = function(e) {

  localStorage.clear()
  document.querySelector("li.prefes").style.display = "none"
  document.querySelector("li.saludop").style.display = "none"
  document.querySelector("button.btn-log").style.display = "block"


}
}
