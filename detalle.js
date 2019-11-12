window.onload = ()=>{

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

  var query = new URLSearchParams(location.search)
  if (query.has('id')){
    var idSerie = query.get('id');
  }
  fetch("https://api.themoviedb.org/3/tv/"+ idSerie +"?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    var nombre = data.name;
    var prepath = "https://image.tmdb.org/t/p/original"
    var path = data.poster_path
    var generos = data.genres
    var pGeneros = document.querySelector('#generos')
    for (var i = 0; i < generos.length; i++) {
      var xGenero = generos[i].name
      var idGenero = generos[i].id
      pGeneros.innerHTML += "<a href='generos.html?id=" + idGenero + "'>" + xGenero + ",  </a>";
    }
    document.querySelector('#div1').innerHTML += '<img class="img" src="'+ prepath + path +'" alt="">'
    document.querySelector('#titulo').innerHTML =  nombre;
    var idiomaOriginal = data.original_language
    if (idiomaOriginal== "en") {
      idiomaOriginal = "Ingles"
    } else if (idiomaOriginal=="ja") {
      idiomaOriginal = "Japones"
    } else if (idiomaOriginal=="es") {
      idiomaOriginal = "Español"
    }
    document.querySelector('#idioma').innerHTML += idiomaOriginal
    var sinopsis = data.overview
    document.querySelector('#overview').innerHTML += sinopsis
    var mas = data.homepage
    document.querySelector('#leerMas').innerHTML += '<a class="uk-button uk-button-text" href='+mas+'>Mas</a>'
    var puntaje = data.vote_average
    document.querySelector('#puntaje').innerHTML += puntaje + "/10"
    var ulEpisodio = data.last_episode_to_air.name
    var fechaUlEpisodio = data.last_episode_to_air.air_date
    document.querySelector('#ulEpisodio').innerHTML += ulEpisodio + " emitido el " + fechaUlEpisodio
    var proxEpisodio = data.next_episode_to_air.name
    var fechaProxEpisodio = data.next_episode_to_air.air_date
    document.querySelector('#proxEpisodio').innerHTML += proxEpisodio + " el " + fechaProxEpisodio
    var temporadas = data.number_of_seasons
    document.querySelector('#temporadas').innerHTML += temporadas
    var episodios = data.number_of_episodes
    document.querySelector('#episodios').innerHTML += episodios


})




}
