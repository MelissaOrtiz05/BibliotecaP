



function ocultar() {
  var div = document.getElementById('imgN');
  div.style.display = 'none';
}
function mostrar() {
  var div = document.getElementById('imgN');
}
var inicio;
function iniciarSesion() {

  var usuario = document.getElementById('txtusu').value;
  var passw = document.getElementById('txtpass').value;
  if ((usuario == "") && (passw == "")) {
    if (usuario == "") {
      alert("Debe ingresar un usuario valido");
    } else if (passw == "") {
      alert("Debe ingresar una contraseña");
    }
  } else {
    fetch('../js/arch.json')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (datos) {
        console.log(datos);
        datos.forEach(function (validar) {
          if (validar.usuario == usuario) {
            if (validar.contrasena == passw) {
              intento = true
              inicio = `${validar.nombre} ${validar.apellido}`
              bandera = true
              localStorage.setItem("Inicio", inicio)
              window.location = ("../index.html")
            } else {
              alert("incorrecto contraseña")

              bandera = true
            }

          } else {
            bandera = false
          }
        });
        if (bandera == null) {
          alert("usuario no existe")
        }

      })
  }
}

var usua
miStorage = window.localStorage;

function cargarD() {
  usua = miStorage.getItem('Inicio')
  document.getElementById('nombreU').innerHTML = usua;
  var login = document.getElementById('iniciar');
  var cerrarS = document.getElementById('cerrarSesion');
  var crearUsu = document.getElementById('subMenu');

  if (usua != null) {
    login.style.display = 'none';
    cerrarS.style.display = '';
    crearUsu.style.display = 'none';



  } else {
    login.style.display = '';
    cerrarS.style.display = 'none';
    crearUsu.style.display = '';

  }

}

function cerrar() {
  miStorage.clear();
  window.location = "../index.html";

}

function listarAlquiler() {

  localAlq = window.localStorage;
  var arregloAl = localAlq.getItem("arregloAl");
  arregloAl = JSON.parse(arregloAl);
  tablallenaAlq = ""
  tablallenaAlq2 = ""
  tablaAlq = document.getElementById('datosAlq');

  tablaAlq2 = document.getElementById('datosAlq2');
  if (document.getElementById('todoAlq').checked) {
    var generoDig = "todoAlq";
    tablaAlq.style.display = '';
    tablaAlq2.style.display = 'none';


  } else if (document.getElementById('algoAlq').checked) {
    var generoDig = "algoAlq";
    tablaAlq2.style.display = '';
    tablaAlq.style.display = 'none';


  }
  console.log(generoDig)
  for (var i in arregloAl) {
    var alquilar = JSON.parse(arregloAl[i]);
    if (generoDig=="todoAlq") {
      var tablaAlq = document.getElementById("elementosAlq");

    tablallenaAlq += "<tr><td>" + alquilar.idAlq +
      "</td><td>" + alquilar.lib1 + "</td><td>" + alquilar.subt1 + "</td><td>" + alquilar.lib2 + "</td><td>" + alquilar.subt2 + "</td><td>" + alquilar.lib3 + "</td><td>" + alquilar.subt3 + "</td><td>" + alquilar.lib4 + "</td><td>" + alquilar.subt4 + "</td><td>" + alquilar.lib5 + "</td><td>" + alquilar.subt5 + "</td><td>" + alquilar.lib6 + "</td><td>" + alquilar.subt6 + "</td><td>" + alquilar.lib7 + "</td><td>" + alquilar.subt7 + "</td><td>" + alquilar.lib8 + "</td><td>"+ alquilar.subt8 + "</td><td>"  + alquilar.lib9 + "</td><td>"+ alquilar.subt9 + "</td><td>"+ alquilar.lib10 + "</td><td>"+ alquilar.subt10 + "</td><td>"+ alquilar.lib11 + "</td><td>"+ alquilar.subt11 + "</td><td>"+ alquilar.lib12 + "</td><td>"+ alquilar.subt12 + "</td><td>"+ alquilar.libTotal + "</td></tr>"
    tablaAlq.innerHTML = tablallenaAlq;
    }else{
      var tablaAlq2 = document.getElementById("elementosAlq2");

      tablallenaAlq2 += "<tr><td>" + alquilar.idAlq +
      "</td><td>" + alquilar.subt1 + "</td><td>" + alquilar.subt2 + "</td><td>" + alquilar.subt3 + "</td><td>" + alquilar.subt4 + "</td><td>" + alquilar.subt5 + "</td><td>" + alquilar.subt6 + "</td><td>" + alquilar.subt7 + "</td><td>"+ alquilar.subt8 + "</td><td>"+ alquilar.subt9 + "</td><td>"+ alquilar.subt10 + "</td><td>"+ alquilar.subt11 + "</td><td>"+ alquilar.subt12 + "</td><td>"+ alquilar.libTotal + "</td></tr>"
    tablaAlq2.innerHTML = tablallenaAlq2;
    }
  }
}
function listarUsu() {

  localUsuario = window.localStorage
  var arregloUsuario = localUsuario.getItem("arregloUsuario");
  arregloUsuario = JSON.parse(arregloUsuario);
  tablallenaUsu = "";
  for (var i in arregloUsuario) {

    var Usuario = JSON.parse(arregloUsuario[i]);
    console.log(Usuario.cc)

    var tablaU = document.getElementById("elementosUsu");

    tablallenaUsu += "<tr><td>" + Usuario.cc + "</td><td>" + Usuario.nombre + "</td><td>" + Usuario.apellido + "</td><td>" + Usuario.telefono + "</td><td>" + Usuario.correo + "</td><td>" + Usuario.celular + "</td><td>" + Usuario.nombreLibro + "</td><td>" + Usuario.categoriaLibro + "</td><td>" + Usuario.ciudad + "</td><td>" + Usuario.barrio + "</td></tr>"


    tablaU.innerHTML = tablallenaUsu;
  }
}

function CodBusc() {

  pais = document.getElementById('txtPaisC').value;

  axios.get('https://restcountries.eu/rest/v2/name/' + pais)
    .then(function (response) {

      cap = response.data[0].callingCodes;

      document.getElementById('txtPostal').value = cap;//response.data[0].capital;
      document.getElementById('txtPostal').disabled = true;

    })
    .catch(function (error) {
      console.log(error);
      alert("país no encontado")


    });

}

function RegionBusc() {

  pais = document.getElementById('paisBuscar').value;

  axios.get('https://restcountries.eu/rest/v2/name/' + pais)
    .then(function (response) {

      cap = response.data[0].region;

      //document.getElementById('regionEnc').value=cap;//response.data[0].capital;
      document.getElementById('regionEnc').disabled = true;
      var divR = document.getElementById('regionEnc').value;//response.data[0].capital;
      document.getElementById('regionEnc').innerHTML = cap;
    })
    .catch(function (error) {
      console.log(error);


    });
  horaBus()

}


function horaBus() {

  pais = document.getElementById('paisBuscar').value;

  axios.get('https://restcountries.eu/rest/v2/name/' + pais)
    .then(function (response) {

      cap = response.data[0].subregion;

      document.getElementById('regionLen').innerHTML = cap;
    })
    .catch(function (error) {
      console.log(error);
alert("pais no encontrado")

    });

}

function buscarEmpresa() {


  tablallenaEmp = "";

  var buscarEmp = document.getElementById('buscarEmprsas').value;
  for (var i = 1; i <= 5; i++) {
    axios.get('https://jsonplaceholder.typicode.com/users/' + i)
      .then(function (response) {
        var nombreAso = response.data.company.name;
        if ((buscarEmp != "") && (nombreAso == buscarEmp)) {
          datosEmpresa.style.display = '';
          var ciudad = response.data.address.city;
          var calle = response.data.address.street;
          var dir = response.data.address.suite;
          var tablaE = document.getElementById("elementosEmp");

          tablallenaEmp += "<tr><td>" + nombreAso + "</td><td>" + ciudad + "</td><td>" + calle + "</td><td>" + dir + "</td></tr>"
          tablaE.innerHTML = tablallenaEmp;
        }
      })
      .catch(function (error) {
        console.log(error);


      });





  }

}


function buscarCEmpresa() {
  datosEmpresaC.style.display = '';
  tablallenaCE = "";
  var buscarEmp = document.getElementById('buscarEmprsas').value;
  for (var i = 1; i <= 5; i++) {
    axios.get('https://jsonplaceholder.typicode.com/users/' + i)
      .then(function (response) {
        var nombrePa = response.data.company.name;
        if ((buscarEmp != "") && (nombrePa == buscarEmp)) {
          var nombreAso = response.data.name;
          var email = response.data.email;
          var code = response.data.address.zipcode;
          var tablaE = document.getElementById("elementosEmpc");
          tablallenaCE += "<tr><td>" + nombreAso + "</td><td>" + email + "</td><td>" + code + "</td></tr>"
          tablaE.innerHTML = tablallenaCE;

        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}


function nombreEmpresa() {

  conocer.style.display = 'none';
  listado.style.display = '';
  lstadoImg.style.display = '';
  div = "";
  for (var i = 1; i <= 5; i++) {
    var divA = document.getElementById("listado");

    axios.get('https://jsonplaceholder.typicode.com/users/' + i)
      .then(function (response) {
        var nombreAso = response.data.company.name;

        div += "<ul><li>" + nombreAso + "</li></ul>"
        divA.innerHTML = div;
      })
      .catch(function (error) {
        console.log(error);


      });

  }

}