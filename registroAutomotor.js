"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    // Método para agregar un vehículo
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    // Método para obtener un vehículo por índice
    RegistroAutomotor.prototype.getVehiculo = function (index) {
        return this.vehiculos[index] || null;
    };
    // Método para modificar un vehículo
    RegistroAutomotor.prototype.modificarVehiculo = function (index, vehiculoModificado) {
        if (this.vehiculos[index]) {
            this.vehiculos[index] = vehiculoModificado;
        }
        else {
            console.log("El vehículo no existe.");
        }
    };
    // Método para eliminar (dar de baja) un vehículo
    RegistroAutomotor.prototype.eliminarVehiculo = function (index) {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
        else {
            console.log("El vehículo no existe.");
        }
    };
    // Método para mostrar todos los vehículos
    RegistroAutomotor.prototype.mostrarTodos = function () {
        this.vehiculos.forEach(function (vehiculo, index) {
            console.log("Veh\u00EDculo ".concat(index + 1, ": ").concat(vehiculo.mostrarInfo()));
        });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
//--------------------................--------------------------///
