const mongoose = require('mongoose')
const {Schema} = mongoose

const referenciaComercial = {
    nombre: String,
    direccion: String,
    telefono: String
}

const referenciaFamiliar = {
    nombre: String,
    direccion: String,
    parentesco: String,
    telefono: String
}


const solicitud = new Schema({
    id: {type: Number, index: true},
    fecha: {type: Date, default: Date.now},
    solicitante: {
        personales: {
            nombres: String,
            apellidos: String,
            alias: String,
            fechaDeNacimiento: Date,
            nacionalidad: String,
            estadoCivil: Boolean,
            cedula: String,
            direccion: String,
            ciudad: String,
            numDependientes: Number,
            telefonos: {
                casa: String,
                celular: String
            }
        },
        correo: String,
        tipoVivienda: String,
        conyuge: {
            nombre: String,
            cedula: String,
            telefono: String,
            empleador: {
                nombre: String,
                telefono:String
            }
        },
        negocio: {
            tipo: String,
            nombre: String,
            telefono: String,
            direccion: {
                calle: String,
                numero: String,
                edificio: String,
                apartamento: String,
                sector: String
            },
            antiguedad: String,
            promedioVentas: Number,
            tipoLocal: String,
            arrendador: {
                nombre: String,
                telefono: String,
                alquiler: Number
            }
        },
        prestamo: {
            monto: Number,
            finalidad: String,
            plazo: Number,
            modalidad: String
        },
        referencias:{
            comerciales: [referenciaComercial],
            familiares: [referenciaFamiliar]
        },
        comentarios: String
    },
    coSolicitante: {
        personales: {
            nombres: String,
            apellidos: String,
            vinculo: String,
            telefonos: {
                casa: String,
                celular: String
            },
            direccion: String,
            sector: String,
            ciudad: String,
            numDependientes: Number,
            fechaNacimiento: Date,
            nacionalidad: String,
            estadoCivil: Boolean,
            cedula: String,
            trabajo: {
                ocupacion: String,
                antiguedadActual: String,
                antiguedadAnterior: String,
                empleador: String,
                direccion: String,
                telefono: String
            },
            viviendo: {
                tipo: String,
                antiguedad: String
            },
            conyuge: {
                nombre: String,
                trabajo: String,
                telefono: String
            },
            referencias: {
                comerciales: [referenciaComercial],
                familiares: [referenciaFamiliar]
            }
        }
    }
}
)


module.exports = mongoose.model('solicitud', solicitud)