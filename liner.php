<?php
    // DB 연결
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "inventory";
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // 재고 추가
    if(isset($_POST["add_inventory"])){
        $product_name = $_POST["product_name"];
        $input_date = $_POST["input_date"];
        $width = $_POST["width"];
        $thickness = $_POST["thickness"];
        $quantity = $_POST["quantity"];
        $length = $_POST["length"];
        $location = $_POST["location"];

        $sql = "INSERT INTO liner_inventory (product_name, input_date, width, thickness, quantity, length, location)
        VALUES ('$product_name', '$input_date', '$width', '$thickness', '$quantity', '$length', '$location')";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // 재고 조회
    $sql = "SELECT * FROM liner_inventory";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row["id"]. "</td><td>" . $row["product_name"]. "</td><td>" . $row["input_date"]. "</td><td>" . $row["width"]. "</td><td>" . $row["thickness"]. "</td><td>" . $row["quantity"]. "</td><td>" . $row["length"]. "</td><td>" . $row["location"]. "</td></tr>";
        }
    } else {
        echo "0 results";
    }

    $conn->close();
?>
