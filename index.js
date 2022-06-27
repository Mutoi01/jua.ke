const url = "https://openlibrary.org/search.json?q="
function getbooks(){
  document.querySelector('.output').innerHTML = "";
  fetch(url+document.getElementById("input").value)
  .then(a=>a.json())
  .then(response => {
    for( i=0; i<5;i++){
      // document.getElementById("output").innerHTML+="<h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name[0]+"<br><img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'> <br>";
      document.querySelector(".output").innerHTML+=
      "<li><br><img src='https://covers.openlibrary.org/b/isbn/"+
      response.docs[i].isbn[0]+"-M.jpg'> <br>"+
      "<h2>"+response.docs[i].title+"</h2>"+
      response.docs[i].author_name[0];+"</li>"
    }
  });
}





