<?php
include("includes/jfunciones.php");

$n=$_REQUEST['n'];

$q="select * from tbl_noticias where id_noticia='$n';";
$r=ejecutar($q);

$f=asignar_a($r);

echo cabecera($titulo);
echo "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">";
?>
	<tr>
		<td>
			<img src="images/noticia_01.jpg" width="635" height="32" alt=""></td>
	</tr>
	<tr>
		<td style="background: url(images/noticia_02.jpg);" width="635" height="357" valign="top">
		<div class="profesional" style="width: 500;padding-left:40px;">
		<?php
		echo "<span style=\"color: #8A7C4D;font-size: 11px;\"><b>$f[titulo]</b></span><span style=\"color: #656251;font-size: 9px;\"><b> ($f[fecha])</b></span><br><br><div style=\"text-align:justify;color: #8A7C4D;font-size: 10px; line-height: 13pt;\">$f[noticia]</span>";
		?>
		</div>
		</td>
	</tr>
</table>
<?php
echo pie();
?>
