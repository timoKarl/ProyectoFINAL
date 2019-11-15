window.onload = function(){
  //Header
  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
  .then(res => res.json())
  .then(data => {
  // console.log(data);
  var generos = data.genres
  for (var i = 0; i < generos.length; i++) {
    var nombre = generos[i].name
    var idGenero = generos[i].id
    document.querySelector('#listaGeneros').innerHTML += '<li><a href=seriesxgenero.html?id="'+ idGenero +'">'+ nombre +'</a></li>'
  }
    })
    //header

// lista0


<<<<<<< HEAD
for (var i = 1; i < 5; i++) {
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page="+i)
=======
/*fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
>>>>>>> 66f7164c4a0fc26bd5b8ac801fc26595693b4615
  .then(res => res.json())
  .then(data => {
    console.log(data);
    var valoradas = data.results;
          var prepath = "https://image.tmdb.org/t/p/original"
          var trvaloradas = ""
          for (var i = 0; i < 21; i++) {
           var nombre = valoradas[i].name
           var path = valoradas[i].poster_path
           var overview = valoradas[i].overview
           var valoracion = valoradas[i].vote_average

           trvaloradas = '<tr>'
           trvaloradas += '<td><img class="uk-preserve-width uk-border-circle lazyload" src="'+prepath+path+'" width="40" alt=""></td>                                                   <td class="uk-text-truncate">'+nombre+'</td>                                                 <td class="uk-a-link">                          <a class="uk-link-reset" href="detalle.html?id='+ valoradas[i].id+'">'+overview+'</a></td>                                                <td class="uk-text-nowrap">'+valoracion+'</td></tr>'
            console.log(trvaloradas);
            document.getElementById("tbvaloradas").innerHTML += trvaloradas;

          }
  })*/
  .catch(error => {
    console.log(error);

  })






 fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US")
 .then(res => res.json())
 .then(data => {
   console.log(data);
   var cantidadDePaginas = data.total_pages;

 for (var i = 1; i < 2; i++) {
   fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page=1")
   .then(res => res.json())
   .then(data => {
       console.log(data);
       var valoradas = data.results;
       var prepath = "https://image.tmdb.org/t/p/original"
       var trvaloradas = ""
       for (var i = 0; i < 21; i++) {
        var nombre = valoradas[i].name
        var path = valoradas[i].poster_path
        var overview = valoradas[i].overview
        var valoracion = valoradas[i].vote_average
//
        trvaloradas = '<tr>'
        trvaloradas += '<td><img class="uk-preserve-width uk-border-circle lazyload" src="'+prepath+path+'" width="40" alt=""></td>                                                   <td class="uk-text-truncate">'+nombre+'</td>                                                 <td class="uk-a-link">                          <a class="uk-link-reset" href="detalle.html?id='+ valoradas[i].id+'">'+overview+'</a></td>                                                <td class="uk-text-nowrap">'+valoracion+'</td></tr>'
         console.log(trvaloradas);
         document.getElementById("tbvaloradas").innerHTML += trvaloradas;

       }
   })
   }
//
 })
/*onScroll () {
  var nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (!this.props.fetching && nearBottom) {
    fetchItems();  // dispatch action
  }
}

render () {
  var items = this.props.items.map(item => (<Component {item}/>)

  return (
    <ul>{ items }</ul>
  )
}

componentDidMount() {
  window.addEventListener("scroll", this.onScroll.bind(this), false);
}
componentWillUnmount() {
  window.removeEventListener("scroll", this.onScroll.bind(this), false);
}

onScroll()*/
}
