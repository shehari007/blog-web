<?php

if($_GET["action"] == "pendingCounts"){
	
$sql = "SELECT COUNT(*) as toplam  FROM blogdata where blogdata.status = 'Pending Approval' and name like '%".$_GET['name']."%'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();


$sql = "SELECT COUNT(*) as toplam  FROM categories where categories.status = 'Pending Approval' and name like '%".$_GET['name']."%'";
$result = $conn->query($sql);
$row1 = $result->fetch_assoc();


$jsonArray = $row['toplam'] + $row1['toplam'];
$conn->close();
}else{
  return null;
}
echo json_encode($jsonArray);





// <?php
// header("Access-Control-Allow-Origin: *");
// header('Content-Type: application/json; charset=utf-8');
// include 'config_db2.php';

// $sql = "SELECT COUNT(status) as toplam  FROM blogdata where status = 'Pending Approval' and name like '%".$_GET['name']."%'";
// $result = $conn->query($sql);
// $row = $result->fetch_assoc();
// $jsonArray = $row['toplam'];
// $conn->close();
// echo json_encode($jsonArray);
