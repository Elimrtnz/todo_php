<?php
$conn = mysqli_connect('localhost','root','root','php_practice');

if(!$conn){
    echo "Error!!!".mysqli_connect_errno();
}
//echo "Success: A proper connection to MySQL was made!";

?>
