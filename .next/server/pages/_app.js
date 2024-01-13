"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SectionContainer({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",
        children: children
    });
};


/***/ }),

/***/ 4271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./components/analytics/GoogleAnalytics.tsx



const GAScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${(siteMetadata_default()).analytics.googleAnalyticsId}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "ga-script",
                children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${(siteMetadata_default()).analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `
            })
        ]
    });
};
/* harmony default export */ const GoogleAnalytics = (GAScript);
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const logEvent = (action, category, label, value)=>{
    window.gtag?.("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./components/analytics/Plausible.tsx



const PlausibleScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                "data-domain": (siteMetadata_default()).analytics.plausibleDataDomain,
                src: "https://plausible.io/js/plausible.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "plausible-script",
                children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `
            })
        ]
    });
};
/* harmony default export */ const Plausible = (PlausibleScript);
// https://plausible.io/docs/custom-event-goals
const Plausible_logEvent = (eventName, ...rest)=>{
    return window.plausible?.(eventName, ...rest);
};

;// CONCATENATED MODULE: ./components/analytics/SimpleAnalytics.tsx


const SimpleAnalyticsScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "sa-script",
                children: `
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "https://scripts.simpleanalyticscdn.com/latest.js"
            })
        ]
    });
};
// https://docs.simpleanalytics.com/events
const SimpleAnalytics_logEvent = (eventName, callback)=>{
    if (callback) {
        return window.sa_event?.(eventName, callback);
    } else {
        return window.sa_event?.(eventName);
    }
};
/* harmony default export */ const SimpleAnalytics = (SimpleAnalyticsScript);

;// CONCATENATED MODULE: ./components/analytics/Umami.tsx



const UmamiScript = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
            async: true,
            defer: true,
            "data-website-id": (siteMetadata_default()).analytics.umamiWebsiteId,
            src: "https://umami.example.com/umami.js" // Replace with your umami instance
        })
    });
};
/* harmony default export */ const Umami = (UmamiScript);

;// CONCATENATED MODULE: ./components/analytics/index.tsx

/* eslint-disable @typescript-eslint/no-explicit-any */ 




const isProduction = "production" === "production";
const Analytics = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isProduction && (siteMetadata_default()).analytics.plausibleDataDomain && /*#__PURE__*/ jsx_runtime_.jsx(Plausible, {}),
            isProduction && (siteMetadata_default()).analytics.simpleAnalytics && /*#__PURE__*/ jsx_runtime_.jsx(SimpleAnalytics, {}),
            isProduction && (siteMetadata_default()).analytics.umamiWebsiteId && /*#__PURE__*/ jsx_runtime_.jsx(Umami, {}),
            isProduction && (siteMetadata_default()).analytics.googleAnalyticsId && /*#__PURE__*/ jsx_runtime_.jsx(GoogleAnalytics, {})
        ]
    });
};
/* harmony default export */ const analytics = (Analytics);

;// CONCATENATED MODULE: ./data/headerNavLinks.ts
const headerNavLinks = [
    {
        href: "/blog",
        title: "Blogs"
    },
    {
        href: "/projects",
        title: "Projects"
    },
    {
        href: "/about",
        title: "Contact Me"
    },
    {
        href: "/resume",
        title: "Resume"
    },
    {
        href: "/references",
        title: "Testimonial"
    }, 
];
/* harmony default export */ const data_headerNavLinks = (headerNavLinks);

// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(7966);
// EXTERNAL MODULE: ./components/SectionContainer.tsx
var SectionContainer = __webpack_require__(1536);
// EXTERNAL MODULE: ./components/social-icons/index.tsx + 6 modules
var social_icons = __webpack_require__(4273);
;// CONCATENATED MODULE: ./components/Footer.tsx




function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mt-16 flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-3 flex space-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "mail",
                            href: `mailto:${(siteMetadata_default()).email}`,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "github",
                            href: (siteMetadata_default()).github,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "facebook",
                            href: (siteMetadata_default()).facebook,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "youtube",
                            href: (siteMetadata_default()).youtube,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "linkedin",
                            href: (siteMetadata_default()).linkedin,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "twitter",
                            href: (siteMetadata_default()).twitter,
                            size: 6
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: (siteMetadata_default()).author
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: `© ${new Date().getFullYear()}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            href: "/",
                            children: "Home"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-2"
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/MobileNav.tsx




const MobileNav = ()=>{
    const { 0: navShow , 1: setNavShow  } = (0,external_react_.useState)(false);
    const onToggleNav = ()=>{
        setNavShow((status)=>{
            if (status) {
                document.body.style.overflow = "auto";
            } else {
                // Prevent scrolling
                document.body.style.overflow = "hidden";
            }
            return !status;
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sm:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "ml-1 mr-1 h-8 w-8 rounded py-1",
                "aria-label": "Toggle Menu",
                onClick: onToggleNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: "text-gray-900 dark:text-gray-100",
                    children: navShow ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${navShow ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        "aria-label": "toggle modal",
                        className: "fixed h-full w-full cursor-auto focus:outline-none",
                        onClick: onToggleNav
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "fixed mt-8 h-full",
                        children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-12 py-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                    href: link.href,
                                    className: "text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",
                                    onClick: onToggleNav,
                                    children: link.title
                                })
                            }, link.title)
                        )
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_MobileNav = (MobileNav);

;// CONCATENATED MODULE: ./components/ThemeSwitch.tsx



const ThemeSwitch = ()=>{
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    // When mounted on client, now we can show the UI
    (0,external_react_.useEffect)(()=>setMounted(true)
    , []);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Toggle Dark Mode",
        type: "button",
        className: "ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",
        onClick: ()=>setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")
        ,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "text-gray-900 dark:text-gray-100",
            children: mounted && (theme === "dark" || resolvedTheme === "dark") ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            })
        })
    });
};
/* harmony default export */ const components_ThemeSwitch = (ThemeSwitch);

;// CONCATENATED MODULE: ./components/LayoutWrapper.tsx








const LayoutWrapper = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-screen flex-col justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "flex items-center justify-between py-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                href: "/",
                                "aria-label": (siteMetadata_default()).headerTitle,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mr-3 animate-spin animate-once ",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://kalab-tenadeg.vercel.app/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    width: 200,
                                                    height: 300,
                                                    src: "https://svgshare.com/i/vV5.svg",
                                                    title: "Kalab Tenadeg"
                                                })
                                            })
                                        }),
                                        typeof (siteMetadata_default()).headerTitle === "string" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden h-6 text-2xl font-semibold sm:block",
                                            children: (siteMetadata_default()).headerTitle
                                        }) : (siteMetadata_default()).headerTitle
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center text-base leading-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden sm:block ",
                                    children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: link.href,
                                            className: "p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 animate-fade-up animate-once animate-duration-1000",
                                            children: link.title
                                        }, link.title)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitch, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_MobileNav, {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "mb-auto",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
};
/* harmony default export */ const components_LayoutWrapper = (LayoutWrapper);

;// CONCATENATED MODULE: ./pages/_app.tsx










function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_namespaceObject.ThemeProvider, {
        attribute: "class",
        defaultTheme: (siteMetadata_default()).theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    content: "width=device-width, initial-scale=1",
                    name: "viewport"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(analytics, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_LayoutWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};


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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,576,966,273], () => (__webpack_exec__(4271)));
module.exports = __webpack_exports__;

})();