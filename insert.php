<?php

require("mysqlconnect.php");

$output = [
    'success' => false,
    'data' => []
];

if($_POST['name']){
    $name = $_POST['name'];

    $query = "INSERT INTO items(`name`) VALUES('$name')";
    $result = mysqli_query($conn,$query);

    if(mysqli_affected_rows($conn)>0){
        $output['success'] = true;
        $row = mysqli_insert_id($conn);
        $output['insertID']= $row;
    }
    else{

        $output['errors']='insert error';
    }
    $json_data = json_encode($output);
    print_r($json_data);

}


?>