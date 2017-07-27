<?php

require("mysqlconnect.php");

$output = [
    'success' => false,
    'data' => []
];


$query = "SELECT * FROM items";
$result = mysqli_query($conn,$query);

if(mysqli_num_rows($result)>0){
    $output['success'] = true;
    while($rows = mysqli_fetch_assoc($result)){
        $output['data'][]= $rows;
    }
}

$json_data = json_encode($output);
print_r($json_data);


?>