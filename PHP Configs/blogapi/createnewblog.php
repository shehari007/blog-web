<?php



if ($_POST["action"] == "addNewBlog") {
    $sql = 'INSERT INTO blogdata (title, post, category, name, user, status,post_time,archive_time) values ("' . $_POST["title"] . '","' . $_POST["post"] . '", "' . $_POST["category"] . '",
    "' . $_POST["name"] . '", "' . $_POST["user"] . '", "' . $_POST["status"] . '","' . $_POST["mainDate"] . '", "' . $_POST["archiveDate"] .'")';
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}

echo json_encode($jsonArray);
