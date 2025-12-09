Desafío de Práctica: El Servidor de Contingencia
​Tu misión es crear un segundo sistema de seguridad que usa las mismas herramientas que aprendiste ( ===, .startsWith(), if/else).
​1. Crear el Archivo de Práctica
​Vamos a mantener el orden. Crea un nuevo archivo en tu repositorio llamado exactamente: practice-logic-1.js
​Paso a paso:
​Vuelve a la página principal de tu repositorio.
​Haz clic en "Agregar archivo" y luego en "Crear nuevo archivo".
​Nombra el archivo: practice-logic-1.js
​2. Código de Inicio (Datos y Reglas Nuevas)

/*
  ==============================================
  PRÁCTICA: SERVIDOR DE CONTINGENCIA (Día 1)
  ==============================================
*/

// [1] DATOS DEL INTENTO DE ACCESO (DEBEN FALLAR)
const usuario = "AdanD"; // Usuario Correcto: AdminForex
const ubicacion_ip = "10.0.0.50"; // Rango permitido: 10.0.0.xxx
const hora_acceso = 23; // Hora de Operación: 8 a.m. (8)

// [2] REGLAS DEL SISTEMA FORENSE DE CONTINGENCIA
const VALID_USER = "AdminForex";
const VALID_IP_PREFIX = "10.0.0."; // La IP debe empezar con este prefijo.
const VALID_HOUR = 8; // Solo se permite acceso a las 8 AM.

// ==========================================
// *** COMIENZA AQUÍ TU PROGRAMACIÓN ***
// ==========================================

// TAREA: Aplica la lógica que aprendiste.

// 1. Crea una variable booleana para verificar si el 'usuario' es el 'VALID_USER'.
// 2. Crea una variable booleana para verificar si la 'ubicacion_ip' comienza con 'VALID_IP_PREFIX'.
// 3. Crea una variable booleana para verificar si la 'hora_acceso' es la 'VALID_HOUR'.
// 4. Usa un 'if/else' con el operador '&&' para dar la decisión de ACCESO o ALERTA.
const isUserValid = (usuario === VALID_USER);
const isIPValid = ubicacion_ip.startsWith(VALID_IP_PREFIX);
const isTimeValid = (hora_acceso === VALID_HOUR);
if (isUserValid && isIPValid && isTimeValid) {
    console.log("ACCESO AUTORIZADO AL SERVIDOR DE CONTINGENCIA");
} else {
    console.log("ALERTA: INTENTO DE ACCESO NO AUTORIZADO");
}
// La decisión del Firewall (Escríbelo tú mismo)
if (isUserValid && isIPValid && isTimeValid) {
    console.log("ACCESO AUTORIZADO AL SERVIDOR DE CONTINGENCIA");
} else {
    console.log("ALERTA: INTENTO DE ACCESO NO AUTORIZADO");
}
