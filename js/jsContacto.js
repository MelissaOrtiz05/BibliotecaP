
var divtabla = document.getElementById('datosT')
var i = 1;
var btnGuardar = document.getElementById('guardar')
var btnEditar = document.getElementById('editar')
btnEditar.disabled = true;

localContacto = window.localStorage

var arregloInfo = localContacto.getItem("arregloInfo");
arregloInfo = JSON.parse(arregloInfo);

function guardarCont() {
  var cheq = "";
  var generoDig = "";
  var btnNu = false;


  var idDigitado = document.getElementById("txtid").value;
  var nombreDigitado = document.getElementById("txtnombre").value;
  var pApellidoADigitado = document.getElementById("txtpApellido").value;
  var SApellidoDigitado = document.getElementById("txtsApellido").value;
  var correoDigitado = document.getElementById("txtCorreo").value;
  var fechaNacDigitado = document.getElementById("dateFecha").value;
  var edadDigitado = document.getElementById("txtEdad").value;
  var telefonoDigitado = document.getElementById("txtTelefono").value;
  var tipoLibroDigitado = document.getElementById("opcion").value;
  var pais = document.getElementById("txtPaisC").value;
  var codigo = document.getElementById("txtPostal").value;
  if (document.getElementById('precios').checked) {
    cheq = "Precios";
  } else if (document.getElementById('consultarLi').checked) {
    cheq = "Consultar libro";
  } else if (document.getElementById('consultarCom').checked) {
    cheq = "Consultar compra de libros";
  } else if (document.getElementById('consultarAlq').checked) {
    cheq = "Consultar alquiler de libros";
  }

  if (document.getElementById('F').checked) {
    generoDig = "Femenino";
  } else if (document.getElementById('M').checked) {
    generoDig = "Masculino";
  }
  btnT = false;
  btnF = false;

  if (idDigitado.length < 5) {
    alert("Número de cédula debe ser mayor a 10 digitos")
  } else {
    if ((idDigitado.length < 5) && (nombreDigitado == "") || (pApellidoADigitado == "") || (SApellidoDigitado == "") || (correoDigitado == "") || (fechaNacDigitado == "") || (edadDigitado == "") || (telefonoDigitado == "") || ((cheq != "Precios") && (cheq != "Consultar libro") && (cheq != "Consultar compra de libros") && (cheq != "Consultar alquiler de libros")) || ((generoDig != "Femenino") && (generoDig != "Femenino")) || (pais == "")) {
      alert("Debe llenar todos los campos")
    } else {

      if (arregloInfo == null) {
        arregloInfo = [];
        btnNu = true;
        if ((btnNu == true)) {
          var newC = JSON.stringify({
            id: idDigitado,
            nombre: nombreDigitado,
            pApellido: pApellidoADigitado,
            sApellido: SApellidoDigitado,
            correo: correoDigitado,
            fechaNac: fechaNacDigitado,
            edad: edadDigitado,
            telefono: telefonoDigitado,
            tipoLibro: tipoLibroDigitado,
            pais: pais,
            codigo: codigo,
            motivo: cheq,
            genero: generoDig
          });
          arregloInfo.push(newC);
          localContacto.setItem("arregloInfo", JSON.stringify(arregloInfo));
          alert("Datos guardados");
          btnNu = false;
        }
      }else{
        for (var i in arregloInfo) {

          var cli = JSON.parse(arregloInfo[i]);
    
          if (idDigitado == cli.id) {
            btnT = true;
          } else {
            btnF = true;
          }
        }
        if (btnT == true) {
          alert("----Cédula existe----")
        } else if (btnF == true)
        {
    
          var newC = JSON.stringify({
            id: idDigitado,
            nombre: nombreDigitado,
            pApellido: pApellidoADigitado,
            sApellido: SApellidoDigitado,
            correo: correoDigitado,
            fechaNac: fechaNacDigitado,
            edad: edadDigitado,
            telefono: telefonoDigitado,
            tipoLibro: tipoLibroDigitado,
            pais: pais,
            codigo: codigo,
            motivo: cheq,
            genero: generoDig
          });
          arregloInfo.push(newC);
          localContacto.setItem("arregloInfo", JSON.stringify(arregloInfo));
          alert("Datos guardados");    
        }

      }





      limpiarFormu();
      mostrarTabla();
    }


  }
}

function mostrarTabla() {
  divtabla.style.display = '';
  tablallena = "";
  for (var i in arregloInfo) {

    var cli = JSON.parse(arregloInfo[i]);

    var tabla = document.getElementById("elementos");

    tablallena += "<tr><td>" + cli.id + "</td><td>" + cli.nombre + "</td><td>" + cli.pApellido + "</td><td>" + cli.sApellido + "</td><td>" + cli.correo + "</td><td>" + cli.fechaNac + "</td><td>" + cli.edad + "</td><td>" + cli.telefono + "</td><td>" + cli.tipoLibro + "</td><td>" + cli.motivo + "</td><td>" + cli.genero + "</td><td>" + cli.pais + "</td><td>" + cli.codigo + "</td><td><a alt='editarC" + i + "'class='btn btn-primary mx-5 'onClick='Edito(this)'>Editar</a></td><td><a class='btn btn-danger mx-5 'onClick='Elimino(this)'>Elimiar</a></td></tr>"


    tabla.innerHTML = tablallena;
  }


  limpiarFormu();

}

function Edito(td) {
  btnEditar.disabled = false;
  btnGuardar.disabled = true;
  selectedRow = td.parentElement.parentElement;
  document.getElementById("txtid").value = selectedRow.cells[0].innerHTML;

  document.getElementById("txtid").disabled = "true";
  document.getElementById("txtnombre").value = selectedRow.cells[1].innerHTML;
  document.getElementById("txtpApellido").value = selectedRow.cells[2].innerHTML;
  document.getElementById("txtsApellido").value = selectedRow.cells[3].innerHTML;
  document.getElementById("txtCorreo").value = selectedRow.cells[4].innerHTML;
  document.getElementById("dateFecha").value = selectedRow.cells[5].innerHTML;
  document.getElementById("txtEdad").value = selectedRow.cells[6].innerHTML;
  document.getElementById("txtTelefono").value = selectedRow.cells[7].innerHTML;
  document.getElementById("txtPaisC").value = selectedRow.cells[11].innerHTML;
  document.getElementById("txtPostal").value = selectedRow.cells[12].innerHTML;

  if (selectedRow.cells[8].innerHTML == "Misterio y Terror") {
    document.getElementById("opcion").options.item(0).selected = 'selected';
  } else if (selectedRow.cells[8].innerHTML == "Romance y Drama") {
    document.getElementById("opcion").options.item(1).selected = 'selected';
  } else if (selectedRow.cells[8].innerHTML == "Ingeneria") {
    document.getElementById("opcion").options.item(2).selected = 'selected';
  }
  if (selectedRow.cells[10].innerHTML == "Femenino") {
    document.getElementById("F").checked = true;

  } else if (selectedRow.cells[10].innerHTML == "Masculino") {
    document.getElementById("M").checked = true;
  }
  if (selectedRow.cells[9].innerHTML == "Precios") {
    document.getElementById("precios").checked = true;
  } else if (selectedRow.cells[9].innerHTML == "Consultar libro") {
    document.getElementById("consultarLi").checked = true;
  } else if (selectedRow.cells[9].innerHTML == "Consultar compra de libros") {
    document.getElementById("consultarCom").checked = true;

  } else if (selectedRow.cells[9].innerHTML == "Consultar alquiler de libros") {
    document.getElementById("consultarAlq").checked = true;
  }
}
function limpiarFormu() {
  document.getElementById("txtid").value = "";
  document.getElementById("txtnombre").value = "";
  document.getElementById("txtpApellido").value = "";
  document.getElementById("txtsApellido").value = "";
  document.getElementById("txtCorreo").value = "";
  document.getElementById("dateFecha").value = "";
  document.getElementById("txtEdad").value = "";
  document.getElementById("txtTelefono").value = "";
  document.getElementById("txtPaisC").value = "";
  document.getElementById("txtPostal").value = "";
  document.getElementById("opcion").value = "Terror";
  document.getElementById('precios').checked = false;
  document.getElementById('consultarLi').checked = false;
  document.getElementById('consultarCom').checked = false;
  document.getElementById('consultarAlq').checked = false;
  document.getElementById("F").checked = false;
  document.getElementById("M").checked = false;

}


function editarC() {

  var idDigitado = document.getElementById("txtid").value;
  var nombreDigitado = document.getElementById("txtnombre").value;
  var pApellidoADigitado = document.getElementById("txtpApellido").value;
  var SApellidoDigitado = document.getElementById("txtsApellido").value;
  var correoDigitado = document.getElementById("txtCorreo").value;
  var fechaNacDigitado = document.getElementById("dateFecha").value;
  var edadDigitado = document.getElementById("txtEdad").value;
  var telefonoDigitado = document.getElementById("txtTelefono").value;
  var pais = document.getElementById("txtPaisC").value;
  var codigo = document.getElementById("txtPostal").value;
  var tipoLibroDigitado = document.getElementById("opcion").value;
  if (document.getElementById('precios').checked) {
    var cheq = "Precios";
  } else if (document.getElementById('consultarLi').checked) {
    var cheq = "Consultar libro";
  } else if (document.getElementById('consultarCom').checked) {
    var cheq = "Consultar compra de libros";
  } else if (document.getElementById('consultarAlq').checked) {
    var cheq = "Consultar alquiler de libros";
  }

  if (document.getElementById('F').checked) {
    var generoDig = "Femenino";
  } else if (document.getElementById('M').checked) {
    var generoDig = "Masculino";
  }

  for (var i in arregloInfo) {
    var datosInd = JSON.parse(arregloInfo[i]);

    if (datosInd.id == idDigitado) {

      arregloInfo[i] = JSON.stringify({
        id: idDigitado,
        nombre: nombreDigitado,
        pApellido: pApellidoADigitado,
        sApellido: SApellidoDigitado,
        correo: correoDigitado,
        fechaNac: fechaNacDigitado,
        edad: edadDigitado,
        telefono: telefonoDigitado,
        tipoLibro: tipoLibroDigitado,
        pais: pais,
        codigo: codigo,
        motivo: cheq,
        genero: generoDig
      });
      localContacto.setItem('arregloInfo', JSON.stringify(arregloInfo));
      mostrarTabla();
      alert("Dato editado");
    }
    document.getElementById("txtid").disabled = false;
    limpiarFormu();
    btnGuardar.disabled = false;
    btnEditar.disabled = true;

  }
}
function Elimino(td) {

  if (confirm('Estas seguro de esto? si lo borras perderas la informacion')) {


    row = td.parentElement.parentElement;
    var prueba = document.getElementById("elimiarId").value = row.cells[0].innerHTML;
    for (var i in arregloInfo) {
      var datosInd = JSON.parse(arregloInfo[i]);

      if (datosInd.id == prueba) {
        arregloInfo.splice(i, 1);
        localContacto.setItem("arregloInfo", JSON.stringify(arregloInfo));

        document.getElementById("mitabla").deleteRow(row.rowIndex);
        alert("Se eliminó el registro");

      }
    }
  }



}







