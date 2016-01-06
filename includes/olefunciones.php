<?php

function Eliminar_brs($cadena_txt){
/*Se encarga de buscar en una cadena todos los <br> que puedan tener, y eliminarlos*/
$cadena_txt=ltrim($cadena_txt,"<br>"); 
$pos=strpos($cadena_txt,"<br>"); 
$cadena_aux1=substr($cadena_txt,0,$pos);
$cadena_aux2=substr($cadena_txt,$pos);
$cadena_aux2=ltrim($cadena_aux2,"<br>"); 
$cadena_txt="$cadena_aux1 $cadena_aux2";
return $cadena_txt;
}

function pie(){
	$pie="	<tr><td colspan=\"3\" valign=\"top\" align=\"center\"><img src=\"images/5financial_news_05.jpg\" width=\"776\" alt=\"\" border=\"0\" usemap=\"#5financial_news_05\"></td></tr></table>
		<map name=\"5financial_news_05\">
<area shape=\"rect\" coords=\"544,18,530,18\" href=\"http://www.redca.net\" target=\"_BLANK\">
<area shape=\"rect\" coords=\"775,17,726,3\" href=\"http://www.attivacapital.com/attiva/jadmin/\" target=\"_TOP\">

</map>
</body>
</html>";

return ($pie);
}

?>
