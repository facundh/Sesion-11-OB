class Estudiante{
    _nombre
   

    constructor(nombre){
        this._nombre = nombre;
        this._asignaturas = ['Javascript', 'HTML', 'CSS']
    }

    obtenDatos(){
        return {
            "nombre": this._nombre,
            "asignaturas": this._asignaturas
        }
    }
}

const test = new Estudiante('Facundo');
console.log(test)

console.log(test.obtenDatos());

class Estudiante2 extends Estudiante{
    obtenDatos(){
        super.obtenDatos();
    }
}

const test2 = new Estudiante2('Atila');
console.log(test2);
test2.obtenDatos();