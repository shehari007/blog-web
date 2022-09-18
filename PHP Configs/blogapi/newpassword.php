<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
include 'config_db2.php';

if($_POST["action"] == "newPassword"){
//$sql = "SELECT *  FROM isletmeler where isletme_id=".$_GET['id'];
$sql= $sql = "UPDATE userdata set password = '" . $_POST['pass'] . "' WHERE name = '" . $_POST['name'] . "'";
//"SELECT *  FROM isletmeler where isletme_id=".$_GET['id'];
//"SELECT isletme_adi  FROM isletmeler";
$result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}
echo json_encode($jsonArray);
?>