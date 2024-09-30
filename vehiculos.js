"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = exports.Moto = exports.Auto = exports.Vehiculo = void 0;
// Clase base para Vehículo
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    // Métodos Getters y Setters
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    // Método para mostrar información del vehículo
    Vehiculo.prototype.mostrarInfo = function () {
        return "Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", A\u00F1o: ").concat(this.anio);
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
// Clase Auto usando composición
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio) {
        this.vehiculo = new Vehiculo(marca, modelo, anio);
    }
    // Métodos para interactuar con la instancia de Vehiculo
    Auto.prototype.getVehiculoInfo = function () {
        return this.vehiculo.mostrarInfo();
    };
    return Auto;
}());
exports.Auto = Auto;
// Clase Moto usando composición
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, anio) {
        this.vehiculo = new Vehiculo(marca, modelo, anio);
    }
    Moto.prototype.getVehiculoInfo = function () {
        return this.vehiculo.mostrarInfo();
    };
    return Moto;
}());
exports.Moto = Moto;
// Clase Camion usando composición
var Camion = /** @class */ (function () {
    function Camion(marca, modelo, anio) {
        this.vehiculo = new Vehiculo(marca, modelo, anio);
    }
    Camion.prototype.getVehiculoInfo = function () {
        return this.vehiculo.mostrarInfo();
    };
    return Camion;
}());
exports.Camion = Camion;
