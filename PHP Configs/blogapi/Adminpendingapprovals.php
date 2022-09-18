<?php

if($_GET["action"] == "adminpendapprove"){

$sql = "SELECT COUNT(*) as toplam  FROM blogdata where blogdata.status = 'Pending Approval'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();


$sql = "SELECT COUNT(*) as toplam  FROM categories where categories.status = 'Pending Approval'";
$result = $conn->query($sql);
$row1 = $result->fetch_assoc();


$jsonArray = $row['toplam'] + $row1['toplam'];
$conn->close();
}else{
  return null;
}

echo json_encode($jsonArray);
