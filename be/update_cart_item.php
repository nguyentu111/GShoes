<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include('config/db.php');
    try {
        $user_id = $_POST['user_id'];
        $shoe_id = $_POST['shoe_id'];
        $quantity = $_POST['quantity'];
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $pdo->prepare("Select * from cart_items where user_id = :user_id and shoe_id = :shoe_id limit 1");
        $stmt->bindParam(':user_id', $user_id, PDO::PARAM_STR);
        $stmt->bindParam(':shoe_id', $shoe_id, PDO::PARAM_STR);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if(count($result) > 0){
            $stmt2 = $pdo->prepare("UPDATE cart_items SET quantity =  :quantity WHERE id = :id");
            $id =   $result[0]['id'];
            $stmt2->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt2->bindParam(':quantity', $quantity, PDO::PARAM_INT);
            $stmt2->execute();
            header("HTTP/1.1 200 OK");
            echo "success";
            return;
        }
        $stmt3 = $pdo->prepare("INSERT INTO cart_items (user_id, shoe_id, quantity) VALUES (:user_id, :shoe_id, :quantity)");
        $stmt3->bindParam(':user_id', $user_id, PDO::PARAM_STR);
        $stmt3->bindParam(':shoe_id', $shoe_id, PDO::PARAM_STR);
        $stmt3->bindParam(':quantity', $quantity, PDO::PARAM_INT);
        $stmt3->execute();
        header("HTTP/1.1 200 OK");
        echo "success";
    } catch (Exception $e) {
        header("HTTP/1.1 500 Internal Server Error");
        echo "error : ".$e->getMessage();
    } 
}

?>