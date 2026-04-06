<?php 
$conn = mysqli_connect("localhost","root","","datasiswa");

$data = json_decode(file_get_contents("php://input"), true);

$nisn = $data["nisn"];
$nama = $data["nama"];
$jenisKelamin = $data["jenisKelamin"];

$query = "INSERT INTO siswa (nisn,nama,jenisKelamin)
VALUES ('$nisn','$nama','$jenisKelamin')";

if(mysqli_query($conn, $query)) {
    echo json_encode(["pesan" => "Berhasil menambah data"]);
} else {
    echo json_encode(["pesan" => "Gagal menambah data"]);
}
?>