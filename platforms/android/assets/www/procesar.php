<?php
include ("conexion.php");
?>
<!-- <html>
    <head>
        <title>Registro de Usuarios</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body> -->
<?php
//Usuarios
$PHP_Id = $_POST['id'];
$PHP_nombre_apellido = $_POST['nombre_apellido'];
$PHP_nombuser = $_POST['nombuser'];
$PHP_pass = $_POST['pass'];
$PHP_passd= $_POST['passd'];
$PHP_correo = $_POST['correo'];

  //Incluir Usuario
 if ($inserta=mysql_query ("insert into usuarios (id,nombre_apellido,nombuser,pass,passd,correo) values('$PHP_Id','$PHP_nombre_apellido','$PHP_nombuser','$PHP_pass','$PHP_passd','$PHP_correo')"));
 {
    echo "Registro Satisfactorio, Bienvenido!!!" ;
 }
    // if($boton=="btnRegistroUsuario"){
    // mysql_query("insert into usuarios (id,nombre_apellido,nombuser,pass,passd,correo) values('$PHP_Id','$PHP_nombre_apellido','$PHP_nombuser','$PHP_pass','$PHP_passd','$PHP_correo')") or die (mysql_error()); 
    // if(mysql_query($Id)){
    //  echo "<script>alert('Registro incluido Correctamente')</script>";
     // echo "<script>window.location='procesar.php'</script>";
    // }else{
    //  echo "<script>alert('Registro incluido Correctamente')</script>";
    // }
    
  
//Eliminar Usuarios

   // if($VBoton=="Eliminar"){
   //  $sql=("DELETE FROM registro_usuarios WHERE '$id' = $_POST ['id'] ");    
   //  $cs=(mysql_query($sql));
   //  echo "<script>window.location='procesar.php'</script>";
   //  }else{
   //   echo "<script>alert('Registro Eliminado Correctamente')</script>";
   //  }

?>