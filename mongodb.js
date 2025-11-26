import { getConnection } from "./Base_de_Datos/coneccion.js";

// Obtener usuarios
const getUsuarios = async () => {
    try {
        const database = await getConnection();   // Debe devolver la DB, no el client
        const usuarios = await database.collection("usuarios").find().toArray();

        console.table(usuarios);
        console.log("Listado de usuarios!");
    } catch (error) {
        console.error("Error en getUsuarios:", error);
    }
};

// Insertar usuario
const addUsuarios = async () => {
    const usuario = { 
        name: "Carlos", 
        dni: "12345678", 
        codigo: "2023788455", 
        enable: true 
    };

    try {
        const database = await getConnection();   // Debe devolver la DB
        const result = await database.collection("usuarios").insertOne(usuario);

        console.log(result);
        console.log("Usuario añadido");
    } catch (error) {
        console.error("Error en addUsuarios:", error);
    }
};

await getUsuarios();   // ahora sí existe
await addUsuarios();
