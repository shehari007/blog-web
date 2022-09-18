<?php


if ($_POST["action"] == "admincatapprove") {
    $sql = "UPDATE categories set status = '" . $_POST['status'] . "' WHERE id = '" . $_POST['id'] . "'";
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}

echo json_encode($jsonArray);
