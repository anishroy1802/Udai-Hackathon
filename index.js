// import {TMDb_API_KEY} from './module';
// let API_KEY = TMDb_API_KEY()
const API_KEY = "4c3d48178c63ccf374a18d4745d1f0ba";

var query;

function getQuery(){
  query = document.getElementById("query").value;
}

function appendData(data) {
  var searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.className = "result";
    var title = document.createElement("div")
    var release = document.createElement("div")
    var language = document.createElement("div")
    var overview = document.createElement("div")
    title.innerHTML = "\nTitle: " + data[i].title;
    release.innerHTML = "\nRelease: " + data[i].release_date;
    language.innerHTML = "\nLanguage: " + data[i].original_language;
    overview.innerHTML = "\nOverview: " + data[i].overview;
    div.appendChild(title);
    div.appendChild(release);
    div.appendChild(language);
    div.appendChild(overview);
    searchResults.appendChild(div);
  }
}

var searchResults = document.getElementById("searchResults");

function getData() {
  getQuery()
  const url =
	"https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=" + query;

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let results = data.results;
      // for (i = 0; i < results.length; i = i + 1){
      //   console.log(results[i]);
        
      // } 
      appendData(results);
      return 0;
      })
    .catch(function (error) {
      console.log(error);
    });
}

