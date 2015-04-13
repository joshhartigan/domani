'use strict'

void (function (window) {

  var $Elem = function (selector, type) {
    this.selector = selector
    this.type = type

    this.css = function (property, value) {

      if (this.type === 'id') {
        document.getElementById(selector).style[property] = value
      }

      else if (this.type === 'class') {
        var elements = document.getElementsByClassName(selector)

        for (var i = 0; i < elements.length; i++) {
          elements[i].style[property] = value
        }
      }

      else if (this.type === 'tag') {
        var elements = document.getElementsByTagName(selector)

        for (var i = 0; i < elements.length; i++) {
          elements[i].style[property] = value
        }
      }

    }
  }

  window.$ = function (selector) {

    if (!typeof selector === 'string') {
      console.error('Argument to $() must be a string.')
      return undefined
    }

    switch (selector[0]) {
      case '#':
        return new $Elem(selector.substr(1), 'id'); break
      case '.':
        return new $Elem(selector.substr(1), 'class'); break
      default:
        return new $Elem(selector, 'tag'); break
    }

  }

})(window)
