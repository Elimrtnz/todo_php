<?php
require("mysqlconnect.php");

$output = [
    'success' => false,
    'data' => []
];

$deleteName = $_POST['deleteItem'];


$query =  "DELETE FROM `items` WHERE `name` = '$deleteName'";
$result = mysqli_query($conn,$query);


// if(empty($result)){
//     $output['errors']='database error';
// }
// else{
//     $output['data']=[];

//     print(mysqli_affected_rows($conn));

//     if(mysqli_affected_rows($conn)>0){
//         $output['success'] = true;
//     }
//     else{
//         $output['errors']='insert error';
//     }
// }

?>