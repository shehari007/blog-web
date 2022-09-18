<?php


if ($_POST["action"] == "editCategory") {
    $sql = "UPDATE categories set category = '" . $_POST['category'] . "' WHERE id = '" . $_POST['id'] . "'";
    $result = $conn->query($sql);
    $jsonArray  = $result;
}
else{
  return null;
}
echo json_encode($jsonArray);
