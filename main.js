/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/js/main.js":
      /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval("\n\n//# sourceURL=webpack:///./src/js/main.js?");

        /***/
      },

    /***/ "./src/scss/main.scss":
      /*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          "// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?"
        );

        /***/
      },

    /***/ 0:
      /*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          '__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */"./src/scss/main.scss");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/scss/main.scss?'
        );

        /***/
      },

    /******/
  }
);

// scroll to top button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#684FFF ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// prevent right click & F12 (inspect)

document.addEventListener(
  "contextmenu",
  function (event) {
    event.preventDefault();
    event.stopPropagation();
  },
  true
);

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.shiftKey && event.key === "I") {
    event.preventDefault();
  }
  if (event.ctrlKey && event.shiftKey && event.key === "J") {
    event.preventDefault();
  }
  if (event.ctrlKey && event.key === "U") {
    event.preventDefault();
  }
  if (event.key === "F12") {
    event.preventDefault();
  }
});

// preloader
const preloader = document.querySelector(".loader");

window.addEventListener("load", () => {
  // Fade out the preloader with a transition
  preloader.style.opacity = 0;
  preloader.style.transition = "opacity 0.5s ease-out";

  // Optionally, remove the preloader completely after a delay
  setTimeout(() => {
    preloader.parentNode.removeChild(preloader); // Remove from DOM
  }, 1000); // Delay in milliseconds (optional)
});
