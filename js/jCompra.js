var divtablaC = document.getElementById('datosComp')
var i = 1;
var btnGuardar = document.getElementById('Enviar')
var btnEditar = document.getElementById('Editar')
btnEditar.disabled = true;

localSolicitud = window.localStorage

var arregloSolicitud = localSolicitud.getItem("arregloSolicitud");
arregloSolicitud = JSON.parse(arregloSolicitud);

function enviarSolicitud() {
  var btnNu = false;


  //var idDigitado = document.getElementById("txtid").value;
  var nombreDigitado = document.getElementById("nombre").value;
  var apellidoADigitado = document.getElementById("apellido").value;
  var cedulaDigitado = document.getElementById("cedula").value;
  var fechaNacDigitado = document.getElementById("fechadenacimiento").value;
  var correoDigitado = document.getElementById("email").value;
  var claveDigitado = document.getElementById("clave").value;
  var celualarDigitado = document.getElementById("celular").value;
  var nombreLibroDigitado = document.getElementById("nombredellibro").value;
  var categoriaLibroDigitado = document.getElementById("categoriadellibro").value;
  var ciudadDigitado = document.getElementById("ciudad").value;
  var barrioDigitado = document.getElementById("barrio").value;
  var direccionDigitado = document.getElementById("direccion").value;
  btnT = false;
  btnF = false;

  if ((nombreDigitado == "") || (apellidoADigitado == "") || (cedulaDigitado == "") || (fechaNacDigitado == "") || (correoDigitado == "") || (claveDigitado == "") || (celualarDigitado == "") || (nombreLibroDigitado == "") || (categoriaLibroDigitado == "") || (ciudadDigitado == "") || (barrioDigitado == "") || (direccionDigitado == "")) {
    alert("Debe llenar todos los campos")
  } else {
    if (arregloSolicitud == null) {
      arregloSolicitud = [];
      btnNu = true;
      if ((btnNu == true)) {

        var newSolicitud = JSON.stringify({
          clave: claveDigitado,
          nombre: nombreDigitado,
          apellido: apellidoADigitado,
          cedula: cedulaDigitado,
          fechaNac: fechaNacDigitado,
          correo: correoDigitado,
          celular: celualarDigitado,
          nombreLibro: nombreLibroDigitado,
          categoriaLibro: categoriaLibroDigitado,
          ciudad: ciudadDigitado,
          barrio: barrioDigitado,
          dirreccion: direccionDigitado
        });
        arregloSolicitud.push(newSolicitud);
        localSolicitud.setItem("arregloSolicitud", JSON.stringify(arregloSolicitud));
        alert("Datos guardados");
        btnNu = false;

      }
    } else {
      for (var i in arregloSolicitud) {
        var cven = JSON.parse(arregloSolicitud[i]);
        if (claveDigitado == cven.clave) {
          btnT = true;
        } else {
          btnF = true;
        }
      }
      if (btnT == true) {
        alert("----Código existe----")
      } else if (btnF == true) {
        var newSolicitud = JSON.stringify({
          clave: claveDigitado,
          nombre: nombreDigitado,
          apellido: apellidoADigitado,
          cedula: cedulaDigitado,
          fechaNac: fechaNacDigitado,
          correo: correoDigitado,
          celular: celualarDigitado,
          nombreLibro: nombreLibroDigitado,
          categoriaLibro: categoriaLibroDigitado,
          ciudad: ciudadDigitado,
          barrio: barrioDigitado,
          dirreccion: direccionDigitado
        });
        arregloSolicitud.push(newSolicitud);
        localSolicitud.setItem("arregloSolicitud", JSON.stringify(arregloSolicitud));
        alert("Datos guardados");
      }


    }
    mostrarCompra();

    limpiarSolicitud();

  }

}


function mostrarCompra() {
  divtablaC.style.display = '';
  tablallena = "";
  for (var i in arregloSolicitud) {

    var cvent = JSON.parse(arregloSolicitud[i]);

    var tabla = document.getElementById("elementosC");

    tablallena += "<tr><td>" + cvent.clave + "</td><td>" + cvent.nombre + "</td><td>" + cvent.apellido + "</td><td>" + cvent.cedula + "</td><td>" + cvent.fechaNac + "</td><td>" + cvent.correo + "</td><td>" + cvent.celular + "</td><td>" + cvent.nombreLibro + "</td><td>" + cvent.categoriaLibro + "</td><td>" + cvent.ciudad + "</td><td>" + cvent.barrio + "</td><td>" + cvent.dirreccion + "</td><td><a alt='editarC" + i + "'class='btn btn-primary mx-5 'onClick='Edito(this)'>Editar</a></td><td><a class='btn btn-danger mx-5 'onClick='Elimino(this)'>Elimiar</a></td></tr>"


    tabla.innerHTML = tablallena;
  }


  limpiarSolicitud();

}


function Edito(td) {
    btnEditar.disabled = false;
    btnGuardar.disabled = true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById('clave').value = selectedRow.cells[0].innerHTML;
    document.getElementById('clave').disabled = "true";
    document.getElementById('nombre').value = selectedRow.cells[1].innerHTML;
    document.getElementById('apellido').value = selectedRow.cells[2].innerHTML;
    document.getElementById('cedula').value = selectedRow.cells[3].innerHTML;
    document.getElementById('fechadenacimiento').value = selectedRow.cells[4].innerHTML;
    document.getElementById('email').value = selectedRow.cells[5].innerHTML;
    document.getElementById('celular').value = selectedRow.cells[6].innerHTML;
    document.getElementById('nombredellibro').value = selectedRow.cells[7].innerHTML;
    document.getElementById('categoriadellibro').value = selectedRow.cells[8].innerHTML;
    document.getElementById('ciudad').value = selectedRow.cells[9].innerHTML;
    document.getElementById('barrio').value = selectedRow.cells[10].innerHTML;
    document.getElementById('direccion').value = selectedRow.cells[11].innerHTML;
}

function limpiarSolicitud() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("cedula").value = "";
  document.getElementById("fechadenacimiento").value = "";
  document.getElementById("email").value = "";
  document.getElementById("clave").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("nombredellibro").value = "";
  document.getElementById("categoriadellibro").value = "";
  document.getElementById("ciudad").value = "";
  document.getElementById("barrio").value = "";
  document.getElementById("direccion").value = "";

}

function editarCompra() {
    var nombreEditar = document.getElementById("nombre").value;
    var apellidoAEditar = document.getElementById("apellido").value;
    var cedulaEditar= document.getElementById("cedula").value;
    var fechaNacEditar = document.getElementById("fechadenacimiento").value;
    var correoEditar = document.getElementById("email").value;
    var celualarEditar = document.getElementById("celular").value;
    var nombreLibroEditar= document.getElementById("nombredellibro").value;
    var categoriaLibroEditar = document.getElementById("categoriadellibro").value;
    var ciudadEditar = document.getElementById("ciudad").value;
    var barrioEditar = document.getElementById("barrio").value;
    var direccionEditar = document.getElementById("direccion").value;
    var clave = document.getElementById("clave").value;
for (var i in arregloSolicitud){
    var datoEd=JSON.parse(arregloSolicitud[i]);

  // alert(datoEd.clave)
     if(datoEd.clave==clave){
  //  console.log(clave)
arregloSolicitud[i]=JSON.stringify({
    clave: clave,
    nombre: nombreEditar,
    apellido: apellidoAEditar,
    cedula: cedulaEditar,
    fechaNac: fechaNacEditar,
    correo: correoEditar,
    celular: celualarEditar,
    nombreLibro: nombreLibroEditar,
    categoriaLibro: categoriaLibroEditar,
    ciudad: ciudadEditar,
    barrio: barrioEditar,
    dirreccion: direccionEditar
});
localSolicitud.setItem("arregloSolicitud", JSON.stringify(arregloSolicitud))
mostrarCompra();

}


}  alert("Dato editado");
btnGuardar.disabled=false;
btnEditar.disabled=true;
document.getElementById("clave").disabled = false;


}


function Elimino(td) {
if(confirm('Estas seguro de esto? si lo borras perderas la información')){
    row = td.parentElement.parentElement;
    var elimina=document.getElementById('idElim').value=row.cells[0].innerHTML;
for(var i in arregloSolicitud){
    var datosEli =JSON.parse(arregloSolicitud[i]);
    if (datosEli.clave == elimina){
        arregloSolicitud.splice(i,1);
        localSolicitud.setItem("arregloSolicitud",JSON.stringify(arregloSolicitud));
        alert("Se eliminó")
        document.getElementById('tablaC').deleteRow(row.rowIndex);
    }
}
}
}
