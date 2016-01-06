

<?php
 /*echo "<div style='background-color:#cdcccc; width:500px; padding:25px 15px;' > ";
	echo "<samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>Mr./Mrs. ". $_POST['name']."</samp><br />";
	echo"<hr />";
	echo "<samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>COMPANY NAME:</samp> <samp style='font-size:26px; color:#3d3f3d; letter-spacing: -0.04em;'>". $_POST['company']."</samp><br />";
	echo "<samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>PHONE NUMBER:</samp> <samp style='font-size:26px; color:#3d3f3d; letter-spacing: -0.04em;'>". $_POST['phone']."</samp><br />";
	echo "<samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>E-MAIL:</samp> <samp style='font-size:26px; color:#3d3f3d; letter-spacing: -0.04em;'>". $_POST['email']."</samp><br />";
	echo "<samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>COMENTS:</samp> <samp style='font-size:26px; color:#3d3f3d; letter-spacing: -0.04em;'>". $_POST['coments']."</samp><br />";
 echo"</div>"*/
 
 $email = "xxxxxxxxxxxxxx@xxxxxxxx.com";
 $contmsj ="<div style='background-color:#cdcccc; width:500px; padding:25px 20px;margin: 0px auto;' ><samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>Mr./Mrs. ". $_POST['name']."</samp><br /><hr /><samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>COMPANY NAME:</samp> <samp style='font-size:26px; color:#fff; letter-spacing: -0.04em;'>". $_POST['company']."</samp><br /><samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>PHONE NUMBER:</samp> <samp style='font-size:26px; color:#fff; letter-spacing: -0.04em;'>". $_POST['phone']."</samp><br /><samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>E-MAIL:</samp> <samp style='font-size:26px; color:#fff; letter-spacing: -0.04em;'>". $_POST['email']."</samp><br /><samp style='font-size:30px; color:#3d3f3d; letter-spacing: -0.06em;'>COMENTS:</samp> <samp style='font-size:26px; color:#fff; letter-spacing: -0.04em;'>". $_POST['coments']."</samp><br /></div>";
 
 
 echo $email;
 echo "<br />";
 echo $contmsj;
?>
