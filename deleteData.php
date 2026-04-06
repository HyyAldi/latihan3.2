<?php 
$conn = mysqli_connect("localhost","root","","datasiswa");

$data = json_decode(file_get_contents("php://input"), true);
$id = $data["id"];

$query = "DELETE FROM siswa WHERE id= '$id'";

if(mysqli_query($conn, $query)) {
    echo json_encode(["pesan" => "Berhasil menghapus data"]);
} else {
    echo json_encode(["pesan" => "Gagal menambah data"]);
}
?>