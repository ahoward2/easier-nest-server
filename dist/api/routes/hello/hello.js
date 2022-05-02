"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeConfig = void 0;
async function handler(req, res) {
    res.send('Request url from handler: ' + req.url);
}
exports.routeConfig = {
    path: '/hello',
    handler: handler,
};
//# sourceMappingURL=hello.js.map