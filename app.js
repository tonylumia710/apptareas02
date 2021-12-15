let funcionesDeTareas = require("./tareas") //requiero el modulo de tareas
let process = require("process") //requiero procces,
let accion = process.argv[2] // requiero funcionalidad argv en posicion dos para que tome en consola lo que se escribe luego de: node[0] app.js¨[1],

switch (accion){ // condicional
    case "listar": // pasos a seguir con array vacio
        let tareas = funcionesDeTareas.leerJSON()
        if (tareas.length === 0){
            console.log("esta vacio");
        }else{
            tareas.forEach(tarea => { //pasos a seguir para mostrar listar tareas
                console.log("Titulo" + tarea.titulo + "- Estado" + tarea.estado)
            });
        }
        break;
    case "crear": //en caso de crear nueva tarea recepciona el valor 3 como titulo y el 4 entra por defecto como estado pendiente
        let titulo = process.argv[3].toLowerCase() // recibe el titulo y lo devuelve a minusculas
        funcionesDeTareas.escribirJSON(titulo, estado) //reescribe el archivo json
        console.log("Tarea agregada")
        break;
    case "filtrar": //filtra el array por estado
        let estado1 = process.argv[3].toLowerCase()
        let tareasFiltradas = funcionesDeTareas.filtrarJSON(estado1)
        if(tareasFiltradas.length === 0){
            console.log("-No existen tareas con ese estado-")
        }else{
            tareasFiltradas.forEach(tarea =>{
                console.log("Titulo" + tarea.titulo + "- Estado" + tarea.estado)   
            })
        }
        break;
    case undefined: 
        console.log("Tienes que pasarme una acción")
        break;
    default: console.log("No te entiendo")

}
        
