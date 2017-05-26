(function(exports) {
  function headlinesDisplay(headlines) {
    this._headlines = headlines;
  }
  headlinesDisplay.prototype.displayPage = function() {
    var display = "<ul>";
    this._headlines.forEach(function(headline) {
      display += ("<li><div>" + headline + "</div></li>");
    });
    return (display + "</ul>");
  };

  exports.headlinesDisplay = headlinesDisplay;
})(this);
