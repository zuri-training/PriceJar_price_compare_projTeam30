/*!
<<<<<<< HEAD
<<<<<<< HEAD
  * Bootstrap v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
=======
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  * Bootstrap v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) :
  typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper));
<<<<<<< HEAD
<<<<<<< HEAD
})(this, (function (Popper) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)

  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }

    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * Public Util API
=======
}(this, (function (Popper) { 'use strict';
=======
})(this, (function (Popper) { 'use strict';
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)

  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }

    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
<<<<<<< HEAD
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Public Util API
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
<<<<<<< HEAD
<<<<<<< HEAD
      let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
=======
      let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

<<<<<<< HEAD
<<<<<<< HEAD
      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
=======
      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


<<<<<<< HEAD
<<<<<<< HEAD
      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }

      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
=======
      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }

      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    return selector;
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

<<<<<<< HEAD
<<<<<<< HEAD
  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }

    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }

    return typeof object.nodeType !== 'undefined';
  };

  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }

    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(object);
=======
  const isElement = obj => {
    if (!obj || typeof obj !== 'object') {
=======
  const isElement = object => {
    if (!object || typeof object !== 'object') {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      return false;
    }

    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }

    return typeof object.nodeType !== 'undefined';
  };

  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }

<<<<<<< HEAD
    if (typeof obj === 'string' && obj.length > 0) {
      return SelectorEngine.findOne(obj);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(object);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    return null;
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed

    const closedDetails = element.closest('details:not([open])');

    if (!closedDetails) {
      return elementIsVisible;
    }

    if (closedDetails !== element) {
      const summary = element.closest('summary');

      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }

      if (summary === null) {
        return false;
      }
    }

    return elementIsVisible;
<<<<<<< HEAD
=======
    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => {};
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */
<<<<<<< HEAD


  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
=======
=======
<<<<<<< HEAD
>>>>>>> own


  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4


  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  const getjQuery = () => {
<<<<<<< HEAD
    const {
      jQuery
    } = window;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

<<<<<<< HEAD
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
>>>>>>> own
=======
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    return null;
  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
<<<<<<< HEAD
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
=======
          DOMContentLoadedCallbacks.forEach(callback => callback());
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;

    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
<<<<<<< HEAD
<<<<<<< HEAD
    const listLength = list.length;
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed

    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }

=======
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed
=======
    const listLength = list.length;
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }

<<<<<<< HEAD
    const listLength = list.length;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): dom/event-handler.js
=======
   * Bootstrap (v5.0.2): dom/event-handler.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): dom/event-handler.js
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
=======
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Constants
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getElementEvents(element) {
    const uid = makeEventUid(element);
=======
  const customEventsRegex = /^(mouseenter|mouseleave)/i;
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

<<<<<<< HEAD
  function getEvent(element) {
    const uid = getUidEvent(element);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  function getElementEvents(element) {
    const uid = makeEventUid(element);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
<<<<<<< HEAD
<<<<<<< HEAD
      hydrateObj(event, {
        delegateTarget: element
      });
=======
      event.delegateTarget = element;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      hydrateObj(event, {
        delegateTarget: element
      });
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
<<<<<<< HEAD

          hydrateObj(event, {
            delegateTarget: target
          });

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    };
  }

  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }

  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check

    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);

    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }

    return [isDelegated, callable, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
=======
        for (let i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;
=======
>>>>>>> own

          hydrateObj(event, {
            delegateTarget: target
          });

<<<<<<< HEAD
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

=======
            return fn.apply(target, [event]);
=======
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
          }

          hydrateObj(event, {
            delegateTarget: target
          });

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
          return fn.apply(target, [event]);
        }
      }
    };
  }

  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }

  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check

    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);

    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }

    return [isDelegated, callable, typeEvent];
  }

<<<<<<< HEAD
  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does

    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
=======
    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does


    if (customEventsRegex.test(originalTypeEvent)) {
      const wrapFn = fn => {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does

    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

<<<<<<< HEAD
<<<<<<< HEAD
      callable = wrapFunction(callable);
    }

    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }

    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
=======
      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
=======
      callable = wrapFunction(callable);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }

    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
<<<<<<< HEAD
    element.addEventListener(typeEvent, fn, delegation);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    element.addEventListener(typeEvent, fn, isDelegated);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
<<<<<<< HEAD
<<<<<<< HEAD

    for (const handlerKey of Object.keys(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
=======
    Object.keys(storeElementEvent).forEach(handlerKey => {
=======

    for (const handlerKey of Object.keys(storeElementEvent)) {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
<<<<<<< HEAD
    });
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  const EventHandler = {
<<<<<<< HEAD
<<<<<<< HEAD
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },

    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },

    off(element, originalTypeEvent, handler, delegationFunction) {
=======
    on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
=======
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    },

    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },

<<<<<<< HEAD
    off(element, originalTypeEvent, handler, delegationFn) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    off(element, originalTypeEvent, handler, delegationFunction) {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }

        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
=======
      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
=======
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }

<<<<<<< HEAD
        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return;
      }

      if (isNamespace) {
<<<<<<< HEAD
<<<<<<< HEAD
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }

      for (const keyHandlers of Object.keys(storeElementEvent)) {
=======
        Object.keys(events).forEach(elementEvent => {
=======
        for (const elementEvent of Object.keys(events)) {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }

<<<<<<< HEAD
      const storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(keyHandlers => {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      for (const keyHandlers of Object.keys(storeElementEvent)) {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
<<<<<<< HEAD
<<<<<<< HEAD
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
=======
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
<<<<<<< HEAD
<<<<<<< HEAD
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
=======
      const isNative = nativeEvents.has(typeEvent);
      let jQueryEvent;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      let evt = null;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      let evt = new Event(event, {
        bubbles,
        cancelable: true
      });
      evt = hydrateObj(evt, args);
<<<<<<< HEAD
=======
      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(key => {
          Object.defineProperty(evt, key, {
            get() {
              return args[key];
            }

          });
        });
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

<<<<<<< HEAD
<<<<<<< HEAD
      if (evt.defaultPrevented && jQueryEvent) {
=======
      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (evt.defaultPrevented && jQueryEvent) {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  function hydrateObj(obj, meta) {
    for (const [key, value] of Object.entries(meta || {})) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,

          get() {
            return value;
          }

        });
      }
    }

    return obj;
  }

<<<<<<< HEAD
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): dom/data.js
=======
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/data.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): dom/data.js
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */
  const elementMap = new Map();
  const Data = {
=======
   * ------------------------------------------------------------------------
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Constants
   */
  const elementMap = new Map();
<<<<<<< HEAD
  var Data = {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  const Data = {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Bootstrap (v5.2.0): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return false;
    }

    if (value === Number(value).toString()) {
      return Number(value);
    }

    if (value === '' || value === 'null') {
      return null;
    }

    if (typeof value !== 'string') {
      return value;
    }

    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
<<<<<<< HEAD

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }

      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }

    static get DefaultType() {
      return {};
    }
=======

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }
>>>>>>> own

      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

<<<<<<< HEAD
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
      return config;
    }

    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return { ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }

    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const property of Object.keys(configTypes)) {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = isElement(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
=======
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }

      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
>>>>>>> own
    }

  };

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
   * Bootstrap (v5.2.0): base-component.js
=======
   * Bootstrap (v5.0.2): base-component.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): util/config.js
>>>>>>> own
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */

  const VERSION = '5.2.0';
  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
=======
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const VERSION = '5.0.2';

  class BaseComponent {
    constructor(element) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
<<<<<<< HEAD
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    } // Public

=======
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9

    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
<<<<<<< HEAD

      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
=======
      Object.getOwnPropertyNames(this).forEach(propertyName => {
        this[propertyName] = null;
      });
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    }

    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
<<<<<<< HEAD

    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    } // Static


    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
=======
    /** Static */


    static getInstance(element) {
      return Data.get(element, this.DATA_KEY);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
      return VERSION;
    }

<<<<<<< HEAD
=======
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

<<<<<<< HEAD
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
  }

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return;
      }

      const target = getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): alert.js
=======
   * Bootstrap (v5.0.2): alert.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
   * Constants
   */

  const NAME$f = 'alert';
  const DATA_KEY$a = 'bs.alert';
  const EVENT_KEY$b = `.${DATA_KEY$a}`;
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';
  /**
   * Class definition
=======
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$c = 'alert';
  const DATA_KEY$b = 'bs.alert';
  const EVENT_KEY$b = `.${DATA_KEY$b}`;
  const DATA_API_KEY$8 = '.data-api';
  const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
  const CLASS_NAME_ALERT = 'alert';
  const CLASS_NAME_FADE$6 = 'fade';
  const CLASS_NAME_SHOW$9 = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> own
   */

  class Config {
    // Getters
<<<<<<< HEAD
    static get NAME() {
<<<<<<< HEAD
      return NAME$f;
    } // Public


    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    } // Private


    _destroyElement() {
      this._element.remove();

      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
=======
      return NAME$c;
    } // Public


    close(element) {
      const rootElement = element ? this._getRootElement(element) : this._element;

      const customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent === null || customEvent.defaultPrevented) {
        return;
      }

      this._removeElement(rootElement);
    } // Private


    _getRootElement(element) {
      return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`);
=======
    static get Default() {
      return {};
>>>>>>> own
    }

    static get DefaultType() {
      return {};
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

<<<<<<< HEAD
    _destroyElement(element) {
      element.remove();
      EventHandler.trigger(element, EVENT_CLOSED);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    } // Static
=======
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
>>>>>>> own

      this._typeCheckConfig(config);

      return config;
    }

<<<<<<< HEAD
<<<<<<< HEAD
        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * Data API implementation
   */


  enableDismissTrigger(Alert, 'close');
  /**
   * jQuery
=======
        if (config === 'close') {
          data[config](this);
        }
      });
=======
    _configAfterMerge(config) {
      return config;
>>>>>>> own
    }

    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return { ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }

    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const property of Object.keys(configTypes)) {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = isElement(value) ? 'element' : toType(value);

<<<<<<< HEAD
  EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   */
=======
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
>>>>>>> own

  }

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): button.js
=======
   * Bootstrap (v5.0.2): button.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): base-component.js
>>>>>>> own
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */

  const NAME$e = 'button';
  const DATA_KEY$9 = 'bs.button';
  const EVENT_KEY$a = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  /**
   * Class definition
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> own
   * Constants
   */

  const VERSION = '5.2.0';
  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    } // Public


    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);

      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }

    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    } // Static


    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
      return VERSION;
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return;
      }

      const target = getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$f = 'alert';
  const DATA_KEY$a = 'bs.alert';
  const EVENT_KEY$b = `.${DATA_KEY$a}`;
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';
  /**
   * Class definition
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    } // Public


    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    } // Private


    _destroyElement() {
      this._element.remove();

      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * Data API implementation
   */


  enableDismissTrigger(Alert, 'close');
  /**
   * jQuery
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$e = 'button';
  const DATA_KEY$9 = 'bs.button';
  const EVENT_KEY$a = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> own
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
<<<<<<< HEAD
<<<<<<< HEAD
      return NAME$e;
=======
      return NAME$b;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      return NAME$e;
>>>>>>> own
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
>>>>>>> own
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * jQuery
=======
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * jQuery
>>>>>>> own
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);

      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },

    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
=======
   * Bootstrap (v5.0.2): dom/manipulator.js
=======
   * Bootstrap (v5.2.0): dom/selector-engine.js
>>>>>>> own
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
<<<<<<< HEAD
  /**
   * Constants
   */

  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
=======
  function normalizeData(val) {
    if (val === 'true') {
=======
   * Bootstrap (v5.2.0): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(value) {
    if (value === 'true') {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      return true;
    }

    if (value === 'false') {
      return false;
    }

    if (value === Number(value).toString()) {
      return Number(value);
    }

    if (value === '' || value === 'null') {
      return null;
    }

    if (typeof value !== 'string') {
      return value;
    }

    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

<<<<<<< HEAD
      return [];
    },

    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
=======
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }

      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
<<<<<<< HEAD
    },
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },

<<<<<<< HEAD
    position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

  };

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/swipe.js
=======
   * Bootstrap (v5.0.2): carousel.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/swipe.js
>>>>>>> own
=======
   * Bootstrap (v5.2.0): util/config.js
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */

  const NAME$d = 'swipe';
  const EVENT_KEY$9 = '.bs.swipe';
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> own
   * Constants
<<<<<<< HEAD
   */

  const NAME$d = 'swipe';
  const EVENT_KEY$9 = '.bs.swipe';
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType$c = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };
  /**
   * Class definition
   */

  class Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;

      if (!element || !Swipe.isSupported()) {
        return;
      }

      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);

      this._initEvents();
    } // Getters


    static get Default() {
      return Default$c;
    }

    static get DefaultType() {
      return DefaultType$c;
    }

    static get NAME() {
      return NAME$d;
    } // Public


    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    } // Private


    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }

      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }

    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }

      this._handleSwipe();

      execute(this._config.endCallback);
    }

    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }

    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);

      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }

      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;

      if (!direction) {
        return;
      }

      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }

    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
      }
    }

    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    } // Static


    static isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$c = 'carousel';
  const DATA_KEY$8 = 'bs.carousel';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$5 = '.data-api';
  const ARROW_LEFT_KEY$1 = 'ArrowLeft';
  const ARROW_RIGHT_KEY$1 = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
<<<<<<< HEAD
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  const EVENT_SLIDE = `slide${EVENT_KEY$9}`;
  const EVENT_SLID = `slid${EVENT_KEY$9}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$9}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$9}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$9}`;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
<<<<<<< HEAD
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType$c = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
=======
  const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  const EVENT_SLID = `slid${EVENT_KEY$8}`;
  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType$b = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
>>>>>>> own
  };
  /**
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Class definition
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

<<<<<<< HEAD
  class Swipe extends Config {
    constructor(element, config) {
<<<<<<< HEAD
      super();
      this._element = element;

      if (!element || !Swipe.isSupported()) {
        return;
      }

      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);

      this._initEvents();
=======
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);

      this._addEventListeners();

      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
>>>>>>> own
    } // Getters


    static get Default() {
<<<<<<< HEAD
      return Default$c;
=======
  class Config {
    // Getters
    static get Default() {
      return {};
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    static get DefaultType() {
      return {};
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
      return config;
    }

    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return { ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }

    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const property of Object.keys(configTypes)) {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = isElement(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const VERSION = '5.2.0';
  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    } // Public


    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);

<<<<<<< HEAD
    static get Default() {
<<<<<<< HEAD
=======
>>>>>>> own
      return Default$b;
    }

    static get DefaultType() {
      return DefaultType$b;
<<<<<<< HEAD
=======
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }

    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);

<<<<<<< HEAD
    static get NAME() {
      return NAME$a;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }

    static get NAME() {
      return NAME$c;
>>>>>>> own
    } // Public
=======
      this._typeCheckConfig(config);

      return config;
    } // Static
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }

<<<<<<< HEAD
    nextWhenVisible() {
<<<<<<< HEAD
<<<<<<< HEAD
      // FIXME TODO use `document.visibilityState`
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      // FIXME TODO use `document.visibilityState`
>>>>>>> own
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
=======
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    static get VERSION() {
      return VERSION;
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
=======
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return;
      }

      const target = getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

<<<<<<< HEAD
      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
=======
    pause() {
      if (this._isSliding) {
>>>>>>> own
        triggerTransitionEnd(this._element);
      }

      this._clearInterval();
    }

    cycle() {
      this._clearInterval();

      this._updateInterval();

      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }

    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }

      this.cycle();
    }

    to(index) {
      const items = this._getItems();

<<<<<<< HEAD
      const activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (index > items.length - 1 || index < 0) {
>>>>>>> own
        return;
      }
=======
  const NAME$f = 'alert';
  const DATA_KEY$a = 'bs.alert';
  const EVENT_KEY$b = `.${DATA_KEY$a}`;
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';
  /**
   * Class definition
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    } // Public


    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    } // Private


    _destroyElement() {
      this._element.remove();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    } // Static

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const activeIndex = this._getItemIndex(this._getActive());

      if (activeIndex === index) {
=======
      if (activeIndex === index) {
        this.pause();
        this.cycle();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const activeIndex = this._getItemIndex(this._getActive());

      if (activeIndex === index) {
>>>>>>> own
        return;
      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

<<<<<<< HEAD
<<<<<<< HEAD
      this._slide(order, items[index]);
    }

    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
=======

    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * Data API implementation
   */


  enableDismissTrigger(Alert, 'close');
  /**
   * jQuery
   */

<<<<<<< HEAD
    _getConfig(config) {
      config = { ...Default$9,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$a, config, DefaultType$9);
      return config;
=======
      this._slide(order, items[index]);
>>>>>>> own
    }

    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }

      super.dispose();
    } // Private


    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }

<<<<<<< HEAD
      if (this._config.touch && this._touchSupported) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (this._config.touch && Swipe.isSupported()) {
>>>>>>> own
        this._addTouchEventListeners();
      }
    }

    _addTouchEventListeners() {
<<<<<<< HEAD
<<<<<<< HEAD
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
      }
=======
  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$e = 'button';
  const DATA_KEY$9 = 'bs.button';
  const EVENT_KEY$a = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  /**
   * Class definition
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

<<<<<<< HEAD
      const end = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchDeltaX = event.clientX - this.touchStartX;
        }
=======
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
      }
>>>>>>> own

      const endCallBack = () => {
        if (this._config.pause !== 'hover') {
          return;
        } // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling


        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };

<<<<<<< HEAD
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
>>>>>>> own
    }
=======
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);

      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },

    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
    }

  };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this._slide(this._directionToOrder(direction));
=======
        this._slide(direction);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        this._slide(this._directionToOrder(direction));
>>>>>>> own
      }
    }
=======
  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  const EVENT_SLIDE = `slide${EVENT_KEY$9}`;
  const EVENT_SLID = `slid${EVENT_KEY$9}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$9}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$9}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$9}`;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$d = 'swipe';
  const EVENT_KEY$9 = '.bs.swipe';
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return this._getItems().indexOf(element);
    }
=======
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType$c = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };
  /**
   * Class definition
   */
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

  class Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;

      if (!element || !Swipe.isSupported()) {
        return;
      }

      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);

<<<<<<< HEAD
    _getItemByOrder(order, activeElement) {
      const isNext = order === ORDER_NEXT;
      return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
=======
      return this._getItems().indexOf(element);
>>>>>>> own
    }

    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }

      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

<<<<<<< HEAD
        for (let i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute('aria-current', 'true');
>>>>>>> own
      }
    }

    _updateInterval() {
<<<<<<< HEAD
<<<<<<< HEAD
      const element = this._activeElement || this._getActive();
=======
      const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const element = this._activeElement || this._getActive();
>>>>>>> own
=======
      this._initEvents();
    } // Getters


    static get Default() {
      return Default$c;
    }

    static get DefaultType() {
      return DefaultType$c;
    }

    static get NAME() {
      return NAME$d;
    } // Public


    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    } // Private
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }

<<<<<<< HEAD
      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
<<<<<<< HEAD
<<<<<<< HEAD
      this._config.interval = elementInterval || this._config.defaultInterval;
    }

    _slide(order, element = null) {
=======

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
=======
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }
=======
      this._config.interval = elementInterval || this._config.defaultInterval;
>>>>>>> own
    }

<<<<<<< HEAD
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }

      const activeElement = this._getActive();

      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

      if (nextElement === activeElement) {
        return;
      }

<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
      if (this._isSliding) {
=======
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }

      this._handleSwipe();

      execute(this._config.endCallback);
    }

    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }

    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);

      if (absDeltaX <= SWIPE_THRESHOLD) {
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return;
      }

      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;

      if (!direction) {
        return;
      }

      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }

<<<<<<< HEAD
      const slideEvent = triggerEvent(EVENT_SLIDE);
=======
      const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const nextElementIndex = this._getItemIndex(nextElement);

      const triggerEvent = eventName => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };

      const slideEvent = triggerEvent(EVENT_SLIDE);
>>>>>>> own
=======
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
      }
    }

<<<<<<< HEAD
      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
<<<<<<< HEAD
<<<<<<< HEAD
        // todo: change tests that use empty divs to avoid this check
        return;
      }
=======
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    } // Static
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


    static isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

<<<<<<< HEAD
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
=======
=======
        // todo: change tests that use empty divs to avoid this check
>>>>>>> own
        return;
      }

      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;

      this._setActiveIndicatorElement(nextElementIndex);

      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
<<<<<<< HEAD
        triggerSlidEvent();
=======
  const NAME$c = 'carousel';
  const DATA_KEY$8 = 'bs.carousel';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$5 = '.data-api';
  const ARROW_LEFT_KEY$1 = 'ArrowLeft';
  const ARROW_RIGHT_KEY$1 = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  const EVENT_SLID = `slid${EVENT_KEY$8}`;
  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
<<<<<<< HEAD
=======
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$9}`;
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$9}${DATA_API_KEY$6}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$9}${DATA_API_KEY$6}`;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
<<<<<<< HEAD
<<<<<<< HEAD
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType$b = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };
  /**
   * Class definition
=======
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SELECTOR_ACTIVE$1 = '.active';
  const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
=======
  const SELECTOR_ACTIVE = '.active';
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType$b = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

  class Carousel extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);

      this._addEventListeners();

      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }
=======
      super(element);
      this._items = null;
=======
      super(element, config);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);

      this._addEventListeners();
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
        triggerEvent(EVENT_SLID);
      };

      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Getters


    static get Default() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      return Default$b;
    }

    static get DefaultType() {
      return DefaultType$b;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    static get NAME() {
      return NAME$c;
=======
      return Default$9;
    }

    static get NAME() {
      return NAME$a;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }

<<<<<<< HEAD
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
<<<<<<< HEAD
      }
=======
    static get NAME() {
      return NAME$c;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Public


    next() {
      this._slide(ORDER_NEXT);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    nextWhenVisible() {
<<<<<<< HEAD
<<<<<<< HEAD
      // FIXME TODO use `document.visibilityState`
=======
<<<<<<< HEAD
    _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
=======
>>>>>>> own
      }
    }

<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _directionToOrder(direction) {
>>>>>>> own
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      // FIXME TODO use `document.visibilityState`
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }
    }

    prev() {
      this._slide(ORDER_PREV);
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
=======
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }

      this._clearInterval();
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    cycle() {
      this._clearInterval();

      this._updateInterval();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);
=======
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }

      this.cycle();
    }

    to(index) {
      const items = this._getItems();

      if (index > items.length - 1 || index < 0) {
=======
    pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
=======
    pause() {
      if (this._isSliding) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        triggerTransitionEnd(this._element);
      }

      this._clearInterval();
    }

    cycle() {
      this._clearInterval();

      this._updateInterval();

      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }

    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }

      this.cycle();
    }

    to(index) {
      const items = this._getItems();

<<<<<<< HEAD
      const activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (index > items.length - 1 || index < 0) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }

<<<<<<< HEAD
      const action = typeof config === 'string' ? config : _config.slide;
=======
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);
>>>>>>> own

        if (typeof config === 'number') {
          data.to(config);
          return;
        }

        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
    const target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      carousel.to(slideIndex);

      carousel._maybeEnableCycle();

      return;
    }

    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();

      carousel._maybeEnableCycle();

      return;
    }

    carousel.prev();

    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  /**
   * jQuery
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
   */
=======
<<<<<<< HEAD
<<<<<<< HEAD
      const activeIndex = this._getItemIndex(this._getActive());

      if (activeIndex === index) {
=======
      if (activeIndex === index) {
        this.pause();
        this.cycle();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const activeIndex = this._getItemIndex(this._getActive());

      if (activeIndex === index) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        return;
      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      this._slide(order, items[index]);
    }

    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }

      super.dispose();
<<<<<<< HEAD
    } // Private


    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }

      if (this._config.touch && Swipe.isSupported()) {
=======
      this._slide(order, this._items[index]);
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Private


    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }

<<<<<<< HEAD
      if (this._config.touch && this._touchSupported) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (this._config.touch && Swipe.isSupported()) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        this._addTouchEventListeners();
      }
    }

    _addTouchEventListeners() {
<<<<<<< HEAD
<<<<<<< HEAD
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
      }

      const endCallBack = () => {
        if (this._config.pause !== 'hover') {
          return;
        } // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling


        this.pause();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

<<<<<<< HEAD
  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): collapse.js
=======
   * Bootstrap (v5.0.2): collapse.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): collapse.js
>>>>>>> own
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */

  const NAME$b = 'collapse';
  const DATA_KEY$7 = 'bs.collapse';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  const Default$a = {
    parent: null,
    toggle: true
  };
  const DefaultType$a = {
    parent: '(null|element)',
    toggle: 'boolean'
  };
  /**
   * Class definition
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> own
   * Constants
   */

  const NAME$b = 'collapse';
  const DATA_KEY$7 = 'bs.collapse';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  const Default$a = {
    parent: null,
    toggle: true
  };
  const DefaultType$a = {
    parent: '(null|element)',
    toggle: 'boolean'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> own
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
=======
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };

      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
=======
      const start = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchStartX = event.clientX;
        } else if (!this._pointerEvent) {
          this.touchStartX = event.touches[0].clientX;
        }
      };

      const move = event => {
        // ensure swiping with one touch and not pinching
        this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
      };
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const end = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchDeltaX = event.clientX - this.touchStartX;
        }

<<<<<<< HEAD
        if (selector !== null && filterElement.length) {
=======
      super(element);
=======
      super(element, config);
>>>>>>> own
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (const elem of toggleList) {
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);

        if (selector !== null && filterElement.length) {
<<<<<<< HEAD
          this._selector = selector;

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
          this._triggerArray.push(elem);
=======
        this._handleSwipe();

        if (this._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          this.pause();

          if (this.touchTimeout) {
            clearTimeout(this.touchTimeout);
          }

          this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        }
      };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._initializeChildren();
=======
      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
        EventHandler.on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
      });
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
      this._initializeChildren();

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
>>>>>>> own
=======
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }

      const endCallBack = () => {
        if (this._config.pause !== 'hover') {
          return;
        } // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling


<<<<<<< HEAD
    static get Default() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
      return Default$a;
    }

    static get DefaultType() {
      return DefaultType$a;
<<<<<<< HEAD
    }
=======
        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };

      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

<<<<<<< HEAD
    static get NAME() {
      return NAME$9;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }

    static get NAME() {
      return NAME$b;
>>>>>>> own
    } // Public
=======
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      if (this._isShown()) {
=======
        this._slide(this._directionToOrder(direction));
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
        this._slide(direction);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
      if (this._isShown()) {
>>>>>>> own
        this.hide();
      } else {
        this.show();
=======
        this._slide(this._directionToOrder(direction));
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }
    }

    _getItemIndex(element) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      if (this._isTransitioning || this._isShown()) {
        return;
      }

      let activeChildren = []; // find active children

      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
=======
      return this._getItems().indexOf(element);
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }

      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute('aria-current', 'true');
=======
<<<<<<< HEAD
      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$8)) {
=======
      if (this._isTransitioning || this._isShown()) {
>>>>>>> own
        return;
      }

      let activeChildren = []; // find active children

      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }

      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }

<<<<<<< HEAD
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
>>>>>>> own

      if (startEvent.defaultPrevented) {
        return;
=======
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
=======
      return this._getItems().indexOf(element);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }

      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

<<<<<<< HEAD
      const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    }

    _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (let i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute('aria-current', 'true');
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }
    }

    _updateInterval() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
=======
      const element = this._activeElement || this._getActive();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
      const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
>>>>>>> own
      }

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);
=======
      const element = this._activeElement || this._getActive();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (!element) {
        return;
      }

      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
=======
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    _slide(order, element = null) {
=======

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
<<<<<<< HEAD
=======
      this._addAriaAndCollapsedClass(this._triggerArray, true);
>>>>>>> own

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        this._element.style[dimension] = '';
<<<<<<< HEAD
        this.setTransitioning(false);
        EventHandler.trigger(this._element, EVENT_SHOWN$5);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
>>>>>>> own
      };
=======
    }

    _slide(directionOrOrder, element) {
      const order = this._directionToOrder(directionOrOrder);

      const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      const activeElementIndex = this._getItemIndex(activeElement);

      const nextElement = element || this._getItemByOrder(order, activeElement);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const nextElementIndex = this._getItemIndex(nextElement);

      const isCycling = Boolean(this._interval);
      const isNext = order === ORDER_NEXT;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

      const eventDirectionName = this._orderToDirection(order);

<<<<<<< HEAD
    hide() {
<<<<<<< HEAD
<<<<<<< HEAD
      if (this._isTransitioning || !this._isShown()) {
=======
      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return;
      }

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._config.interval = elementInterval || this._config.defaultInterval;
    }

    _slide(order, element = null) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if (this._isSliding) {
        return;
      }

<<<<<<< HEAD
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
>>>>>>> own
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      const activeElement = this._getActive();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

      if (nextElement === activeElement) {
        return;
      }

      const nextElementIndex = this._getItemIndex(nextElement);

      const triggerEvent = eventName => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };

      const slideEvent = triggerEvent(EVENT_SLIDE);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
=======
=======
      const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
<<<<<<< HEAD
<<<<<<< HEAD
        // todo: change tests that use empty divs to avoid this check
        return;
      }

      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;

      this._setActiveIndicatorElement(nextElementIndex);

<<<<<<< HEAD
      const triggerArrayLength = this._triggerArray.length;
=======
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
>>>>>>> own

      for (const trigger of this._triggerArray) {
        const element = getElementFromSelector(trigger);

        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      const complete = () => {
<<<<<<< HEAD
        this.setTransitioning(false);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        this._isTransitioning = false;
>>>>>>> own
=======
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };

      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
=======
=======
        // todo: change tests that use empty divs to avoid this check
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        return;
      }

      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._setActiveIndicatorElement(nextElementIndex);

      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$5);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
>>>>>>> own
=======
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    } // Private

=======
      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        const completeCallBack = () => {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
          this._isSliding = false;
          setTimeout(triggerSlidEvent, 0);
        };

        this._queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        triggerSlidEvent();
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
=======
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
>>>>>>> own
    } // Private


    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values

<<<<<<< HEAD
      typeCheckConfig(NAME$9, config, DefaultType$8);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      config.parent = getElement(config.parent);
>>>>>>> own
      return config;
=======
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (isCycling) {
        this.cycle();
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
=======
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }

    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }

    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }

    _directionToOrder(direction) {
=======
    _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
      }

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }

    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }

    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }

    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }

    _directionToOrder(direction) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }

    _orderToDirection(order) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static


<<<<<<< HEAD
<<<<<<< HEAD
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);

        if (typeof config === 'number') {
          data.to(config);
          return;
        }

        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
<<<<<<< HEAD
=======
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
=======
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
>>>>>>> own
    }

    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }

      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);

      for (const element of children) {
        const selected = getElementFromSelector(element);

        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }

    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth

      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
      }
    } // Static
=======
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
    const target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      carousel.to(slideIndex);

      carousel._maybeEnableCycle();

      return;
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();

<<<<<<< HEAD
    static jQueryInterface(config) {
      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      return this.each(function () {
        const data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

<<<<<<< HEAD
    static jQueryInterface(config) {
      return this.each(function () {
        Collapse.collapseInterface(this, config);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
          data[config]();
        }
>>>>>>> own
=======
      carousel._maybeEnableCycle();

      return;
    }

    carousel.prev();

    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  /**
   * jQuery
=======
    static carouselInterface(element, config) {
      const data = Carousel.getOrCreateInstance(element, config);
      let {
        _config
      } = data;

      if (typeof config === 'object') {
        _config = { ..._config,
          ...config
        };
      }

      const action = typeof config === 'string' ? config : _config.slide;

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError(`No method named "${action}"`);
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    }

=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);

        if (typeof config === 'number') {
          data.to(config);
          return;
        }

        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
>>>>>>> own
=======
   * Data API implementation
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
    const target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
=======
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-bs-slide-to');
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    if (slideIndex) {
      carousel.to(slideIndex);

      carousel._maybeEnableCycle();

      return;
    }
<<<<<<< HEAD
  });
  /**
   * jQuery
=======
    const triggerData = Manipulator.getDataAttributes(this);
=======
>>>>>>> own
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);

    for (const element of selectorElements) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
=======

    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();

      carousel._maybeEnableCycle();

      return;
    }

    carousel.prev();

    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }
  });
  /**
   * jQuery
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  defineJQueryPlugin(Carousel);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): dropdown.js
=======
   * Bootstrap (v5.2.0): collapse.js
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
   * Bootstrap (v5.0.2): collapse.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
   * Bootstrap (v5.2.0): dropdown.js
>>>>>>> own
=======
   * Bootstrap (v5.2.0): collapse.js
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */

<<<<<<< HEAD
  const NAME$a = 'dropdown';
  const DATA_KEY$6 = 'bs.dropdown';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY$1 = 'ArrowUp';
  const ARROW_DOWN_KEY$1 = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> own
   * Constants
   */

  const NAME$a = 'dropdown';
  const DATA_KEY$6 = 'bs.dropdown';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY$1 = 'ArrowUp';
  const ARROW_DOWN_KEY$1 = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  const SELECTOR_MENU = '.dropdown-menu';
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  const SELECTOR_NAVBAR = '.navbar';
>>>>>>> own
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default$9 = {
    autoClose: true,
<<<<<<< HEAD
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
=======
  const NAME$b = 'collapse';
  const DATA_KEY$7 = 'bs.collapse';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  const Default$a = {
    parent: null,
    toggle: true
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  };
  const DefaultType$a = {
    parent: '(null|element)',
    toggle: 'boolean'
  };
  /**
   * Class definition
=======
<<<<<<< HEAD
  const Default$7 = {
    offset: [0, 2],
=======
>>>>>>> own
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType$9 = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   * Constants
   */

  const NAME$b = 'collapse';
  const DATA_KEY$7 = 'bs.collapse';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  const Default$a = {
    parent: null,
    toggle: true
  };
  const DefaultType$a = {
    parent: '(null|element)',
    toggle: 'boolean'
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (const elem of toggleList) {
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);

        if (selector !== null && filterElement.length) {
=======
      super(element);
=======
      super(element, config);
<<<<<<< HEAD
>>>>>>> own
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper

<<<<<<< HEAD
      this._addEventListeners();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._menu = SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (const elem of toggleList) {
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);

        if (selector !== null && filterElement.length) {
<<<<<<< HEAD
          this._selector = selector;

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
          this._triggerArray.push(elem);
        }
      }

<<<<<<< HEAD
<<<<<<< HEAD
      this._initializeChildren();

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
=======
      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._initializeChildren();

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      if (this._config.toggle) {
        this.toggle();
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    } // Getters


    static get Default() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return Default$9;
=======
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      return Default$a;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    static get DefaultType() {
      return DefaultType$a;
<<<<<<< HEAD
    }

    static get NAME() {
      return NAME$b;
=======
<<<<<<< HEAD
      return Default$7;
=======
      return Default$9;
>>>>>>> own
    }

    static get DefaultType() {
      return DefaultType$9;
    }

    static get NAME() {
<<<<<<< HEAD
      return NAME$8;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      return NAME$a;
>>>>>>> own
=======
      return Default$8;
    }

    static get NAME() {
      return NAME$9;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }

    static get NAME() {
      return NAME$b;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    } // Public


    toggle() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return this._isShown() ? this.hide() : this.show();
=======
      if (this._isShown()) {
=======
      if (this._element.classList.contains(CLASS_NAME_SHOW$8)) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (this._isShown()) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        this.hide();
      } else {
        this.show();
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    show() {
<<<<<<< HEAD
<<<<<<< HEAD
      if (this._isTransitioning || this._isShown()) {
        return;
      }

      let activeChildren = []; // find active children

      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }

      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
=======
      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$8)) {
=======
      if (this._isTransitioning || this._isShown()) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        return;
      }

      let activeChildren = []; // find active children

      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }

      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }

<<<<<<< HEAD
      this.show();
=======
      return this._isShown() ? this.hide() : this.show();
>>>>>>> own
    }

    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

<<<<<<< HEAD
        if (isDisplayStatic) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'static');
        }
      } // If this is a touch-enabled device we add extra
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._createPopper(); // If this is a touch-enabled device we add extra
>>>>>>> own
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
=======
<<<<<<< HEAD
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (startEvent.defaultPrevented) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
=======
      if (actives) {
        actives.forEach(elemActive => {
          if (container !== elemActive) {
            Collapse.collapseInterface(elemActive, 'hide');
          }

          if (!activesData) {
            Data.set(elemActive, DATA_KEY$8, null);
          }
        });
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

<<<<<<< HEAD
<<<<<<< HEAD
      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
<<<<<<< HEAD
=======
      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
=======
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
=======
      if (this._triggerArray.length) {
        this._triggerArray.forEach(element => {
          element.classList.remove(CLASS_NAME_COLLAPSED);
          element.setAttribute('aria-expanded', true);
        });
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }
=======
      this._addAriaAndCollapsedClass(this._triggerArray, true);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        this._element.style[dimension] = '';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._menu.classList.add(CLASS_NAME_SHOW$6);
=======
        this.setTransitioning(false);
        EventHandler.trigger(this._element, EVENT_SHOWN$5);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      };
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
<<<<<<< HEAD
<<<<<<< HEAD
      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
=======
<<<<<<< HEAD
      this._menu.classList.toggle(CLASS_NAME_SHOW$7);
=======
      this._menu.classList.add(CLASS_NAME_SHOW$6);
>>>>>>> own

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }

    hide() {
<<<<<<< HEAD
      if (isDisabled(this._element) || !this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (isDisabled(this._element) || !this._isShown()) {
>>>>>>> own
=======
      if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$8)) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (startEvent.defaultPrevented) {
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return;
      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

<<<<<<< HEAD
<<<<<<< HEAD
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      for (const trigger of this._triggerArray) {
        const element = getElementFromSelector(trigger);

        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
=======
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK, event => {
        event.preventDefault();
        this.toggle();
      });
    }

    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
>>>>>>> own

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
=======
      const complete = () => {
        this._isTransitioning = false;
=======
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);
=======
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      for (const trigger of this._triggerArray) {
        const element = getElementFromSelector(trigger);

<<<<<<< HEAD
      if ('ontouchstart' in document.documentElement) {
<<<<<<< HEAD
<<<<<<< HEAD
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
=======
        [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
>>>>>>> own
=======
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }

      this._isTransitioning = true;

      const complete = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);
=======
        this.setTransitioning(false);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
        this._isTransitioning = false;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

<<<<<<< HEAD
      this._element.classList.remove(CLASS_NAME_SHOW$7);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);
>>>>>>> own
=======
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        this._element.classList.add(CLASS_NAME_COLLAPSE);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }

    _getConfig(config) {
      config = super._getConfig(config);

      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
=======
      EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
=======
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
>>>>>>> own
    }

    _getConfig(config) {
      config = super._getConfig(config);

      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
<<<<<<< HEAD
        throw new TypeError(`${NAME$8.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
>>>>>>> own
      }
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$5);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      };

      this._element.style[dimension] = '';
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._queueCallback(complete, this._element, true);
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }
=======
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    } // Private
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = getElement(config.parent);
=======
    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
=======
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Private


<<<<<<< HEAD
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
<<<<<<< HEAD
    }
=======
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

<<<<<<< HEAD
      typeCheckConfig(NAME$9, config, DefaultType$8);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      config.parent = getElement(config.parent);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      return config;
    }

<<<<<<< HEAD
    _getPlacement() {
      const parentDropdown = this._element.parentNode;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }

    _getPlacement() {
      const parentDropdown = this._parent;
>>>>>>> own

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
      }
=======
    _getDimension() {
<<<<<<< HEAD
<<<<<<< HEAD
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }

<<<<<<< HEAD
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
<<<<<<< HEAD
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
      } // We need to trim the value because custom properties can also include spaces

=======
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      for (const element of children) {
        const selected = getElementFromSelector(element);

        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }

<<<<<<< HEAD
    _detectNavbar() {
<<<<<<< HEAD
<<<<<<< HEAD
      return this._element.closest(SELECTOR_NAVBAR) !== null;
=======
      return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      return this._element.closest(SELECTOR_NAVBAR) !== null;
>>>>>>> own
=======
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth

      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

<<<<<<< HEAD
      if (typeof offset === 'string') {
<<<<<<< HEAD
<<<<<<< HEAD
        return offset.split(',').map(value => Number.parseInt(value, 10));
=======
        return offset.split(',').map(val => Number.parseInt(val, 10));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        return offset.split(',').map(value => Number.parseInt(value, 10));
>>>>>>> own
=======
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }
    } // Static


    static jQueryInterface(config) {
      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      return this.each(function () {
        const data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
<<<<<<< HEAD
        }]
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
      }; // Disable Popper if we have a static display or Dropdown is in Navbar

      if (this._inNavbar || this._config.display === 'static') {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove
<<<<<<< HEAD
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

          data[config]();
        }
=======
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
=======
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

<<<<<<< HEAD
      if (this._config.display === 'static') {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

>>>>>>> own
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
=======
    _initializeChildren() {
      if (!this._config.parent) {
        return;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }

      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);

      for (const element of children) {
        const selected = getElementFromSelector(element);

        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }

<<<<<<< HEAD
    _selectMenuItem({
      key,
      target
    }) {
<<<<<<< HEAD
<<<<<<< HEAD
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
=======
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
>>>>>>> own
=======
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
=======
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    } // Static


    static jQueryInterface(config) {
      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      return this.each(function () {
<<<<<<< HEAD
        Collapse.collapseInterface(this, config);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
=======
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
>>>>>>> own
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

<<<<<<< HEAD
      if (typeof config === 'string') {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
<<<<<<< HEAD
<<<<<<< HEAD
=======
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Dropdown.dropdownInterface(this, config);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
=======
        const data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
        return;
      }

      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);

      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);
=======
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
=======
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
>>>>>>> own
        return;
      }

      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);

<<<<<<< HEAD
      for (let i = 0, len = toggles.length; i < len; i++) {
        const context = Dropdown.getInstance(toggles[i]);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);
>>>>>>> own
=======
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
=======
        if (!context._element.classList.contains(CLASS_NAME_SHOW$7)) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

<<<<<<< HEAD
        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
=======
        if (event) {
          const composedPath = event.composedPath();
          const isMenuTarget = composedPath.includes(context._menu);
=======
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
>>>>>>> own


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

<<<<<<< HEAD
          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
>>>>>>> own
        }

        context._completeHide(relatedTarget);
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);

      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }

      if (isInput && !isEscapeEvent) {
=======
    static getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }

=======
>>>>>>> own
    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);

<<<<<<< HEAD
      const isActive = this.classList.contains(CLASS_NAME_SHOW$7);

      if (!isActive && event.key === ESCAPE_KEY$2) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
        return;
      }

      event.preventDefault();
<<<<<<< HEAD
      const getToggleButton = SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();

        instance._selectMenuItem(event);
=======
      event.stopPropagation();

      if (isDisabled(this)) {
=======
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }

      if (isInput && !isEscapeEvent) {
>>>>>>> own
        return;
      }

      event.preventDefault();
      const getToggleButton = SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();

<<<<<<< HEAD
        Dropdown.getInstance(getToggleButton())._selectMenuItem(event);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        instance._selectMenuItem(event);
>>>>>>> own

        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
<<<<<<< HEAD
=======
      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
      }
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
>>>>>>> own
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
    Dropdown.getOrCreateInstance(this).toggle();
=======
<<<<<<< HEAD
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);

    for (const element of selectorElements) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  });
  /**
   * jQuery
=======
<<<<<<< HEAD
    Dropdown.dropdownInterface(this);
=======
    Dropdown.getOrCreateInstance(this).toggle();
>>>>>>> own
=======
    const triggerData = Manipulator.getDataAttributes(this);
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);

    for (const element of selectorElements) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  });
  /**
   * jQuery
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  defineJQueryPlugin(Collapse);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/scrollBar.js
=======
   * Bootstrap (v5.2.0): dropdown.js
=======
   * Bootstrap (v5.0.2): dropdown.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): dropdown.js
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */

  const NAME$a = 'dropdown';
  const DATA_KEY$6 = 'bs.dropdown';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY$1 = 'ArrowUp';
  const ARROW_DOWN_KEY$1 = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
=======
<<<<<<< HEAD
   * Bootstrap (v5.0.2): util/scrollBar.js
=======
   * Bootstrap (v5.2.0): util/scrollBar.js
>>>>>>> own
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';
  /**
   * Class definition
   */
>>>>>>> own

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
<<<<<<< HEAD
<<<<<<< HEAD
    } // Public
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   * Constants
   */

  const NAME$a = 'dropdown';
  const DATA_KEY$6 = 'bs.dropdown';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY$1 = 'ArrowUp';
  const ARROW_DOWN_KEY$1 = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  const SELECTOR_MENU = '.dropdown-menu';
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
    } // Public

>>>>>>> own

    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }

    hide() {
      const width = this.getWidth();

      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }

    reset() {
      this._resetElementAttributes(this._element, 'overflow');
<<<<<<< HEAD

      this._resetElementAttributes(this._element, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }

    isOverflowing() {
      return this.getWidth() > 0;
    } // Private


=======
      this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
=======
>>>>>>> own

      this._resetElementAttributes(this._element, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }

<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    isOverflowing() {
      return this.getWidth() > 0;
    } // Private


>>>>>>> own
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';
    }

<<<<<<< HEAD
<<<<<<< HEAD
    _setElementAttributes(selector, styleProperty, callback) {
=======
    _setElementAttributes(selector, styleProp, callback) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _setElementAttributes(selector, styleProperty, callback) {
>>>>>>> own
      const scrollbarWidth = this.getWidth();

      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

<<<<<<< HEAD
<<<<<<< HEAD
        this._saveInitialAttribute(element, styleProperty);

        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
=======
        this._saveInitialAttribute(element, styleProp);

        const calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        this._saveInitialAttribute(element, styleProperty);

        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
>>>>>>> own
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

<<<<<<< HEAD
<<<<<<< HEAD
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);

      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }

    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero

        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }

        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
=======
    reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, 'paddingRight');

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }

    _saveInitialAttribute(element, styleProp) {
      const actualValue = element.style[styleProp];
=======
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
>>>>>>> own

      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }

    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero

        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
>>>>>>> own
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
<<<<<<< HEAD
<<<<<<< HEAD
        return;
      }

      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
=======
      } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
=======
        return;
>>>>>>> own
      }

<<<<<<< HEAD
    isOverflowing() {
      return this.getWidth() > 0;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
>>>>>>> own
    }

  }

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$9 = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  const Default$8 = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements

  };
  const DefaultType$8 = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };
  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    } // Getters


    static get Default() {
      return Default$8;
    }

    static get DefaultType() {
      return DefaultType$8;
    }

    static get NAME() {
      return NAME$9;
    } // Public


=======
   * Bootstrap (v5.0.2): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
=======
   * Bootstrap (v5.2.0): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
>>>>>>> own
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$9 = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  const Default$8 = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements

  };
  const DefaultType$8 = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };
  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    } // Getters


    static get Default() {
      return Default$8;
    }

    static get DefaultType() {
      return DefaultType$8;
    }

<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

<<<<<<< HEAD
      const element = this._getElement();

      if (this._config.isAnimated) {
        reflow(element);
      }

      element.classList.add(CLASS_NAME_SHOW$5);
=======
      if (this._config.isAnimated) {
        reflow(this._getElement());
      }

      this._getElement().classList.add(CLASS_NAME_SHOW$6);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9

      this._emulateAnimation(() => {
        execute(callback);
      });
    }

    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

<<<<<<< HEAD
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
=======
      this._getElement().classList.remove(CLASS_NAME_SHOW$6);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9

      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
<<<<<<< HEAD
=======
    } // Private


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = CLASS_NAME_BACKDROP;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$5);
        }

        this._element = backdrop;
      }

      return this._element;
    }

    _getConfig(config) {
      config = { ...Default$6,
        ...(typeof config === 'object' ? config : {})
      }; // use getElement() with the default "body" to get a fresh Element on each instantiation

      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

      this._config.rootElement.appendChild(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    }

    dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
<<<<<<< HEAD
    } // Private


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }

        this._element = backdrop;
      }

      return this._element;
    }

    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

      const element = this._getElement();

      this._config.rootElement.append(element);

      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    }

    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
=======
  const SELECTOR_NAVBAR = '.navbar';
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default$9 = {
    autoClose: true,
<<<<<<< HEAD
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType$9 = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };
  /**
   * Class definition
=======
  const Default$7 = {
    offset: [0, 2],
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType$9 = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper

      this._menu = SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
=======
      super(element);
=======
      super(element, config);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper

<<<<<<< HEAD
      this._addEventListeners();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._menu = SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Getters


    static get Default() {
<<<<<<< HEAD
<<<<<<< HEAD
      return Default$9;
    }

    static get DefaultType() {
      return DefaultType$9;
    }

    static get NAME() {
      return NAME$a;
=======
      return Default$7;
=======
      return Default$9;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    static get DefaultType() {
      return DefaultType$9;
    }

    static get NAME() {
<<<<<<< HEAD
      return NAME$8;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      return NAME$a;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Public


    toggle() {
<<<<<<< HEAD
<<<<<<< HEAD
      return this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._createPopper(); // If this is a touch-enabled device we add extra
=======
      if (isDisabled(this._element)) {
        return;
      }

      const isActive = this._element.classList.contains(CLASS_NAME_SHOW$7);

      if (isActive) {
        this.hide();
        return;
      }

      this.show();
=======
      return this._isShown() ? this.hide() : this.show();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

<<<<<<< HEAD

      if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
      } else {
        if (typeof Popper__namespace === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        let referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (isElement(this._config.reference)) {
          referenceElement = getElement(this._config.reference);
        } else if (typeof this._config.reference === 'object') {
          referenceElement = this._config.reference;
        }

        const popperConfig = this._getPopperConfig();

        const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
        this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);

        if (isDisplayStatic) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'static');
        }
      } // If this is a touch-enabled device we add extra
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._createPopper(); // If this is a touch-enabled device we add extra
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
<<<<<<< HEAD
=======
      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      this._element.focus();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._element.setAttribute('aria-expanded', true);

<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/focustrap.js
=======
   * Bootstrap (v5.0.2): modal.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
   * Constants
   */

  const NAME$8 = 'focustrap';
  const DATA_KEY$5 = 'bs.focustrap';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of

  };
  const DefaultType$7 = {
    autofocus: 'boolean',
    trapElement: 'element'
  };
  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    } // Getters


    static get Default() {
      return Default$7;
    }

    static get DefaultType() {
      return DefaultType$7;
    }

    static get NAME() {
      return NAME$8;
    } // Public


    activate() {
      if (this._isActive) {
        return;
      }

      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
=======
    static get NAME() {
      return NAME$9;
    } // Public


    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
=======
<<<<<<< HEAD
      this._menu.classList.add(CLASS_NAME_SHOW$6);

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }

    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
=======
      this._menu.classList.toggle(CLASS_NAME_SHOW$7);
=======
      this._menu.classList.add(CLASS_NAME_SHOW$6);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }

    hide() {
<<<<<<< HEAD
      if (isDisabled(this._element) || !this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (isDisabled(this._element) || !this._isShown()) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };

<<<<<<< HEAD
      const element = this._getElement();
=======
      this._completeHide(relatedTarget);
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

<<<<<<< HEAD
      element.classList.add(CLASS_NAME_SHOW$5);
>>>>>>> own

      EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }

    deactivate() {
      if (!this._isActive) {
=======
      super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private


<<<<<<< HEAD
<<<<<<< HEAD
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
=======
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK, event => {
        event.preventDefault();
        this.toggle();
      });
    }

    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (hideEvent.defaultPrevented) {
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
<<<<<<< HEAD
<<<<<<< HEAD
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    } // Private


    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
=======
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);

      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
=======
<<<<<<< HEAD
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
=======
        [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      if (this._popper) {
        this._popper.destroy();
      }

<<<<<<< HEAD
<<<<<<< HEAD
      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);
=======
      this._menu.classList.remove(CLASS_NAME_SHOW$7);

      this._element.classList.remove(CLASS_NAME_SHOW$7);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');
<<<<<<< HEAD
<<<<<<< HEAD
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }

    _getConfig(config) {
      config = super._getConfig(config);

      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
=======
      EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
=======
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    _getConfig(config) {
      config = super._getConfig(config);

      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
<<<<<<< HEAD
        throw new TypeError(`${NAME$8.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      return config;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      let referenceElement = this._element;

<<<<<<< HEAD
      this._element.remove();

      this._isAppended = false;
    } // Private


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;
=======
      if (this._config.reference === 'parent') {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const popperConfig = this._getPopperConfig();

      this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
    }

    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
<<<<<<< HEAD
    }

    _getPlacement() {
      const parentDropdown = this._parent;
=======
    _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
>>>>>>> own

<<<<<<< HEAD
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }

<<<<<<< HEAD
      const elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }

    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }

=======
      const element = this._getElement();
=======
    _getPlacement() {
      const parentDropdown = this._element.parentNode;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }

    _getPlacement() {
      const parentDropdown = this._parent;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

<<<<<<< HEAD
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }

    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
=======
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }

<<<<<<< HEAD
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$8 = 'focustrap';
  const DATA_KEY$5 = 'bs.focustrap';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
=======
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
<<<<<<< HEAD
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      } // We need to trim the value because custom properties can also include spaces
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
<<<<<<< HEAD
<<<<<<< HEAD
      return this._element.closest(SELECTOR_NAVBAR) !== null;
=======
      return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      return this._element.closest(SELECTOR_NAVBAR) !== null;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
<<<<<<< HEAD
<<<<<<< HEAD
        return offset.split(',').map(value => Number.parseInt(value, 10));
=======
        return offset.split(',').map(val => Number.parseInt(val, 10));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        return offset.split(',').map(value => Number.parseInt(value, 10));
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }; // Disable Popper if we have a static display or Dropdown is in Navbar

      if (this._inNavbar || this._config.display === 'static') {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove
<<<<<<< HEAD

=======
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _selectMenuItem({
      key,
      target
    }) {
<<<<<<< HEAD
<<<<<<< HEAD
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
=======
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY

<<<<<<< HEAD
>>>>>>> own
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

<<<<<<< HEAD
<<<<<<< HEAD
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    } // Static

<<<<<<< HEAD
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
   * Constants
   */

  const NAME$7 = 'modal';
  const DATA_KEY$4 = 'bs.modal';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$2 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$6 = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };
  /**
   * Class definition
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> own
   * Constants
   */

  const NAME$7 = 'modal';
  const DATA_KEY$4 = 'bs.modal';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$2 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$6 = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> own
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
=======

    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

=======
<<<<<<< HEAD
      super(element);
      this._config = this._getConfig(config);
=======
      super(element, config);
>>>>>>> own
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

      this._addEventListeners();
>>>>>>> own
    } // Getters


    static get Default() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
      return Default$6;
    }

    static get DefaultType() {
      return DefaultType$6;
<<<<<<< HEAD
    }
=======
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
=======
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

<<<<<<< HEAD
      if (typeof config === 'string') {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
<<<<<<< HEAD
<<<<<<< HEAD
=======
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Dropdown.dropdownInterface(this, config);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
    }

    static get NAME() {
      return NAME$7;
>>>>>>> own
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      });
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    static clearMenus(event) {
<<<<<<< HEAD
<<<<<<< HEAD
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
=======
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
>>>>>>> own
        relatedTarget
      });
=======
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);
=======
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
=======
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        return;
      }

      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._isTransitioning = true;
=======
      for (let i = 0, len = toggles.length; i < len; i++) {
        const context = Dropdown.getInstance(toggles[i]);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

<<<<<<< HEAD
      if (this._isAnimated()) {
        this._isTransitioning = true;
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._isTransitioning = true;
>>>>>>> own
=======
        if (!context || context._config.autoClose === false) {
          continue;
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._backdrop.show(() => this._showElement(relatedTarget));
    }

    hide() {
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
        if (!context._element.classList.contains(CLASS_NAME_SHOW$7)) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

<<<<<<< HEAD
<<<<<<< HEAD
        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
=======
        if (event) {
          const composedPath = event.composedPath();
          const isMenuTarget = composedPath.includes(context._menu);

          if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
          } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._backdrop.show(() => this._showElement(relatedTarget));
    }

    hide() {
>>>>>>> own
      if (!this._isShown || this._isTransitioning) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
>>>>>>> own
=======
          if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
          }

          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        context._completeHide(relatedTarget);
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._isTransitioning = true;
=======
    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }

      if (isInput && !isEscapeEvent) {
=======
    static getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }

=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);

      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }

<<<<<<< HEAD
      const isActive = this.classList.contains(CLASS_NAME_SHOW$7);

      if (!isActive && event.key === ESCAPE_KEY$2) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
=======
      this._isTransitioning = true;
>>>>>>> own

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }

    dispose() {
      for (const htmlElement of [window, this._dialog]) {
        EventHandler.off(htmlElement, EVENT_KEY$4);
      }
=======
      if (isInput && !isEscapeEvent) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        return;
      }

      event.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
      const getToggleButton = SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();

        instance._selectMenuItem(event);
=======
      event.stopPropagation();
=======
      const getToggleButton = SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();

<<<<<<< HEAD
      const getToggleButton = () => this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];

      if (event.key === ESCAPE_KEY$2) {
        getToggleButton().focus();
        Dropdown.clearMenus();
        return;
      }

      if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
        if (!isActive) {
          getToggleButton().click();
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        Dropdown.getInstance(getToggleButton())._selectMenuItem(event);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        instance._selectMenuItem(event);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

<<<<<<< HEAD
      this._focustrap.deactivate();

<<<<<<< HEAD
      EventHandler.off(document, EVENT_FOCUSIN$2);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      super.dispose();
>>>>>>> own
=======
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
<<<<<<< HEAD
=======
      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        // 'static' option will be translated to true, and booleans will keep their value,
=======
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * jQuery
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
    Dropdown.dropdownInterface(this);
=======
    Dropdown.getOrCreateInstance(this).toggle();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  });
  /**
   * jQuery
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
        // 'static' option will be translated to true, and booleans will keep their value,
>>>>>>> own
        isAnimated: this._isAnimated()
      });
    }
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

  defineJQueryPlugin(Dropdown);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
<<<<<<< HEAD
    }
=======
   * Bootstrap (v5.2.0): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';
  /**
   * Class definition
   */
=======
   * Bootstrap (v5.0.2): util/scrollBar.js
=======
   * Bootstrap (v5.2.0): util/scrollBar.js
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';
  /**
   * Class definition
   */
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
<<<<<<< HEAD
<<<<<<< HEAD
    } // Public

=======
    }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
    }

    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
>>>>>>> own
      }

      this._element.style.display = 'block';
=======
    } // Public
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }

    hide() {
      const width = this.getWidth();

<<<<<<< HEAD
      this._element.scrollTop = 0;
<<<<<<< HEAD
<<<<<<< HEAD
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
>>>>>>> own
=======
      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      reflow(this._element);
=======
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }

<<<<<<< HEAD
      this._element.classList.add(CLASS_NAME_SHOW$5);
=======
      reflow(this._element);
>>>>>>> own

      this._element.classList.add(CLASS_NAME_SHOW$4);

      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }

        this._isTransitioning = false;
<<<<<<< HEAD
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
>>>>>>> own
          relatedTarget
        });
      };

<<<<<<< HEAD
<<<<<<< HEAD
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
=======
    reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    isOverflowing() {
      return this.getWidth() > 0;
    } // Private


=======
<<<<<<< HEAD
      this._queueCallback(transitionComplete, this._dialog, isAnimated);
=======
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
>>>>>>> own
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }

        if (this._config.keyboard) {
          event.preventDefault();
          this.hide();
          return;
        }

        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        if (event.target !== event.currentTarget) {
          // click is inside modal-dialog
          return;
        }

        if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();

<<<<<<< HEAD
    _setResizeEvent() {
      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
          return;
        }

        if (this._config.backdrop) {
          this.hide();
        }
      });
>>>>>>> own
    }

    _hideModal() {
      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');
=======
      this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
=======
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }

<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    reset() {
      this._resetElementAttributes(this._element, 'overflow');
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._resetElementAttributes(this._element, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }

    isOverflowing() {
      return this.getWidth() > 0;
    } // Private


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._element.style.overflow = 'hidden';
    }

<<<<<<< HEAD
<<<<<<< HEAD
    _setElementAttributes(selector, styleProperty, callback) {
=======
    _setElementAttributes(selector, styleProp, callback) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _setElementAttributes(selector, styleProperty, callback) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      const scrollbarWidth = this.getWidth();

      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

<<<<<<< HEAD
        if (this._config.backdrop === true) {
          this.hide();
        } else if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
        }
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
>>>>>>> own
      });
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }

    _triggerBackdropTransition() {
<<<<<<< HEAD
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
>>>>>>> own

      if (hideEvent.defaultPrevented) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed
=======
<<<<<<< HEAD
<<<<<<< HEAD
        this._saveInitialAttribute(element, styleProperty);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
=======
        this._saveInitialAttribute(element, styleProp);

        const calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed

      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
>>>>>>> own
        return;
      }

      if (!isModalOverflowing) {
<<<<<<< HEAD
<<<<<<< HEAD
        this._element.style.overflowY = 'hidden';
      }
=======
        this._saveInitialAttribute(element, styleProperty);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

<<<<<<< HEAD
<<<<<<< HEAD
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);

<<<<<<< HEAD
      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
=======
        style.overflowY = 'hidden';
=======
        this._element.style.overflowY = 'hidden';
>>>>>>> own
=======
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }
    }

<<<<<<< HEAD
      this._element.classList.add(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);

        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);

      this._element.focus();
<<<<<<< HEAD
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }
    /**
     * The following methods are used to handle overflowing modals
     */
>>>>>>> own
=======
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero

        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
=======
    reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, 'paddingRight');

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
=======
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    _saveInitialAttribute(element, styleProp) {
      const actualValue = element.style[styleProp];
=======
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

<<<<<<< HEAD
      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = `${scrollbarWidth}px`;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }

      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
>>>>>>> own
=======
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }
    }

    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero

        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
>>>>>>> own
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

<<<<<<< HEAD
<<<<<<< HEAD
    EventHandler.one(target, EVENT_SHOW$4, showEvent => {
=======
    EventHandler.one(target, EVENT_SHOW$3, showEvent => {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    EventHandler.one(target, EVENT_SHOW$4, showEvent => {
>>>>>>> own
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
=======
<<<<<<< HEAD
        return;
      }

      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
=======
      } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
=======
      EventHandler.one(target, EVENT_HIDDEN$3, () => {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
>>>>>>> own
        if (isVisible(this)) {
          this.focus();
        }
      });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
    }); // avoid conflict when clicking modal toggler while another one is open

    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }

<<<<<<< HEAD
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * jQuery
=======
    });
=======
>>>>>>> own
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * jQuery
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
   */
=======
    isOverflowing() {
      return this.getWidth() > 0;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

  }

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): offcanvas.js
=======
   * Bootstrap (v5.2.0): util/backdrop.js
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$9 = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  const Default$8 = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements

  };
  const DefaultType$8 = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };
  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    } // Getters


    static get Default() {
      return Default$8;
    }

    static get DefaultType() {
      return DefaultType$8;
    }

    static get NAME() {
      return NAME$9;
    } // Public


=======
   * Bootstrap (v5.0.2): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
=======
<<<<<<< HEAD
   * Bootstrap (v5.2.0): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
>>>>>>> own
=======
   * Bootstrap (v5.2.0): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

<<<<<<< HEAD
  const NAME$6 = 'offcanvas';
  const DATA_KEY$3 = 'bs.offcanvas';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY$1 = '.data-api';
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const ESCAPE_KEY = 'Escape';
<<<<<<< HEAD
  const Default$4 = {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_SHOWING$1 = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  const Default$5 = {
>>>>>>> own
    backdrop: true,
    keyboard: true,
    scroll: false
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  /**
   * Class definition
=======
  const DefaultType$4 = {
    backdrop: 'boolean',
=======
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
>>>>>>> own
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> own
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
=======
      super(element);
      this._config = this._getConfig(config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
>>>>>>> own

      this._addEventListeners();
    } // Getters


<<<<<<< HEAD
<<<<<<< HEAD
=======
  const NAME$9 = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  const Default$8 = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements

  };
  const DefaultType$8 = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };
  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    } // Getters


>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    static get Default() {
      return Default$8;
    }

<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    static get DefaultType() {
      return DefaultType$8;
    }

    static get NAME() {
<<<<<<< HEAD
      return NAME$6;
=======
    static get NAME() {
      return NAME$5;
    }

    static get Default() {
      return Default$4;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    static get Default() {
      return Default$5;
    }

    static get DefaultType() {
      return DefaultType$5;
    }

    static get NAME() {
      return NAME$6;
>>>>>>> own
=======
      return NAME$9;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    } // Public


>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
=======
      const element = this._getElement();

      if (this._config.isAnimated) {
        reflow(element);
      }

      element.classList.add(CLASS_NAME_SHOW$5);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
=======
      const element = this._getElement();

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if (this._config.isAnimated) {
        reflow(element);
      }

<<<<<<< HEAD
      this._getElement().classList.add(CLASS_NAME_SHOW$6);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
>>>>>>> own
        relatedTarget
=======
      element.classList.add(CLASS_NAME_SHOW$5);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._emulateAnimation(() => {
        execute(callback);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      });
    }

    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
      this._getElement().classList.remove(CLASS_NAME_SHOW$6);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      }

=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
=======
    } // Private

<<<<<<< HEAD
        this._enforceFocusOnElement(this._element);
      }

      this._element.removeAttribute('aria-hidden');

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      }

>>>>>>> own
      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

<<<<<<< HEAD
<<<<<<< HEAD
      this._element.classList.add(CLASS_NAME_SHOWING$1);
=======

    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = CLASS_NAME_BACKDROP;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$5);
        }

        this._element = backdrop;
      }

      return this._element;
    }

<<<<<<< HEAD
      const completeCallBack = () => {
        EventHandler.trigger(this._element, EVENT_SHOWN$2, {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._element.classList.add(CLASS_NAME_SHOWING$1);

      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }

        this._element.classList.add(CLASS_NAME_SHOW$3);

        this._element.classList.remove(CLASS_NAME_SHOWING$1);

        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
>>>>>>> own
          relatedTarget
        });
      };
=======
    _getConfig(config) {
      config = { ...Default$6,
        ...(typeof config === 'object' ? config : {})
      }; // use getElement() with the default "body" to get a fresh Element on each instantiation
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
>>>>>>> own
=======
      this._config.rootElement.appendChild(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._focustrap.deactivate();
=======
      EventHandler.off(document, EVENT_FOCUSIN$1);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._focustrap.deactivate();
>>>>>>> own
=======
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Private
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this._element.classList.add(CLASS_NAME_HIDING);
=======
      this._element.classList.remove(CLASS_NAME_SHOW$4);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._element.classList.add(CLASS_NAME_HIDING);
>>>>>>> own
=======
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        this._element = backdrop;
      }

<<<<<<< HEAD
      const completeCallback = () => {
<<<<<<< HEAD
<<<<<<< HEAD
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
=======
        this._element.setAttribute('aria-hidden', true);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
>>>>>>> own
=======
      return this._element;
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        this._element.style.visibility = 'hidden';
=======
      const element = this._getElement();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._config.rootElement.append(element);

      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
<<<<<<< HEAD
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }

  }

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/focustrap.js
=======
   * Bootstrap (v5.0.2): modal.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): util/focustrap.js
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */

  const NAME$8 = 'focustrap';
  const DATA_KEY$5 = 'bs.focustrap';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of

  };
  const DefaultType$7 = {
    autofocus: 'boolean',
    trapElement: 'element'
  };
  /**
   * Class definition
   */

<<<<<<< HEAD
        this.hide();
      }; // 'static' option will be translated to true, and booleans will keep their value
=======
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }

        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
>>>>>>> own
=======
  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    } // Getters
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


    static get Default() {
      return Default$7;
    }

    static get DefaultType() {
      return DefaultType$7;
    }

<<<<<<< HEAD
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }

        if (!this._config.keyboard) {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

<<<<<<< HEAD
        this.hide();
=======
=======
      this._focustrap.deactivate();

>>>>>>> own
      super.dispose();
    } // Private


    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

        this.hide();
      }; // 'static' option will be translated to true, and booleans will keep their value


      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }

        if (!this._config.keyboard) {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

        this.hide();
>>>>>>> own
      });
    } // Static
=======
    static get NAME() {
      return NAME$8;
    } // Public
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


    activate() {
      if (this._isActive) {
        return;
      }

      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }

<<<<<<< HEAD
  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
>>>>>>> own
   */

=======
    deactivate() {
      if (!this._isActive) {
        return;
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    } // Private


    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
=======
    EventHandler.one(target, EVENT_HIDDEN$2, () => {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
>>>>>>> own
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

<<<<<<< HEAD
<<<<<<< HEAD
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
=======
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const elements = SelectorEngine.focusableChildren(trapElement);

<<<<<<< HEAD
    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
>>>>>>> own
    }

    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
=======
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }

    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
<<<<<<< HEAD
  });
  enableDismissTrigger(Offcanvas);
<<<<<<< HEAD
  /**
   * jQuery
=======
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
=======
>>>>>>> own
  /**
   * jQuery
<<<<<<< HEAD
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
   */
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

  }

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
=======
   * Bootstrap (v5.0.2): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
>>>>>>> own
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
<<<<<<< HEAD
<<<<<<< HEAD
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
=======
   * Bootstrap (v5.2.0): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  const NAME$7 = 'modal';
  const DATA_KEY$4 = 'bs.modal';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$2 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$6 = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };
  /**
   * Class definition
=======
<<<<<<< HEAD
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
=======
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
>>>>>>> own
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
<<<<<<< HEAD
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   * Constants
   */

  const NAME$8 = 'focustrap';
  const DATA_KEY$5 = 'bs.focustrap';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of

  };
  const DefaultType$7 = {
    autofocus: 'boolean',
    trapElement: 'element'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
>>>>>>> own
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }
=======
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._addEventListeners();
=======
<<<<<<< HEAD
  const allowedAttribute = (attr, allowedAttributeList) => {
    const attrName = attr.nodeName.toLowerCase();
=======
  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
>>>>>>> own

    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }

      return true;
    } // Check if a regular expression validates the attribute.


<<<<<<< HEAD
    return false;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
>>>>>>> own
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
<<<<<<< HEAD
<<<<<<< HEAD
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
=======
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
>>>>>>> own
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
=======
    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
>>>>>>> own
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
<<<<<<< HEAD
<<<<<<< HEAD
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
=======
      super(element);
      this._config = this._getConfig(config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._isShown = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Getters


    static get Default() {
<<<<<<< HEAD
<<<<<<< HEAD
      return Default$6;
    }

    static get DefaultType() {
      return DefaultType$6;
    }

    static get NAME() {
      return NAME$7;
=======
      return Default$5;
    }

    static get NAME() {
      return NAME$6;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      return Default$7;
    }

    static get DefaultType() {
      return DefaultType$7;
    }

    static get NAME() {
      return NAME$8;
    } // Public
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


    activate() {
      if (this._isActive) {
        return;
      }

      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }

    deactivate() {
      if (!this._isActive) {
        return;
      }
<<<<<<< HEAD
=======
    const allowlistKeys = Object.keys(allowList);
=======
>>>>>>> own
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();

      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }

      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
<<<<<<< HEAD
      });
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      }
>>>>>>> own
=======

      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    } // Private


    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;

      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }

      const elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }

    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

  }

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/template-factory.js
=======
   * Bootstrap (v5.2.0): modal.js
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$7 = 'modal';
  const DATA_KEY$4 = 'bs.modal';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$2 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$6 = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };
  /**
   * Class definition
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default$6;
    }

    static get DefaultType() {
      return DefaultType$6;
    }

    static get NAME() {
      return NAME$7;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
=======
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
<<<<<<< HEAD
<<<<<<< HEAD
      this._isTransitioning = true;
=======

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._isTransitioning = true;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

<<<<<<< HEAD
<<<<<<< HEAD
      this._backdrop.show(() => this._showElement(relatedTarget));
    }

    hide() {
=======
      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, event => this.hide(event));
      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
          if (event.target === this._element) {
            this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(() => this._showElement(relatedTarget));
    }

    hide(event) {
      if (event && ['A', 'AREA'].includes(event.target.tagName)) {
        event.preventDefault();
      }

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._backdrop.show(() => this._showElement(relatedTarget));
    }

    hide() {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if (!this._isShown || this._isTransitioning) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;
<<<<<<< HEAD
<<<<<<< HEAD
      this._isTransitioning = true;

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }

    dispose() {
      for (const htmlElement of [window, this._dialog]) {
        EventHandler.off(htmlElement, EVENT_KEY$4);
      }

      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();
=======
=======
      this._isTransitioning = true;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }

    dispose() {
      for (const htmlElement of [window, this._dialog]) {
        EventHandler.off(htmlElement, EVENT_KEY$4);
      }

      this._backdrop.dispose();

      this._focustrap.deactivate();

<<<<<<< HEAD
      EventHandler.off(document, EVENT_FOCUSIN$2);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      super.dispose();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    handleUpdate() {
      this._adjustDialog();
    } // Private


    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
<<<<<<< HEAD
<<<<<<< HEAD
        // 'static' option will be translated to true, and booleans will keep their value,
=======
        // 'static' option will be translated to true, and booleans will keep their value
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/template-factory.js
>>>>>>> own
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */
=======
        // 'static' option will be translated to true, and booleans will keep their value,
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        isAnimated: this._isAnimated()
      });
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
<<<<<<< HEAD
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
=======
<<<<<<< HEAD
   * ------------------------------------------------------------------------
=======
>>>>>>> own
   * Constants
   */

  const NAME$5 = 'TemplateFactory';
  const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType$4 = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  const DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  /**
   * Class definition
   */

  class TemplateFactory extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    } // Getters


    static get Default() {
      return Default$4;
    }

    static get DefaultType() {
      return DefaultType$4;
    }

    static get NAME() {
      return NAME$5;
    } // Public


    getContent() {
      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
    }

    hasContent() {
      return this.getContent().length > 0;
    }

    changeContent(content) {
      this._checkContent(content);

      this._config.content = { ...this._config.content,
        ...content
      };
      return this;
    }

    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }

      const template = templateWrapper.children[0];

      const extraClass = this._resolvePossibleFunction(this._config.extraClass);

      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }

      return template;
    } // Private


    _typeCheckConfig(config) {
      super._typeCheckConfig(config);

      this._checkContent(config.content);
    }

    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }

    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);

      if (!templateElement) {
        return;
      }

      content = this._resolvePossibleFunction(content);

      if (!content) {
        templateElement.remove();
        return;
      }

      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);

        return;
      }

      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }

      templateElement.textContent = content;
    }

    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }

    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg(this) : arg;
    }

    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }

      templateElement.textContent = element.textContent;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$4 = 'tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$2 = 'show';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  const EVENT_HIDE$2 = 'hide';
  const EVENT_HIDDEN$2 = 'hidden';
  const EVENT_SHOW$2 = 'show';
  const EVENT_SHOWN$2 = 'shown';
  const EVENT_INSERTED = 'inserted';
  const EVENT_CLICK$1 = 'click';
  const EVENT_FOCUSIN$1 = 'focusin';
  const EVENT_FOCUSOUT$1 = 'focusout';
  const EVENT_MOUSEENTER = 'mouseenter';
  const EVENT_MOUSELEAVE = 'mouseleave';
>>>>>>> own
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$3 = {
<<<<<<< HEAD
<<<<<<< HEAD
    allowList: DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType$3 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };
  /**
   * Class definition
=======
=======
    allowList: DefaultAllowlist,
>>>>>>> own
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType$3 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> own
   */
=======
    _getConfig(config) {
      config = { ...Default$5,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config;
    }

    _showElement(relatedTarget) {
      const isAnimated = this._isAnimated();

      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }

    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;
<<<<<<< HEAD
<<<<<<< HEAD
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config); // Private
=======
      reflow(this._element);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._element.classList.add(CLASS_NAME_SHOW$4);

      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }

        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
=======
<<<<<<< HEAD
      super(element); // private
=======
      super(element, config); // Private
>>>>>>> own

      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = false;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null; // Protected

<<<<<<< HEAD
      this._config = this._getConfig(config);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
      this.tip = null;
=======
      if (isAnimated) {
        reflow(this._element);
      }
=======
      reflow(this._element);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._element.classList.add(CLASS_NAME_SHOW$4);

      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }

        this._isTransitioning = false;
<<<<<<< HEAD
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
          relatedTarget
        });
      };
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

<<<<<<< HEAD
<<<<<<< HEAD
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }

        if (this._config.keyboard) {
          event.preventDefault();
          this.hide();
          return;
        }

        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        if (event.target !== event.currentTarget) {
          // click is inside modal-dialog
          return;
        }

        if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();

          return;
        }

        if (this._config.backdrop) {
          this.hide();
        }
      });
=======
      this._queueCallback(transitionComplete, this._dialog, isAnimated);
=======
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }

        if (this._config.keyboard) {
          event.preventDefault();
          this.hide();
          return;
        }

        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        if (event.target !== event.currentTarget) {
          // click is inside modal-dialog
          return;
        }

        if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();

<<<<<<< HEAD
    _setResizeEvent() {
      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
          return;
        }

        if (this._config.backdrop) {
          this.hide();
        }
      });
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    _hideModal() {
      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        this._scrollBar.reset();

<<<<<<< HEAD
<<<<<<< HEAD
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }

    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      });
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }

    _triggerBackdropTransition() {
<<<<<<< HEAD
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (hideEvent.defaultPrevented) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed

      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
=======
      const {
        classList,
        scrollHeight,
        style
      } = this._element;
      const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

      if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed

      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        return;
      }

      if (!isModalOverflowing) {
<<<<<<< HEAD
<<<<<<< HEAD
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);

        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);

      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
=======
        style.overflowY = 'hidden';
=======
        this._element.style.overflowY = 'hidden';
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);

        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);

      this._element.focus();
<<<<<<< HEAD
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }
    /**
     * The following methods are used to handle overflowing modals
     */
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4


    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      const scrollbarWidth = this._scrollBar.getWidth();

      const isBodyOverflowing = scrollbarWidth > 0;

<<<<<<< HEAD
<<<<<<< HEAD
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }

      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
=======
      if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = `${scrollbarWidth}px`;
      }

      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = `${scrollbarWidth}px`;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }

      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static


    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](relatedTarget);
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

<<<<<<< HEAD
<<<<<<< HEAD
    EventHandler.one(target, EVENT_SHOW$4, showEvent => {
=======
    EventHandler.one(target, EVENT_SHOW$3, showEvent => {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    EventHandler.one(target, EVENT_SHOW$4, showEvent => {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
=======
      EventHandler.one(target, EVENT_HIDDEN$3, () => {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        if (isVisible(this)) {
          this.focus();
        }
      });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }); // avoid conflict when clicking modal toggler while another one is open

    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }

<<<<<<< HEAD
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * jQuery
=======
    });
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * jQuery
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$6 = 'offcanvas';
  const DATA_KEY$3 = 'bs.offcanvas';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY$1 = '.data-api';
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_SHOWING$1 = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  const Default$5 = {
=======
   * Bootstrap (v5.0.2): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
=======
   * Bootstrap (v5.2.0): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$6 = 'offcanvas';
  const DATA_KEY$3 = 'bs.offcanvas';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY$1 = '.data-api';
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const ESCAPE_KEY = 'Escape';
<<<<<<< HEAD
  const Default$4 = {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_SHOWING$1 = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  const Default$5 = {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    backdrop: true,
    keyboard: true,
    scroll: false
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  /**
   * Class definition
=======
  const DefaultType$4 = {
    backdrop: 'boolean',
=======
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
=======
      super(element);
      this._config = this._getConfig(config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._addEventListeners();
    } // Getters


<<<<<<< HEAD
<<<<<<< HEAD
    static get Default() {
      return Default$5;
    }

    static get DefaultType() {
      return DefaultType$5;
    }

    static get NAME() {
      return NAME$6;
=======
    static get NAME() {
      return NAME$5;
    }

    static get Default() {
      return Default$4;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    static get Default() {
      return Default$5;
    }

    static get DefaultType() {
      return DefaultType$5;
    }

    static get NAME() {
      return NAME$6;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
=======
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      this._element.style.visibility = 'visible';
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
<<<<<<< HEAD
<<<<<<< HEAD
      }

=======

        this._enforceFocusOnElement(this._element);
      }

      this._element.removeAttribute('aria-hidden');

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      }

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

<<<<<<< HEAD
<<<<<<< HEAD
      this._element.classList.add(CLASS_NAME_SHOWING$1);

      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }

        this._element.classList.add(CLASS_NAME_SHOW$3);

        this._element.classList.remove(CLASS_NAME_SHOWING$1);

        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
=======
      this._element.classList.add(CLASS_NAME_SHOW$4);

      const completeCallBack = () => {
        EventHandler.trigger(this._element, EVENT_SHOWN$2, {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._element.classList.add(CLASS_NAME_SHOWING$1);

      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }

        this._element.classList.add(CLASS_NAME_SHOW$3);

        this._element.classList.remove(CLASS_NAME_SHOWING$1);

        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
          relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }

    hide() {
      if (!this._isShown) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (hideEvent.defaultPrevented) {
        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      this._focustrap.deactivate();
=======
      EventHandler.off(document, EVENT_FOCUSIN$1);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._focustrap.deactivate();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._element.blur();

      this._isShown = false;

<<<<<<< HEAD
<<<<<<< HEAD
      this._element.classList.add(CLASS_NAME_HIDING);
=======
      this._element.classList.remove(CLASS_NAME_SHOW$4);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._element.classList.add(CLASS_NAME_HIDING);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._backdrop.hide();

      const completeCallback = () => {
<<<<<<< HEAD
<<<<<<< HEAD
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
=======
        this._element.setAttribute('aria-hidden', true);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

<<<<<<< HEAD
<<<<<<< HEAD
=======
        this._element.style.visibility = 'hidden';

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }

<<<<<<< HEAD
<<<<<<< HEAD
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$2);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      };

      this._queueCallback(completeCallback, this._element, true);
    }

    dispose() {
      this._backdrop.dispose();

<<<<<<< HEAD
<<<<<<< HEAD
      this._focustrap.deactivate();

      super.dispose();
    } // Private


    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

        this.hide();
      }; // 'static' option will be translated to true, and booleans will keep their value


      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }

        if (!this._config.keyboard) {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

        this.hide();
=======
=======
      this._focustrap.deactivate();

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      super.dispose();
    } // Private


    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

        this.hide();
      }; // 'static' option will be translated to true, and booleans will keep their value


      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

        if (!this._config.keyboard) {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

        this.hide();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      });
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
=======
    EventHandler.one(target, EVENT_HIDDEN$2, () => {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

<<<<<<< HEAD
<<<<<<< HEAD
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
=======
    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
<<<<<<< HEAD
  /**
   * jQuery
=======
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  /**
   * jQuery
<<<<<<< HEAD
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
=======
   * Bootstrap (v5.0.2): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
<<<<<<< HEAD
<<<<<<< HEAD
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
=======
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
=======
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
<<<<<<< HEAD
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

<<<<<<< HEAD
<<<<<<< HEAD
  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }

      return true;
    } // Check if a regular expression validates the attribute.


    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
=======
  const allowedAttribute = (attr, allowedAttributeList) => {
    const attrName = attr.nodeName.toLowerCase();
=======
  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }

      return true;
    } // Check if a regular expression validates the attribute.


<<<<<<< HEAD
    for (let i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
<<<<<<< HEAD
<<<<<<< HEAD
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
=======
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
=======
    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
<<<<<<< HEAD
<<<<<<< HEAD
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();

      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }

      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
=======
    const allowlistKeys = Object.keys(allowList);
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();

      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }

      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
<<<<<<< HEAD
      });
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      }
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): util/template-factory.js
=======
   * Bootstrap (v5.2.0): util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME$5 = 'TemplateFactory';
  const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType$4 = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  const DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };
  /**
   * Class definition
   */

  class TemplateFactory extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    } // Getters


    static get Default() {
      return Default$4;
    }

    static get DefaultType() {
      return DefaultType$4;
    }

    static get NAME() {
      return NAME$5;
    } // Public


    getContent() {
      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
    }

    hasContent() {
      return this.getContent().length > 0;
    }

    changeContent(content) {
      this._checkContent(content);

      this._config.content = { ...this._config.content,
        ...content
      };
      return this;
    }

    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }

      const template = templateWrapper.children[0];

      const extraClass = this._resolvePossibleFunction(this._config.extraClass);

      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }

      return template;
    } // Private


    _typeCheckConfig(config) {
      super._typeCheckConfig(config);

      this._checkContent(config.content);
    }

    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }

    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);

      if (!templateElement) {
        return;
      }

      content = this._resolvePossibleFunction(content);

      if (!content) {
        templateElement.remove();
        return;
      }

      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);

        return;
      }

      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }

      templateElement.textContent = content;
    }

    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }

    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg(this) : arg;
    }

    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }

      templateElement.textContent = element.textContent;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): tooltip.js
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
   * Constants
   */

  const NAME$5 = 'TemplateFactory';
  const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType$4 = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  const DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };
  /**
   * Class definition
   */

  class TemplateFactory extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    } // Getters


    static get Default() {
      return Default$4;
    }

    static get DefaultType() {
      return DefaultType$4;
    }

    static get NAME() {
      return NAME$5;
    } // Public


    getContent() {
      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
    }

    hasContent() {
      return this.getContent().length > 0;
    }

    changeContent(content) {
      this._checkContent(content);

      this._config.content = { ...this._config.content,
        ...content
      };
      return this;
    }

    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }

      const template = templateWrapper.children[0];

      const extraClass = this._resolvePossibleFunction(this._config.extraClass);

      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }

      return template;
    } // Private


    _typeCheckConfig(config) {
      super._typeCheckConfig(config);

      this._checkContent(config.content);
    }

    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }

    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);

      if (!templateElement) {
        return;
      }

      content = this._resolvePossibleFunction(content);

      if (!content) {
        templateElement.remove();
        return;
      }

      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);

        return;
      }

      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }

      templateElement.textContent = content;
    }

    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }

    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg(this) : arg;
    }

    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }

      templateElement.textContent = element.textContent;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.0): tooltip.js
=======
   * Bootstrap (v5.0.2): tooltip.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
   * Constants
   */

  const NAME$4 = 'tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$2 = 'show';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  const EVENT_HIDE$2 = 'hide';
  const EVENT_HIDDEN$2 = 'hidden';
  const EVENT_SHOW$2 = 'show';
  const EVENT_SHOWN$2 = 'shown';
  const EVENT_INSERTED = 'inserted';
  const EVENT_CLICK$1 = 'click';
  const EVENT_FOCUSIN$1 = 'focusin';
  const EVENT_FOCUSOUT$1 = 'focusout';
  const EVENT_MOUSEENTER = 'mouseenter';
  const EVENT_MOUSELEAVE = 'mouseleave';
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   * Constants
   */

  const NAME$4 = 'tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
<<<<<<< HEAD
  const DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$2 = 'show';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  const EVENT_HIDE$2 = 'hide';
  const EVENT_HIDDEN$2 = 'hidden';
  const EVENT_SHOW$2 = 'show';
  const EVENT_SHOWN$2 = 'shown';
  const EVENT_INSERTED = 'inserted';
  const EVENT_CLICK$1 = 'click';
  const EVENT_FOCUSIN$1 = 'focusin';
  const EVENT_FOCUSOUT$1 = 'focusout';
  const EVENT_MOUSEENTER = 'mouseenter';
  const EVENT_MOUSELEAVE = 'mouseleave';
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$3 = {
<<<<<<< HEAD
<<<<<<< HEAD
    allowList: DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType$3 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };
  /**
   * Class definition
=======
=======
    allowList: DefaultAllowlist,
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType$3 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
   */

  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config); // Private

      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = false;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null; // Protected

=======
      super(element); // private
=======
      super(element, config); // Private
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = false;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null; // Protected

<<<<<<< HEAD
      this._config = this._getConfig(config);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      this.tip = null;

      this._setListeners();
    } // Getters


    static get Default() {
      return Default$3;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    static get DefaultType() {
      return DefaultType$3;
    }

    static get NAME() {
      return NAME$4;
=======
    static get NAME() {
      return NAME$4;
    }

    static get Event() {
      return Event$2;
    }

    static get DefaultType() {
      return DefaultType$3;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    static get DefaultType() {
      return DefaultType$3;
    }

    static get NAME() {
      return NAME$4;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Public


    enable() {
      this._isEnabled = true;
    }

    disable() {
      this._isEnabled = false;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        const context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
<<<<<<< HEAD
<<<<<<< HEAD
          context._enter();
        } else {
          context._leave();
        }

        return;
      }

      if (this._isShown()) {
        this._leave();

        return;
      }

      this._enter();
=======
          context._enter(null, context);
=======
          context._enter();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        } else {
          context._leave();
        }

        return;
      }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

      if (this._isShown()) {
        this._leave();

        return;
      }

      this._enter();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    dispose() {
      clearTimeout(this._timeout);
<<<<<<< HEAD
<<<<<<< HEAD
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
=======
      EventHandler.off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (this.tip) {
        this.tip.remove();
      }

<<<<<<< HEAD
<<<<<<< HEAD
      this._disposePopper();
=======
      if (this._popper) {
        this._popper.destroy();
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._disposePopper();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

<<<<<<< HEAD
<<<<<<< HEAD
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);

      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // todo v6 remove this OR make it optional


      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }

      const tip = this._getTipElement();

      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
=======
      if (!(this.isWithContent() && this._isEnabled)) {
=======
      if (!(this._isWithContent() && this._isEnabled)) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        return;
      }

      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);

      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // todo v6 remove this OR make it optional


      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }

      const tip = this._getTipElement();

<<<<<<< HEAD
      this._element.setAttribute('aria-describedby', tipId);

      this.setContent();

      if (this._config.animation) {
        tip.classList.add(CLASS_NAME_FADE$3);
      }

      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

      const attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      const {
        container
      } = this._config;
<<<<<<< HEAD
<<<<<<< HEAD

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
=======
      Data.set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.appendChild(tip);
        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      if (this._popper) {
        this._popper.update();
      } else {
<<<<<<< HEAD
<<<<<<< HEAD
        this._popper = this._createPopper(tip);
      }

      tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
=======
        this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
      }

      tip.classList.add(CLASS_NAME_SHOW$3);
      const customClass = typeof this._config.customClass === 'function' ? this._config.customClass() : this._config.customClass;

      if (customClass) {
        tip.classList.add(...customClass.split(' '));
      } // If this is a touch-enabled device we add extra
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        this._popper = this._createPopper(tip);
      }

      tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

<<<<<<< HEAD
<<<<<<< HEAD
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }

      const complete = () => {
        const previousHoverState = this._isHovered;
        this._isHovered = false;
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));

        if (previousHoverState) {
          this._leave();
        }
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    hide() {
      if (!this._isShown()) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));

      if (hideEvent.defaultPrevented) {
        return;
      }

      const tip = this._getTipElement();

      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = false;
=======

=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }

      const complete = () => {
        const previousHoverState = this._isHovered;
        this._isHovered = false;
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));

        if (previousHoverState) {
          this._leave();
        }
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    hide() {
      if (!this._isShown()) {
        return;
      }

<<<<<<< HEAD
      const tip = this.getTipElement();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));

      if (hideEvent.defaultPrevented) {
        return;
      }

      const tip = this._getTipElement();

      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = false;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

<<<<<<< HEAD
<<<<<<< HEAD
        if (!this._isHovered) {
          tip.remove();
        }

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));

        this._disposePopper();
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    update() {
      if (this._popper) {
=======
        if (this._hoverState !== HOVER_STATE_SHOW) {
=======
        if (!this._isHovered) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
          tip.remove();
        }

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));

        this._disposePopper();
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    update() {
<<<<<<< HEAD
      if (this._popper !== null) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (this._popper) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        this._popper.update();
      }
    } // Protected


<<<<<<< HEAD
<<<<<<< HEAD
    _isWithContent() {
      return Boolean(this._getTitle());
    }

    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }

      return this.tip;
    }

    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6


      if (!tip) {
        return null;
      }

      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only

      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);

      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }

      return tip;
    }

    setContent(content) {
      this._newContent = content;

      if (this._isShown()) {
        this._disposePopper();

        this.show();
      }
    }

    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({ ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }

      return this._templateFactory;
    }

    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }

    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle;
    } // Private


    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }

    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }

    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }

    _createPopper(tip) {
      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
=======
    isWithContent() {
      return Boolean(this.getTitle());
=======
    _isWithContent() {
      return Boolean(this._getTitle());
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }

      return this.tip;
    }

    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6


      if (!tip) {
        return null;
      }

      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only

      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);

      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }

      return tip;
    }

    setContent(content) {
      this._newContent = content;

      if (this._isShown()) {
        this._disposePopper();

        this.show();
      }
    }

    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({ ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }

      return this._templateFactory;
    }

    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }

    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle;
    } // Private


    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }

    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }

<<<<<<< HEAD
      return context;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }

    _createPopper(tip) {
      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
<<<<<<< HEAD
<<<<<<< HEAD
        return offset.split(',').map(value => Number.parseInt(value, 10));
=======
        return offset.split(',').map(val => Number.parseInt(val, 10));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        return offset.split(',').map(value => Number.parseInt(value, 10));
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg.call(this._element) : arg;
    }

<<<<<<< HEAD
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
<<<<<<< HEAD
<<<<<<< HEAD
          name: 'preSetPlacement',
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
        }]
=======
          name: 'onChange',
=======
          name: 'preSetPlacement',
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
<<<<<<< HEAD
        }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        }]
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      };
      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

<<<<<<< HEAD
<<<<<<< HEAD
    _setListeners() {
      const triggers = this._config.trigger.split(' ');

      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;

            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    static get DefaultType() {
      return DefaultType$3;
    }
=======
            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

            context._leave();
          });
        }
      }
=======
    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${CLASS_PREFIX$1}-${this.updateAttachment(attachment)}`);
    }

    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }

<<<<<<< HEAD
    static get DefaultType() {
      return DefaultType$3;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    static get DefaultType() {
      return DefaultType$3;
    }

    static get NAME() {
      return NAME$4;
>>>>>>> own
    } // Public
=======
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    _setListeners() {
      const triggers = this._config.trigger.split(' ');
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;

            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);

            context._leave();
          });
        }
<<<<<<< HEAD
      });
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      }
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };

<<<<<<< HEAD
<<<<<<< HEAD
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
=======
      EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (this._config.selector) {
        this._config = { ...this._config,
          trigger: 'manual',
          selector: ''
        };
      } else {
        this._fixTitle();
      }
    }

    _fixTitle() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          context._enter();
        } else {
          context._leave();
        }
=======
      const title = this._config.originalTitle;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (!title) {
        return;
      }

      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.removeAttribute('title');
    }

    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }

<<<<<<< HEAD
      this._enter();
=======
          context._enter(null, context);
=======
          context._enter();
>>>>>>> own
        } else {
          context._leave();
        }

        return;
      }

      if (this._isShown()) {
        this._leave();

        return;
      }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._isHovered = true;

      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }

    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }

      this._isHovered = false;

      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }

    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
=======
      const title = this._element.getAttribute('title');
=======
      const title = this._config.originalTitle;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      if (!title) {
        return;
      }

      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.removeAttribute('title');
    }

    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }

      this._isHovered = true;

      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }

    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }

<<<<<<< HEAD
=======

      this._enter();
    }

    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
>>>>>>> own
=======
      this._isHovered = false;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }

    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }

    _isWithActiveTrigger() {
<<<<<<< HEAD
      for (const trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

<<<<<<< HEAD
<<<<<<< HEAD
      const tip = this._getTipElement();
=======
      return false;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      return Object.values(this._activeTrigger).includes(true);
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
      if (!(this.isWithContent() && this._isEnabled)) {
=======
      this._disposePopper();

      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this._isWithContent() && this._isEnabled)) {
>>>>>>> own
        return;
      }

      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);

      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // todo v6 remove this OR make it optional


      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }

      const tip = this._getTipElement();

<<<<<<< HEAD
      this._addAttachmentClass(attachment);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
<<<<<<< HEAD
        }
      }

      config = { ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
=======
      Object.keys(dataAttributes).forEach(dataAttr => {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        }
      }

      config = { ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      config.originalTitle = this._element.getAttribute('title') || '';
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
>>>>>>> own
      }

      if (this._popper) {
        this._popper.update();
      } else {
<<<<<<< HEAD
<<<<<<< HEAD
        this._popper = this._createPopper(tip);
=======
      config.originalTitle = this._element.getAttribute('title') || '';

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }

<<<<<<< HEAD
<<<<<<< HEAD
=======
      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
        this._popper = this._createPopper(tip);
      }

      tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
>>>>>>> own
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

<<<<<<< HEAD
<<<<<<< HEAD
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      return config;
    }

    _getDelegateConfig() {
      const config = {};

<<<<<<< HEAD
<<<<<<< HEAD
      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        }
      } // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`

=======
      if (this._config) {
        for (const key in this._config) {
          if (this.constructor.Default[key] !== this._config[key]) {
            config[key] = this._config[key];
          }
        }
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      } // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

      return config;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
=======
    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);
=======
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

        this._popper = null;
      }
<<<<<<< HEAD
    }

    _handlePopperPlacementChange(popperData) {
      const {
        state
      } = popperData;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);

<<<<<<< HEAD
<<<<<<< HEAD
        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
=======
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

<<<<<<< HEAD
=======
>>>>>>> own
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }

      const complete = () => {
        const previousHoverState = this._isHovered;
        this._isHovered = false;
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));

        if (previousHoverState) {
          this._leave();
        }
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    hide() {
      if (!this._isShown()) {
        return;
      }

<<<<<<< HEAD
      const tip = this.getTipElement();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
          data[config]();
        }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
      });
    }

  }
  /**
<<<<<<< HEAD
   * jQuery
=======
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   */


  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
   * Bootstrap (v5.2.0): popover.js
=======
   * Bootstrap (v5.0.2): popover.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
   * Constants
   */

  const NAME$3 = 'popover';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  const Default$2 = { ...Tooltip.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  };
  const DefaultType$2 = { ...Tooltip.DefaultType,
    content: '(null|string|element|function)'
  };
  /**
   * Class definition
=======
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$3 = 'popover';
  const DATA_KEY$3 = 'bs.popover';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const CLASS_PREFIX = 'bs-popover';
  const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
  const Default$2 = { ...Tooltip.Default,
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  };
  const DefaultType$2 = { ...Tooltip.DefaultType,
    content: '(string|element|function)'
  };
  const Event$1 = {
    HIDE: `hide${EVENT_KEY$3}`,
    HIDDEN: `hidden${EVENT_KEY$3}`,
    SHOW: `show${EVENT_KEY$3}`,
    SHOWN: `shown${EVENT_KEY$3}`,
    INSERTED: `inserted${EVENT_KEY$3}`,
    CLICK: `click${EVENT_KEY$3}`,
    FOCUSIN: `focusin${EVENT_KEY$3}`,
    FOCUSOUT: `focusout${EVENT_KEY$3}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
  };
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_SHOW$2 = 'show';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }

<<<<<<< HEAD
    static get DefaultType() {
      return DefaultType$2;
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    static get NAME() {
      return NAME$3;
    } // Overrides


    _isWithContent() {
      return this._getTitle() || this._getContent();
    } // Private


    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }

    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
=======
    static get NAME() {
      return NAME$3;
    }

    static get Event() {
      return Event$1;
    }

    static get DefaultType() {
      return DefaultType$2;
    } // Overrides


<<<<<<< HEAD
      const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);
=======
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
>>>>>>> own
=======
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    getTipElement() {
      if (this.tip) {
        return this.tip;
      }

<<<<<<< HEAD
      const tip = this._getTipElement();

      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = false;

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

        if (!this._isHovered) {
          tip.remove();
        }

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));

        this._disposePopper();
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    update() {
<<<<<<< HEAD
      if (this._popper !== null) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (this._popper) {
>>>>>>> own
        this._popper.update();
      }
    } // Protected
=======
      this.tip = super.getTipElement();

      if (!this.getTitle()) {
        SelectorEngine.findOne(SELECTOR_TITLE, this.tip).remove();
      }

      if (!this._getContent()) {
        SelectorEngine.findOne(SELECTOR_CONTENT, this.tip).remove();
      }

      return this.tip;
    }

    setContent() {
      const tip = this.getTipElement(); // we use append for html objects to maintain js events
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    _isWithContent() {
      return Boolean(this._getTitle());
    }
=======
      let content = this._getContent();
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (typeof content === 'function') {
        content = content.call(this._element);
      }

      this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    } // Private


    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
    }

    _getContent() {
      return this._element.getAttribute('data-bs-content') || this._config.content;
    }

    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);

<<<<<<< HEAD
        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
=======
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
      });
    }

  }
  /**
<<<<<<< HEAD
   * jQuery
=======
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   */


  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
   * Bootstrap (v5.2.0): scrollspy.js
=======
   * Bootstrap (v5.0.2): scrollspy.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
   * Constants
=======
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
<<<<<<< HEAD
  const DATA_API_KEY = '.data-api';
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_CLICK = `click${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = '[href]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null
  };
  const DefaultType$1 = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element'
  };
  /**
   * Class definition
=======
  const DATA_API_KEY$1 = '.data-api';
  const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_DROPDOWN$1 = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const METHOD_OFFSET = 'offset';
  const METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
      super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper

      this._targetLinks = new Map();
      this._observableSections = new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh(); // initialize
=======
      super(element);
      this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
      this._config = this._getConfig(config);
      this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
      this.refresh();

      this._process();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    } // Getters


    static get Default() {
      return Default$1;
    }

<<<<<<< HEAD
    static get DefaultType() {
      return DefaultType$1;
    }

=======
<<<<<<< HEAD
    isWithContent() {
      return Boolean(this.getTitle());
=======
    _isWithContent() {
      return Boolean(this._getTitle());
>>>>>>> own
    }

    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }

      return this.tip;
    }

    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6


      if (!tip) {
        return null;
      }

      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only

      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);

      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }

      return tip;
    }

    setContent(content) {
      this._newContent = content;

      if (this._isShown()) {
        this._disposePopper();

        this.show();
      }
    }

    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({ ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }

      return this._templateFactory;
    }

    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }

    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle;
    } // Private
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    static get NAME() {
      return NAME$2;
    } // Public


    refresh() {
<<<<<<< HEAD
      this._initializeTargetsAndObservables();

      this._maybeEnableSmoothScroll();

      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }

      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }

    dispose() {
      this._observer.disconnect();

=======
      const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      const targets = SelectorEngine.find(this._selector);
      targets.map(element => {
        const targetSelector = getSelectorFromElement(element);
        const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        if (target) {
          const targetBCR = target.getBoundingClientRect();

<<<<<<< HEAD
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }

    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }

    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }

<<<<<<< HEAD
      return context;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _createPopper(tip) {
      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
>>>>>>> own
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
<<<<<<< HEAD
<<<<<<< HEAD
        return offset.split(',').map(value => Number.parseInt(value, 10));
=======
        return offset.split(',').map(val => Number.parseInt(val, 10));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        return offset.split(',').map(value => Number.parseInt(value, 10));
>>>>>>> own
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }
=======
          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
        this._offsets.push(item[0]);

        this._targets.push(item[1]);
      });
    }

    dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
      super.dispose();
    } // Private
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg.call(this._element) : arg;
    }

<<<<<<< HEAD
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
<<<<<<< HEAD
<<<<<<< HEAD
          name: 'preSetPlacement',
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
        }]
=======
          name: 'onChange',
=======
          name: 'preSetPlacement',
>>>>>>> own
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
<<<<<<< HEAD
        }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        }]
>>>>>>> own
      };
      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

<<<<<<< HEAD
<<<<<<< HEAD
    _setListeners() {
      const triggers = this._config.trigger.split(' ');
=======
    _configAfterMerge(config) {
      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
      config.target = getElement(config.target) || document.body;
      return config;
    }

    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      } // unregister any previous listeners

>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
        const observableSection = this._observableSections.get(event.target.hash);

        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;

          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: 'smooth'
            });
            return;
          } // Chrome 60 doesn't support `scrollTo`


          root.scrollTop = height;
        }
      });
    }

    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: [0.1, 0.5, 1],
        rootMargin: this._getRootMargin()
      };
      return new IntersectionObserver(entries => this._observerCallback(entries), options);
    } // The logic of selection

<<<<<<< HEAD
=======
>>>>>>> own
    _setListeners() {
      const triggers = this._config.trigger.split(' ');

      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;

            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);

            context._leave();
          });
        }
<<<<<<< HEAD
      });
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      }
>>>>>>> own
=======

    _observerCallback(entries) {
      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const activate = entry => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;

        this._process(targetElement(entry));
      };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
=======
      EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
>>>>>>> own
=======
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;

<<<<<<< HEAD
    _fixTitle() {
<<<<<<< HEAD
<<<<<<< HEAD
      const title = this._config.originalTitle;
=======
          this._clearActiveClass(targetElement(entry));
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

          continue;
        }

        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop

        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration

          if (!parentScrollTop) {
            return;
          }

          continue;
        } // if we are scrolling up, pick the smallest offsetTop


        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    } // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only


    _getRootMargin() {
      return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin;
    }

    _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);

      for (const anchor of targetLinks) {
        // ensure that the anchor has an id and is not disabled
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }

        const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible

        if (isVisible(observableSection)) {
          this._targetLinks.set(anchor.hash, anchor);

          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }

<<<<<<< HEAD
    _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);
=======
      const title = this._config.originalTitle;
>>>>>>> own

      if (!title) {
        return;
      }

      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.removeAttribute('title');
    }

    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }

      this._isHovered = true;

      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }

    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }

      this._isHovered = false;

      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }

    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }

<<<<<<< HEAD
      return false;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
>>>>>>> own
    }

    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own

      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
<<<<<<< HEAD
        }
      }
=======
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }

      this._clearActiveClass(this._config.target);

      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);

      this._activateParents(target);

      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
=======
    _getConfig(config) {
      config = { ...Default$1,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };

      if (typeof config.target !== 'string' && isElement(config.target)) {
        let {
          id
        } = config.target;

        if (!id) {
          id = getUID(NAME$2);
          config.target.id = id;
        }

        config.target = `#${id}`;
      }

      typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    }

    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }

    _process() {
      const scrollTop = this._getScrollTop() + this._config.offset;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const scrollHeight = this._getScrollHeight();

      const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

<<<<<<< HEAD
    _configAfterMerge(config) {
=======
      Object.keys(dataAttributes).forEach(dataAttr => {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
=======
>>>>>>> own
        }
      }

      config = { ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
>>>>>>> own
      config.container = config.container === false ? document.body : getElement(config.container);
=======
      if (scrollTop >= maxScroll) {
        const target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        return;
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      config.originalTitle = this._element.getAttribute('title') || '';

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      config.originalTitle = this._element.getAttribute('title') || '';

>>>>>>> own
      if (typeof config.title === 'number') {
        config.title = config.title.toString();
=======
      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }

      for (let i = this._offsets.length; i--;) {
        const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
=======
    _activate(target) {
      this._activeTarget = target;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._clear();

<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
      return config;
    }
=======
      const queries = this._selector.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      const link = SelectorEngine.findOne(queries.join(','));

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      } // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`
=======
      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
        link.classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        // Set triggered link as active
        link.classList.add(CLASS_NAME_ACTIVE$1);
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
          });
        });
      }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      } // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`
>>>>>>> own


<<<<<<< HEAD
<<<<<<< HEAD
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
=======

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
        relatedTarget: target
      });
    }

<<<<<<< HEAD
    _activateParents(target) {
      // Activate dropdown parents
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      }

      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
=======
      return config;
>>>>>>> own
    }

<<<<<<< HEAD
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
<<<<<<< HEAD

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
=======
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);

      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
=======
    _clear() {
      SelectorEngine.find(this._selector).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        if (typeof config !== 'string') {
          return;
        }

<<<<<<< HEAD
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
=======
        if (typeof data[config] === 'undefined') {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
<<<<<<< HEAD
=======
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
=======
        if (typeof config !== 'string') {
          return;
        }
>>>>>>> own

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

        data[config]();
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
   * Data API implementation
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  /**
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * jQuery
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
<<<<<<< HEAD
   * add .Tooltip to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * jQuery
>>>>>>> own
=======
=======
   * jQuery
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */


  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): popover.js
=======
   * Bootstrap (v5.0.2): popover.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): popover.js
>>>>>>> own
=======
   * Bootstrap (v5.2.0): popover.js
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
   */

  const NAME$3 = 'popover';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  const Default$2 = { ...Tooltip.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  };
  const DefaultType$2 = { ...Tooltip.DefaultType,
    content: '(null|string|element|function)'
  };
  /**
   * Class definition
=======
   * ------------------------------------------------------------------------
=======
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Constants
   */

  const NAME$3 = 'popover';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  const Default$2 = { ...Tooltip.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  };
  const DefaultType$2 = { ...Tooltip.DefaultType,
    content: '(null|string|element|function)'
  };
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> own
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    static get DefaultType() {
      return DefaultType$2;
    }

    static get NAME() {
      return NAME$3;
    } // Overrides


    _isWithContent() {
      return this._getTitle() || this._getContent();
    } // Private


    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }

    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
=======
    static get NAME() {
      return NAME$3;
    }

    static get Event() {
      return Event$1;
    }

    static get DefaultType() {
      return DefaultType$2;
    } // Overrides


    isWithContent() {
      return this.getTitle() || this._getContent();
    }

    getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      this.tip = super.getTipElement();

      if (!this.getTitle()) {
        SelectorEngine.findOne(SELECTOR_TITLE, this.tip).remove();
      }

      if (!this._getContent()) {
        SelectorEngine.findOne(SELECTOR_CONTENT, this.tip).remove();
      }
=======
   * Class definition
   */
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }

<<<<<<< HEAD
    setContent() {
      const tip = this.getTipElement(); // we use append for html objects to maintain js events

      this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());
=======
    static get DefaultType() {
      return DefaultType$2;
    }
>>>>>>> own
=======
    static get DefaultType() {
      return DefaultType$2;
    }
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

    static get NAME() {
      return NAME$3;
    } // Overrides


    _isWithContent() {
      return this._getTitle() || this._getContent();
    } // Private


    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }

    _getContent() {
<<<<<<< HEAD
<<<<<<< HEAD
      return this._element.getAttribute('data-bs-content') || this._config.content;
    }

    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      return this._resolvePossibleFunction(this._config.content);
>>>>>>> own
=======
      return this._resolvePossibleFunction(this._config.content);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
<<<<<<< HEAD
=======
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
=======
        if (typeof config !== 'string') {
          return;
        }
>>>>>>> own

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

        data[config]();
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * jQuery
=======
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * jQuery
>>>>>>> own
=======
   * jQuery
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */


  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): scrollspy.js
=======
   * Bootstrap (v5.0.2): scrollspy.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): scrollspy.js
>>>>>>> own
=======
   * Bootstrap (v5.2.0): scrollspy.js
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
=======
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Constants
>>>>>>> own
=======
   * Constants
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  const DATA_API_KEY = '.data-api';
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_CLICK = `click${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = '[href]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null
  };
  const DefaultType$1 = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element'
  };
  /**
   * Class definition
<<<<<<< HEAD
=======
  const DATA_API_KEY$1 = '.data-api';
  const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
=======
  const DATA_API_KEY = '.data-api';
>>>>>>> own
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_CLICK = `click${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = '[href]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null
  };
  const DefaultType$1 = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element'
  };
  /**
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Class definition
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper

      this._targetLinks = new Map();
      this._observableSections = new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh(); // initialize
<<<<<<< HEAD
=======
      super(element);
      this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
      this._config = this._getConfig(config);
      this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
      this.refresh();

      this._process();
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper

      this._targetLinks = new Map();
      this._observableSections = new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh(); // initialize
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    } // Getters


    static get Default() {
      return Default$1;
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    static get DefaultType() {
      return DefaultType$1;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    static get NAME() {
      return NAME$2;
    } // Public


    refresh() {
      this._initializeTargetsAndObservables();

      this._maybeEnableSmoothScroll();

      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }

      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
=======
    static get NAME() {
      return NAME$2;
    } // Public
>>>>>>> own

    dispose() {
      this._observer.disconnect();

<<<<<<< HEAD
<<<<<<< HEAD
=======
      const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      const targets = SelectorEngine.find(this._selector);
      targets.map(element => {
        const targetSelector = getSelectorFromElement(element);
        const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          const targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }
=======
    refresh() {
      this._initializeTargetsAndObservables();
>>>>>>> own

      this._maybeEnableSmoothScroll();

      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }

      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }

    dispose() {
<<<<<<< HEAD
      EventHandler.off(this._scrollElement, EVENT_KEY$2);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._observer.disconnect();

>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      super.dispose();
    } // Private


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    _configAfterMerge(config) {
      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
      config.target = getElement(config.target) || document.body;
      return config;
    }
<<<<<<< HEAD

    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      } // unregister any previous listeners


      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
        const observableSection = this._observableSections.get(event.target.hash);

        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;

          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: 'smooth'
            });
            return;
          } // Chrome 60 doesn't support `scrollTo`


          root.scrollTop = height;
        }
      });
    }

    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: [0.1, 0.5, 1],
        rootMargin: this._getRootMargin()
      };
      return new IntersectionObserver(entries => this._observerCallback(entries), options);
    } // The logic of selection


    _observerCallback(entries) {
      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);

      const activate = entry => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;

        this._process(targetElement(entry));
      };

      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;

      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;

          this._clearActiveClass(targetElement(entry));

          continue;
        }

        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop

        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration

          if (!parentScrollTop) {
            return;
          }

          continue;
        } // if we are scrolling up, pick the smallest offsetTop


        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    } // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only


    _getRootMargin() {
      return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin;
    }

    _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);

      for (const anchor of targetLinks) {
        // ensure that the anchor has an id and is not disabled
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }

        const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible

        if (isVisible(observableSection)) {
          this._targetLinks.set(anchor.hash, anchor);

          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }

    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
<<<<<<< HEAD

      this._clearActiveClass(this._config.target);

      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);

      this._activateParents(target);

      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
=======
    _getConfig(config) {
      config = { ...Default$1,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };
=======
>>>>>>> own

    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      } // unregister any previous listeners


      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
        const observableSection = this._observableSections.get(event.target.hash);

        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;

          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: 'smooth'
            });
            return;
          } // Chrome 60 doesn't support `scrollTo`


          root.scrollTop = height;
        }
      });
    }

    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: [0.1, 0.5, 1],
        rootMargin: this._getRootMargin()
      };
      return new IntersectionObserver(entries => this._observerCallback(entries), options);
    } // The logic of selection


    _observerCallback(entries) {
      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);

      const activate = entry => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;

        this._process(targetElement(entry));
      };

      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;

      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;

          this._clearActiveClass(targetElement(entry));

          continue;
        }

        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop

        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration

          if (!parentScrollTop) {
            return;
          }

          continue;
        } // if we are scrolling up, pick the smallest offsetTop


        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    } // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only


    _getRootMargin() {
      return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin;
    }

    _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);

      for (const anchor of targetLinks) {
        // ensure that the anchor has an id and is not disabled
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }

        const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible

        if (isVisible(observableSection)) {
          this._targetLinks.set(anchor.hash, anchor);

          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }

    _process(target) {
      if (this._activeTarget === target) {
        return;
      }

<<<<<<< HEAD
      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._clearActiveClass(this._config.target);

      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);

      this._activateParents(target);

      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
>>>>>>> own
=======

      this._clearActiveClass(this._config.target);

      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);

      this._activateParents(target);

      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        relatedTarget: target
      });
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    _activateParents(target) {
      // Activate dropdown parents
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }

      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }

    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);

      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    _clear() {
      SelectorEngine.find(this._selector).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> own
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
=======
        if (typeof data[config] === 'undefined') {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
>>>>>>> own
=======
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Data API implementation
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  /**
   * jQuery
<<<<<<< HEAD
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
=======
   * Data API implementation
>>>>>>> own
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  /**
   * jQuery
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): tab.js
=======
   * Bootstrap (v5.0.2): tab.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): tab.js
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
=======
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Constants
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'bs.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const DATA_API_KEY = '.data-api';
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
<<<<<<< HEAD
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const CLASS_DROPDOWN = 'dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  const SELECTOR_DROPDOWN_ITEM = '.dropdown-item';
  const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  const SELECTOR_OUTER = '.nav-item, .list-group-item';
  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`

  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  /**
   * Class definition
   */

  class Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);

      if (!this._parent) {
        return; // todo: should Throw exception on v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      } // Set up initial aria attributes


      this._setInitialAttributes(this._parent, this._getChildren());

      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    } // Getters


=======
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const CLASS_DROPDOWN = 'dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  const SELECTOR_DROPDOWN_ITEM = '.dropdown-item';
  const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  const SELECTOR_OUTER = '.nav-item, .list-group-item';
  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`

  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  /**
   * Class definition
   */

  class Tab extends BaseComponent {
<<<<<<< HEAD
    // Getters
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);

      if (!this._parent) {
        return; // todo: should Throw exception on v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      } // Set up initial aria attributes


      this._setInitialAttributes(this._parent, this._getChildren());

      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    } // Getters


<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    static get NAME() {
      return NAME$1;
    } // Public


    show() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      // Shows this elem and deactivate the active sibling if exists
      const innerElem = this._element;

      if (this._elemIsActive(innerElem)) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return;
      } // Search for active tab on same parent to deactivate it


      const active = this._getActiveElem();

      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });

      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }

      this._deactivate(active, innerElem);

      this._activate(innerElem, active);
    } // Private


    _activate(element, relatedElem) {
      if (!element) {
        return;
=======
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
<<<<<<< HEAD
        return;
      }
=======
      // Shows this elem and deactivate the active sibling if exists
      const innerElem = this._element;
>>>>>>> own
=======
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
        return;
      } // Search for active tab on same parent to deactivate it


      const active = this._getActiveElem();

      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });

      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }

      this._deactivate(active, innerElem);

      this._activate(innerElem, active);
    } // Private


<<<<<<< HEAD
    _activate(element, container, callback) {
      const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
      const active = activeElements[0];
      const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

      const complete = () => this._transitionComplete(element, active, callback);

      if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);

        this._queueCallback(complete, element, true);
      } else {
        complete();
      }
    }

    _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    _activate(element, relatedElem) {
      if (!element) {
        return;
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
      }

      element.classList.add(CLASS_NAME_ACTIVE);

<<<<<<< HEAD
<<<<<<< HEAD
      this._activate(getElementFromSelector(element)); // Search and activate/show the proper section


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }

        element.focus();
        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);

        this._toggleDropDown(element, true);

        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }

    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }

      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();

      this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }

        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');

        this._toggleDropDown(element, false);

        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }

    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
        return;
      }

      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page

      event.preventDefault();
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true);
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      if (nextActiveElement) {
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }

    _getChildren() {
      // collection of inner elements
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }

    _getActiveElem() {
      return this._getChildren().find(child => this._elemIsActive(child)) || null;
    }

    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');

      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }

    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);

      const isActive = this._elemIsActive(child);

      const outerElem = this._getOuterElement(child);

<<<<<<< HEAD
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      this._activate(getElementFromSelector(element)); // Search and activate/show the proper section


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }

        element.focus();
        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);

        this._toggleDropDown(element, true);

        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }

    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }

      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();

      this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }

        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');

        this._toggleDropDown(element, false);

        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }

    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
        return;
      }

      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page

      event.preventDefault();
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true);

      if (nextActiveElement) {
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }

    _getChildren() {
      // collection of inner elements
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }

    _getActiveElem() {
      return this._getChildren().find(child => this._elemIsActive(child)) || null;
    }

    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');

      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }

    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);

      const isActive = this._elemIsActive(child);

<<<<<<< HEAD
        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      const outerElem = this._getOuterElement(child);

      child.setAttribute('aria-selected', isActive);

      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
>>>>>>> own
      }

      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }

<<<<<<< HEAD
<<<<<<< HEAD
=======
      child.setAttribute('aria-selected', isActive);

      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
      }

      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }

      this._setAttributeIfNotExists(child, 'role', 'tab'); // set attributes to the related panel too


      this._setInitialAttributesOnTargetPanel(child);
    }

    _setInitialAttributesOnTargetPanel(child) {
      const target = getElementFromSelector(child);

      if (!target) {
        return;
      }

      this._setAttributeIfNotExists(target, 'role', 'tabpanel');

      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`);
      }
    }

    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);

      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }

      const toggle = (selector, className) => {
        const element = SelectorEngine.findOne(selector, outerElem);

        if (element) {
          element.classList.toggle(className, open);
        }
      };

      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      toggle(SELECTOR_DROPDOWN_ITEM, CLASS_NAME_ACTIVE);
      outerElem.setAttribute('aria-expanded', open);
    }

    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }

    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    } // Try to get the inner element (usually the .nav-link)


    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    } // Try to get the outer element (usually the .nav-item)


    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
=======
      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }
=======
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      this._activate(getElementFromSelector(element)); // Search and activate/show the proper section
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }

        element.focus();
        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);

        this._toggleDropDown(element, true);

        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }

    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }

      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();

      this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }

        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');

        this._toggleDropDown(element, false);

        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }

    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
        return;
      }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page

      event.preventDefault();
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true);

      if (nextActiveElement) {
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }

    _getChildren() {
      // collection of inner elements
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }

    _getActiveElem() {
      return this._getChildren().find(child => this._elemIsActive(child)) || null;
    }

    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');

      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }

    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);

      const isActive = this._elemIsActive(child);

      const outerElem = this._getOuterElement(child);

      child.setAttribute('aria-selected', isActive);

      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
      }

      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }

=======
>>>>>>> own
      this._setAttributeIfNotExists(child, 'role', 'tab'); // set attributes to the related panel too


      this._setInitialAttributesOnTargetPanel(child);
    }

    _setInitialAttributesOnTargetPanel(child) {
      const target = getElementFromSelector(child);

      if (!target) {
        return;
<<<<<<< HEAD
      }

      this._setAttributeIfNotExists(target, 'role', 'tabpanel');

      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`);
      }
    }

    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);

      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }

      const toggle = (selector, className) => {
        const element = SelectorEngine.findOne(selector, outerElem);

        if (element) {
          element.classList.toggle(className, open);
        }
      };

      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      toggle(SELECTOR_DROPDOWN_ITEM, CLASS_NAME_ACTIVE);
      outerElem.setAttribute('aria-expanded', open);
    }

    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }

    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    } // Try to get the inner element (usually the .nav-link)


    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    } // Try to get the outer element (usually the .nav-item)


    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
<<<<<<< HEAD
=======
      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
=======
>>>>>>> own
      }

      this._setAttributeIfNotExists(target, 'role', 'tabpanel');

      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`);
      }
    }

    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);

      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }

      const toggle = (selector, className) => {
        const element = SelectorEngine.findOne(selector, outerElem);

        if (element) {
          element.classList.toggle(className, open);
        }
      };

      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      toggle(SELECTOR_DROPDOWN_ITEM, CLASS_NAME_ACTIVE);
      outerElem.setAttribute('aria-expanded', open);
    }

    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    }

    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    } // Try to get the inner element (usually the .nav-link)


    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    } // Try to get the outer element (usually the .nav-item)


    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);

<<<<<<< HEAD
<<<<<<< HEAD
        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
=======
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
=======
        if (typeof config !== 'string') {
          return;
        }
>>>>>>> own

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD

        data[config]();
>>>>>>> own
=======
        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
=======
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    Tab.getOrCreateInstance(this).show();
  });
  /**
   * Initialize on focus
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
<<<<<<< HEAD
  });
  /**
   * jQuery
=======
    const data = Tab.getOrCreateInstance(this);
    data.show();
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  });
  /**
   * jQuery
<<<<<<< HEAD
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): toast.js
=======
   * Bootstrap (v5.0.2): toast.js
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): toast.js
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Constants
=======
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Constants
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
<<<<<<< HEAD
<<<<<<< HEAD
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

=======
  const CLASS_NAME_HIDE = 'hide';
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
<<<<<<< HEAD
<<<<<<< HEAD
  /**
   * Class definition
=======
  const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  /**
   * Class definition
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
<<<<<<< HEAD
<<<<<<< HEAD
      super(element, config);
=======
      super(element);
      this._config = this._getConfig(config);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      super(element, config);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;

      this._setListeners();
    } // Getters


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    static get Default() {
      return Default;
    }

<<<<<<< HEAD
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    static get DefaultType() {
      return DefaultType;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> own
    static get Default() {
      return Default;
    }

<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
    static get DefaultType() {
      return DefaultType;
    }

>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    static get NAME() {
      return NAME;
    } // Public


    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);

<<<<<<< HEAD
<<<<<<< HEAD
=======
        this._element.classList.add(CLASS_NAME_SHOW);

>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
      };

<<<<<<< HEAD
<<<<<<< HEAD
      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
=======
      this._element.classList.remove(CLASS_NAME_HIDE);

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._queueCallback(complete, this._element, this._config.animation);
    }

    hide() {
<<<<<<< HEAD
<<<<<<< HEAD
      if (!this.isShown()) {
=======
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (!this.isShown()) {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const complete = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
<<<<<<< HEAD
=======
        this._element.classList.add(CLASS_NAME_HIDE);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };

<<<<<<< HEAD
<<<<<<< HEAD
      this._element.classList.add(CLASS_NAME_SHOWING);
=======
      this._element.classList.remove(CLASS_NAME_SHOW);
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      this._element.classList.add(CLASS_NAME_SHOWING);
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

      this._queueCallback(complete, this._element, this._config.animation);
    }

    dispose() {
      this._clearTimeout();

<<<<<<< HEAD
<<<<<<< HEAD
      if (this.isShown()) {
=======
      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
      if (this.isShown()) {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      super.dispose();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    }

    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
<<<<<<< HEAD
    } // Private


=======
    } // Private
=======
    }
>>>>>>> own

    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    } // Private


>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
    } // Private


>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }

    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = isInteracting;
          break;

        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = isInteracting;
          break;
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      const nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }

    _setListeners() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, () => this.hide());
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }

    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config](this);
        }
      });
    }

  }
  /**
<<<<<<< HEAD
<<<<<<< HEAD
   * Data API implementation
   */


  enableDismissTrigger(Toast);
  /**
   * jQuery
   */

=======
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */


>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Data API implementation
   */


  enableDismissTrigger(Toast);
  /**
   * jQuery
   */

<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
  defineJQueryPlugin(Toast);

  /**
   * --------------------------------------------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
   * Bootstrap (v5.2.0): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const index_umd = {
=======
   * Bootstrap (v5.0.2): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var index_umd = {
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
   * Bootstrap (v5.2.0): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const index_umd = {
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
  };

  return index_umd;

<<<<<<< HEAD
<<<<<<< HEAD
}));
=======
})));
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
}));
<<<<<<< HEAD
>>>>>>> own
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
//# sourceMappingURL=bootstrap.js.map
