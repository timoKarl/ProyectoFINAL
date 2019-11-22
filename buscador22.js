window.addEventListener("load", function() {
  var queryString = location.search; //Capturamos la query string del navegador

  var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString

  var busqueda = searchParams.get("busqueda"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "busqueda" (name="busqueda").
  var input = document.querySelector(".uk-search-input")
  input.setAttribute("value", busqueda)

document.getElementById('busqueda').innerHTML = "Tu busqueda es: "+busqueda

    var page = 1;
    var url = "https://api.themoviedb.org/3/search/tv?api_key=7246c48f98d8db92d443b21af0633a14&language=en-US&query=" + busqueda + '&page=1'

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        var buscador = data.results;
        console.log(data.total_pages);
        var prepath = "https://image.tmdb.org/t/p/original"
        var ulbuscador = document.getElementById("resultados");
        var libuscador = ""
       for (var i = 0; i < buscador.length; i++) {
         var nombre = buscador[i].name
         var path = buscador[i].poster_path
         if (path == null) {
           prepath = ""
           path = "img/notfound.jpg"
         }
         var overview = buscador[i].overview.substring(0,100)
         var valoracion = buscador[i].vote_average
         var sinResultados = document.getElementById('sinResultados')
         if (data.total_pages === 0) {
           sinResultados.innerHTML = "No se encontraron resultados para la busqueda"
         }else {
          libuscador = '<a href="detalle.html?id='+ buscador[i].id +'"><li>'
          libuscador +=     '<div class="uk-card uk-card-default ">'
          libuscador +=         '<div class="uk-card-media-top">'
          libuscador +=             '<img class="buscador" src='+ prepath + path +' alt="">'
          libuscador +=         '</div>'
          libuscador +=         '<div class="uk-card-body">'
          libuscador +=             '<h3 class="uk-card-title">'+  nombre +'</h3>'
          libuscador +=             '<p>'+ overview + '...' +'</p>'
          libuscador +=             '<p>Valoracion: '+ valoracion +'</p>'
          libuscador +=         '</div>'
          libuscador +=     '</div>'
          libuscador += '</li></a>';
          ulbuscador.innerHTML += libuscador;
        }
      }
    })
    })
        //
        // var destino = document.querySelector(".resultados");
        // var datosFinales = datos.results;
        // var titulo = document.querySelector(".primero");
        //
        // titulo.innerText = busqueda;
        //
        //
        // console.log(datos, page);
        //
        // console.log(datos);
        //
        // if (datos.results.length === 0 && page == 1) {
        //   titulo.innerText = "No se encontraron resultados";
        //   titulo.style.textTransform = "none";
        //   titulo.style.padding = "20%"
        //   titulo.style.textAlign = "center"
        //   titulo.style.color = "Red"
        // }
        //
        // for (var i = 0; i < datosFinales.length; i++) {
        //   if (datos.results[i].poster_path == null) {
        //     var foto = document.querySelector('.resultados');
        //     foto.innerHTML += '<li><a href="info_serie.html?id=' + datos.results[i].id + '"> ' + '<img src="img/notfound.jpg">' + '</a></li>'
        //   }
        //   else {
        //     destino.innerHTML += '<li><a href="info_serie.html?id=' + datos.results[i].id + '"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
        //   }
        // if (data.total_pages == page) {
        //   console.log('cortamo');
        //   window.removeEventListener('scroll', scrolled)
        //   return
        //   // alert("No se encuentran resultados")
        // }

//   window.addEventListener('scroll', scrolled)
//
//   function scrolled(e) {
//     var myDiv = document.querySelector('body')
//     if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
//       // scrolledToBottom(e);
//       page++
//       vermas()
//     }
//   }
// });
