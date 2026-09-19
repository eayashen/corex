/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/notifications/route";
exports.ids = ["app/api/admin/notifications/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fnotifications%2Froute&page=%2Fapi%2Fadmin%2Fnotifications%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fnotifications%2Froute.ts&appDir=%2FUsers%2Feayashen%2FPersonal%2FProject%2FTurf%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Feayashen%2FPersonal%2FProject%2FTurf&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fnotifications%2Froute&page=%2Fapi%2Fadmin%2Fnotifications%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fnotifications%2Froute.ts&appDir=%2FUsers%2Feayashen%2FPersonal%2FProject%2FTurf%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Feayashen%2FPersonal%2FProject%2FTurf&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_eayashen_Personal_Project_Turf_app_api_admin_notifications_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/notifications/route.ts */ \"(rsc)/./app/api/admin/notifications/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/notifications/route\",\n        pathname: \"/api/admin/notifications\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/notifications/route\"\n    },\n    resolvedPagePath: \"/Users/eayashen/Personal/Project/Turf/app/api/admin/notifications/route.ts\",\n    nextConfigOutput,\n    userland: _Users_eayashen_Personal_Project_Turf_app_api_admin_notifications_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRm5vdGlmaWNhdGlvbnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkbWluJTJGbm90aWZpY2F0aW9ucyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkbWluJTJGbm90aWZpY2F0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmVheWFzaGVuJTJGUGVyc29uYWwlMkZQcm9qZWN0JTJGVHVyZiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZlYXlhc2hlbiUyRlBlcnNvbmFsJTJGUHJvamVjdCUyRlR1cmYmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzBCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZWF5YXNoZW4vUGVyc29uYWwvUHJvamVjdC9UdXJmL2FwcC9hcGkvYWRtaW4vbm90aWZpY2F0aW9ucy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vbm90aWZpY2F0aW9ucy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluL25vdGlmaWNhdGlvbnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluL25vdGlmaWNhdGlvbnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZWF5YXNoZW4vUGVyc29uYWwvUHJvamVjdC9UdXJmL2FwcC9hcGkvYWRtaW4vbm90aWZpY2F0aW9ucy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fnotifications%2Froute&page=%2Fapi%2Fadmin%2Fnotifications%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fnotifications%2Froute.ts&appDir=%2FUsers%2Feayashen%2FPersonal%2FProject%2FTurf%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Feayashen%2FPersonal%2FProject%2FTurf&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/admin/notifications/route.ts":
/*!**********************************************!*\
  !*** ./app/api/admin/notifications/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db/mongodb */ \"(rsc)/./lib/db/mongodb.ts\");\n/* harmony import */ var _models_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Notification */ \"(rsc)/./models/Notification.ts\");\n/* harmony import */ var _lib_auth_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth/jwt */ \"(rsc)/./lib/auth/jwt.ts\");\n\n\n\n\nasync function GET(request) {\n    try {\n        const admin = (0,_lib_auth_jwt__WEBPACK_IMPORTED_MODULE_3__.getAdminFromRequestHeaders)(request);\n        if (!admin) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_db_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const notifications = await _models_Notification__WEBPACK_IMPORTED_MODULE_2__.Notification.find().sort({\n            createdAt: -1\n        }).limit(50).lean();\n        const unreadCount = await _models_Notification__WEBPACK_IMPORTED_MODULE_2__.Notification.countDocuments({\n            status: \"UNREAD\"\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            unreadCount,\n            notifications\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Failed to fetch notifications\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PATCH(request) {\n    try {\n        const admin = (0,_lib_auth_jwt__WEBPACK_IMPORTED_MODULE_3__.getAdminFromRequestHeaders)(request);\n        if (!admin) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { id, markAllAsRead } = await request.json();\n        await (0,_lib_db_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        if (markAllAsRead) {\n            await _models_Notification__WEBPACK_IMPORTED_MODULE_2__.Notification.updateMany({\n                status: \"UNREAD\"\n            }, {\n                $set: {\n                    status: \"READ\"\n                }\n            });\n        } else if (id) {\n            await _models_Notification__WEBPACK_IMPORTED_MODULE_2__.Notification.findByIdAndUpdate(id, {\n                $set: {\n                    status: \"READ\"\n                }\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Notifications updated.\"\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Failed to update notifications\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL25vdGlmaWNhdGlvbnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdEO0FBQ0g7QUFDQTtBQUNPO0FBRXJELGVBQWVJLElBQUlDLE9BQW9CO0lBQzVDLElBQUk7UUFDRixNQUFNQyxRQUFRSCx5RUFBMEJBLENBQUNFO1FBQ3pDLElBQUksQ0FBQ0MsT0FBTztZQUNWLE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU9DLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEY7UUFFQSxNQUFNVCxrRUFBaUJBO1FBRXZCLE1BQU1VLGdCQUFnQixNQUFNVCw4REFBWUEsQ0FBQ1UsSUFBSSxHQUMxQ0MsSUFBSSxDQUFDO1lBQUVDLFdBQVcsQ0FBQztRQUFFLEdBQ3JCQyxLQUFLLENBQUMsSUFDTkMsSUFBSTtRQUVQLE1BQU1DLGNBQWMsTUFBTWYsOERBQVlBLENBQUNnQixjQUFjLENBQUM7WUFBRVIsUUFBUTtRQUFTO1FBRXpFLE9BQU9WLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFDdkJDLFNBQVM7WUFDVFM7WUFDQU47UUFDRjtJQUNGLEVBQUUsT0FBT0YsT0FBWTtRQUNuQixPQUFPVCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDLFNBQVM7WUFBT0MsT0FBTztRQUFnQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNyRztBQUNGO0FBRU8sZUFBZVMsTUFBTWQsT0FBb0I7SUFDOUMsSUFBSTtRQUNGLE1BQU1DLFFBQVFILHlFQUEwQkEsQ0FBQ0U7UUFDekMsSUFBSSxDQUFDQyxPQUFPO1lBQ1YsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBRUMsU0FBUztnQkFBT0MsT0FBTztZQUFlLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRjtRQUVBLE1BQU0sRUFBRVUsRUFBRSxFQUFFQyxhQUFhLEVBQUUsR0FBRyxNQUFNaEIsUUFBUUUsSUFBSTtRQUNoRCxNQUFNTixrRUFBaUJBO1FBRXZCLElBQUlvQixlQUFlO1lBQ2pCLE1BQU1uQiw4REFBWUEsQ0FBQ29CLFVBQVUsQ0FBQztnQkFBRVosUUFBUTtZQUFTLEdBQUc7Z0JBQUVhLE1BQU07b0JBQUViLFFBQVE7Z0JBQU87WUFBRTtRQUNqRixPQUFPLElBQUlVLElBQUk7WUFDYixNQUFNbEIsOERBQVlBLENBQUNzQixpQkFBaUIsQ0FBQ0osSUFBSTtnQkFBRUcsTUFBTTtvQkFBRWIsUUFBUTtnQkFBTztZQUFFO1FBQ3RFO1FBRUEsT0FBT1YscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU1pQixTQUFTO1FBQXlCO0lBQzlFLEVBQUUsT0FBT2hCLE9BQVk7UUFDbkIsT0FBT1QscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU9DLE9BQU87UUFBaUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEc7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2VheWFzaGVuL1BlcnNvbmFsL1Byb2plY3QvVHVyZi9hcHAvYXBpL2FkbWluL25vdGlmaWNhdGlvbnMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvZGIvbW9uZ29kYlwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSBcIkAvbW9kZWxzL05vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHsgZ2V0QWRtaW5Gcm9tUmVxdWVzdEhlYWRlcnMgfSBmcm9tIFwiQC9saWIvYXV0aC9qd3RcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGFkbWluID0gZ2V0QWRtaW5Gcm9tUmVxdWVzdEhlYWRlcnMocmVxdWVzdCk7XG4gICAgaWYgKCFhZG1pbikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCBOb3RpZmljYXRpb24uZmluZCgpXG4gICAgICAuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSlcbiAgICAgIC5saW1pdCg1MClcbiAgICAgIC5sZWFuKCk7XG5cbiAgICBjb25zdCB1bnJlYWRDb3VudCA9IGF3YWl0IE5vdGlmaWNhdGlvbi5jb3VudERvY3VtZW50cyh7IHN0YXR1czogXCJVTlJFQURcIiB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgdW5yZWFkQ291bnQsXG4gICAgICBub3RpZmljYXRpb25zLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBub3RpZmljYXRpb25zXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUEFUQ0gocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhZG1pbiA9IGdldEFkbWluRnJvbVJlcXVlc3RIZWFkZXJzKHJlcXVlc3QpO1xuICAgIGlmICghYWRtaW4pIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHsgaWQsIG1hcmtBbGxBc1JlYWQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgICBpZiAobWFya0FsbEFzUmVhZCkge1xuICAgICAgYXdhaXQgTm90aWZpY2F0aW9uLnVwZGF0ZU1hbnkoeyBzdGF0dXM6IFwiVU5SRUFEXCIgfSwgeyAkc2V0OiB7IHN0YXR1czogXCJSRUFEXCIgfSB9KTtcbiAgICB9IGVsc2UgaWYgKGlkKSB7XG4gICAgICBhd2FpdCBOb3RpZmljYXRpb24uZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHsgJHNldDogeyBzdGF0dXM6IFwiUkVBRFwiIH0gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJOb3RpZmljYXRpb25zIHVwZGF0ZWQuXCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBub3RpZmljYXRpb25zXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiTm90aWZpY2F0aW9uIiwiZ2V0QWRtaW5Gcm9tUmVxdWVzdEhlYWRlcnMiLCJHRVQiLCJyZXF1ZXN0IiwiYWRtaW4iLCJqc29uIiwic3VjY2VzcyIsImVycm9yIiwic3RhdHVzIiwibm90aWZpY2F0aW9ucyIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwibGltaXQiLCJsZWFuIiwidW5yZWFkQ291bnQiLCJjb3VudERvY3VtZW50cyIsIlBBVENIIiwiaWQiLCJtYXJrQWxsQXNSZWFkIiwidXBkYXRlTWFueSIsIiRzZXQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/notifications/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth/jwt.ts":
/*!*************************!*\
  !*** ./lib/auth/jwt.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePassword: () => (/* binding */ comparePassword),\n/* harmony export */   getAdminFromRequestHeaders: () => (/* binding */ getAdminFromRequestHeaders),\n/* harmony export */   getAdminSession: () => (/* binding */ getAdminSession),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   signAdminToken: () => (/* binding */ signAdminToken),\n/* harmony export */   verifyAdminToken: () => (/* binding */ verifyAdminToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"fallback_corex_secret_jwt_key_2026\";\nconst TOKEN_NAME = \"corex_admin_token\";\nfunction hashPassword(password) {\n    const salt = bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].genSaltSync(10);\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hashSync(password, salt);\n}\nfunction comparePassword(password, hash) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compareSync(password, hash);\n}\nfunction signAdminToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\n}\nfunction verifyAdminToken(token) {\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET);\n        return decoded;\n    } catch  {\n        return null;\n    }\n}\nasync function getAdminSession() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)();\n    const token = cookieStore.get(TOKEN_NAME)?.value;\n    if (!token) return null;\n    return verifyAdminToken(token);\n}\nfunction getAdminFromRequestHeaders(request) {\n    const authHeader = request.headers.get(\"authorization\");\n    if (authHeader && authHeader.startsWith(\"Bearer \")) {\n        const token = authHeader.substring(7);\n        return verifyAdminToken(token);\n    }\n    // Check cookie header if present\n    const cookieHeader = request.headers.get(\"cookie\");\n    if (cookieHeader) {\n        const match = cookieHeader.match(new RegExp(`(^| )${TOKEN_NAME}=([^;]+)`));\n        if (match) {\n            return verifyAdminToken(match[2]);\n        }\n    }\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC9qd3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNEO0FBQ1M7QUFFdkMsTUFBTUcsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLElBQUk7QUFDN0MsTUFBTUcsYUFBYTtBQVFaLFNBQVNDLGFBQWFDLFFBQWdCO0lBQzNDLE1BQU1DLE9BQU9SLDREQUFrQixDQUFDO0lBQ2hDLE9BQU9BLHlEQUFlLENBQUNPLFVBQVVDO0FBQ25DO0FBRU8sU0FBU0csZ0JBQWdCSixRQUFnQixFQUFFSyxJQUFZO0lBQzVELE9BQU9aLDREQUFrQixDQUFDTyxVQUFVSztBQUN0QztBQUVPLFNBQVNFLGVBQWVDLE9BQXFCO0lBQ2xELE9BQU9oQix3REFBUSxDQUFDZ0IsU0FBU2IsWUFBWTtRQUFFZSxXQUFXO0lBQUs7QUFDekQ7QUFFTyxTQUFTQyxpQkFBaUJDLEtBQWE7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLFVBQVVyQiwwREFBVSxDQUFDb0IsT0FBT2pCO1FBQ2xDLE9BQU9rQjtJQUNULEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRU8sZUFBZUU7SUFDcEIsTUFBTUMsY0FBYyxNQUFNdEIscURBQU9BO0lBQ2pDLE1BQU1rQixRQUFRSSxZQUFZQyxHQUFHLENBQUNuQixhQUFhb0I7SUFDM0MsSUFBSSxDQUFDTixPQUFPLE9BQU87SUFDbkIsT0FBT0QsaUJBQWlCQztBQUMxQjtBQUVPLFNBQVNPLDJCQUEyQkMsT0FBZ0I7SUFDekQsTUFBTUMsYUFBYUQsUUFBUUUsT0FBTyxDQUFDTCxHQUFHLENBQUM7SUFDdkMsSUFBSUksY0FBY0EsV0FBV0UsVUFBVSxDQUFDLFlBQVk7UUFDbEQsTUFBTVgsUUFBUVMsV0FBV0csU0FBUyxDQUFDO1FBQ25DLE9BQU9iLGlCQUFpQkM7SUFDMUI7SUFFQSxpQ0FBaUM7SUFDakMsTUFBTWEsZUFBZUwsUUFBUUUsT0FBTyxDQUFDTCxHQUFHLENBQUM7SUFDekMsSUFBSVEsY0FBYztRQUNoQixNQUFNQyxRQUFRRCxhQUFhQyxLQUFLLENBQUMsSUFBSUMsT0FBTyxDQUFDLEtBQUssRUFBRTdCLFdBQVcsUUFBUSxDQUFDO1FBQ3hFLElBQUk0QixPQUFPO1lBQ1QsT0FBT2YsaUJBQWlCZSxLQUFLLENBQUMsRUFBRTtRQUNsQztJQUNGO0lBRUEsT0FBTztBQUNUIiwic291cmNlcyI6WyIvVXNlcnMvZWF5YXNoZW4vUGVyc29uYWwvUHJvamVjdC9UdXJmL2xpYi9hdXRoL2p3dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuXG5jb25zdCBKV1RfU0VDUkVUID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCBcImZhbGxiYWNrX2NvcmV4X3NlY3JldF9qd3Rfa2V5XzIwMjZcIjtcbmNvbnN0IFRPS0VOX05BTUUgPSBcImNvcmV4X2FkbWluX3Rva2VuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRtaW5QYXlsb2FkIHtcbiAgZW1haWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHNhbHQgPSBiY3J5cHQuZ2VuU2FsdFN5bmMoMTApO1xuICByZXR1cm4gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBzYWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZChwYXNzd29yZDogc3RyaW5nLCBoYXNoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgaGFzaCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduQWRtaW5Ub2tlbihwYXlsb2FkOiBBZG1pblBheWxvYWQpOiBzdHJpbmcge1xuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgSldUX1NFQ1JFVCwgeyBleHBpcmVzSW46IFwiN2RcIiB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUFkbWluVG9rZW4odG9rZW46IHN0cmluZyk6IEFkbWluUGF5bG9hZCB8IG51bGwge1xuICB0cnkge1xuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUKSBhcyBBZG1pblBheWxvYWQ7XG4gICAgcmV0dXJuIGRlY29kZWQ7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBZG1pblNlc3Npb24oKTogUHJvbWlzZTxBZG1pblBheWxvYWQgfCBudWxsPiB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZVN0b3JlLmdldChUT0tFTl9OQU1FKT8udmFsdWU7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICByZXR1cm4gdmVyaWZ5QWRtaW5Ub2tlbih0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZG1pbkZyb21SZXF1ZXN0SGVhZGVycyhyZXF1ZXN0OiBSZXF1ZXN0KTogQWRtaW5QYXlsb2FkIHwgbnVsbCB7XG4gIGNvbnN0IGF1dGhIZWFkZXIgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiYXV0aG9yaXphdGlvblwiKTtcbiAgaWYgKGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKFwiQmVhcmVyIFwiKSkge1xuICAgIGNvbnN0IHRva2VuID0gYXV0aEhlYWRlci5zdWJzdHJpbmcoNyk7XG4gICAgcmV0dXJuIHZlcmlmeUFkbWluVG9rZW4odG9rZW4pO1xuICB9XG5cbiAgLy8gQ2hlY2sgY29va2llIGhlYWRlciBpZiBwcmVzZW50XG4gIGNvbnN0IGNvb2tpZUhlYWRlciA9IHJlcXVlc3QuaGVhZGVycy5nZXQoXCJjb29raWVcIik7XG4gIGlmIChjb29raWVIZWFkZXIpIHtcbiAgICBjb25zdCBtYXRjaCA9IGNvb2tpZUhlYWRlci5tYXRjaChuZXcgUmVnRXhwKGAoXnwgKSR7VE9LRU5fTkFNRX09KFteO10rKWApKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiB2ZXJpZnlBZG1pblRva2VuKG1hdGNoWzJdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJqd3QiLCJiY3J5cHQiLCJjb29raWVzIiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTl9OQU1FIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJzYWx0IiwiZ2VuU2FsdFN5bmMiLCJoYXNoU3luYyIsImNvbXBhcmVQYXNzd29yZCIsImhhc2giLCJjb21wYXJlU3luYyIsInNpZ25BZG1pblRva2VuIiwicGF5bG9hZCIsInNpZ24iLCJleHBpcmVzSW4iLCJ2ZXJpZnlBZG1pblRva2VuIiwidG9rZW4iLCJkZWNvZGVkIiwidmVyaWZ5IiwiZ2V0QWRtaW5TZXNzaW9uIiwiY29va2llU3RvcmUiLCJnZXQiLCJ2YWx1ZSIsImdldEFkbWluRnJvbVJlcXVlc3RIZWFkZXJzIiwicmVxdWVzdCIsImF1dGhIZWFkZXIiLCJoZWFkZXJzIiwic3RhcnRzV2l0aCIsInN1YnN0cmluZyIsImNvb2tpZUhlYWRlciIsIm1hdGNoIiwiUmVnRXhwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth/jwt.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db/mongodb.ts":
/*!***************************!*\
  !*** ./lib/db/mongodb.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongooseCache || {\n    conn: null,\n    promise: null\n};\nif (!global.mongooseCache) {\n    global.mongooseCache = cached;\n}\nasync function connectToDatabase() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false,\n            maxPoolSize: 10,\n            serverSelectionTimeoutMS: 10000\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongooseInstance)=>{\n            return mongooseInstance;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFZQSxJQUFJQyxTQUF3QkMsT0FBT0MsYUFBYSxJQUFJO0lBQUVDLE1BQU07SUFBTUMsU0FBUztBQUFLO0FBRWhGLElBQUksQ0FBQ0gsT0FBT0MsYUFBYSxFQUFFO0lBQ3pCRCxPQUFPQyxhQUFhLEdBQUdGO0FBQ3pCO0FBRU8sZUFBZUs7SUFDcEIsSUFBSUwsT0FBT0csSUFBSSxFQUFFO1FBQ2YsT0FBT0gsT0FBT0csSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0gsT0FBT0ksT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCO1lBQ2hCQyxhQUFhO1lBQ2JDLDBCQUEwQjtRQUM1QjtRQUVBVCxPQUFPSSxPQUFPLEdBQUdULHVEQUFnQixDQUFDQyxhQUF1QlUsTUFBTUssSUFBSSxDQUFDLENBQUNDO1lBQ25FLE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQUk7UUFDRlosT0FBT0csSUFBSSxHQUFHLE1BQU1ILE9BQU9JLE9BQU87SUFDcEMsRUFBRSxPQUFPUyxHQUFHO1FBQ1ZiLE9BQU9JLE9BQU8sR0FBRztRQUNqQixNQUFNUztJQUNSO0lBRUEsT0FBT2IsT0FBT0csSUFBSTtBQUNwQiIsInNvdXJjZXMiOlsiL1VzZXJzL2VheWFzaGVuL1BlcnNvbmFsL1Byb2plY3QvVHVyZi9saWIvZGIvbW9uZ29kYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIik7XG59XG5cbmludGVyZmFjZSBNb25nb29zZUNhY2hlIHtcbiAgY29ubjogdHlwZW9mIG1vbmdvb3NlIHwgbnVsbDtcbiAgcHJvbWlzZTogUHJvbWlzZTx0eXBlb2YgbW9uZ29vc2U+IHwgbnVsbDtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gIHZhciBtb25nb29zZUNhY2hlOiBNb25nb29zZUNhY2hlIHwgdW5kZWZpbmVkO1xufVxuXG5sZXQgY2FjaGVkOiBNb25nb29zZUNhY2hlID0gZ2xvYmFsLm1vbmdvb3NlQ2FjaGUgfHwgeyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG5cbmlmICghZ2xvYmFsLm1vbmdvb3NlQ2FjaGUpIHtcbiAgZ2xvYmFsLm1vbmdvb3NlQ2FjaGUgPSBjYWNoZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4ge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgIG1heFBvb2xTaXplOiAxMCxcbiAgICAgIHNlcnZlclNlbGVjdGlvblRpbWVvdXRNUzogMTAwMDAsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSBhcyBzdHJpbmcsIG9wdHMpLnRoZW4oKG1vbmdvb3NlSW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZUluc3RhbmNlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvb3NlQ2FjaGUiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwibWF4UG9vbFNpemUiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJjb25uZWN0IiwidGhlbiIsIm1vbmdvb3NlSW5zdGFuY2UiLCJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/Notification.ts":
/*!********************************!*\
  !*** ./models/Notification.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Notification: () => (/* binding */ Notification)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NotificationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    bookingId: {\n        type: String,\n        required: true,\n        index: true\n    },\n    customerName: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: String,\n        required: true\n    },\n    slot: {\n        type: String,\n        required: true\n    },\n    time: {\n        type: String,\n        required: true\n    },\n    message: {\n        type: String,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"UNREAD\",\n            \"READ\"\n        ],\n        default: \"UNREAD\",\n        index: true\n    }\n}, {\n    timestamps: {\n        createdAt: true,\n        updatedAt: false\n    }\n});\nconst Notification = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Notification || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Notification\", NotificationSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvTm90aWZpY2F0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQWE3RCxNQUFNRSxxQkFBcUIsSUFBSUQsNENBQU1BLENBQ25DO0lBQ0VFLFdBQVc7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxPQUFPO0lBQUs7SUFDdkRDLGNBQWM7UUFBRUosTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzdDRyxNQUFNO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0ksTUFBTTtRQUFFTixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNLLE1BQU07UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDTSxTQUFTO1FBQUVSLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN4Q08sUUFBUTtRQUFFVCxNQUFNQztRQUFRUyxNQUFNO1lBQUM7WUFBVTtTQUFPO1FBQUVDLFNBQVM7UUFBVVIsT0FBTztJQUFLO0FBQ25GLEdBQ0E7SUFBRVMsWUFBWTtRQUFFQyxXQUFXO1FBQU1DLFdBQVc7SUFBTTtBQUFFO0FBRy9DLE1BQU1DLGVBQ1huQix3REFBZSxDQUFDbUIsWUFBWSxJQUM1Qm5CLHFEQUFjLENBQWdCLGdCQUFnQkUsb0JBQW9CIiwic291cmNlcyI6WyIvVXNlcnMvZWF5YXNoZW4vUGVyc29uYWwvUHJvamVjdC9UdXJmL21vZGVscy9Ob3RpZmljYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQsIE1vZGVsIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvbiBleHRlbmRzIERvY3VtZW50IHtcbiAgYm9va2luZ0lkOiBzdHJpbmc7XG4gIGN1c3RvbWVyTmFtZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIHNsb3Q6IHN0cmluZztcbiAgdGltZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHN0YXR1czogXCJVTlJFQURcIiB8IFwiUkVBRFwiO1xuICBjcmVhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IE5vdGlmaWNhdGlvblNjaGVtYSA9IG5ldyBTY2hlbWE8SU5vdGlmaWNhdGlvbj4oXG4gIHtcbiAgICBib29raW5nSWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgaW5kZXg6IHRydWUgfSxcbiAgICBjdXN0b21lck5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGRhdGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHNsb3Q6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHRpbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIG1lc3NhZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHN0YXR1czogeyB0eXBlOiBTdHJpbmcsIGVudW06IFtcIlVOUkVBRFwiLCBcIlJFQURcIl0sIGRlZmF1bHQ6IFwiVU5SRUFEXCIsIGluZGV4OiB0cnVlIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogeyBjcmVhdGVkQXQ6IHRydWUsIHVwZGF0ZWRBdDogZmFsc2UgfSB9XG4pO1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uOiBNb2RlbDxJTm90aWZpY2F0aW9uPiA9XG4gIG1vbmdvb3NlLm1vZGVscy5Ob3RpZmljYXRpb24gfHxcbiAgbW9uZ29vc2UubW9kZWw8SU5vdGlmaWNhdGlvbj4oXCJOb3RpZmljYXRpb25cIiwgTm90aWZpY2F0aW9uU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIk5vdGlmaWNhdGlvblNjaGVtYSIsImJvb2tpbmdJZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImluZGV4IiwiY3VzdG9tZXJOYW1lIiwiZGF0ZSIsInNsb3QiLCJ0aW1lIiwibWVzc2FnZSIsInN0YXR1cyIsImVudW0iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIk5vdGlmaWNhdGlvbiIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Notification.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/bcryptjs","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fnotifications%2Froute&page=%2Fapi%2Fadmin%2Fnotifications%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fnotifications%2Froute.ts&appDir=%2FUsers%2Feayashen%2FPersonal%2FProject%2FTurf%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Feayashen%2FPersonal%2FProject%2FTurf&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();