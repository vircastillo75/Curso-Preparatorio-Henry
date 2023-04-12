/*var listaDeCompras = [];

//asignar valores dentro de un arreglo
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechugas";
console.log(listaDeCompras);

//para recuperar los elementos de un arreglo
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);
listaDeCompras[1];

// length permite saber cuantos elementos tiene el arreglo
console.log(listaDeCompras.length);

//METODOS DE INSERCION de elementos
var colores = ["amarillo", "azul"];

//PUSH agrega un elemento al final
colores.push("rojo");

//UNSHIFT agrega al inicio
colores.unshift ("verde");
console.log(colores);

//POP elimina el ultimo elemento
colores.pop();
console.log(colores);

//SHIFT elimina el primer elemento
colores.shift();
console.log(colores);

//METODOS INCLUDES
var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes ("Dali");
console.log (incluyeDali);

var incluyeDali = pintores.includes ("Monet");
console.log (incluyeDali);


//METODO EVERY
var numeros =[10,6,7,9];
var cumpleCondicion = numeros.every ((num)=>{
    return num>5;
});
console.log (cumpleCondicion);

METODO SPLIT para transformar string en arreglos
var palabra ="Henri";
var palabraSeparada = palabra.split('');
console.log (palabraSeparada);

//queremos arreglar la ultima letra i por y
palabraSeparada.pop();
palabraSeparada.push('y');
console.log (palabraSeparada);

//METODO JOIN convierta arreglo en string
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

//METODO FOR EACH.... realiza una acciom para cada elemento
var numeros = [1, 2, 3, 4];
numeros.forEach ((num)=> console.log(num));

//METODO MAP si quisieramos realizar un cambio sobre el arreglo
var numeros =[1, 2, 3, 4];
var masUno = numeros.map((num)=>{
    return num+1;
})
    console.log(masUno);
    
    //BUCLE FOR 
 var = arr = [1, 2, 3, 4, 5];
for (var i=0; i= arr.length; i++  ){
console.log[i];
} 

function encontrarLetraP (string) {
var letras = string.split('');
for (let i =0; i < letras.length; i++){
    if (letras[i]=== 'p') {
        console.log ('Si contiene letra P');
    }
}

}
encontrarLetraP ('javascript');
encontrarLetraP ('Henry');
encontrarLetraP ('papa');*/

//BUCLE WHILE se ejecuta mientras la condicion
// es evaluada como cierta

var arr =[];
while (arr.length <5) {
    arr.push ('BOOM');
}
console.log (arr);

