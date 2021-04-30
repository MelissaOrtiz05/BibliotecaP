var divtabla = document.getElementById('datosT')
var i = 1;
var btnAlquilar = document.getElementById('alquilar')
var btnEditar = document.getElementById('EditarA')

btnEditar.disabled = true;
localAlq = window.localStorage;
var arregloAl = localAlq.getItem("arregloAl");
arregloAl = JSON.parse(arregloAl);
if (arregloAl == null) {
    arregloAl = [];
}

function alquilarAlq() {

 //   var idDig = document.getElementById('txtId').value;
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


    // console.log(c)()
  /*  if ((idDig.length > 3) || (idDig.length <= 0)) {
        alert("Número de id no cumple los requisitos")
    } else {
*/
        if (((libro1 == "0") && (libro2 == "0") && (libro3 == "0") && (libro4 == "0") && (libro5 == "0") && (libro6 == "0") && (libro7 == "0") && (libr8 == "0") && (libro9 == "0") && (libro10 == "0") && (libro11 == "0") && (libro12 == "0"))) {
            alert("Debe llenar por lo menos un campos")


        } else {
            var newAl= JSON.stringify({
                idAlq: i++,
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
            });

            arregloAl.push(newAl);

            localAlq.setItem("arregloAl", JSON.stringify(arregloAl));
            alert("Datos guardados");
            btnNu = false;

        }
        limpiar()
        mostrarAlq()
  //  }
}
function mostrarAlq() {
    
    divtabla.style.display = '';

    tablallena = "";
var id=1
    for (var i in arregloAl) {
            var alquilar = JSON.parse(arregloAl[i]);
            var tablaA = document.getElementById("elementos");            tablallena += "<tr><td>"
                + id +
                "</td><td>" + alquilar.lib1 + "</td><td>"
                + alquilar.subt1 + "</td><td>"
                + alquilar.lib2 + "</td><td>"
                + alquilar.subt2 + "</td><td>"
                + alquilar.lib3 + "</td><td>"
                + alquilar.subt3 + "</td><td>"
                + alquilar.lib4 + "</td><td>"
                + alquilar.subt4 + "</td><td>"
                + alquilar.lib5 + "</td><td>"
                + alquilar.subt5 + "</td><td>"
                + alquilar.lib6 + "</td><td>"
                + alquilar.subt6 + "</td><td>"
                + alquilar.lib7 + "</td><td>"
                + alquilar.subt7 + "</td><td>"
                + alquilar.lib8 + "</td><td>"
                + alquilar.subt8 + "</td><td>"
                + alquilar.lib9 + "</td><td>"
                + alquilar.subt9 + "</td><td>"
                + alquilar.lib10 + "</td><td>"
                + alquilar.subt10 + "</td><td>"
                + alquilar.lib11 + "</td><td>"
                + alquilar.subt11 + "</td><td>"
                + alquilar.lib12 + "</td><td>"
                + alquilar.subt12 + "</td><td>"
                + alquilar.libTotal + "</td><td><a class='btn btn-primary mx-3'onClick='EditoAlq(this)'>Editar</a></td><td><a class='btn btn-danger mx-3 'onClick='EliminoAlq(this)'>Elimiar</a></td></tr>"
            tablaA.innerHTML = tablallena;

    id+=1;
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
    document.getElementById('txt2').value = selectedRow.cells[3].innerHTML;
    document.getElementById('txt3').value = selectedRow.cells[5].innerHTML;
    document.getElementById('txt4').value = selectedRow.cells[7].innerHTML;
    document.getElementById('txt5').value = selectedRow.cells[9].innerHTML;
    document.getElementById('txt6').value = selectedRow.cells[11].innerHTML;
    document.getElementById('txt7').value = selectedRow.cells[13].innerHTML;
    document.getElementById('txt8').value = selectedRow.cells[15].innerHTML;
    document.getElementById('txt9').value = selectedRow.cells[17].innerHTML;
    document.getElementById('txt10').value = selectedRow.cells[19].innerHTML;
    document.getElementById('txt11').value = selectedRow.cells[21].innerHTML;
    document.getElementById('txt12').value = selectedRow.cells[23].innerHTML;
}
function limpiar() {

    document.getElementById('txt1').value =0;
    document.getElementById('txt2').value =0;
    document.getElementById('txt3').value =0;
    document.getElementById('txt4').value =0;
    document.getElementById('txt5').value =0;
    document.getElementById('txt6').value =0;
    document.getElementById('txt7').value =0;
    document.getElementById('txt8').value =0;
    document.getElementById('txt9').value =0;
    document.getElementById('txt10').value =0;
    document.getElementById('txt11').value =0;
    document.getElementById('txt12').value =0;

}
function editarLibro() {
   // var idDig = document.getElementById('txtId').value;

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

    var idDigitadoA = document.getElementById("txtId").value;
    console.log(" -- -"+idDigitadoA)

    for (var i in arregloAl) {
        var datosIndi = JSON.parse(arregloAl[i]);
        console.log(datosIndi.idAlq+" -- -"+idDigitadoA)

     if(datosIndi.idAlq==idDigitadoA){
         arregloAl[i] = JSON.stringify( {
            idAlq: idDigitadoA,
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
        });
        localAlq.setItem("arregloAl", JSON.stringify(arregloAl));
        mostrarAlq();
    }
    
}        alert("Dato editado");


limpiar()


       
 btnAlquilar.disabled=false;
 btnEditar.disabled=true;
   
}

function EliminoAlq(td){

    if (confirm('Estas seguro de esto? si lo borras perderas la información')){
 

        row = td.parentElement.parentElement;
        var Elimina=document.getElementById("mitablaAlq").value = row.cells[0].innerHTML;
        //var idBuscarEli=row.cells[0];
        for (var i in arregloAl) {
            var datosInd = JSON.parse(arregloAl[i]);
            if(datosInd.idAlq==Elimina){
                arregloAl.splice(i,1);
                localAlq.setItem("arregloAl", JSON.stringify(arregloAl));

            alert("Se eliminó el registro");
            document.getElementById("mitablaAlq").deleteRow(row.rowIndex);

            }
        }
        mostrarAlq
    
    }



}