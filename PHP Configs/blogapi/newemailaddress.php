<?php


if($_POST["action"] == "newEmailAddress"){
//$sql = "SELECT *  FROM isletmeler where isletme_id=".$_GET['id'];
$sql = "UPDATE userdata set email = '" . $_POST['email'] . "' WHERE name = '" . $_POST['name'] . "'";
//"SELECT *  FROM isletmeler where isletme_id=".$_GET['id'];
//"SELECT isletme_adi  FROM isletmeler";
$result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}
echo json_encode($jsonArray);
?>