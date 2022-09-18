<?php



if ($_POST["action"] == "reqNewCategory") {
    $sql = 'INSERT INTO categories (category,status, name) values ("' . $_POST["cat"] . '", "' . $_POST["status"] . '", "' . $_POST["username"] . '")';
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}

echo json_encode($jsonArray);
