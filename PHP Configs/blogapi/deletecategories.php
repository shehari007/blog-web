<?php


if ($_POST["action"] == "deleteCategory") {
    $sql = 'DELETE FROM categories where id ="' . $_POST["id"] . '"';
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}
echo json_encode($jsonArray);