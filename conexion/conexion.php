<?php
$con = pg_connect("host='' port=5432 dbname=bd_attiva_cptal user=davidt password=123456") or die ("No pude conectarme a la base de datos");
$ip=$_SERVER['REMOTE_ADDR'];

//variables
DEFINE("ERROR_BD","Error en la base de datos.");
DEFINE("empresa","Attiva");
DEFINE("sistema","Attiva Beta 0.1");
DEFINE("propiedades_tabla","border=0 width=\"500\" cellpadding=0 cellspacing=4 align=\"center\" class=\"tabla\"");
DEFINE("numero_campos","5");
DEFINE("NO_GASTOS","No existen los parámetros suficientes para insertar el gasto.");

$titulo="Attiva";


session_start();
if(!empty($_SESSION['id_admin_'.empresa]) && !empty($_SESSION['login_admin_'.empresa])){
	$_SESSION['enlace0']="panel.php";
	$_SESSION['boton0']="Panel de control";
}else{
	$_SESSION['enlace0']="index.php";
	$_SESSION['boton0']="registrarse";
}

?>
