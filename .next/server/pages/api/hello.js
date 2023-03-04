"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 8083:
/***/ ((module) => {

module.exports = require("@apollo/server");

/***/ }),

/***/ 4349:
/***/ ((module) => {

module.exports = import("@apollo/server");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 2735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4349);
/* harmony import */ var _as_integrations_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1456);
/* harmony import */ var _as_integrations_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_as_integrations_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apollo_server__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_2__]);
([_apollo_server__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const typeDefs = `#graphql
type Query{
    categories(query: String!): results
    search(query: String!): [results]
    random: results
}
type results {
    icon_url: String,
    id: String,
    value: String
}
`;
const resolvers = {
    Query: {
        categories: async (_, query)=>{
            const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`https://api.chucknorris.io/jokes/random?category=${query.query}`);
            return {
                id: res.data.id,
                icon_url: res.data.icon_url,
                value: res.data.value
            };
        },
        search: async (_, query)=>{
            const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`https://api.chucknorris.io/jokes/search?query=${query.query}`).then((res)=>res.data.result.map((item)=>{
                    return {
                        id: item.id,
                        icon_url: item.icon_url,
                        value: item.value
                    };
                }));
            return res;
        },
        random: async ()=>{
            const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`https://api.chucknorris.io/jokes/random`);
            return {
                id: res.data.id,
                icon_url: res.data.icon_url,
                value: res.data.value
            };
        }
    }
};
const server = new _apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
    typeDefs,
    resolvers
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_as_integrations_next__WEBPACK_IMPORTED_MODULE_1__.startServerAndCreateNextHandler)(server));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [456], () => (__webpack_exec__(2735)));
module.exports = __webpack_exports__;

})();