<?php

if($_GET["action"] == "myPendingPosts"){

$sql = "SELECT *  FROM blogdata where status like '%".$_GET['status']."%' and name like '%".$_GET['name']."%'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  
  while($row = $result->fetch_assoc()) {
     $alls[] = $row;
  }
  $jsonArray = $alls;

} else {
  echo "0 results";
}
$conn->close();
//SetHeader(200);
}else{
  return null;
}
echo json_encode($jsonArray);
