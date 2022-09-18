<?php


if ($_POST["action"] == "approveallcat") {
    $sql = "UPDATE categories set status = '" . $_POST['status'] . "' WHERE status = 'Pending Approval'";
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}

echo json_encode($jsonArray);
