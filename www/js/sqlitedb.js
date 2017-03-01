//Ponemos como evento en el momento que inicia la aplicación y empieza comunicación con el dispositivo
 
document.addEventListener("deviceready", onDeviceReady, false);   
 
 
//variables campos del formulario	  
	 var nombre_apellido,nombuser,pass,passd,correo;
	 var nombuser,pass;
 
//Inicio la aplicacióncreo la base de datos
function onDeviceReady() {		 
    var db = window.openDatabase("sigespmovil", "1.0", "sigespmovil", 900000);	 
    db.transaction(CrearDB, errorDB);
}
 
 
// Cada transacción  sobre la base de datos se hace con el objeto definido db y se ejecuta con el método transaction este método devuelve un parámetro con el resultado de esa ejecución que se almacena por convención en el parámetro tx, cada transacción tiene como parámetro una función que es la transacción en si por ejemplo grabar datos y una función de error por si falla la transacción.
// Continuamos con la funcion CrearDB y la funcion errorDB
   function CrearDB(tx) {   
		    tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre_apellido VARCHAR(100)  NOT NULL, nombuser VARCHAR(100)  NOT NULL, pass VARCHAR(100) NOT NULL, passd VARCHAR(100) NOT NULL, correo VARCHAR(100))');
		    tx.executeSql('CREATE TABLE IF NOT EXISTS sesion (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombuser VARCHAR(100)  NOT NULL, pass VARCHAR(100))');			 
			 
 
   }
 
function errorDB(tx, err) {
    alert("Error de SQL: "+err);
} 
//funcion Insertar datos en la base de datos
   function InsertarSQL(tx){	   
   	nombuser=document.getElementById('nomb').value;	   
   	pass=document.getElementById('pass').value;			  
    tx.executeSql('INSERT INTO sesion (nombuser, pass) VALUES ("'+nombuser+'", "'+pass+'")');					   
     alert('Registro añadido');			

}

//funcion Registrar datos en la base de datos
   function RegistrarSQL(tx){	   
   	nombre_apellido=document.getElementById('nombre_apellido').value;
   	nombuser=document.getElementById('nombuser').value;	   
   	pass=document.getElementById('pass').value;
   	passd=document.getElementById('passd').value;	   
   	correo=document.getElementById('correo').value;			  
    tx.executeSql('INSERT INTO usuarios (nombre_apellido,nombuser,pass,passd,correo) VALUES ("'+nombre_apellido+'", "'+nombuser+'","'+pass+'","'+passd+'","'+passd+'")');					   
     alert('Registro añadido');			

}
 
//funcion que genera la transaccion de añadir datos
function insertar(){
	    var db = window.openDatabase("sigespmovil", "1.0", "sigespmovil", 100000);
		 db.transaction(InsertarSQL, errorDB); 
	  //Mostrar los datos de la tabla
	  //db.transaction(ConsultarDB, errorDB);	
    }  
 function registrar(){
	    var db = window.openDatabase("sigespmovil", "1.0", "sigespmovil", 100000);
		 db.transaction(RegistrarSQL, errorDB); 
	  //Mostrar los datos de la tabla
	  //db.transaction(ConsultarDB, errorDB);	
    }  


//Consultamos todos los registros de la tabla contactos y el resultado lo utilizamos en un funcion ListarDBfunction ConsultarDB(tx) {
// 	    tx.executeSql('SELECT * FROM contactos', [], ListarDB, errorDB);
//     }
 
// //La funcion ListarDB recibe el parametro de transaccion y el recordset con el contenido de la consultar, recorremos el recordset y extraemos cada campo, generamos un listado html y luego lo mostramos en un div con identificador lista a tra ves de innerHtml de manera dinámica.
//     function ListarDB(tx, results) {
// 	    var len = results.rows.length;
// 	    var listado ='';
// 		 listado=listado.concat("Listado: " + len + " contactos");
// 	    for (var i=0; i<len; i++){
// 		 listado=listado.concat('<br>'+results.rows.item(i).nombre+' '+results.rows.item(i).email);
	  
// 	    }
// 		 document.getElementById('lista').innerHTML =listado;
//     }