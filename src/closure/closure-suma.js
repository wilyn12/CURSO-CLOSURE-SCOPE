export function sumwhithClosure(a){
    return function(b){
        return a+b;
    }
}
console.log(sumwhithClosure((7)(3)));

