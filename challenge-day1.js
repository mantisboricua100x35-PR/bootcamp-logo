/*
  ==============================================
  DESAFÍO DÍA 1: LÓGICA DE VALIDACIÓN DE SEGURIDAD
  ING. ADÁN DOMENECH | S.W.E. SPECIALIST (FORENSIC CS)
  ==============================================
*/

// [1] DATOS DEL INTENTO DE ACCESO (Actualmente fallan las 3 reglas)
const protocol = "HTTP"; // Debe ser HTTPS
const ip_address = "192.168.1.10"; // Rango permitido: 192.168.1.0/24
const access_token = "ABC123XYZ"; // Token Válido: G5T4B7R

// [2] REGLAS DEL SISTEMA FORENSE
const VALID_PROTOCOL = "HTTPS";
const VALID_IP_RANGE = "192.168.1."; // Cualquier IP que inicie con este prefijo
const VALID_TOKEN = "G5T4B7R";

// ==========================================
// *** COMIENZA AQUÍ TU PROGRAMACIÓN (TAREA) ***
// ==========================================

// 1. Crea una variable booleana para verificar el protocolo.
const isProtocolValid = (protocol === VALID_PROTOCOL);


// 2. Crea una variable booleana para verificar la IP. (Pista: usa .startsWith() en JavaScript)
//    Ejemplo: const isIPValid = ip_address.startsWith(VALID_IP_RANGE);


// 3. Crea una variable booleana para verificar el Token.


// 4. Usa el operador lógico '&&' (AND) con un 'if/else' para verificar si las tres son TRUE.
//    Si es TRUE: console.log("ACCESO AUTORIZADO");
//    Si es FALSE: console.log("ALERTA DE SEGURIDAD"); y la razón del fallo.
