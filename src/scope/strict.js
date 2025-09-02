/* 
    el modo estricto tiene varios cambios en la semantica normal de javascript
        1. elimina algunos errores silenciosos en java script cambiandolo para que lancen errores 
        2. Corrige errrores que hacen dificil para los motores de javascript realizar optimizaciones: a veces el codigo estricto puede correr mas rapidoque un codigo identico pero no estricto.
        3. Prohibe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript
*/

'use strict';
pi = 3.1416;
console.log(pi);

function myFunction(){
    'use strict';
    return pi = 3.1416;
}
console.log(myFunction());