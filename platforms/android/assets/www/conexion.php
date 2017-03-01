<?php
// $Con=mysql_connect("localhost","root","adminsigesp")or die("Error en Conexion");
// $BD=mysql_select_db("sigespmovil")or die("Error al Conectar la BD");
// return($Con);
// return($BD);
$servidor="localhost";
$usuario="root";
$clave="adminsigesp";
$bd="sigespmovil";

mysql_connect("$servidor","$usuario","$clave");
mysql_select_db("$bd");
?>