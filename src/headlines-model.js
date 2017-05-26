(function(exports) {
  function headlines() {
    this._api = '';
    this._headlines = [];
  }

  headlines.prototype.recieveAPIrequest = function(xml) {
    this._api = (JSON.parse(xml.responseText));
    this._headlines = this._api.response.results;
  };

  headlines.prototype.getAPI = function() {
    return this._api;
  };

  exports.headlines = headlines;
})(this);
