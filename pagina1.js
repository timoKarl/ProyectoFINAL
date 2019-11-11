window.onload = function(){
//populares
fetch("https://api.themoviedb.org/3/tv/popular?api_key=87b4351691f0835cf822a9ad51618e50&language=en-US&page=1")
.then(res => res.json())
.then(data => {
  var populares = data.results;
  var prepath = "https://image.tmdb.org/t/p/original"
  var ulpopulares = document.getElementById("populares");
  var lipopulares = ""
 for (var i = 0; i < populares.length; i++) {
   var nombre = populares[i].name
   var path = populares[i].poster_path
   var overview = populares[i].overview.substring(0,100)
  lipopulares += '<li>'
  lipopulares +=     '<div class="uk-card uk-card-default ">'
  lipopulares +=         '<div class="uk-card-media-top">'
  lipopulares +=             '<img class="populares" src='+ prepath + path +' alt="">'
  lipopulares +=         '</div>'
  lipopulares +=         '<div class="uk-card-body">'
  lipopulares +=             '<h3 class="uk-card-title">'+  nombre +'</h3>'
  lipopulares +=             '<p>'+ overview + '  ' +'</p>'
  lipopulares +=         '</div>'
  lipopulares +=     '</div>'
  lipopulares += '</li>'
    ulpopulares.innerHTML += lipopulares;
}
})
//populares

}
