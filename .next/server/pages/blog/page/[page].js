"use strict";
(() => {
var exports = {};
exports.id = 51;
exports.ids = [51,195];
exports.modules = {

/***/ 5162:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9829);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5717);
/* harmony import */ var _lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(203);
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6531);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blog__WEBPACK_IMPORTED_MODULE_5__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_6__]);
([_blog__WEBPACK_IMPORTED_MODULE_5__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const getStaticPaths = async ()=>{
    const totalPosts = contentlayer_generated__WEBPACK_IMPORTED_MODULE_6__/* .allBlogs */ .R6;
    const totalPages = Math.ceil(totalPosts.length / _blog__WEBPACK_IMPORTED_MODULE_5__.POSTS_PER_PAGE);
    const paths = Array.from({
        length: totalPages
    }, (_, i)=>({
            params: {
                page: (i + 1).toString()
            }
        })
    );
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const { params: { page  } ,  } = context;
    const posts = (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_4__/* .sortedBlogPost */ .Rm)(contentlayer_generated__WEBPACK_IMPORTED_MODULE_6__/* .allBlogs */ .R6);
    const pageNumber = parseInt(page);
    const initialDisplayPosts = posts.slice(_blog__WEBPACK_IMPORTED_MODULE_5__.POSTS_PER_PAGE * (pageNumber - 1), _blog__WEBPACK_IMPORTED_MODULE_5__.POSTS_PER_PAGE * pageNumber);
    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(posts.length / _blog__WEBPACK_IMPORTED_MODULE_5__.POSTS_PER_PAGE)
    };
    return {
        props: {
            initialDisplayPosts: (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_4__/* .allCoreContent */ .ND)(initialDisplayPosts),
            posts: (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_4__/* .allCoreContent */ .ND)(posts),
            pagination
        }
    };
};
function PostPage({ posts , initialDisplayPosts , pagination  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_1__/* .PageSEO */ .TQ, {
                title: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().title),
                description: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
                posts: posts,
                initialDisplayPosts: initialDisplayPosts,
                pagination: pagination,
                title: "All Posts"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8904:
/***/ ((module) => {

module.exports = require("github-slugger");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7008:
/***/ ((module) => {

module.exports = import("contentlayer/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,576,966,829,793,717,531], () => (__webpack_exec__(5162)));
module.exports = __webpack_exports__;

})();