<?php

if ($_POST["action"] == "addnewcat") {
    $sql = 'INSERT INTO categories (category,status) values ("' . $_POST["cat"] . '", "' . $_POST["status"] . '")';
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}

echo json_encode($jsonArray);
