/** LIBRERIAS**/
export var section_administrador = document.getElementById("section_administrador");
export var section_login = document.getElementById("section_login");

// Librería de usuario
import {user} from "./username.js";
import { adminstrador } from "./administrador.js";

// Función de verificación de credenciales
export function login(username,password){

    for(let i = 0; i<=7;i++){
        if(username === user[i][1] || username === user[i][5]){
            if(password === user[i][2]){
                console.log("Ahora tienes acceso");
                adminstrador();
            }else{
                console.log('Constraseña incorrecta');
            }
        }else {
            console.log("Usuario incorrecto");
        }
    }

}