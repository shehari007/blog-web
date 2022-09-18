<?php


if ($_POST["action"] == "promote") {
    $sql = "UPDATE userdata set role = '" . $_POST['role'] . "' WHERE id = '" . $_POST['id'] . "'";
    $sql2 = "UPDATE blogdata set user = '" . $_POST['role'] . "' WHERE name = '" . $_POST['name'] . "'";
    $result = $conn->query($sql);
    $result2 = $conn->query($sql2);
    $jsonArray  = $result;
}
else{
  return null;
}
echo json_encode($jsonArray);
