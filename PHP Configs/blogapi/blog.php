<?php


if ($_POST["action"] == "register") {
    $sql = 'INSERT INTO userdata (name, email, password, role) values ("' . $_POST["username"] . '","' . $_POST["email"] . '","' . $_POST["password"] . '", "User")';
    $result = $conn->query($sql);
    $jsonArray  = $result;
}

else if ($_POST["action"] == "login") {
    
    $sql = 'SELECT role, name from userdata where email= "' . $_POST["email"] . '" AND password= "' . $_POST["password"] . '"';
    $result = $conn->query($sql);
    $jsonArray  = $result->num_rows;
    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            $alls[] = $row;
        }
        $jsonArray = $alls;
    } else {
        echo "0";
    }
    $conn->close();
}


else if ($_GET["action"] == "navmenu") {
    $sql = "SELECT DISTINCT category FROM blogdata";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            $alls[] = $row;
        }
        $jsonArray = $alls;
    } else {
        echo "0 results";
    }
    $conn->close();
}
else if ($_GET["action"] == "randomCards") {
    $sql = "SELECT * FROM blogdata WHERE featured='' ORDER BY RAND() LIMIT 2";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            $alls[] = $row;
        }
        $jsonArray = $alls;
    } else {
        echo "0 results";
    }
    $conn->close();
}else{
  return null;
}

echo json_encode($jsonArray);
