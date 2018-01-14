<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("config.php");
if(isset($_POST['tipSobe']) && isset($_POST['kvadrata']) && isset($_POST['brojKreveta']) && isset($_POST['pogledNa'])){
$tipSobe = $_POST['tipSobe'];
$kvadrata = intval($_POST['kvadrata']);
$brojKreveta = intval($_POST['brojKreveta']);
$pogledNa = ($_POST['pogledNa']);
$stmt = $conn->prepare("INSERT INTO sobe (tipSobe, kvadrata, brojKreveta , pogledNa) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $tipSobe, $kvadrata, $brojKreveta , $pogledNa);
$stmt->execute();
echo "ok";
}
?>