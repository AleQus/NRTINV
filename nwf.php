<!DOCTYPE html>
<html>
<head>
	<title>NWF 타입 재고 현황</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<header>
		<h1>NWF 타입 재고 현황</h1>
	</header>

	<nav>
		<ul>
			<li><a href="index.php">Home</a></li>
			<li><a href="nwf.php">NWF 타입</a></li>
			<li><a href="liner.php">Liner 재고내역</a></li>
			<li><a href="add.php">재고 추가</a></li>
		</ul>
	</nav>

	<section>
		<h2>NWF 타입 재고 현황</h2>
		<p>제품명, 입고일자, Width, Thickness, Length, 보관장소를 확인할 수 있습니다.</p>

		<?php
			// DB 연결
			$host = 'localhost';
			$user = 'username';
			$password = 'password';
			$dbname = 'database';
			$mysqli = new mysqli($host, $user, $password, $dbname);
			if ($mysqli->connect_error) {
				die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
			}

			// 쿼리 생성
			$query = "SELECT * FROM nwf ORDER BY id ASC";

			// 쿼리 실행
			if ($result = $mysqli->query($query)) {
				// 결과 출력
				echo "<table>";
				echo "<tr><th>ID</th><th>제품명</th><th>입고일자</th><th>Width</th><th>Thickness</th><th>Length</th><th>보관장소</th></tr>";
				while ($row = $result->fetch_assoc()) {
					echo "<tr><td>".$row["id"]."</td><td>".$row["product_name"]."</td><
