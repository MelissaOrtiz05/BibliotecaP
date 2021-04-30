var divtabla = document.getElementById('datosT')
var i = 1;
var btnAlquilar = document.getElementById('alquilar')
var btnEditar = document.getElementById('EditarA')

btnEditar.disabled = true;
localAlq = window.localStorage;
//localAlquiler= window.localStorage

var arregloAl = localAlq.getItem("arregloAl");
arregloAl = JSON.parse(arregloAl);
if (arregloAl == null) {
    arregloAl = [];
}

function alquilarAlq() {
    var idDig = document.getElementById('txtId').value;
    var libro1 = document.getElementById('txt1').value;
    var libro2 = document.getElementById('txt2').value;
    var libro3 = document.getElementById('txt3').value;
    var libro4 = document.getElementById('txt4').value;
    var libro5 = document.getElementById('txt5').value;
    var libro6 = document.getElementById('txt6').value;
    var libro7 = document.getElementById('txt7').value;
    var libr8 = document.getElementById('txt8').value;
    var libro9 = document.getElementById('txt9').value;
    var libro10 = document.getElementById('txt10').value;
    var libro11 = document.getElementById('txt11').value;
    var libro12 = document.getElementById('txt12').value;

    console.log(idDig, libro1.libro2, libro3)
    sblb1 = parseInt(libro1) * 30000
    sblb2 = parseInt(libro2) * 30000
    sblb3 = parseInt(libro3) * 30000
    sblb4 = parseInt(libro4) * 30000
    sblb5 = parseInt(libro5) * 30000
    sblb6 = parseInt(libro6) * 30000
    sblb7 = parseInt(libro7) * 30000
    sblb8 = parseInt(libr8) * 30000
    sblb9 = parseInt(libro9) * 30000
    sblb10 = parseInt(libro10) * 30000
    sblb11 = parseInt(libro11) * 30000
    sblb12 = parseInt(libro12) * 30000

    total = parseInt((libr8) * 30000) + parseInt((libro7) * 30000) + parseInt((libro6) * 30000) + parseInt((libro5) * 30000) + parseInt((libro4) * 30000) + parseInt((libro3) * 30000) + parseInt((libro2) * 30000) + parseInt((libro1) * 30000) + parseInt((libro9) * 30000) + parseInt((libro10) * 30000) + parseInt((libro11) * 30000) + parseInt((libro12) * 30000)


    tamanoIdAl = idDig.length;
    // console.log(c)()
    if ((idDig.length > 3) || (idDig.length <= 0)) {
        alert("Número de id no cumple los requisitos")
    } else {

        if (((libro1 == "0") && (libro2 == "0") && (libro3 == "0") && (libro4 == "0") || (libro5 == "0") && (libro6 == "0") && (libro7 == "0") && (libr8 == "0") && (libro9 == "0") && (libro10 == "0") && (libro11 == "0") && (libro12 == "0"))) {
            alert("Debe llenar por lo menos un campos")


        } else {
            var newAl = {
                idAlq: idDig,
                lib1: libro1,
                lib2: libro2,
                lib3: libro3,
                lib4: libro4,
                lib5: libro5,
                lib6: libro6,
                lib7: libro7,
                lib8: libr8,
                lib9: libro9,
                lib10: libro10,
                lib11: libro11,
                lib12: libro12,

                subt1: sblb1,
                subt2: sblb2,
                subt3: sblb3,
                subt4: sblb4,
                subt5: sblb5,
                subt6: sblb6,
                subt7: sblb7,
                subt8: sblb8,
                subt9: sblb9,
                subt10: sblb10,
                subt11: sblb11,
                subt12: sblb12,

                libTotal: total
            };

            arregloAl.push(newAl);

            localAlq.setItem(idDig, JSON.stringify(newAl));
            alert("Datos guardados");
        }
        limpiar()
        mostrarAlq()
    }
}
function mostrarAlq() {
    divtabla.style.display = '';

    tablallena = "";
    tablallena2 = "";

    for (var i = 0; i < localAlq.length; i++) {
        var key = localAlq.key(i);
        if (key.length < 3) {
            //   var cuerpo = document.getElementById("elementosA");
            //var cuerpob = document.getElementById("elementosB");
            var personaAJson = JSON.parse(localAlq.getItem(key));
            var tablaA = document.getElementById("elementos");
            var tablaB = document.getElementById("elementosB");

            tablallena += "<tr><td>"
                + key +
                "</td><td>" + personaAJson.lib1 + "</td><td>"
                + personaAJson.subt1 + "</td><td>"
                + personaAJson.lib2 + "</td><td>"
                + personaAJson.subt2 + "</td><td>"
                + personaAJson.lib3 + "</td><td>"
                + personaAJson.subt3 + "</td><td>"
                + personaAJson.lib4 + "</td><td>"
                + personaAJson.subt4 + "</td><td>"
                + personaAJson.lib5 + "</td><td>"
                + personaAJson.subt5 + "</td><td>"
                + personaAJson.lib6 + "</td><td>"
                + personaAJson.subt6 + "</td><td>"
                + personaAJson.lib7 + "</td><td>"
                + personaAJson.subt7 + "</td><td>"
                + personaAJson.lib8 + "</td><td>"
                + personaAJson.subt8 + "</td><td>"
                + personaAJson.lib9 + "</td><td>"
                + personaAJson.subt9 + "</td><td>"
                + personaAJson.lib10 + "</td><td>"
                + personaAJson.subt10 + "</td><td>"
                + personaAJson.lib11 + "</td><td>"
                + personaAJson.subt11 + "</td><td>"
                + personaAJson.lib12 + "</td><td>"
                + personaAJson.subt12 + "</td><td>"
                + personaAJson.libTotal + "</td><td><a class='btn btn-primary mx-3'onClick='EditoAlq(this)'>Editar</a></td><td><a class='btn btn-danger mx-3 'onClick='EliminoAlq(this)'>Elimiar</a></td></tr>"
            tablaA.innerHTML = tablallena;

    
        }
    }
    limpiar();

}

function EditoAlq(td) {
    btnEditar.disabled = false;
    btnAlquilar.disabled = true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById('txtId').value = selectedRow.cells[0].innerHTML;
    document.getElementById('txtId').disabled = "true";
    document.getElementById('txt1').value = selectedRow.cells[1].innerHTML;
    document.getElementById('txt2').value = selectedRow.cells[2].innerHTML;
    document.getElementById('txt3').value = selectedRow.cells[3].innerHTML;
    document.getElementById('txt4').value = selectedRow.cells[4].innerHTML;
    document.getElementById('txt5').value = selectedRow.cells[5].innerHTML;
    document.getElementById('txt6').value = selectedRow.cells[6].innerHTML;
    document.getElementById('txt7').value = selectedRow.cells[7].innerHTML;
    document.getElementById('txt8').value = selectedRow.cells[8].innerHTML;
    document.getElementById('txt9').value = selectedRow.cells[9].innerHTML;
    document.getElementById('txt10').value = selectedRow.cells[10].innerHTML;
    document.getElementById('txt11').value = selectedRow.cells[11].innerHTML;
    document.getElementById('txt12').value = selectedRow.cells[12].innerHTML;
    console.log(selectedRow.cells[13].innerHTML)
}
function limpiar() {
    document.getElementById('txtId').value = "";

    document.getElementById('txt1').value = "";
    document.getElementById('txt2').value = "";
    document.getElementById('txt3').value = "";
    document.getElementById('txt4').value = "";
    document.getElementById('txt5').value = "";
    document.getElementById('txt6').value = "";
    document.getElementById('txt7').value = "";
    document.getElementById('txt8').value = "";
    document.getElementById('txt9').value = "";
    document.getElementById('txt10').value = "";
    document.getElementById('txt11').value = "";
    document.getElementById('txt12').value = "";

}
function editarLibro() {
    var idDig = document.getElementById('txtId').value;

    var libro1 = document.getElementById('txt1').value;
    var libro2 = document.getElementById('txt2').value;
    var libro3 = document.getElementById('txt3').value;
    var libro4 = document.getElementById('txt4').value;
    var libro5 = document.getElementById('txt5').value;
    var libro6 = document.getElementById('txt6').value;
    var libro7 = document.getElementById('txt7').value;
    var libr8 = document.getElementById('txt8').value;
    var libro9 = document.getElementById('txt9').value;
    var libro10 = document.getElementById('txt10').value;
    var libro11 = document.getElementById('txt11').value;
    var libro12 = document.getElementById('txt12').value;

    sblb1 = parseInt(libro1) * 30000
    sblb2 = parseInt(libro2) * 30000
    sblb3 = parseInt(libro3) * 30000
    sblb4 = parseInt(libro4) * 30000
    sblb5 = parseInt(libro5) * 30000
    sblb6 = parseInt(libro6) * 30000
    sblb7 = parseInt(libro7) * 30000
    sblb8 = parseInt(libr8) * 30000
    sblb9 = parseInt(libro9) * 30000
    sblb10 = parseInt(libro10) * 30000
    sblb11 = parseInt(libro11) * 30000
    sblb12 = parseInt(libro12) * 30000

    total = parseInt((libr8) * 30000) + parseInt((libro7) * 30000) + parseInt((libro6) * 30000) + parseInt((libro5) * 30000) + parseInt((libro4) * 30000) + parseInt((libro3) * 30000) + parseInt((libro2) * 30000) + parseInt((libro1) * 30000) + parseInt((libro9) * 30000) + parseInt((libro10) * 30000) + parseInt((libro11) * 30000) + parseInt((libro12) * 30000)


    if (localAlq.getItem(idDig)) {
        var newAl = {
            idAlq: idDig,
            lib1: libro1,
            lib2: libro2,
            lib3: libro3,
            lib4: libro4,
            lib5: libro5,
            lib6: libro6,
            lib7: libro7,
            lib8: libr8,
            lib9: libro9,
            lib10: libro10,
            lib11: libro11,
            lib12: libro12,

            subt1: sblb1,
            subt2: sblb2,
            subt3: sblb3,
            subt4: sblb4,
            subt5: sblb5,
            subt6: sblb6,
            subt7: sblb7,
            subt8: sblb8,
            subt9: sblb9,
            subt10: sblb10,
            subt11: sblb11,
            subt12: sblb12,

            libTotal: total
        };
        localAlq.setItem(idDig, JSON.stringify(newAl));
        limpiar();
        alert("Campos editados de forma correcta");
        selectedRow.cells[0].innerHTML = newAl.idAlq;
        selectedRow.cells[1].innerHTML = newAl.lib1;
        selectedRow.cells[2].innerHTML = newAl.subt1;       
        selectedRow.cells[3].innerHTML = newAl.lib2;
        selectedRow.cells[4].innerHTML = newAl.subt2;
        selectedRow.cells[5].innerHTML = newAl.lib3;
        selectedRow.cells[6].innerHTML = newAl.subt3;
        selectedRow.cells[7].innerHTML = newAl.lib4;
        selectedRow.cells[8].innerHTML = newAl.subt4;
        selectedRow.cells[9].innerHTML = newAl.lib5;
        selectedRow.cells[10].innerHTML = newAl.subt5;
        selectedRow.cells[11].innerHTML = newAl.lib6;
        selectedRow.cells[12].innerHTML = newAl.subt6;
        selectedRow.cells[13].innerHTML = newAl.lib7;
        selectedRow.cells[14].innerHTML = newAl.subt7;
        selectedRow.cells[15].innerHTML = newAl.lib8;
        selectedRow.cells[16].innerHTML = newAl.subt8;
        selectedRow.cells[17].innerHTML = newAl.lib9;
        selectedRow.cells[18].innerHTML = newAl.subt9;
        selectedRow.cells[19].innerHTML = newAl.lib10;
        selectedRow.cells[20].innerHTML = newAl.subt10;
        selectedRow.cells[21].innerHTML = newAl.lib11;
        selectedRow.cells[22].innerHTML = newAl.subt11;
        selectedRow.cells[23].innerHTML = newAl.lib12;
        selectedRow.cells[24].innerHTML = newAl.subt12;
        selectedRow.cells[25].innerHTML = newAl.libTotal;
limpiar()
       
 btnAlquilar.disabled=false;
 btnEditar.disabled=true;
    } else {
        alert("Dato no encontrado");
    }
}

function EliminoAlq(td){

    if (confirm('Estas seguro de esto? si lo borras perderas la información')){
 

        row = td.parentElement.parentElement;
        document.getElementById("elimiarIdAlq").value = row.cells[0].innerHTML;
        var idDigitadoElim = document.getElementById("elimiarIdAlq").value;
        //var idBuscarEli=row.cells[0];
        if (localContacto.getItem(idDigitadoElim)) {
          alert("Se eliminó el registro");
          document.getElementById("mitablaAlq").deleteRow(row.rowIndex);
         localContacto.removeItem(idDigitadoElim);
         var num = document.getElementById('mitablaAlq').rows.length;

      
       // alert(num)
        if(num==1){
            divtabla.style.display='none';
          }}
    }



}
function eliminarAlqu() {
    var idDig = document.getElementById('txtId').value;
    if (localAlq.getItem(idDig)) {
        alert("Se eliminó el registro");
        localAlq.removeItem(idDig);
    } else {
        alert("No existe Id");

    }
}
