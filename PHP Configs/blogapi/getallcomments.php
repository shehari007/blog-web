<?php

if($_GET["action"] == "getAllComments"){

$sql = "SELECT * FROM comments where post_title = '".$_GET['title']."' order by id DESC ";
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
