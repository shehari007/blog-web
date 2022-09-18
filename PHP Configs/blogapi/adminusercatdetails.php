<?php


if ($_GET["action"] == "adminUsercatDetails") {
    $sql = "SELECT * FROM categories WHERE status='Pending Approval'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            $alls[] = $row;
        }
        $jsonArray = $alls;
    } else {
        echo "0 cat";
    }
    $conn->close();
}else{
  return null;
}
echo json_encode($jsonArray);
