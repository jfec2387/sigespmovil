/* ========================================================================= */
/*  Preloader Script
/* =========================================================================

window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
} */


//$(document).ready(function() {

  //  alert("aqui!!!");
    //IniciarSesion();
// }); 

var PaginaAct = "http://www.sigesp.com.ve/php/Prueba.php"; //
//var PaginaAct = "Prueba.php"; //

document.onclick = function(e) {
     e = e || window.event;
     var element = e.target || e.srcElement;
     var htpattern = /^(http|https):\/\//i;
     if (element.tagName == 'A') {
     if (htpattern.test(element.href) && !_.startsWith(element.href, "http://localhost")) {
     window.open(element.href, "_system");
     return false; // prevent default action and stop event propagation
         }
    }
};
 

function ini()
{
    $("btnregistrousuario").on("click",registrousuario);
    $("btnIniciarSesion").on("click",IniciarSesión);
    $("btInic").on("click",IniciarSesion);
    $("mensa").hide();
}


function limpiarFormulario()
{
    $("#mensa").fadeOut("slow");
    $("#nombre_apellido").val("");
    $("#nombuser").val("");
    $("#pass").val("");
    $("#passd").val("");
    $("#correo").val("");

}

function onError (data, satus)
{
    $("#mensa").text(data);
}



function onSuccess (data, satus)
{
    data= $.trim(data)
    $("#mensa").text(data);

    limpiarFormulario();
}

function IniciarSesion(){
    //var formData= $("#form1").serialize();
   $("#mensa").fadeIn("slow");

   /* $ajax({
        type: "POST",
        url:"sesion.php",
        cache: false,
        data: formData,
        success: onSuccess,
        error: onError
    })

    */
    var Usr  =  $("#txtUsuario").val();
    var Pass =  $("#txtPassword").val();
    var formData = new FormData(document.getElementById("form1"));
    formData.append('Op',1);
    formData.append('Usr',Usr);
    formData.append('Pass',Pass);

    //alert("xxx"); http://www.sigesp.com.ve/php/
    $.ajax({
        contentType: "application/json", 
        dataType: 'jsonp', 
        crossDomain: true,
        url: PaginaAct, 
        type: "post",
        dataType: "html",
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    })
    .done(function(res){
        //$("#mensaje").html("Respuesta: " + res);
        //prompt("",res);
        if(res.indexOf("Error") == -1){
            location.href = "bienvenido.html";
        }else{
            alert(res);
        }   
    })
    .fail( function(xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
    });
}



function registrarUsuario(){
    
    $("#mensa").fadeIn("slow");
    var Name =  $("#txtName").val();
    var Usr  =  $("#txtUser").val();
    var Pass =  $("#txtPass").val();
    var Pas2 =  $("#txtPas2").val();
    var Mail =  $("#txtMail").val();
    
    if(Name == "")
       alert("Debe indicar el nombre y apellido del usuario.");
    else if(Usr == "")
       alert("Debe ndicar el Id del usuario.");
    else if(Pass == "")
       alert("Debe indicar la contraseña del usuario.");
    else if(Pas2 == "")
       alert("Debe de confirmar la contraseña");
    else if(Mail == "")
       alert("Debe indicar el email del usuario.");
    else{
            var ok="";
        if(Pass != Pas2)
            alert("Error: Las contraseñas no coinciden.")
        else{

                var formData = new FormData(document.getElementById("formReg"));
                formData.append('Op',2);
                formData.append('Name',Name);
                formData.append('Usr',Usr);
                formData.append('Pass',Pass);
                formData.append('Mail',Mail); //
                $.ajax({
                    contentType: "application/json", 
                    dataType: 'jsonp', 
                    crossDomain: true,
                    url: PaginaAct, 
                    type: "post",
                    dataType: "html",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                })
                .done(function(res){
                    //$("#mensaje").html("Respuesta: " + res);
                    //prompt("",res);
                    if(res.indexOf("Error") == -1){
                        alert("Usuario registrado exitosamente.");
                        $("#txtName").val("");
                        $("#txtUser").val("");
                        $("#txtPass").val("");
                        $("#txtPas2").val("");
                        $("#txtMail").val("");
                        $("#mensa").text(res);
                    }else{
                        alert(res);
                    }   
                })
                .fail( function(xhr, textStatus, errorThrown) {
                    alert(xhr.responseText);
                }); 
        
        } // else pass 
            
    } // else vacios   

    
} // end function


function actDatos(){
    
    var PassAct  =  $("#txtPassAct").val();
    var PassNew  =  $("#txtPass1").val();
    var PassNew2 =  $("#txtPass2").val();
    var Mail     =  $("#txtEmail").val();
    
    if(PassAct == "")
       alert("Debe indicar la contraseña actual.");
    else if(PassNew == "")
       alert("Debe indicar la nueva contraseña.");
    else if(PassNew2 == "")
       alert("Debe de confirmar la contraseña");
    else{
            var ok="";
        if(PassNew != PassNew2)
            alert("Error: Las contraseñas no coinciden.")
        else{
            var formData = new FormData(document.getElementById("formReg"));
                formData.append('Op',3);
                formData.append('PassAct',PassAct); 
                formData.append('PassNew',PassNew); 
                formData.append('Mail',Mail); // http://www.sigesp.com.ve/php/
                $.ajax({
                    contentType: "application/json", 
                    dataType: 'jsonp', 
                    crossDomain: true,
                    url: PaginaAct, 
                    type: "post",
                    dataType: "html",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                })
                .done(function(res){
                    //$("#mensaje").html("Respuesta: " + res);
                    prompt("",res);
                    if(res.indexOf("Error") == -1){
                        alert("Datos actualizados exitosamente.");
                        $("#txtPassAct").val("");
                        $("#txtPass1").val("");
                        $("#txtPass2").val("");
                        $("#txtEmail").val("");
                    }else{
                        alert(res);
                        location.href = "bienvenido.html";
                    }   
                })
                .fail( function(xhr, textStatus, errorThrown) {
                    alert(xhr.responseText);
                });
         }   

    }// else vacios        
}