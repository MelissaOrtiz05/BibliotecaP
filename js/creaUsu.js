var divtabla = document.getElementById('datosT')
var i = 1;
var btnGuardar = document.getElementById('crearUsuario')
var btnEditar = document.getElementById('editarUsuario')
btnEditar.disabled = true;
document.getElementById('txtCapital').disabled = true;

localUsuario = window.localStorage

var arregloUsuario = localUsuario.getItem("arregloUsuario");
arregloUsuario = JSON.parse(arregloUsuario);

function CrearUsuario() {
    var btnNu = false;

    var cedulaDigitado = document.getElementById("txtcedula").value;
    var nombreDigitado = document.getElementById("txtnombre").value;
    var apellidoADigitado = document.getElementById("txtpApellido").value;
    var telefonoDigitado = document.getElementById("txtTelefono").value;
    var correoDigitado = document.getElementById("txtCorreo").value;
    var nombraUsuarioDigitado = document.getElementById("txtNombreUsu").value;
    var direccionDigitado = document.getElementById("txtdireccion").value;
    var fechaNacDigitado = document.getElementById("dateFecha").value;
    var pais = document.getElementById("txtPais").value;
    var capitalDigitado = document.getElementById("txtCapital").value;
    btnT = false;
    btnF = false;

    if ((cedulaDigitado == "") || (nombreDigitado == "") || (apellidoADigitado == "") || (telefonoDigitado == "") || (correoDigitado == "") || (nombraUsuarioDigitado == "") || (direccionDigitado == "") || (fechaNacDigitado == "") || (pais == "") || (capitalDigitado == "") || (direccionDigitado == "")) {
        alert("Debe llenar todos los campos")
    } else {
        if (arregloUsuario == null) {
            arregloUsuario = [];
            btnNu = true;
            if ((btnNu == true)) {
                var newUsuario = JSON.stringify({
                    cc: cedulaDigitado,
                    nombre: nombreDigitado,
                    apellido: apellidoADigitado,
                    telefono: telefonoDigitado,
                    correo: correoDigitado,
                    nombreUsu: nombraUsuarioDigitado,
                    direccion: direccionDigitado,
                    fechaNac: fechaNacDigitado,
                    pais: pais,
                    capital: capitalDigitado
                });
                arregloUsuario.push(newUsuario);
                localUsuario.setItem("arregloUsuario", JSON.stringify(arregloUsuario));
                alert("Datos guardados");
                btnNu = false;
            }

        } else {
            for (var i in arregloUsuario) {
                var cven = JSON.parse(arregloUsuario[i]);
                if (cedulaDigitado == cven.cc) {
                    btnT = true;
                } else {
                    btnF = true;
                }
            }
            if (btnT == true) {
                alert("----Usted ya tiene una cuenta----")

            } else if (btnF == true) {
                var newUsuario = JSON.stringify({
                    cc: cedulaDigitado,
                    nombre: nombreDigitado,
                    apellido: apellidoADigitado,
                    telefono: telefonoDigitado,
                    correo: correoDigitado,
                    nombreUsu: nombraUsuarioDigitado,
                    direccion: direccionDigitado,
                    fechaNac: fechaNacDigitado,
                    pais: pais,
                    capital: capitalDigitado
                });
                arregloUsuario.push(newUsuario);
                localUsuario.setItem("arregloUsuario", JSON.stringify(arregloUsuario));
                alert("Datos guardados");


            }
        }
        limpiarCaja();
        mostrarTabla();
    }

}
function limpiarCaja() {
    document.getElementById("txtcedula").value = "";
    document.getElementById("txtnombre").value = "";
    document.getElementById("txtpApellido").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtNombreUsu").value = "";
    document.getElementById("dateFecha").value = "";
    document.getElementById("txtPais").value = "";
    document.getElementById("txtdireccion").value = "";
    document.getElementById("txtCapital").value = "";

}
function mostrarTabla() {
    divtabla.style.display = '';
    tablallena = "";
    for (var i in arregloUsuario) {

        var cli = JSON.parse(arregloUsuario[i]);

        var tabla = document.getElementById("elementos");

        tablallena += "<tr><td>" + cli.cc + "</td><td>" + cli.nombre + "</td><td>" + cli.apellido + "</td><td>" + cli.correo + "</td>   <td>" + cli.telefono + "</td><td>" + cli.nombreUsu + "</td><td>" + cli.direccion + "</td><td>" + cli.fechaNac + "</td><td>" + cli.pais + "</td><td>" + cli.capital + "</td><td><a alt='editarC" + i + "'class='btn btn-primary mx-5 'onClick='Edito(this)'>Editar</a></td><td><a class='btn btn-danger mx-5 'onClick='Elimino(this)'>Elimiar</a></td></tr>"


        tabla.innerHTML = tablallena;
    }


    limpiarCaja();

}


function Edito(td) {
    btnEditar.disabled = false;
    btnGuardar.disabled = true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById('txtcedula').value = selectedRow.cells[0].innerHTML;
    document.getElementById('txtcedula').disabled = "true";
    document.getElementById('txtCapital').disabled = true;

    document.getElementById('txtnombre').value = selectedRow.cells[1].innerHTML;
    document.getElementById('txtpApellido').value = selectedRow.cells[2].innerHTML;
    document.getElementById('txtCorreo').value = selectedRow.cells[3].innerHTML;

    document.getElementById('txtTelefono').value = selectedRow.cells[4].innerHTML;
    document.getElementById('txtNombreUsu').value = selectedRow.cells[5].innerHTML;
    document.getElementById('txtdireccion').value = selectedRow.cells[6].innerHTML;

    document.getElementById('dateFecha').value = selectedRow.cells[7].innerHTML;
    document.getElementById('txtPais').value = selectedRow.cells[8].innerHTML;
    document.getElementById('txtCapital').value = selectedRow.cells[9].innerHTML;

}
 
function editarUsu() {
    var nombreDigitado = document.getElementById("txtnombre").value;
    var apellidoADigitado = document.getElementById("txtpApellido").value;
    var telefonoDigitado = document.getElementById("txtTelefono").value;
    var correoDigitado = document.getElementById("txtCorreo").value;
    var nombraUsuarioDigitado = document.getElementById("txtNombreUsu").value;
    var direccionDigitado = document.getElementById("txtdireccion").value;
    var fechaNacDigitado = document.getElementById("dateFecha").value;
    var pais = document.getElementById("txtPais").value;
    var capitalDigitado = document.getElementById("txtCapital").value;  
    var cedulaDigitado = document.getElementById("txtcedula").value;
    for (var i in arregloUsuario){
        var datoEd=JSON.parse(arregloUsuario[i]);
        if(datoEd.cc==cedulaDigitado){
            arregloUsuario[i]=JSON.stringify({

                cc: cedulaDigitado,
                nombre: nombreDigitado,
                apellido: apellidoADigitado,
                telefono: telefonoDigitado,
                correo: correoDigitado,
                nombreUsu: nombraUsuarioDigitado,
                direccion: direccionDigitado,
                fechaNac: fechaNacDigitado,
                pais: pais,
                capital: capitalDigitado
            });
            localUsuario.setItem("arregloUsuario", JSON.stringify(arregloUsuario));
            mostrarTabla();
}          }  alert("Datos Editado");
btnGuardar.disabled=false;
btnEditar.disabled=true;
document.getElementById("txtcedula").disabled = false;
}
function capitalBusc() {

    pais = document.getElementById('txtPais').value;

    axios.get('https://restcountries.eu/rest/v2/name/' + pais)
        .then(function (response) {

            cap = response.data[0].capital;

            document.getElementById('txtCapital').value = cap;//response.data[0].capital;
            document.getElementById('txtCapital').disabled = true;

        })
        .catch(function (error) {
            console.log(error);


        });

}


function Elimino(td) {
    if(confirm('Estas seguro de esto? si lo borras perderas la información')){
        row = td.parentElement.parentElement;
        var elimina=document.getElementById('elimiarId').value=row.cells[0].innerHTML;
    for(var i in arregloUsuario){
        var datosEli =JSON.parse(arregloUsuario[i]);
        if (datosEli.cc == elimina){
            arregloUsuario.splice(i,1);
            localUsuario.setItem("arregloUsuario",JSON.stringify(arregloUsuario));
            alert("Se eliminó")
            document.getElementById('mitabla').deleteRow(row.rowIndex);
        }
    }
    }
    }
    