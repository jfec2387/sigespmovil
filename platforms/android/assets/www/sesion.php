<?php
include ("conexion.php");
?>
<!-- <html>
    <head>
        <title>Sesión de Usuarios</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body> -->
<?php
//Usuarios
$PHP_Id = $_POST['id'];
$PHP_nombuser = $_POST['nombuser'];
$PHP_pass = $_POST['pass'];

  //Incluir Usuario
if ($inserta=mysql_query ("insert into usuarios (id,nombre_apellido,nombuser,pass,passd,correo) values('$PHP_Id','$PHP_nombuser','$PHP_pass')"));
    // if($boton=="btnIniciarSesion"){
    // mysql_query("insert into sesion (nombuser,pass) values('$nombuser','$pass')") or die (mysql_error()); 
    // if(mysql_query($Id)){
    //  echo "<script>alert('Iniciar Sesión')</script>";
    //  echo "<script>window.location='procesar.php'</script>";
    // }else{
    //  echo "<script>alert('Iniciar Sesión')</script>";
    // }
    // }
//Eliminar Usuarios

   // if($VBoton=="Eliminar"){
   //  $sql=("DELETE FROM sesion WHERE '$id' = $_POST ['id'] ");    
   //  $cs=(mysql_query($sql));
   //  echo "<script>window.location='procesar.php'</script>";
   //  }else{
   //   echo "<script>alert('Registro Eliminado Correctamente')</script>";
   //  }

?>