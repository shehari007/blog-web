<?php


if ($_POST["action"] == "recoverUser") {
    $sql = "UPDATE blogdata set status = '" . $_POST['status'] . "' WHERE id = '" . $_POST['id'] . "'";
    $result = $conn->query($sql);
    $jsonArray  = $result;
}
else if ($_POST["action"] == "recoverAdmin") {
    $sql = "UPDATE blogdata set status = '" . $_POST['status'] . "' WHERE id = '" . $_POST['id'] . "'";
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}
echo json_encode($jsonArray);