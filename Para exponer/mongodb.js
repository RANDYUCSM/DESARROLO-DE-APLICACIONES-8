import { getConnection } from "./Base_de_Datos/coneccion.js";

// Obtener usuarios
const getUsuarios = async () => {
    try {
        const database = await getConnection();   
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
        name: "Ricardo", 
        correo: "ricardo.g@email.com", 
        telefono: "987654321", 
        enable: true 
    };

    try {
        const database = await getConnection();   
        const result = await database.collection("usuarios").insertOne(usuario);

        console.log(result);
        console.log("Usuario añadido");
    } catch (error) {
        console.error("Error en addUsuarios:", error);
    }
};

await getUsuarios();   
await addUsuarios();
