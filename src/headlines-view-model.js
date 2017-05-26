(function(exports) {
  function HeadlinesDisplay(headlines) {
    this._headlines = headlines;
  }

  HeadlinesDisplay.prototype.displayPage = function() {
    var display = "<ul>";
    this._headlines.forEach(function(headline) {
      display += ("<li><div>" + headline.webTitle + "<br>" +
                  "<a href=" + headline.webUrl + ">Source</a>" + 
                  "</div></li><br>");
    });
    return (display + "</ul>");
  };

  exports.HeadlinesDisplay = HeadlinesDisplay;
})(this);
