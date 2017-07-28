<?php
require("mysqlconnect.php");

$output = [
    'success' => false,
    'data' => []
];

$updateName = $_POST['updateItem'];
$oldName = $_POST['oldName'];

$query =  "UPDATE `items` SET `name`= '$updateName' WHERE `name` = '$oldName'";


$result = mysqli_query($conn,$query);


if(empty($result)){
    $output['errors']='database error';
}
else{
    $output['data']=[];

    print(mysqli_affected_rows($conn));

    if(mysqli_affected_rows($conn)>0){
        $output['success'] = true;
    }
    else{
        $output['errors']='insert error';
    }
}

?>


