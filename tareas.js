let fs = require("fs"); //requiero modulo fs

module.exports = moduloDeTareas ={ // exporto el modulo de tareas
      leerJSON:()=>{
          let tareas= fs.readFileSync("./tareas.json", "utf-8"); //leo el modulo json
          return JSON.parse(tareas) //parseo el modulo json
     },
      escribirJSON: (titulo, estado)=>{ // creo funcion escribir json
          let nuevaTarea = {
              titulo: titulo,
              estado: "pendiente"
          }
          let tareasAnteriores = moduloDeTareas.leerJSON(); //leo archivo json
          tareasAnteriores.push(muevaTarea); //agrego nueva tarea al array
          moduloDeTareas.guardarJSON(tareasAnteriores) //guardo los cambios
},
     guardarJSON: function(info){ //creo funcion guardar json
         let nuevoJSON = JSON.stringify(info) //aplico stringify
         fs.writeFileSync("./tareas.JSON", nuevoJSON, "utf-8") //escribe la variable nuevojson y lo codifica

     },
     filtrarJSON: (estado1) => { //filtra el array por estado de tarea
         let tareas = moduloDeTareas.leerJSON(); //lee archivo json y crea variable
         let tareasFiltradas = tareas.filter(tarea =>{  //filtra modulo de tareas
             return tarea.estado === estado1 // guarda lo filtrado en la nueva variable
         })
         return tareasFiltradas; //retorna la variable resultante a la funcion
     }
}
