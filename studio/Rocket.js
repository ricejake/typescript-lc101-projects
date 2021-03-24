"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket() {
    }
    return Rocket;
}());
exports.Rocket = Rocket;
var name;
var totalCapacityKg;
var cargoItems = [];
var astronauts = [];
constructor(name, string, totalCapacityKg, number);
{
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
}
sumMass(items, Payload[]);
number;
{
    for (var _i = 0, _a = Payload[]; _i < _a.length; _i++) {
        items = _a[_i];
        var sum = void 0;
        sum += items;
    }
}
canAdd(item, Payload);
boolean;
{
    if (this.currentMassKg() + cargoItems.massKg <= this.totalCapacityKg) {
        return true;
    }
}
addCargo(cargo, Cargo);
boolean;
{
}
