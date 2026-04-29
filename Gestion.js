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
            huesped: "Ana Martínez"
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
            huesped: "Luis Ramírez"
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



function menu(){
    let opc = prompt("==== Hotel ===  \n1.Registra una nueva habitacion \n2..Listar habitaciones \n3.Bucar habitaciones por numero\n4.Cambiar estado de una habitacion\n5.eliminar habitacion\n6.Salir");
    console.log(typeof opc)
    switch (opc) {
        case '1':
            console.log('opcion 1');
            menu();
            break;
        case '2':
            console.log('opcion 2');
            menu();
            break;
        case '3':
            console.log('opcion 3')
            menu();
            break;
        case '4':
            console.log('opcion 4');
            menu();
            break;
        case '5':
            console.log('opcion 5');
            menu();
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