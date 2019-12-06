export class Persona {
    _id: string;
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleanos: Date;
    colorFavorito: string;
    sexo: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
    }

    get getNombre(): (string) {
        return this.nombre;
    }

    set setNombre(nombre: string) {
        if (nombre == undefined) throw "Introduzca un nombre";
        this.nombre = nombre;
    }

    get getApellidos(): (string) {
        return this.apellidos;
    }

    set setApellidos(apellidos: string) {
        if (apellidos == undefined) throw "Introduzca los apellidos";
        this.apellidos = apellidos;
    }

    get getEdad(): (number) {
        return this.edad;
    }

    set setEdad(edad: number) {
        if (edad == undefined) throw "Introduzca la edad";
        this.edad = edad;
    }

    get getDni(): (string) {
        return this.dni;
    }

    set setDni(dni: string) {
        if (dni == undefined) throw "Introduzca el DNI";
        this.dni = dni;
    }

    get getCumpleaños(): (string) {
        var mes = this.cumpleanos.getMonth();
        var dia = this.cumpleanos.getDate();
        var ano = this.cumpleanos.getFullYear();

        return "" + dia + "-" + mes + "-" + ano;
    }

    set setCumpleaños(cumpleanos: Date) {
        if (cumpleanos == undefined) throw "Introduzca su fecha de cumpleaños";
        this.cumpleanos = cumpleanos;
    }

    get getColorFavorito(): (string) {
        return this.colorFavorito;
    }

    set setColorFavorito(colorFavorito: string) {
        if (colorFavorito == undefined) throw "Introduzca su color favorito";
        this.colorFavorito = colorFavorito;
    }

    get getSexo(): (string) {
        return this.sexo;
    }

    set setSexo(sexo: string) {
        if (sexo == undefined) throw "Introduzca sexo";
        this.sexo = sexo;
    }
}