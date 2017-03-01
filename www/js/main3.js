/* ========================================================================= */
/*  Preloader Script
/* =========================================================================

window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
} */

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
 

function ini ()
{
    $("btnregistrousuario").on("click",registrousuario);
    $("btnIniciarSesion").on("click",IniciarSesión);
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

function IniciarSesión()
{
    var formData= $("#form1").serialize();
    $("#mensa").fadeIn("slow");

    $ajax({
        type: "POST",
        url:"sesion.php",
        cache: false,
        data: formData,
        success: onSuccess,
        error: onError
    })

    return false;
}

function registrousuario()
{
    var formData= $("#form1").serialize();
    $("#mensa").fadeIn("slow");

    $ajax({
        type: "POST",
        url:"procesar.php",
        cache: false,
        data: formData,
        success: onSuccess,
        error: onError
    }).done(function(data) {
      alert(data);
    });

    return false;
}

