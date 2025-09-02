/* 
    que es el closure?
    los clousure permiten acceder al ambito de una funcion exterior desde una funcion interior. en javaScript los closure se crean cada ves que una funcion es creada 
    los clouseure no son siempre utilisados es cuando una funcion accede a una variablefuera de su contexto.
    al trabajar con closure entra en juego el concepto alcanse de las variables 

    a diferencia de otros conceptos como funciones, variables u otros. los closures no son siempre utilizados.
    
    -Aprender el concepto es saber identificar cuando lo estas utilizando , Probablemente es que ya lo has usado cientos de veces.
    -Tienes una closure cuando una funcion cualquiera accede a una variable fuera de su contexto.
        ambito lexico
*/


const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);
    
    function parent(){    // funcion interna
        const inner = 2;
        console.log(myNumber,myGlobal);
        
        function child(){
            console.log(inner,myNumber,myGlobal);
        }
        return child();
    }
    return parent();
}
myFunction();