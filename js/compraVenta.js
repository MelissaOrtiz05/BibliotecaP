
var divtablaCompraVenta = document.getElementById('datosEmpresaCVen')
var i = 1;
var btnGuardar = document.getElementById('Enviar')
var btnEditar = document.getElementById('Editar')
btnEditar.disabled = true;
localCVenta = window.localStorage

var arregloComprVenta = localCVenta.getItem("arregloComprVenta");
arregloComprVenta = JSON.parse(arregloComprVenta);

function enviarCompraVenta() {
    var btnNu = false;

    var codDigitado = document.getElementById("codigoLibro").value;
    var nombreDigitado = document.getElementById("nombreLibro").value;
    var cantTiempo = document.getElementById("cantMeses").value;
    var tpLibroDigitado = document.getElementById("tpLibro").value;
    var emailDigitado = document.getElementById("email").value;
    var editorialDigitado = document.getElementById("editorial").value;
    var precioLibroDigitado = document.getElementById("precioLibro").value;
    var autorLiDigitado = document.getElementById("autorLi").value;
    var aPublicacionDigitado = document.getElementById("aPublicacion").value;
    var numPaginaDigitado = document.getElementById("numPagina").value;
    btnT = false;
    btnF = false;

    if ((codDigitado == "") || (nombreDigitado == "") || (cantTiempo == "") || (tpLibroDigitado == "") || (emailDigitado == "") || (editorialDigitado == "") || (precioLibroDigitado == "") || (autorLiDigitado == "") || (aPublicacionDigitado == "") || (numPaginaDigitado == "")) {
        alert("Debe llenar todos los campos")
    } else {
        if (arregloComprVenta == null) {
            arregloComprVenta = [];
            btnNu = true;
            if ((btnNu == true)) {
                var newVc = JSON.stringify({
                    codigo: codDigitado,
                    nombre: nombreDigitado,
                    cantTiempo: cantTiempo,
                    tpLibro: tpLibroDigitado,
                    email: emailDigitado,
                    editorial: editorialDigitado,
                    precioLibro: precioLibroDigitado,
                    autorLi: autorLiDigitado,
                    aPublicacion: aPublicacionDigitado,
                    numPagina: numPaginaDigitado
                });
                arregloComprVenta.push(newVc);
                localCVenta.setItem("arregloComprVenta", JSON.stringify(arregloComprVenta));
                alert("Datos guardados");
                btnNu = false;
            }
            }else{
            for (var i in arregloComprVenta) {
                var cven = JSON.parse(arregloComprVenta[i]);
                if (codDigitado == cven.codigo) {
                    btnT = true;
                } else {
                    btnF = true;
                }
            }

            if (btnT == true) {
                alert("----Código existe----")

            } else if (btnF == true) {

                var newVc = JSON.stringify({
                    codigo: codDigitado,
                    nombre: nombreDigitado,
                    cantTiempo: cantTiempo,
                    tpLibro: tpLibroDigitado,
                    email: emailDigitado,
                    editorial: editorialDigitado,
                    precioLibro: precioLibroDigitado,
                    autorLi: autorLiDigitado,
                    aPublicacion: aPublicacionDigitado,
                    numPagina: numPaginaDigitado
                });
                arregloComprVenta.push(newVc);
                localCVenta.setItem("arregloComprVenta", JSON.stringify(arregloComprVenta));
                alert("Datos guardados");
            }
        }
        limpiarFormu();
        mostrarTabla();
    }
}
    function mostrarTabla() {
        divtablaCompraVenta.style.display = '';
        tablallena = "";
        for (var i in arregloComprVenta) {

            var cvent = JSON.parse(arregloComprVenta[i]);

            var tabla = document.getElementById("elementosCVen");

            tablallena += "<tr><td>" + cvent.codigo + "</td><td>" + cvent.nombre + "</td><td>" + cvent.cantTiempo + "</td><td>" + cvent.tpLibro + "</td><td>" + cvent.email + "</td><td>" + cvent.editorial + "</td><td>" + cvent.precioLibro + "</td><td>" + cvent.autorLi + "</td><td>" + cvent.aPublicacion + "</td><td>" + cvent.numPagina + "</td><td><a alt='editarC" + i + "'class='btn btn-primary mx-5 'onClick='Edito(this)'>Editar</a></td><td><a class='btn btn-danger mx-5 'onClick='Elimino(this)'>Elimiar</a></td></tr>"


            tabla.innerHTML = tablallena;
        }


        limpiarFormu();

    }

    function limpiarFormu() {
        document.getElementById("codigoLibro").value = "";
        document.getElementById("nombreLibro").value = "";
        document.getElementById("cantMeses").value = "";
        document.getElementById("tpLibro").value = "";
        document.getElementById("email").value = "";
        document.getElementById("editorial").value = "";
        document.getElementById("precioLibro").value = "";
        document.getElementById("autorLi").value = "";
        document.getElementById("aPublicacion").value = "";
        document.getElementById("numPagina").value = "";


    }

    function Edito(td) {
        btnEditar.disabled = false;
        btnGuardar.disabled = true;
        selectedRow = td.parentElement.parentElement;
        document.getElementById("codigoLibro").value = selectedRow.cells[0].innerHTML;

        document.getElementById("codigoLibro").disabled = "true";
        document.getElementById("nombreLibro").value = selectedRow.cells[1].innerHTML;
        document.getElementById("cantMeses").value = selectedRow.cells[2].innerHTML;
        document.getElementById("tpLibro").value = selectedRow.cells[3].innerHTML;
        document.getElementById("email").value = selectedRow.cells[4].innerHTML;
        document.getElementById("editorial").value = selectedRow.cells[5].innerHTML;
        document.getElementById("precioLibro").value = selectedRow.cells[6].innerHTML;
        document.getElementById("autorLi").value = selectedRow.cells[7].innerHTML;
        document.getElementById("aPublicacion").value = selectedRow.cells[8].innerHTML;
        document.getElementById("numPagina").value = selectedRow.cells[9].innerHTML;


    }


    function editarCVent() {
        var codDigitado = document.getElementById("codigoLibro").value;
        var nombreDigitado = document.getElementById("nombreLibro").value;
        var cantTiempo = document.getElementById("cantMeses").value;
        var tpLibroDigitado = document.getElementById("tpLibro").value;
        var emailDigitado = document.getElementById("email").value;
        var editorialDigitado = document.getElementById("editorial").value;
        var precioLibroDigitado = document.getElementById("precioLibro").value;
        var autorLiDigitado = document.getElementById("autorLi").value;
        var aPublicacionDigitado = document.getElementById("aPublicacion").value;
        var numPaginaDigitado = document.getElementById("numPagina").value;
        for (var i in arregloComprVenta) {
            var datosInd = JSON.parse(arregloComprVenta[i]);
            if (datosInd.codigo == codDigitado) {

                arregloComprVenta[i] = JSON.stringify({
                    codigo: codDigitado,
                    nombre: nombreDigitado,
                    cantTiempo: cantTiempo,
                    tpLibro: tpLibroDigitado,
                    email: emailDigitado,
                    editorial: editorialDigitado,
                    precioLibro: precioLibroDigitado,
                    autorLi: autorLiDigitado,
                    aPublicacion: aPublicacionDigitado,
                    numPagina: numPaginaDigitado
                });

                localCVenta.setItem('arregloComprVenta', JSON.stringify(arregloComprVenta));
                mostrarTabla();
                alert("Dato editado");
            }
            document.getElementById("codigoLibro").disabled = false;
            limpiarFormu();
            btnGuardar.disabled = false;
            btnEditar.disabled = true;
        }
    }

    function Elimino(td) {

        if (confirm('Estas seguro de esto? si lo borras perderas la informacion')) {


            row = td.parentElement.parentElement;
            var prueba = document.getElementById("elimiarId").value = row.cells[0].innerHTML;
            for (var i in arregloComprVenta) {
                var datosInd = JSON.parse(arregloComprVenta[i]);

                if (datosInd.codigo == prueba) {
                    arregloComprVenta.splice(i, 1);
                    localCVenta.setItem("arregloComprVenta", JSON.stringify(arregloComprVenta));

                    document.getElementById("tablaCVen").deleteRow(row.rowIndex);
                    alert("Se eliminó el registro");

                }
            }
        }
    }



