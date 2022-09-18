<?php


if ($_POST["action"] == "permanantDeleteAll") {
    $sql = 'DELETE FROM blogdata where status ="' . $_POST["status"] . '" and name = "' . $_POST["username"] . '"';
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}
echo json_encode($jsonArray);