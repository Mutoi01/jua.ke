const url = "http://openlibrary.org/search.json?q="
function getbooks(){
  document.querySelector('.output').innerHTML = "";
  fetch(url+document.getElementById("input").value








