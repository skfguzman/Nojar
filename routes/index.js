const express = require('express')
const Solicitud = require('../models/solicitud')


let router = express.Router()

//Cargar landing page
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/sobreNosotros', (req, res) => {
    res.render('aboutUs')
})

router.get('/solicitud', (req, res) => {

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `Fecha: ${day}-${month}-${year}`

    res.render('form', {fecha: currentDate})
})


router.post('/solicitud', async (req, res) => {
    let solicitud = req.body
    console.log(solicitud)
})

function checkSolicitante(data) {
    
    checkNumber(data.personales.telefonos.casa)
    checkNumber(data.personales.telefonos.celular)
    checkCedula(data.personales.cedula)

    if(data.correo !== ''){
        checkMail(data.correo)
    }

    if(data.conyuge){
        checkConyuge(data.conyuge)
    }

    checktelefono(data.negocio.telefono)
    if(data.negocio.arrendador){
        checkTelefono(data.negocio.arrendador.telefono)
    }

}

function checkCoSolicitante(data){
    checkNumber(data.personales.telefonos.casa)
    checkNumber(data.personales.telefonos.celular)
    checkCedula(data.personales.cedula)
    checkNumber(data.trabajo.telefono)

    if(data.conyuge){
        checkNumber(data.conyuge.telefono)
    }
}

function checkNumber(number){
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
    return regex.test(number);
}

function checkCedula(number){
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{7}[-\s\.]?[0-9]{1}$/i;
    return regex.test(number);
}

function checkMail(email){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regex.test(email)
}

function checkConyuge(conyuge){
    checkCedula(conyuge.cedula)
    checktelefono(conyuge.telefono)
    if(conyuge.empleador){
        checktelefono(conyuge.empleador.telefono)
    }
    return 1
}

module.exports = router