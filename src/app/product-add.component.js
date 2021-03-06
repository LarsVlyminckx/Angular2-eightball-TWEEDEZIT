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
var core_1 = require("@angular/core");
var product_1 = require("./product");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductAddComponent = (function () {
    function ProductAddComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.model = new product_1.Product('', '', 0);
    }
    ProductAddComponent.prototype.onSubmit = function () {
        this.productService.addProduct(this.model);
        this.router.navigate(['/list']);
    };
    return ProductAddComponent;
}());
ProductAddComponent = __decorate([
    core_1.Component({
        selector: 'product-add',
        templateUrl: './product-add.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
], ProductAddComponent);
exports.ProductAddComponent = ProductAddComponent;
//# sourceMappingURL=product-add.component.js.map