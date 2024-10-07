
//.....................///
// Clase base para Vehículo
export class Vehiculo {
    constructor(
        private marca: string,
        private modelo: string,
        private anio: number
    ) {}

    // Métodos Getters y Setters
    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    setAnio(anio: number): void {
        this.anio = anio;
    }

    // Método para mostrar información del vehículo
    mostrarInfo(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`;
    }
}

// Clase Auto que hereda de Vehículo
export class Auto extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio); // Llamada al constructor de la clase base
    }
    getVehiculoInfo(): string {
        return this.mostrarInfo();
    // Puedes agregar métodos adicionales específicos para Auto si lo deseas
}}

// Clase Moto que hereda de Vehículo
export class Moto extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio); // Llamada al constructor de la clase base
    }
    getVehiculoInfo(): string {
        return this.mostrarInfo();
    // Puedes agregar métodos adicionales específicos para Moto si lo deseas
}}

// Clase Camion que hereda de Vehículo
export class Camion extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio); // Llamada al constructor de la clase base
    }
     getVehiculoInfo(): string {
        return this.mostrarInfo();
    // Puedes agregar métodos adicionales específicos para Camion si lo deseas
}}