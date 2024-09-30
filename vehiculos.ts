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

// Clase Auto usando composición
export class Auto {
    private vehiculo: Vehiculo;

    constructor(marca: string, modelo: string, anio: number) {
        this.vehiculo = new Vehiculo(marca, modelo, anio);
    }

    // Métodos para interactuar con la instancia de Vehiculo
    getVehiculoInfo(): string {
        return this.vehiculo.mostrarInfo();
    }
}

// Clase Moto usando composición
export class Moto {
    private vehiculo: Vehiculo;

    constructor(marca: string, modelo: string, anio: number) {
        this.vehiculo = new Vehiculo(marca, modelo, anio);
    }

    getVehiculoInfo(): string {
        return this.vehiculo.mostrarInfo();
    }
}

// Clase Camion usando composición
export class Camion {
    private vehiculo: Vehiculo;

    constructor(marca: string, modelo: string, anio: number) {
        this.vehiculo = new Vehiculo(marca, modelo, anio);
    }

    getVehiculoInfo(): string {
        return this.vehiculo.mostrarInfo();
    }
}