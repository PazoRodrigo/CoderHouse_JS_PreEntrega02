function fnMap() {
  LimpiarConsola();
  mostrarConsolaMap();
}
function fnFilter() {
  LimpiarConsola();
  mostrarConsolaFilter();
}
function fnForEach() {
  LimpiarConsola();
  mostrarConsolaForEach();
}
function fnFind() {
  LimpiarConsola();
  mostrarConsolaFind();
}
function fnSort() {
  LimpiarConsola();
  mostrarConsolaSort();
}
function fnSome() {
  LimpiarConsola();
  mostrarConsolaSome();
}
function fnEvery() {
  LimpiarConsola();
  mostrarConsolaEvery();
}
function fnConcat() {
  LimpiarConsola();
  mostrarConsolaConcat();
}
function fnIncludes() {
  LimpiarConsola();
  mostrarConsolaIncludes();
}
function fnJoin() {
  LimpiarConsola();
  mostrarConsolaJoin();
  let vector = [];
  let mensaje =
    "Join. Llenará el arreglo para luego agregarle que una los elementos";
  llenarVector(vector, mensaje);
  do {
    obj = prompt(
      "longitud del Arreglo: " + vector.length + "Ingrese '--' para terminar"
    );
    if (obj !== "--") {
      console.log(vector.join(obj));
    }
  } while (obj != "--");
}
function fnReduce() {
  LimpiarConsola();
  mostrarConsolaReduce();
}
function fnIndexOf() {
  LimpiarConsola();
  mostrarConsolaIndexOf();
}
function fnFindIndex() {
  LimpiarConsola();
  mostrarConsolaFindIndex();
}
function fnFill() {
  LimpiarConsola();
  mostrarConsolaFill();
}
function fnPush() {
  LimpiarConsola();
  mostrarConsolaPush();
  let vector = [];
  let mensaje = "Push. Llenará el arreglo";
  llenarVector(vector, mensaje);
}
function fnPop() {
  LimpiarConsola();
  mostrarConsolaPop();
  let vector = [];
  let mensaje = "Pop. Llenará el arreglo para luego quitarle elementos";
  llenarVector(vector, mensaje);
  // do {
  //   obj = prompt(
  //     "longitud del Arreglo: " +
  //       vector.length +
  //       " Ingrese 'xx' para borrar elemento. '--' para terminar"
  //   );
  //   if (obj === "xx") {
  //     vector.pop();
  //     mostrarVectorResultante(vector);
  //   }
  // } while (obj != "--" || vector.length == 0);
}
function fnShift() {
  LimpiarConsola();
  mostrarConsolaShift();
}
function fnUnshift() {
  LimpiarConsola();
  mostrarConsolaUnshift();
}
function fnSlice() {
  LimpiarConsola();
  mostrarConsolaSplice();
}
function fnReverse() {
  LimpiarConsola();
  mostrarConsolaReverse();
}
function fnSplice() {
  LimpiarConsola();
  mostrarConsolaSlice();
}
function fnLastIndexOf() {
  LimpiarConsola();
  mostrarConsolaLastIndexOf();
}
function fnFlat() {
  LimpiarConsola();
  mostrarConsolaFlat();
}
function fnIsArray() {
  LimpiarConsola();
  mostrarConsolaIsArray();
}
function fnFrom() {
  LimpiarConsola();
  mostrarConsolaFrom();
}

const mostrarVectorResultante = (vectorVisualizar) =>
  console.table(vectorVisualizar);
const LimpiarConsola = () => console.clear();

function llenarVector(vectorUtilizar, mensaje) {
  alert(mensaje);
  let obj;
  do {
    obj = prompt(
      "longitud del Arreglo: " +
        vectorUtilizar.length +
        " Ingrese el nuevo elemento. '--' para terminar"
    );
    if (obj !== "--") {
      vectorUtilizar.push(obj);
      mostrarVectorResultante(vectorUtilizar);
    }
  } while (obj != "--");
  return vectorUtilizar;
}
function TodosEnConsola() {
  LimpiarConsola();
  mostrarConsolaMap();
  mostrarConsolaFilter();
  mostrarConsolaForEach();
  mostrarConsolaFind();
  mostrarConsolaSort();
  mostrarConsolaSome();
  mostrarConsolaEvery();
  mostrarConsolaConcat();
  mostrarConsolaIncludes();
  mostrarConsolaJoin();
  mostrarConsolaReduce();
  mostrarConsolaIndexOf();
  mostrarConsolaFindIndex();
  mostrarConsolaFill();
  mostrarConsolaPush();
  mostrarConsolaPop();
  mostrarConsolaShift();
  mostrarConsolaUnshift();
  mostrarConsolaSplice();
  mostrarConsolaReverse();
  mostrarConsolaSlice();
  mostrarConsolaLastIndexOf();
  mostrarConsolaFlat();
  mostrarConsolaIsArray();
  mostrarConsolaFrom();
}
