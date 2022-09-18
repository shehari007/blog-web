<?php


if ($_POST["action"] == "deleteapproval") {
    $sql = 'DELETE FROM blogdata where id ="' . $_POST["id"] . '"';
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}
echo json_encode($jsonArray);