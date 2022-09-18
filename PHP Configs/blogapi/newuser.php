<?php



if ($_POST["action"] == "newUser") {
    $sql = 'INSERT INTO userdata (name,email,password,role) values ("' . $_POST["name"] . '","' . $_POST["email"] . '", "' . $_POST["password"] . '",
    "' . $_POST["role"] . '")';
    $result = $conn->query($sql);
    $jsonArray  = $result;
}
else{
  return null;
}
echo json_encode($jsonArray);
