import { log } from "console";
import { Auto, Moto, Camion } from "./vehiculos";

export class RegistroAutomotor {
    // Cambiamos any[] a un tipo más específico que acepte Auto, Moto o Camion
    private vehiculos: (Auto | Moto | Camion)[] = [];

    // Método para agregar un vehículo
    agregarVehiculo(vehiculo: Auto | Moto | Camion): void {
        this.vehiculos.push(vehiculo);
    }

    // Método para mostrar todos los vehículos
    mostrarTodos(): void {
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`Vehículo ${index + 1}: ${vehiculo.getVehiculoInfo()}`);
        });
    }

    // Método para modificar un vehículo en una posición específica
    modificarVehiculo(index: number, nuevoVehiculo: Auto | Moto | Camion): void {
        if (this.vehiculos[index]) {
            this.vehiculos[index] = nuevoVehiculo;
        } else {
            console.log("No existe un vehículo en esa posición.");
        }
    }

    // Método para eliminar un vehículo en una posición específica
    eliminarVehiculo(index: number): void {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        } else {
            console.log("No existe un vehículo en esa posición.");
        }
    }
}


const auto1 = new Auto("Toyota", "Corolla", 2020);
const moto1 = new Moto("Honda", "CB500", 2019);
const camion1 = new Camion("Ford", "F-150", 2018);

const registro = new RegistroAutomotor();

registro.agregarVehiculo(auto1);  // Agregar auto al registro
registro.agregarVehiculo(moto1);  // Agregar moto al registro
registro.agregarVehiculo(camion1);  // Agregar camión al registro


registro.mostrarTodos();