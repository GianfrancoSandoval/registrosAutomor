"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var vehiculos_1 = require("./vehiculos");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        // Cambiamos any[] a un tipo más específico que acepte Auto, Moto o Camion
        this.vehiculos = [];
    }
    // Método para agregar un vehículo
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    // Método para mostrar todos los vehículos
    RegistroAutomotor.prototype.mostrarTodos = function () {
        this.vehiculos.forEach(function (vehiculo, index) {
            console.log("Veh\u00EDculo ".concat(index + 1, ": ").concat(vehiculo.getVehiculoInfo()));
        });
    };
    // Método para modificar un vehículo en una posición específica
    RegistroAutomotor.prototype.modificarVehiculo = function (index, nuevoVehiculo) {
        if (this.vehiculos[index]) {
            this.vehiculos[index] = nuevoVehiculo;
        }
        else {
            console.log("No existe un vehículo en esa posición.");
        }
    };
    // Método para eliminar un vehículo en una posición específica
    RegistroAutomotor.prototype.eliminarVehiculo = function (index) {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
        else {
            console.log("No existe un vehículo en esa posición.");
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
var auto1 = new vehiculos_1.Auto("Toyota", "Corolla", 2020);
var moto1 = new vehiculos_1.Moto("Honda", "CB500", 2019);
var camion1 = new vehiculos_1.Camion("Ford", "F-150", 2018);
var registro = new RegistroAutomotor();
registro.agregarVehiculo(auto1); // Agregar auto al registro
registro.agregarVehiculo(moto1); // Agregar moto al registro
registro.agregarVehiculo(camion1); // Agregar camión al registro
registro.mostrarTodos();
