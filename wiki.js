window.onload = function() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('submit')) {
        var input = document.getElementById("input").value;
        var wikiURL = 'https://en.wikipedia.org//w/api.php?action=opensearch&origin=*&format=json&search='
        var apiURL = wikiURL + input;
        fetch(apiURL)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
            })
        };
    });
}
/*

fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

 function getUrl() {
            apiURL = "https://en.wikipedia.org//w/api.php?action=opensearch&origin=*&format=json&search=" + input;
            console.log(apiURL);
            return apiURL;
        }
    // Old Query - https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=1&rnlimit=10&origin=*&format=json&srsearch=
    // New Query documentation - https://www.mediawiki.org/wiki/Special:ApiSandbox#action=opensearch&format=json&search=Te
    function getData() {
      $.getJSON(getUrl(), function (data) {
          console.log(data);
         var queryArray = data.query.search;
          var titleArray = [];
          var snippetArray = [];
          
          console.log(queryArray);
  
          queryArray.map(function (query) {
            var results = document.getElementById('results');
            var h1 = document.createElement('h1');
            var headerText = document.createTextNode(query.title);
            h1.appendChild(headerText);
            results.appendChild(h1);
            
            var divSnippet = document.createElement('div');
            snippet = query.snippet;
            divSnippet.innerHTML = snippet;
            results.appendChild(divSnippet);
          });
      })
        .done(function() {
          console.log("data loaded successfully!");
          console.log(data);
        })
        .fail(function() {
          console.log("error");
        })
    } 
  
    function searchWiki(e) {
      e.preventDefault();
      while (results.hasChildNodes()) {
        results.removeChild(results.lastChild);
      }
      getData();
    }
  
    search.addEventListener("submit", searchWiki);
  });
  */