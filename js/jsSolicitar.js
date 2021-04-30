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
