function loadAPI() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      headlines.recieveAPIrequest(this);
      var headlinesDisplay = new HeadlinesDisplay(headlines._headlines);
      document.getElementById("headlines").innerHTML = headlinesDisplay.displayPage();
    }
  };
  xhttp.open("GET", "https://content.guardianapis.com/search?api-key=87025228-f81d-4609-8394-ec517d29329a", true);
  xhttp.send();
}
