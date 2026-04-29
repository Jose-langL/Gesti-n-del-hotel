let Habitaciones = [
    {
        numero: 1,
        tipo: "Sencilla",
        precioNoche: 120,
        estado: "Libre",
        huesped: ""
    },
    {
        numero: 2,
        tipo: "Doble",
        precioNoche: 180,
        estado: "Ocupada",
        huesped: "Laura Gómez"
    },
    {
        numero: 3,
        tipo: "Suite",
        precioNoche: 300,
        estado: "Limpieza",
        huesped: ""
    },
    {
        numero: 4,
        tipo: "Sencilla",
        precioNoche: 110,
        estado: "Ocupada",
        huesped: "Carlos Pérez"
    },
    {
        numero: 5,
        tipo: "Doble",
        precioNoche: 200,
        estado: "Libre",
        huesped: ""
    },
    {
        numero: 6,
        tipo: "Suite",
        precioNoche: 350,
        estado: "Ocupada",
        huesped: "Ana Martinez"
    },
    {
        numero: 7,
        tipo: "Sencilla",
        precioNoche: 130,
        estado: "Limpieza",
        huesped: ""
    },
    {
        numero: 8,
        tipo: "Doble",
        precioNoche: 190,
        estado: "Ocupada",
        huesped: "Luis Ramirez"
    },
    {
        numero: 9,
        tipo: "Suite",
        precioNoche: 320,
        estado: "Libre",
        huesped: ""
    },
    {
        numero: 10,
        tipo: "Sencilla",
        precioNoche: 125,
        estado: "Ocupada",
        huesped: "Sofía Torres"
    }
]



function menu() {
    let opc = prompt("==== Hotel ===  \n1.Registra una nueva habitacion \n2..Listar habitaciones \n3.Bucar habitaciones por numero\n4.Cambiar estado de una habitacion\n5.eliminar habitacion\n6.Salir");
    console.log(typeof opc)
    switch (opc) {
        case '1':
            Registrar(menu);
            break;
        case '2':
            Listar_Habitaciones(menu);
            break;
        case '3':
            Busacar_nombre(menu)
            break;
        case '4':
            ActualizarEstado(menu);
            break;
        case '5':
            Eliminar(menu)
            break;
        case '6':
            console.log('Saliendo ....');
            break;
        default:
            console.log('opcion no valida');
            menu();
            break;

    }

}
menu();

function Registrar(callback) {
    let Numero = Number(prompt("Ingrese el numero de la habitacion: "));
    let Tipo = prompt("Ingrese el tipo de la habitacion: ");
    let Precio = Number(prompt("Ingrese el precio de la habitacion: "));
    let Estado = prompt("Ingrese el estado de la habitacion: ");
    let Huesped = prompt("Ingrese el nombre del huesped de la habitacion: ");

    let habitacion = { Numero, Tipo, Precio, Estado, Huesped };
    console.log("validando información de la habitación...")
    setTimeout(function () {
        Habitaciones.push(habitacion);
        console.log("Habitacion registrada correctamente")
        console.log("Gracias por su preferencia " + Huesped)
        callback();
    }, 2000)
}


function Listar_Habitaciones(callback) {
    console.log('========== Habitaciones  ========');
    if (Habitaciones.length > 0) {
        Habitaciones.forEach(habitacion => {
            console.log(
                "Estado:", habitacion.estado,
                "| Huésped:", habitacion.huesped,
                "| Número:", habitacion.numero,
                "| Precio/Noche:", habitacion.precioNoche,
                "| Tipo:", habitacion.tipo
            );
        });
        callback();
    } else {
        console.log("No existen registro")
        callback();
    }
}

function Busacar_nombre(callback) {
    let numero_a_buscar = Number(prompt('ingrese un numero..... '));
    console.log('en busqueda');
    setTimeout(function () {
        let buscado = Habitaciones.find(habitacion => {
            return habitacion.numero=== numero_a_buscar
        });
        if (buscado) {
            console.log(
                "Estado:", buscado.estado,
                "| Huésped:", buscado.huesped,
                "| Número:", buscado.numero,
                "| Precio/Noche:", buscado.precioNoche,
                "| Tipo:", buscado.tipo
            );
            callback();
        } else {
            console.log("No existen registro")
            callback();
        }
    }, 2000)
}

function ActualizarEstado (callback){
    let numero_a_buscar = Number(prompt("Ingrese el numero de la habitacion a cambiar"));
    console.log("Esperando al personal......")
    setTimeout(function () {
        let buscado = Habitaciones.find(habitacion => {
            return habitacion.numero=== numero_a_buscar
        });
        if (buscado) {
            let estadomodificar = prompt("Ingrese el nuevo estado (Libre, Ocupado, Limpieza): ");
            Habitaciones.estado = estadomodificar;
            console.log("Estado modificado...");
        }else{
            console.log("El numero no existe");
        }
        callback();
    }, 3000);   
}


function Eliminar (callback){
    let numero = Number(prompt("Ingrese el numero de la habitacion a eliminar"));
    console.log("En busqueda...")
    const buscar = Habitaciones.findIndex(habitacion => habitacion.numero === numero);
    if(buscar){
        Habitaciones.splice(numero,1);
    }
    console.log("Eliminado")
    callback();
}
