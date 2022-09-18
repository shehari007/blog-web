<?php

if($_GET["action"] == "allarchive"){
$sql = "SELECT *  FROM blogdata where status='Approved' and  archive_time like '%".$_GET['archive_time']."%' order by id desc";
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
}else{
  return null;
}

echo json_encode($jsonArray);
