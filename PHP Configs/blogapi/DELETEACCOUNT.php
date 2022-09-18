<?php


if($_POST["action"] == "confirmation"){
//$sql = "SELECT *  FROM isletmeler where isletme_id=".$_GET['id'];
$sql1 = "SELECT * from  userdata where email = '" . $_POST['email'] . "' and password = '" . $_POST['pass'] . "'";
$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) {
  
    while($row = $result1->fetch_assoc()) {
       $alls[] = $row;
    }
    //$jsonArray = $alls;
    echo "true";
    $sql2 = 'DELETE FROM blogdata where name ="' . $_POST["name"] . '" and user ="' . $_POST["user"] . '"';
    $sql3 = 'DELETE FROM categories where name ="' . $_POST["name"] . '"';
    $sql4 = 'DELETE FROM userdata where name ="' . $_POST["name"] . '" and role="' . $_POST["user"] . '"';

    $result2 = $conn->query($sql2);
    $result3 = $conn->query($sql3);
    $result4 = $conn->query($sql4);
    
  } else {
    echo "0 results";
  }
  $conn->close();
  }

  else if($_POST["action"] == "deletebyAdmin"){

    $sql2 = 'DELETE FROM blogdata where name ="' . $_POST["name"] . '" and user ="' . $_POST["user"] . '"';
    $sql3 = 'DELETE FROM categories where name ="' . $_POST["name"] . '"';
    $sql4 = 'DELETE FROM userdata where name ="' . $_POST["name"] . '" and role="' . $_POST["user"] . '"';

    $result2 = $conn->query($sql2);
    $result3 = $conn->query($sql3);
    $result4 = $conn->query($sql4);

    echo"done";
  }else{
  return null;
}
  echo json_encode($jsonArray);
?>