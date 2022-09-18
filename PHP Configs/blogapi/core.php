<?php


if ($_POST["action"] == "uploadPicture") {
    $error=0;
    $error_message='';

    $file_type = $_FILES['image']['type'];
    $allowed = array("image/jpeg", "image/gif", "image/png");

    if(!in_array($file_type, $allowed)) {

            $error_message .= 'Only jpg, gif, and png files are allowed.';
            $error=1;
    }

    if(!empty($_FILES['image']['name']))
    {
    $target_dir = "C:/Users/Muhammad Sheharyar/Desktop/GitHub Repos/blog-web/public/";
    if (!file_exists($target_dir))
    {
      mkdir($target_dir, 0777);
    }
    $target_file =
      $target_dir . basename($_FILES["image"]["name"]);
    $imageFileType = 
      strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    
    if (file_exists($target_file)) {
        
        $error_message .="File already exists";
        $error=1;
   
    }
    if ($_FILES["image"]["size"] > 50000000) {
        $error_message .="File size is too large";
        $error=1;
      }
      if ($error == 0){
        move_uploaded_file($_FILES["image"]["tmp_name"], "C:/Users/Muhammad Sheharyar/Desktop/GitHub Repos/blog-web/public/" . $_FILES["image"]["name"]);
        $sql = "INSERT INTO  images (filename, name) values ('".$_FILES["image"]["name"]."','".$_POST["name"]."')";
        $result = $conn->query($sql);
        $jsonArray  = $result;
      }else{
        $jsonArray  = $error_message;
      }

}
}else{
  return null;
}

echo json_encode($jsonArray);
