/*
map() : Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.
*/
function mostrarConsolaMap() {
  console.log("------ map()");
  const arrayMap = [1, 2, 3, 4, 5];
  console.log("arrayMap", arrayMap);
  const arrayMapResult = arrayMap.map((elemento) => elemento * -1);
  console.log("arrayMap", arrayMap);
  console.log("arrayMapResult", arrayMapResult);
}
/*
filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.
*/
function mostrarConsolaFilter() {
  console.log("------ filter()");
  const arrayFilter = [1, 2, 3, 4, 5];
  console.log("arrayFilter", arrayFilter);
  const arrayFilterResult = arrayFilter.filter((elemento) => elemento >= 3);
  console.log("arrayFilter", arrayFilter);
  console.log("arrayFilterResult", arrayFilterResult);
}
/*
forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
*/
function mostrarConsolaForEach() {
  console.log("------ forEach()");
  const arrayforEach = ["banana", "manzana", "naranja", "pera"];
  console.log("arrayforEach", arrayforEach);
  arrayforEach.forEach((elemento, i) => {
    console.log(`${elemento} se encuentra en la posición ${i}`);
  });
}
/*
find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
*/
function mostrarConsolaFind() {
  console.log("------ find()");
  const arrayFind = [1, 2, 3, 4, 5];
  console.log("arrayFind", arrayFind);
  const FindResult = arrayFind.find((elemento) => elemento > 3);
  console.log("FindResult", FindResult);
}
/*
sort() : Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.
*/
function mostrarConsolaSort() {
  console.log("------ sort()");
  const arraySortNumeros = [1, 3, 2, 8, 5, 7, 6];
  const arraySortletras = ["g", "d", "c", "o", "d", "e", "v"];
  console.log("arraySortNumeros", arraySortNumeros);
  const arraySortNumerosResultDesc = arraySortNumeros.sort((a, b) =>
    a > b ? -1 : 1
  );
  console.log("arraySortNumerosResultDesc", arraySortNumerosResultDesc);
  const arraySortNumerosResultAsc = arraySortNumeros.sort((a, b) =>
    a < b ? -1 : 1
  );
  console.log("arraySortNumerosResultAsc", arraySortNumerosResultAsc);

  console.log("arraySortletras", arraySortletras);
  const arraySortLetrasResultDesc = arraySortletras.sort((a, b) =>
    a > b ? -1 : 1
  );
  console.log("arraySortLetrasResultDesc", arraySortLetrasResultDesc);
  const arraySortLetrasResultAsc = arraySortletras.sort((a, b) =>
    a < b ? -1 : 1
  );
  console.log("arraySortLetrasResultAsc", arraySortLetrasResultAsc);
}
/*
some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.
*/
function mostrarConsolaSome() {
  console.log("------ some()");
  const arraySome = [1, 3, 2, 8, 5, 7, 6];
  console.log("arraySome", arraySome);
  const arraySomeTrue = arraySome.some((elemento) => elemento > 6);
  console.log("arraySomeTrue > 6", arraySomeTrue);
  const arraySomeFalse = arraySome.some((elemento) => elemento > 15);
  console.log("arraySomeFalse > 15", arraySomeFalse);
}
/*
every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.
*/
function mostrarConsolaEvery() {
  console.log("------ every()");
  const arrayEvery = [1, 3, 2, 8, 5, 7, 6];
  console.log("arrayEvery", arrayEvery);
  const arrayEveryTrue = arrayEvery.every((elemento) => elemento > 0);
  console.log("arrayEveryTrue > 0", arrayEveryTrue);
  const arrayEveryFalse = arrayEvery.every((elemento) => elemento > 1);
  console.log("arraySomeFalse > 1", arrayEveryFalse);
}
/*
concat() : Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
*/
function mostrarConsolaConcat() {
  console.log("------ concat()");
  const arrayConcat = [1, 3, 2, 8, 5, 7, 6];
  console.log("arrayConcat", arrayConcat);
  const arrayConcatAumenta = [10, 11, 12, 13];
  console.log("arrayConcatAumenta", arrayConcatAumenta);
  const arrayConcatResult = arrayConcat.concat(arrayConcatAumenta);
  console.log("arrayConcatResult", arrayConcatResult);
}
/*
includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
 */
function mostrarConsolaIncludes() {
  console.log("------ includes()");
  const arrayIncludes = [1, 3, 2, 8, 5, 7, 6];
  console.log("arrayIncludes", arrayIncludes);
  console.log("arrayIncludes True 8", arrayIncludes.includes(8));
  console.log("arrayIncludes False 19", arrayIncludes.includes(19));
}
/*
join() : Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.
 */
function mostrarConsolaJoin() {
  console.log("------ join()");
  const arrayJoin = ["banana", "manzana", "naranja", "pera"];
  console.log("arrayJoin", arrayJoin);
  console.log("arrayJoin '' ", arrayJoin.join(""));
  console.log("arrayJoin '|-|'", arrayJoin.join("|-|"));
}
/*
reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.
*/
function mostrarConsolaReduce() {
  console.log("------ reduce()");
  const arrayReduce = [1, 3, 2, 8, 5, 7, 6];
  console.log("arrayReduce", arrayReduce);
  const arrayReduceResult = arrayReduce.reduce(
    (acumulador, elemento) => acumulador + elemento
  );
  console.log("arrayReduceResult", arrayReduceResult);
}
/*
indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
*/
function mostrarConsolaIndexOf() {
  console.log("------ indexOf()");
  const arrayIndexOf = [1, 3, 2, 8, 5, 7, 6];
  console.log("arrayIndexOf", arrayIndexOf);
  const arrayIndexOfResult = arrayIndexOf.indexOf(7);
  console.log("arrayIndexOfResult", arrayIndexOfResult);
}
/*
findIndex() : Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1
*/
function mostrarConsolaFindIndexOf() {
  console.log("------ findIndex()");
  const arrayFindIndex = ["Pedro", "Alberto", "Raquel", "Lorena"];
  console.log("arrayFindIndex", arrayFindIndex);
  const arrayFindIndexResultOk = arrayFindIndex.findIndex(
    (elemento) => elemento == "Raquel"
  );
  console.log("arrayFindIndexResultOk", arrayFindIndexResultOk);
  const arrayFindIndexResultError = arrayFindIndex.findIndex(
    (elemento) => elemento == "Ana"
  );
  console.log("arrayFindIndexResultError", arrayFindIndexResultError);
}
/*
fill() : Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.
*/
function mostrarConsolaFill() {
  console.log("------ fill()");
  const arrayFill = [1, 3, 2, 8, 5, 7, 6];
  console.log("arrayFill", arrayFill);
  const arrayFillResult1 = arrayFill.fill(10, 3);
  console.log("arrayFillResult1", arrayFillResult1);
  const arrayFillResult2 = arrayFill.fill(-1, 2, arrayFill.length);
  console.log("arrayFillResult2", arrayFillResult2);
}
/*
push() : Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
*/
function mostrarConsolaPush() {
  console.log("------ push()");
  const arrayPush = ["a", "b", "c", "d"];
  console.log("arrayPush", arrayPush);
  arrayPush.push("m");
  console.log("arrayPush", arrayPush);
}
/*
pop() : Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
 */
function mostrarConsolaPop() {
  console.log("------ pop()");
  const arrayPop = ["a", "b", "c", "d"];
  console.log("arrayPop", arrayPop);
  arrayPop.pop();
  console.log("arrayPop", arrayPop);
}
/*
shift() : Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
*/
function mostrarConsolaShift() {
  console.log("------ shift()");
  const arrayShift = ["borrable", "a", "b", "c", "d"];
  console.log("arrayShift", arrayShift);
  arrayShift.shift();
  console.log("arrayShift", arrayShift);
}
/*
unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
*/
function mostrarConsolaUnshift() {
  console.log("------ unshift()");
  const arrayUnshift = ["a", "b", "c", "d"];
  console.log("arrayUnshift", arrayUnshift);
  arrayUnshift.unshift("x");
  console.log("arrayUnshift", arrayUnshift);
}
/*
slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
*/
function mostrarConsolaSlice() {
  console.log("------ slice()");
  const arraySlice = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("arraySlice", arraySlice);
  const arraySliceResult = arraySlice.slice(5, 7);
  console.log("arraySliceResult Pos. 5/7 (no incluido)", arraySliceResult);
}
/*
reverse() : Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.
*/
function mostrarConsolaReverse() {
  console.log("------ reverse()");
  const arrayReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("arrayReverse", arrayReverse);
  const arrayReverseResult = arraySlice.reverse();
  console.log("arrayReverseResult", arrayReverseResult);
}
/*
splice() : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
 */
function mostrarConsolaSplice() {
  console.log("------ splice()");
  const arraySplice = ["Pedro", "Alberto", "Raquel", "Lorena"];
  console.log("arraySplice", arraySplice);
  arraySplice.splice(3, 0, "Samuel");
  console.log("arraySplice", arraySplice);
}
/*
lastIndexOf() : Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.
 */
function mostrarConsolaLastIndexOf() {
  console.log("------ lastIndexOf()");
  const arrayLastIndexOf = ["Lorena", "Pedro", "Alberto", "Raquel", "Lorena"];
  console.log(
    "arrayLastIndexOf Lorena",
    arrayLastIndexOf.lastIndexOf("Lorena")
  );
}

/*
flat() : Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada
 */
function mostrarConsolaFlat() {
  console.log("------ flat()");
  const arrayFlat = [1, 2, 3, 4, 5, 6, [10, 11, 12, 13], 7, 8, 9];
  console.log("arrayFlat", arrayFlat);
  console.log("arrayFlat.flat", arrayFlat.flat());
}
/*
isArray() : Determina si el valor pasado es un Array.
*/
function mostrarConsolaIsArray() {
  console.log("------ isArray()");
  const arrayIsArray1 = [1, 2, 3];
  const arrayIsArray2 = [];
  let noSoyArray;
  console.log("arrayIsArray1 isArray: ", Array.isArray(arrayIsArray1));
  console.log("arrayIsArray2 isArray: ", Array.isArray(arrayIsArray2));
  console.log("noSoyArray isArray: ", Array.isArray(noSoyArray));
}
/*
from() : Crea una nueva instancia de Array a partir de un objeto iterable.
 */
function mostrarConsolaFrom() {
  console.log("------ from()");
  const cadena =
    "El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, que son objetos tipo lista de alto nivel.";
  const arrayFromResult = Array.from(cadena);
  console.log("arrayFromResult", arrayFromResult);
}
