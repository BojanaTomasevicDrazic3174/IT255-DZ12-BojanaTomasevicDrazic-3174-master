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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
var order_1 = require("../../model/order");
var getproductsservice_1 = require("../../services/productservices/getproductsservice");
var neworder_1 = require("../../services/productservices/neworder");
var deleteproduct_service_1 = require("../../services/productservices/deleteproduct.service");
var router_1 = require("@angular/router");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, newOrderService, deleteProductService, router) {
        var _this = this;
        this.productsService = productsService;
        this.newOrderService = newOrderService;
        this.deleteProductService = deleteProductService;
        this.router = router;
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
        else if (localStorage.getItem('username')) {
            this.username = localStorage.getItem('username');
            console.log(this.username);
        }
        var $;
        this.productsService.getServices().subscribe(function (data) {
            console.log(data);
            _this.products = data;
            setInterval(function () {
                $ = window['jQuery'];
                $('table').DataTable();
            }.bind(_this), 400);
        });
    }
    ProductsComponent.prototype.odaberiProizvod = function (pro) {
        this.selectProductId = pro;
    };
    ProductsComponent.prototype.naruciProizvod = function (proizvod) {
        var _this = this;
        console.log(this.selectProductId);
        this.newOrder = new order_1.default();
        this.newOrder.productId = parseInt(this.selectProductId);
        this.newOrderService.callService(this.newOrder)
            .subscribe(function (res) {
            // AKo je sve proslo kako treba resetujemo podatke
            if (res['success'] && res['success'] === 'ok') {
                _this.newOrder = null;
                _this.selectProductId = null;
                alert('Uspesno ste dodali novi proizvod.');
            }
        });
    };
    ProductsComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        console.log(product);
        var obrisati = { 'ID': product.ID };
        console.log(obrisati);
        this.deleteProductService.callService(obrisati)
            .subscribe(function (res) {
            if (res['success']) {
                // Nadjemo index elementa koji brisemo i uklonimo ga iz niza
                var index = _this.products.indexOf(product);
                if (index > -1) {
                    _this.products.splice(index, 1);
                }
            }
        });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            templateUrl: "./products.html",
        }),
        __metadata("design:paramtypes", [getproductsservice_1.GetProductsService,
            neworder_1.AddOrderService,
            deleteproduct_service_1.DeleteProductService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
    ], ProductsComponent);
    return ProductsComponent;
    var _a;
}());
exports.default = ProductsComponent;
//# sourceMappingURL=products.component.js.map