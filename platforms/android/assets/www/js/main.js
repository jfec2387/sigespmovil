/* ========================================================================= */
/*  Preloader Script
/* =========================================================================

window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
} */

$(function(){
    /* ========================================================================= */
    /*  Funcion para borrar el texto de las cajas de texto con doble click
    /* ========================================================================= */

    $("#text-basic,#text-basic1,#text-basic2").on("dblclick", function () {
    $("input[type=text]").val("");
    $("input[type=text]").after("");
    });

});

$(function(){
    /* ========================================================================= */
    /*  Funcion para borrar el texto de las cajas de texto con doble click
    /* ========================================================================= */

    $("#password,#password1").on("dblclick", function () {
    $("input[type=password]").val("");
    $("input[type=password]").after("");
    });

});

// function ini ()
// {
//     $("btnRegistroUsuario").on("click",RegistroUsuario);
//     $("btnIniciarSesion").on("click",IniciarSesión);
//     $("mensa").hide();
// }


// function limpiarFormulario()
// {
//     $("#mensa").fadeOut("slow");
//     $("#nombre_apellido").val("");
//     $("#nombuser").val("");
//     $("#pass").val("");
//     $("#passd").val("");
//     $("#correo").val("");

// }

// function onError (data, satus)
// {
//     $("#mensa").text(data);
// }



// function onSuccess (data, satus)
// {
//     data= $.trim(data)
//     $("#mensa").text(data);

//     limpiarFormulario();
// }

// function IniciarSesión()
// {
//     var formData= $("#form1").serialize();
//     $("#mensa").fadeIn("slow");

//     $ajax({
//         type: "POST",
//         url:"sesion.php",
//         cache: false,
//         data: formData,
//         success: onSuccess,
//         error: onError
//     })

    return false;
// }

// function RegistroUsuario()
// {
//     var formData= $("#form1").serialize();
//     $("#mensa").fadeIn("slow");

//     $ajax({
//         type: "POST",
//         url:"procesar.php",
//         cache: false,
//         data: formData,
//         success: onSuccess,
//         error: onError
//     })

//     return false;
// }