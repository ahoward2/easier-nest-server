"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const hello_1 = require("./routes/hello/hello");
const helloParam_1 = require("./routes/hello/helloParam");
let ApiController = class ApiController {
    executeHelloHandler(req, res) {
        return hello_1.routeConfig.handler(req, res);
    }
    executeHandler(req, res) {
        return helloParam_1.routeConfig.handler(req, res);
    }
};
__decorate([
    (0, common_1.All)(hello_1.routeConfig.path),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "executeHelloHandler", null);
__decorate([
    (0, common_1.All)(helloParam_1.routeConfig.path),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "executeHandler", null);
ApiController = __decorate([
    (0, common_1.Controller)('api')
], ApiController);
exports.ApiController = ApiController;
//# sourceMappingURL=api.controller.js.map