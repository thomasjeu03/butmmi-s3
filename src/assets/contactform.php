<?php
$headers= "MIME-Version: 1.0\r\n";
$headers.= 'Content-Type:text/html; charset="utf-8"'."\n";

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $surname = $_POST['surname'];
  $society = $_POST['society'];
  $mailFrom = $_POST['mail'];
  $tel = $_POST['tel'];
  $file = $_POST['file'];
  $message = $_POST['message'];

  $mailTo = 'jeuthomas03@gmail.com';
  $subject = 'Nouveau message sur BUT MMI Montbéliard';
  $headers .= 'From: '.$mailFrom;
  $txt='
		<html>
			<body>
				<div align="center">
					<u>Nom de l\'expéditeur : </u> '.$surname .$name.'<br />
					<u>Mail de l\'expéditeur : </u>'.$mailFrom.'<br />
					<u>Téléphone de l\'expéditeur : </u>'.$tel.'<br />
					<u>Entreprise de l\'expéditeur : </u>'.$society.'<br />
					<br />
					'.nl2br($message).'
				</div>
			</body>
		</html>
		';

  mail($mailTo, $subject, $txt, $headers);
  header("Location: #");
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
</html>
