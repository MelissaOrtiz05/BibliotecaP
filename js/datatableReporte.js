function opciones() {
    tablaCont = document.getElementById('datosT');
    tablaAlq = document.getElementById('datosAlq2');
    //tablaAlq2 = document.getElementById('datosAlq2');
    tablaUsua = document.getElementById('datosTUsu');
    tablaCompra = document.getElementById('datosTComp');
    tablaCompraVenta = document.getElementById('datosEmpresaCVen');

    opc = document.getElementById('opcion').value;
    if (opc == 'seleccionV') {
      alert("Debe seleccionar una opción");
      tablaUsua.style.display = 'none';

      tablaCont.style.display = 'none';
      tablaAlq2.style.display = 'none';
      tablaCompraVenta.style.display='none';
    } else if (opc == 'Contactenos') {
       
      tablaCont.style.display = '';
      tablaAlq.style.display = 'none';
      tablaUsua.style.display = 'none';
      tablaCompra.style.display = 'none';
      tablaCompraVenta.style.display='none';

  
      localContacto = window.localStorage
      var arregloInfo = localContacto.getItem("arregloInfo");
      arregloInfo = JSON.parse(arregloInfo);
      tablallena = "";
      for (var i in arregloInfo) {
        var cli = JSON.parse(arregloInfo[i]);
        var tabla = document.getElementById("elementos");
        tablallena += "<tr><td>" + cli.id + "</td><td>" + cli.nombre + "</td><td>" + cli.pApellido + "</td><td>" + cli.sApellido + "</td><td>" + cli.correo + "</td><td>" + cli.fechaNac + "</td><td>" + cli.edad + "</td><td>" + cli.telefono + "</td><td>" + cli.tipoLibro + "</td><td>" + cli.motivo + "</td><td>" + cli.genero + "</td></tr>"
        tabla.innerHTML = tablallena;
        
      }
      $(document).ready(function() {
        $("#mitabla").DataTable({
      
        responsive: "true",
        dom: 'Bfrtip',
        buttons: [ {
          extend: 'excelHtml5',
          text: '<button class="btn btn-success"><i class="fas fa-file-excel"></i></button>',
          titleAttr: 'Exportar a excel',
          className: 'btn btn-success'
        }, {
          extend: 'pdfHtml5',
          text: '<button class="btn btn-danger"><i class="fas fa-file-pdf"></i></button>',
          titleAttr: 'Exportar a pdf',
          className: 'btn btn-danger'
        }, {
          extend: 'print',
          text: '<button class="btn btn-info"><i class="fas fa-print"></i></button>',
          titleAttr: 'Exportar a pdf',
          className: 'btn btn-danger'
        }
    
        ]
    });
    });     
    
} else if (opc == 'Alquiler de libros') {
    tablaCont.style.display = 'none';
    tablaUsua.style.display = 'none';
    tablaCompra.style.display = 'none';
    tablaAlq.style.display = '';
    tablaCompraVenta.style.display='none';


    localAlq = window.localStorage;
    var arregloAl = localAlq.getItem("arregloAl");
    arregloAl = JSON.parse(arregloAl);
    tablallenaAlq2 = ""
    tablaAlq2 = document.getElementById('datosAlq2');

    for (var i in arregloAl) {
      var alquilar = JSON.parse(arregloAl[i]);
    
        var tablaAlq2 = document.getElementById("elementosAlq2");
  
        tablallenaAlq2 += "<tr><td>" + alquilar.idAlq +
        "</td><td>" + alquilar.subt1 + "</td><td>" + alquilar.subt2 + "</td><td>" + alquilar.subt3 + "</td><td>" + alquilar.subt4 + "</td><td>" + alquilar.subt5 + "</td><td>" + alquilar.subt6 + "</td><td>" + alquilar.subt7 + "</td><td>"+ alquilar.subt8 + "</td><td>"+ alquilar.subt9 + "</td><td>"+ alquilar.subt10 + "</td><td>"+ alquilar.subt11 + "</td><td>"+ alquilar.subt12 + "</td><td>"+ alquilar.libTotal + "</td></tr>"
      tablaAlq2.innerHTML = tablallenaAlq2;
      
    }
    $(document).ready(function() {
        $("#mitablaAlq2").DataTable({
      
        responsive: "true",
        dom: 'Bfrtip',
        buttons: [ {
          extend: 'excelHtml5',
          text: '<button class="btn btn-success"><i class="fas fa-file-excel"></i></button>',
          titleAttr: 'Exportar a excel',
          className: 'btn btn-success'
        }, {
          extend: 'pdfHtml5',
          text: '<button class="btn btn-danger"><i class="fas fa-file-pdf"></i></button>',
          titleAttr: 'Exportar a pdf',
          className: 'btn btn-danger'
        }, {
          extend: 'print',
          text: '<button class="btn btn-info"><i class="fas fa-print"></i></button>',
          titleAttr: 'Exportar a pdf',
          className: 'btn btn-danger'
        }
    
        ]
    });
    });     
} else if (opc == 'Usuarios Nuevos') {
    tablaCont.style.display = 'none';
    tablaAlq.style.display = 'none';
    tablaCompra.style.display = 'none';
    tablaUsua.style.display = '';
    tablaCompraVenta.style.display='none';

    localUsuario = window.localStorage
    var arregloUsuario = localUsuario.getItem("arregloUsuario");
    arregloUsuario = JSON.parse(arregloUsuario);
    tablallenaUsu = "";
    for (var i in arregloUsuario) {
      var Usuario = JSON.parse(arregloUsuario[i]);
      var tablaU = document.getElementById("elementosUsu");
      tablallenaUsu += "<tr><td>" + Usuario.cc + "</td><td>" + Usuario.nombre + "</td><td>" + Usuario.apellido + "</td><td>" + Usuario.telefono + "</td><td>" + Usuario.correo + "</td><td>" + Usuario.celular + "</td><td>" + Usuario.nombreLibro + "</td><td>" + Usuario.categoriaLibro + "</td><td>" + Usuario.ciudad + "</td><td>" + Usuario.barrio + "</td></tr>"
      tablaU.innerHTML = tablallenaUsu;
    }

    $(document).ready(function() {
        $("#mitablaUsu").DataTable({
      
        responsive: "true",
        dom: 'Bfrtip',
        buttons: [ {
          extend: 'excelHtml5',
          text: '<button class="btn btn-success"><i class="fas fa-file-excel"></i></button>',
          titleAttr: 'Exportar a excel',
          className: 'btn btn-success'
        }, {
          extend: 'pdfHtml5',
          text: '<button class="btn btn-danger"><i class="fas fa-file-pdf"></i></button>',
          titleAttr: 'Exportar a pdf',
          className: 'btn btn-danger'
        }, {
          extend: 'print',
          text: '<button class="btn btn-info"><i class="fas fa-print"></i></button>',
          titleAttr: 'Exportar a pdf',
          className: 'btn btn-danger'
        }
    
      ]
  });
    });     


} else if (opc == 'Compra de libros') {
    tablaCont.style.display = 'none';
    tablaCompra.style.display = '';
    tablaAlq.style.display = 'none';
    tablaUsua.style.display = 'none';
    tablaCompraVenta.style.display='none';

    tablallenaCom = "";
    localSolicitud = window.localStorage
    var arregloSolicitud = localSolicitud.getItem("arregloSolicitud");
    arregloSolicitud = JSON.parse(arregloSolicitud);
        for (var i in arregloSolicitud) {
      var compra = JSON.parse(arregloSolicitud[i]);
      var tablaC = document.getElementById("elementosComp");
      tablallenaCom += "<tr><td>" + compra.clave + "</td><td>" + compra.nombre + "</td><td>" + compra.apellido + "</td><td>" + compra.cedula + "</td><td>" + compra.fechaNac + "</td><td>" + compra.correo + "</td><td>" + compra.celular + "</td><td>" + compra.nombreLibro + "</td><td>" + compra.categoriaLibro + "</td><td>" + compra.ciudad + "</td><td>" + compra.barrio + "</td><td>" + compra.dirreccion + "</td></tr>"
      tablaC.innerHTML = tablallenaCom;
    }
    
    $(document).ready(function() {
        $("#mitablaComp").DataTable({
      
        responsive: "true",
        dom: 'Bfrtip',
        buttons: [ {
          extend: 'excelHtml5',
          text: '<button class="btn btn-success"><i class="fas fa-file-excel"></i></button>',
          titleAttr: 'Exportar a excel',
          className: 'btn btn-success'
        }, {
          extend: 'pdfHtml5',
          text: '<button class="btn btn-danger"><i class="fas fa-file-pdf"></i></button>',
          titleAttr: 'Exportar a pdf',
          className: 'btn btn-danger'
        }, {
          extend: 'print',
          text: '<button class="btn btn-info"><i class="fas fa-print"></i></button>',
          titleAttr: 'Exportar a pdf',
          className: 'btn btn-danger'
        }
    
      ]
  });
    }); 


  } else if (opc == 'Compra y venta de libros') {
tablaCont.style.display = 'none';
tablaCompra.style.display = 'none';
tablaAlq.style.display = 'none';
tablaUsua.style.display = 'none';
tablaCompraVenta.style.display='';
localCVenta = window.localStorage

var arregloComprVenta = localCVenta.getItem("arregloComprVenta");
arregloComprVenta = JSON.parse(arregloComprVenta);
tablallena = "";

for (var i in arregloComprVenta) {

    var cvent = JSON.parse(arregloComprVenta[i]);

    var tabla = document.getElementById("elementosCVen");

    tablallena += "<tr><td>" + cvent.codigo + "</td><td>" + cvent.nombre + "</td><td>" + cvent.cantTiempo + "</td><td>" + cvent.tpLibro + "</td><td>" + cvent.email + "</td><td>" + cvent.editorial + "</td><td>" + cvent.precioLibro + "</td><td>" + cvent.autorLi + "</td><td>" + cvent.aPublicacion + "</td><td>" + cvent.numPagina + "</td></tr>";


    tabla.innerHTML = tablallena;
}
$(document).ready(function() {
  $("#tablaCVen").DataTable({

  responsive: "true",
  dom: 'Bfrtip',
  buttons: [ {
    extend: 'excelHtml5',
    text: '<button class="btn btn-success"><i class="fas fa-file-excel"></i></button>',
    titleAttr: 'Exportar a excel',
    className: 'btn btn-success'
  }, {
    extend: 'pdfHtml5',
    text: '<button class="btn btn-danger"><i class="fas fa-file-pdf"></i></button>',
    titleAttr: 'Exportar a pdf',
    className: 'btn btn-danger'
  }, {
    extend: 'print',
    text: '<button class="btn btn-info"><i class="fas fa-print"></i></button>',
    titleAttr: 'Exportar a pdf',
    className: 'btn btn-danger'
  }

]
});
}); 



}
}