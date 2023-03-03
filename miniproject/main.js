"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var findTelevision = function () {
    var televisions = [];
    var televisionitem = {};
    data_1.dummyData.filter(function (item) {
        if (item.category === "television") {
            televisionitem = {
                title: item.title,
                description: item.description,
                price: item.price,
                rating: item.rating,
                id: item.id,
                thumbnail: item.thumbnail,
                smartTv: item.smartTv,
                stock: item.stock
            };
            televisions.push(televisionitem);
        }
    });
    return televisions;
};
var findSmartPhone = function () {
    var smartPhones = [];
    var smartPhoneItem = {};
    data_1.dummyData.filter(function (item) {
        if (item.category === "smartphones") {
            smartPhoneItem = {
                title: item.title,
                description: item.description,
                price: item.price,
                rating: item.rating,
                id: item.id,
                thumbnail: item.thumbnail,
                color: item.color
            };
            smartPhones.push(smartPhoneItem);
        }
    });
    return smartPhones;
};
var findLaptop = function () {
    var laptopItem = {};
    var Laptops = [];
    data_1.dummyData.filter(function (item) {
        if (item.category === "laptop") {
            laptopItem = {
                title: item.title,
                description: item.description,
                price: item.price,
                rating: item.rating,
                id: item.id,
                thumbnail: item.thumbnail,
                discountPercentage: item.discountPercentage,
                screenDimentions: item.screenDimentions
            };
            Laptops.push(laptopItem);
        }
    });
    return Laptops;
};
var findTablet = function () {
    var Tablets = [];
    var tabletItem = {};
    data_1.dummyData.filter(function (item) {
        if (item.category === "tablet") {
            tabletItem = {
                title: item.title,
                description: item.description,
                price: item.price,
                rating: item.rating,
                id: item.id,
                thumbnail: item.thumbnail,
                cellular: item.celluar,
                wifi: item.wifi
            };
            Tablets.push(tabletItem);
        }
    });
    return Tablets;
};
var ProductApi = /** @class */ (function () {
    function ProductApi() {
    }
    ProductApi.prototype.findAll = function () {
        var product = {};
        var productArray = [];
        data_1.dummyData.filter(function (item) {
            product = {
                title: item.title,
                description: item.description,
                price: item.price,
                rating: item.rating,
                id: item.id,
                thumbnail: item.thumbnail
            };
            productArray.push(product);
        });
        return productArray;
    };
    ProductApi.prototype.findByCategory = function (category) {
        var productArray = [];
        data_1.dummyData.forEach(function (item) {
            if (item.category == "television" && category == "television") {
                productArray = findTelevision();
            }
            else if (item.category == "smartphones" && category == "smartphones") {
                productArray = findSmartPhone();
            }
            else if (item.category == "laptop" && category == "laptop") {
                productArray = findLaptop();
            }
            else if (item.category == "tablet" && category == "tablet") {
                productArray = findTablet();
            }
        });
        return productArray;
    };
    ProductApi.prototype.findByText = function (input) {
        var product = {};
        var productArray = [];
        data_1.dummyData.forEach(function (item) {
            if (item.title.indexOf(input) !== -1 || item.description.indexOf(input) !== -1
                || item.brand.indexOf(input) !== -1)
                product = {
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    rating: item.rating,
                    id: item.id,
                    thumbnail: item.thumbnail
                };
            productArray.push(product);
        });
        return productArray;
    };
    ProductApi.prototype.findByPrice = function (x, y) {
        var product = {};
        var productArray = [];
        data_1.dummyData.forEach(function (item) {
            if ((item.price >= x && item.price <= y) || (item.price <= x && item.price >= y)) {
                product = {
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    rating: item.rating,
                    id: item.id,
                    thumbnail: item.thumbnail
                };
                productArray.push(product);
            }
        });
        return productArray;
    };
    return ProductApi;
}());
var p = new ProductApi();
//console.log(p.findAll());
console.log(p.findByCategory("laptop"));
//console.log(p.findByText("Samsung"));
//console.log(p.findByPrice(1000,2000));
