evee.delegate = (function() {
  var e = Element.prototype;
  var matchesSelector = (
    e.matches
      || e.webkitMatchesSelector
      || e.mozMatchesSelector
      || e.msMatchesSelector
      || e.oMatchesSelector
  );

  return function(el, type, selector, fn) {
    var h = function(ev) {
      var target = ev.target;
      while (target && (target !== this.el)) {
        if (matchesSelector.call(target, selector))
          fn(ev);
        target = target.parentNode;
      }
    };
    evee.on(el, type, h);
    return h;
  };
})();
