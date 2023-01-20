function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
  xhttp.send();
}

  function loadDocAPOD() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunctionAPOD(this);
  }
  xhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=STVKeJTKlkLoY62jx5TagGwW6q2rxgNBiuj4lnq7", true);
  xhttp.send();
}
  
  function myFunction(e) {
  var Doc = JSON.parse(e.responseText);
    console.log(Doc);
    console.log(e.responseText);
  figura.src = Doc.icon_url;
  msg.innerHTML=  Doc.value;
}

      function myFunctionAPOD(xml) {
  var Doc = JSON.parse(xml.responseText);
  figuraAPOD.src = Doc.url;
  msgAPOD.innerHTML=  Doc.explanation;
  DateAPOD.innerHTML=  Doc.date;
}