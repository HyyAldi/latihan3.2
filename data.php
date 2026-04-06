<?php
$conn = mysqli_connect("localhost","root","","datasiswa");

$result = mysqli_query($conn,"SELECT * FROM siswa");

$data=[];
while($dt=mysqli_fetch_assoc($result)){
    $data[]=$dt;
}

header("Content-Type: application/json");
print_r(json_encode($data));
?>