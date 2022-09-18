<?php


if($_POST["action"] == "uploadComment"){
//$sql = "SELECT *  FROM isletmeler where isletme_id=".$_GET['id'];
$sql1 = 'INSERT INTO comments (post_title,cm_name,email,cm_picture,role,cm_post,cm_time) values ("' . $_POST["title"] . '",
"' . $_POST["name"] . '", "' . $_POST["email"] . '","' . $_POST["picture"] . '","' . $_POST["role"] . '","' . $_POST["post"] . '",
"' . $_POST["timestamp"] .'")';
$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) {
  
    while($row = $result1->fetch_assoc()) {
       $alls[] = $row;
    }
    $jsonArray = $alls;
  
  } else {
    echo "0 results";
  }
  $conn->close();
  }
else{
  return null;
}
  echo json_encode($jsonArray);
  ?>