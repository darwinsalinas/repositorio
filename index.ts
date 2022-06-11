const persona: {
    nombre: string,
    apellido: string,
    telefono: number,
    nombreCompleto: () => string,
    telefonoToString: () => string,
    obtenerIniciales: () => void
} = {
    nombre: 'Darwin',
    apellido: 'Salinas',
    telefono: 999999999,
    nombreCompleto: function () {
        console.log(this.nombre);
        return this.nombre + ' ' + this.apellido
    },
    telefonoToString: function () {
        return this.telefono.toString()
    },
    obtenerIniciales: function () {
        return this.nombre[0] + ' ' + this.apellido[0]
    }
}

const nombreCompleto = persona.nombreCompleto()

console.log(nombreCompleto);
console.log(persona.telefono);
console.log(persona.telefonoToString());
console.log(persona.obtenerIniciales());

