"use strict";
(() => {
var exports = {};
exports.id = 94;
exports.ids = [94,195];
exports.modules = {

/***/ 9040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2866);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6447);
/* harmony import */ var _lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MDXComponents__WEBPACK_IMPORTED_MODULE_2__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_4__]);
([_components_MDXComponents__WEBPACK_IMPORTED_MODULE_2__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const DEFAULT_LAYOUT = "PostLayout";
async function getStaticPaths() {
    return {
        paths: contentlayer_generated__WEBPACK_IMPORTED_MODULE_4__/* .allBlogs.map */ .R6.map((p)=>({
                params: {
                    slug: p.slug.split("/")
                }
            })
        ),
        fallback: false
    };
}
const getStaticProps = async ({ params  })=>{
    const slug = params.slug.join("/");
    const sortedPosts = (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_3__/* .sortedBlogPost */ .Rm)(contentlayer_generated__WEBPACK_IMPORTED_MODULE_4__/* .allBlogs */ .R6);
    const postIndex = sortedPosts.findIndex((p)=>p.slug === slug
    );
    // TODO: Refactor this extraction of coreContent
    const prevContent = sortedPosts[postIndex + 1] || null;
    const prev = prevContent ? (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_3__/* .coreContent */ .gT)(prevContent) : null;
    const nextContent = sortedPosts[postIndex - 1] || null;
    const next = nextContent ? (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_3__/* .coreContent */ .gT)(nextContent) : null;
    const post = sortedPosts.find((p)=>p.slug === slug
    );
    const authorList = post.authors || [
        "default"
    ];
    const authorDetails = authorList.map((author)=>{
        const authorResults = contentlayer_generated__WEBPACK_IMPORTED_MODULE_4__/* .allAuthors.find */ .wz.find((p)=>p.slug === author
        );
        return (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_3__/* .coreContent */ .gT)(authorResults);
    });
    return {
        props: {
            post,
            authorDetails,
            prev,
            next
        }
    };
};
function Blog({ post , authorDetails , prev , next  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "draft" in post && post.draft !== true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDXComponents__WEBPACK_IMPORTED_MODULE_2__/* .MDXLayoutRenderer */ .J, {
            layout: post.layout || DEFAULT_LAYOUT,
            toc: post.toc,
            content: post,
            authorDetails: authorDetails,
            prev: prev,
            next: next
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-24 text-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: [
                    "Under Construction",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        role: "img",
                        "aria-label": "roadwork sign",
                        children: "\uD83D\uDEA7"
                    })
                ]
            })
        })
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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ }),

/***/ 8037:
/***/ ((module) => {

module.exports = import("next-contentlayer/hooks");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,675,152,576,966,829,793,717,273,769,447], () => (__webpack_exec__(9040)));
module.exports = __webpack_exports__;

})();