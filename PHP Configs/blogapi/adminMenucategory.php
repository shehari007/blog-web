<?php

if ($_GET["action"] == "adminmenucat") {
    $sql = "SELECT * FROM categories ORDER by status='Pending Approval' DESC";
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
