(function(exports) {
  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        throw new Error("Assertion failed: " + assertion + " is not truthy");
      }
    },

    isFalse: function(assertion) {
      if (assertion) {
        throw new Error("Assertion failed: " + assertion + " is not false");
      }
    },

    isEqual: function(assertion, argument) {
      if (assertion !== argument) {
        throw new Error("Assertion failed: " + assertion + " is not equal to " + argument + ".");
      }
    },

    isDefined: function(assertion) {
      if (assertion !== null ) {
        throw new Error("Assertion failed: " + assertion + " is undefined.");
      }
    },

    isConstructedFrom: function(object, constructor) {
      if (object instanceof constructor !== true) {
        throw new Error("Assertion failed: " + object +
        " is not an instance of " + constructor);
      }
    },

  };
  exports.assert = assert;
})(this);
