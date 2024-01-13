"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,195];
exports.modules = {

/***/ 9870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__);

const formatDate = (date)=>{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const now = new Date(date).toLocaleDateString((_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().locale), options);
    return now;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7966);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9829);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2065);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9870);
/* harmony import */ var _lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(203);
/* harmony import */ var _components_NewsletterForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5769);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_8__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const MAX_DISPLAY = 5;
const getStaticProps = async ()=>{
    // TODO: move computation to get only the essential frontmatter to contentlayer.config
    const sortedPosts = (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_6__/* .sortedBlogPost */ .Rm)(contentlayer_generated__WEBPACK_IMPORTED_MODULE_8__/* .allBlogs */ .R6);
    const posts = (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_6__/* .allCoreContent */ .ND)(sortedPosts);
    return {
        props: {
            posts
        }
    };
};
function Home({ posts  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* .PageSEO */ .TQ, {
                title: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().title),
                description: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().header)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "divide-y divide-gray-200 dark:divide-gray-700",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-2 pt-6 pb-8 md:space-y-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
                                children: "Latest"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg leading-7 text-gray-500 dark:text-gray-400",
                                children: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().header)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "divide-y divide-gray-200 dark:divide-gray-700",
                        children: [
                            !posts.length && "No posts found.",
                            posts.slice(0, MAX_DISPLAY).map((post)=>{
                                const { slug , date , title , summary , tags  } = post;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                            className: "sr-only",
                                                            children: "Published on"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                            className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                                dateTime: date,
                                                                children: (0,_lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(date)
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-5 xl:col-span-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                            className: "text-2xl font-bold leading-8 tracking-tight",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                                href: `/blog/${slug}`,
                                                                                className: "text-gray-900 dark:text-gray-100",
                                                                                children: title
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "flex flex-wrap",
                                                                            children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                                    text: tag
                                                                                }, tag)
                                                                            )
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "prose max-w-none text-gray-500 dark:text-gray-400",
                                                                    children: summary
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-base font-medium leading-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                href: `/blog/${slug}`,
                                                                className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                "aria-label": `Read "${title}"`,
                                                                children: "Read more \u2192"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, slug);
                            })
                        ]
                    })
                ]
            }),
            posts.length > MAX_DISPLAY && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end text-base font-medium leading-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    href: "/blog",
                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                    "aria-label": "all posts",
                    children: "All Posts \u2192"
                })
            }),
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().newsletter.provider) !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center pt-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NewsletterForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,576,966,829,793,769], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();