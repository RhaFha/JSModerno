const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardar email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Email: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Email: ${info.puesto}`);
    }
})

function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa,
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto,
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Juan', null, 'Codigo con Juan');
cliente.mostrarNombre();
cliente.agregarEmail('rafacerino@gmail.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('Pedro', null, 'Programador');
empleado.mostrarNombre('empleado@empleado.com');
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();

