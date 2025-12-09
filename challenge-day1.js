/*
  ==============================================
  DESAFÍO DÍA 1: LÓGICA DE VALIDACIÓN DE SEGURIDAD
  ING. ADÁN DOMENECH | S.W.E. SPECIALIST (FORENSIC CS)
  ==============================================
*/

// [1] DATOS DEL INTENTO DE ACCESO (Actualmente fallan las 3 reglas)
const protocol = "HTTP";
const ip_address = "192.168.1.10";
const access_token = "ABC123XYZ";

// [2] REGLAS DEL SISTEMA FORENSE
const VALID_PROTOCOL = "HTTPS";
const VALID_IP_RANGE = "192.168.1.";
const VALID_TOKEN = "G5T4B7R";

// ==========================================
// *** CÓDIGO FINAL AUDITADO ***
// ==========================================

// 1. Crea una variable booleana para verificar el protocolo.
const isProtocolValid = (protocol === VALID_PROTOCOL);

// 2. Crea una variable booleana para verificar la IP.
const isIPValid = ip_address.startsWith(VALID_IP_RANGE);

// 3. Crea una variable booleana para verificar el Token.
const isTokenValid = (access_token === VALID_TOKEN);

// 4. Usa el operador lógico '&&' (AND) y el 'if/else' para tomar la decisión.
if (isProtocolValid && isIPValid && isTokenValid) {
    // Si los TRES son TRUE, se ejecuta esto:
    console.log("ACCESO AUTORIZADO. Bienvenido, S.W.E. Specialist.");
} else {
    // Si AL MENOS UNO es FALSE, se ejecuta esto:
    console.log("ALERTA DE SEGURIDAD: Acceso Denegado. Fallas detectadas:");
    
    // Identificar fallas específicas
    if (!isProtocolValid) {
        console.log(" -> ERROR: Protocolo de Conexión Inseguro (HTTP).");
    }
    if (!isIPValid) {
        console.log(" -> ERROR: IP de Origen Fuera de Rango Autorizado.");
    }
    if (!isTokenValid) {
        console.log(" -> ERROR: Token de Acceso Inválido.");
    }
}
