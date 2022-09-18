<?php

if($_GET["action"] == "commentcount"){
	
$sql = "SELECT COUNT(*) as toplam  FROM comments where post_title like '%".$_GET['title']."%'";
//$sql = "SELECT COUNT(*) as toplam  FROM blogdata where status='Approved' and name like '%".$_GET['username']."%' ";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$jsonArray = $row['toplam'];
$conn->close();
}else{
  return null;
}
echo json_encode($jsonArray);
