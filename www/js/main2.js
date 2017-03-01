/* ========================================================================= */
/*  Preloader Script
/* =========================================================================

window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
} */


$(document).on("pagecreate","#pageone",function ini(){
    $("btnRegistrar").on("tap",Registrar);
    $("btnIniciarSesion").on("tap",IniciarSesión);
    $("mensa").hide();

});

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


function Registrar(){
    var formData= $("#form1").serialize();
    $("#mensa").fadeIn("slow");

     $.ajax({
         type: "POST",
         url:"http://192.168.1.3/php/procesar.php",
         cache: false,
         data: formData,
         datatype: "json",
        success: onSuccess,
         error: onError
     })

     return false;
}

 function IniciarSesión()
{
  var formData= $("#form1").serialize();
 $("#mensa").fadeIn("slow");

	$.ajax({
	type: "POST",
         url:"http://192.168.1.3/php/sesion.php",
         cache: false,
         data: formData,
         datatype: "json",
         success: onSuccess,
         error: onError
    })

     return false;
 }
