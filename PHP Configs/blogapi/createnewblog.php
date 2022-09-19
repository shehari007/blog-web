<?php



if ($_POST["action"] == "addNewBlog") {
	$escaped_post = $conn->real_escape_string($_POST['post']);
    $escaped_title = $conn->real_escape_string($_POST['title']);
	
    $sql = 'INSERT INTO blogdata (title, post, category, name, user, status,post_time,archive_time) values ("' .$escaped_title. '", "' .$escaped_post. '", "' . $_POST["category"] . '",
    "' . $_POST["name"] . '", "' . $_POST["user"] . '", "' . $_POST["status"] . '","' . $_POST["mainDate"] . '", "' . $_POST["archiveDate"] .'")';
    $result = $conn->query($sql);
    $jsonArray  = $result;
}else{
  return null;
}

echo json_encode($jsonArray);
