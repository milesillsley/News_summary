function loadAPI() {
  console.log(2);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      headlines.recieveAPIrequest(this);
      document.getElementById("headlines").innerHTML = headlines.getAPI();
      console.log(headlines.getAPI());
      console.log("JSON parse");
      console.log(JSON.parse(this.responseText).response.results);
      console.log(headlines._headlines);
    }
  };
  xhttp.open("GET", "https://content.guardianapis.com/search?api-key=87025228-f81d-4609-8394-ec517d29329a", true);
  xhttp.send();
}
