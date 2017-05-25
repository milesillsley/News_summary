(function(exports) {
  console.log(1);
  function headlines() {
    this._api = '';
  }
  headlines.prototype.recieveAPIrequest = function(xml) {
    this._api = xml;
  };
  headlines.prototype.getAPI = function() {
    return this._api;
  };

  exports.headlines = headlines;
})(this);
