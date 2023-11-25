var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shirt = /** @class */ (function () {
    function Shirt(color, model, brand, size, price) {
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.size = size;
        this.price = price;
    }
    Shirt.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Shirt.prototype.getColor = function () {
        return this.color;
    };
    return Shirt;
}());
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Shirt));
var sudaderNike = new Sudadera("Rojo", "nike", "nike", "L", 1000);
sudaderNike.setCapucha(true);
console.log(sudaderNike);
