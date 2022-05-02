"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeConfig = void 0;
async function handler(req, res) {
    res.send('Request param from handler: ' + req.params.name);
}
exports.routeConfig = {
    path: '/hello/:name',
    handler: handler,
};
//# sourceMappingURL=helloParam.js.map