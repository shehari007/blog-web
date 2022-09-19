<?php

if ($_POST["action"] == "editPosts") {
    $escaped_post = $conn -> real_escape_string($_POST['post']);
    $escaped_title = $conn -> real_escape_string($_POST['title']);
    $sql = "UPDATE blogdata set title = '$escaped_title', post = '$escaped_post', category = '" . $_POST['category'] . "', status = 
    '" . $_POST['status'] . "' WHERE id = '" . $_POST['id'] . "'";
    $result = $conn->query($sql);
    $jsonArray  = $result;
}
else{
  return null;
}
echo json_encode($jsonArray);
