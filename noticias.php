<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="css/styls.css">
<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
<title>Noticias</title>
</head>

<body>
<?php
include ("conexion/conexion.php");
include("includes/olefunciones.php");

$id_noticia=$_GET["id_noticia"];

if(($id_noticia=="NULL") or ($id_noticia=="")){
	$condicion="SELECT * FROM tbl_noticias order by id_noticia desc";
}else{
	$condicion="SELECT * FROM tbl_noticias where id_noticia='$id_noticia' order by id_noticia desc";
}
$resultSet=pg_query("$condicion");
$nrows = pg_num_rows($resultSet);
		


	for($i=0;$i<$nrows;$i++){
			echo $id=pg_fetch_result($resultSet,$i,'id_noticia');
			echo "<br>";
			echo "<hr>";
			echo '<samp id="n" class="txt" style="font-size: 17px;">'.$titulo=pg_fetch_result($resultSet,$i,'titulo').'</samp>';
			echo $titular=ltrim($titular,"<br>"); 
			//echo $contenido=pg_fetch_result($resultSet,$i,'contenido');
			//echo $fuente=Eliminar_brs(pg_fetch_result($resultSet,$i,'fuente'));
			echo "<hr>";
			}
	

?>	
</body>
</html>
