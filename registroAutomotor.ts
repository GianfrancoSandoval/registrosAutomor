import { Vehiculo } from "./vehiculos";


export class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    // Método para agregar un vehículo
    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    // Método para obtener un vehículo por índice
    getVehiculo(index: number): Vehiculo | null {
        return this.vehiculos[index] || null;
    }

    // Método para modificar un vehículo
    modificarVehiculo(index: number, vehiculoModificado: Vehiculo): void {
        if (this.vehiculos[index]) {
            this.vehiculos[index] = vehiculoModificado;
        } else {
            console.log("El vehículo no existe.");
        }
    }

    // Método para eliminar (dar de baja) un vehículo
    eliminarVehiculo(index: number): void {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        } else {
            console.log("El vehículo no existe.");
        }
    }

    // Método para mostrar todos los vehículos
    mostrarTodos(): void {
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`Vehículo ${index + 1}: ${vehiculo.mostrarInfo()}`);
        });
    }
}


//--------------------................--------------------------///

