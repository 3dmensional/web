webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.jsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/icon */ "./components/icon.jsx");
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/scss/index.scss */ "./assets/scss/index.scss");
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_scss_components_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/scss/components/modal.scss */ "./assets/scss/components/modal.scss");
/* harmony import */ var _assets_scss_components_modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_components_modal_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_scss_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/scss/bootstrap/scss/bootstrap.scss */ "./assets/scss/bootstrap/scss/bootstrap.scss");
/* harmony import */ var _assets_scss_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sections_content_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections-content.json */ "./sections-content.json");
var _sections_content_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../sections-content.json */ "./sections-content.json", 1);
var _jsxFileName = "/home/josedan/Documents/3Dmensional/web/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      section = _useState[0],
      setSection = _useState[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "3Dmensional - Marketing agency and IT solutions"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), console.log(_sections_content_json__WEBPACK_IMPORTED_MODULE_8__), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dialogClassName: "section-modal",
    show: section !== null,
    onHide: function onHide(e) {
      return setSection(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "iconContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, _sections_content_json__WEBPACK_IMPORTED_MODULE_8__[section].tags.map(function (tag) {
    return __jsx("h2", {
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, tag);
  }), __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: section && section.charAt(0).toUpperCase() + section.slice(1),
    size: "20vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("div", {
    className: "content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, section), __jsx("div", {
    className: "content-container",
    dangerouslySetInnerHTML: {
      __html: section && _sections_content_json__WEBPACK_IMPORTED_MODULE_8__[section].content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })))), __jsx("button", {
    onClick: function onClick(e) {
      return setSection("development");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Development"), __jsx("button", {
    onClick: function onClick(e) {
      return setSection("design");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Design"), __jsx("button", {
    onClick: function onClick(e) {
      return setSection("marketing");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Marketing"), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0d5c52af2ec1e9d543a1.hot-update.js.map