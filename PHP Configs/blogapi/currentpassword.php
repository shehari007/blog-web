<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
include 'config_db2.php';

if($_POST["action"] == "currentPassword"){
//$sql = "SELECT *  FROM isletmeler where isletme_id=".$_GET['id'];
$sql= "SELECT *  FROM userdata where password like '%".$_POST['currpass']."%' and name like '%".$_POST['name']."%'";
//"SELECT *  FROM isletmeler where isletme_id=".$_GET['id'];
//"SELECT isletme_adi  FROM isletmeler";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  
  while($row = $result->fetch_assoc()) {
     $alls[] = $row;
  }
  //$jsonArray = $alls;
  echo "true";
} else {
  echo "0 results";
}
$conn->close();
}else{
  return null;
}
//SetHeader(200);
echo json_encode($jsonArray);
?>