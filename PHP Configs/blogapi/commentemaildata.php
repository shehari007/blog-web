<?php

if($_GET["action"] == "commentEmailData"){

$sql = "SELECT *  FROM userdata where name = '".$_GET['username']."'";
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
