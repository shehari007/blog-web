<?php


if ($_POST["action"] == "blogRecyclebin") {
    $sql = "UPDATE blogdata set status = '" . $_POST['status'] . "' WHERE id = '" . $_POST['id'] . "'";
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}
echo json_encode($jsonArray);