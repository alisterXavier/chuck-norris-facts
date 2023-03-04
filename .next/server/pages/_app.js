(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

//https://api.chucknorris.io/jokes/random?category={category}
//https://api.chucknorris.io/jokes/search?query={query}
//https://api.chucknorris.io/jokes/random
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    uri: "/api/hello",
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});


/***/ }),

/***/ 3:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/apolloClient/apollo.ts
var apollo = __webpack_require__(9183);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx





const categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel"
];
const Navbar = ()=>{
    const [searchToggle, setSearchToggle] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "nav-wrapper relative text-white h-[10vh] bg-[#09011f] flex justify-end",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                className: "relative m-2 w-[100px] h-[80px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    alt: "Chuck norris",
                    className: "absolute w-full h-full left-0",
                    layout: "fill",
                    src: "https://media.tenor.com/tcmADbhSACkAAAAi/chuck-norris.gif"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ml-auto flex",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `py-5 px-6 text-center cursor-pointer flex items-center overflow-hidden ${searchToggle ? "w-[300px]" : "w-[80px]"} transition-all ease-in-out duration-200`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "hover:underline",
                                onClick: ()=>setSearchToggle(!searchToggle),
                                children: "Search"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "search-input w-[200px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: "bg-transparent backdrop-filter focus:outline-none ml-2",
                                    type: "search",
                                    placeholder: "something",
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter") {
                                            if (e.currentTarget.value.length > 0) {
                                                router.push(`search/${e.currentTarget.value}`);
                                            }
                                        }
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "categories py-5 px-6 text-center cursor-pointer flex items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "hover:underline",
                            children: "Categories"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-5 px-6 text-center cursor-pointer flex items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/random",
                            className: "hover:underline",
                            children: "Random"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute categories-list flex flex-wrap left-0 top-[100%] right-0 justify-start bg-black",
                        children: categories.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "py-5 px-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/categories/${item}`,
                                    className: "hover:underline text-sm cursor-pointer",
                                    children: item.charAt(0).toUpperCase() + item.substring(1)
                                })
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.tsx






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(client_.ApolloProvider, {
        client: apollo/* client */.L,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,700;1,400&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-col bg-[#09011f] min-h-[90vh] w-[100vw] p-5 flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [443,61], () => (__webpack_exec__(3)));
module.exports = __webpack_exports__;

})();