// NWF 타입 재고 추가
function addNWF() {
    // 필드에서 값 가져오기
    var product_name = document.getElementById("nwf_product_name").value;
    var input_date = document.getElementById("nwf_input_date").value;
    var width = document.getElementById("nwf_width").value;
    var thickness = document.getElementById("nwf_thickness").value;
    var length = document.getElementById("nwf_length").value;
    var location = document.getElementById("nwf_location").value;
  
    // 값 유효성 검사
    if (product_name === "" || input_date === "" || width === "" || thickness === "" || length === "" || location === "") {
      alert("모든 필드를 채워주세요.");
      return;
    }
  
    // AJAX 요청 보내기
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert("재고가 추가되었습니다.");
        location.reload();
      }
    };
    xhttp.open("POST", "add_nwf.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("product_name=" + product_name + "&input_date=" + input_date + "&width=" + width + "&thickness=" + thickness + "&length=" + length + "&location=" + location);
  }
  
  // Liner 타입 재고 추가
  function addLiner() {
    // 필드에서 값 가져오기
    var product_name = document.getElementById("liner_product_name").value;
    var input_date = document.getElementById("liner_input_date").value;
    var width = document.getElementById("liner_width").value;
    var thickness = document.getElementById("liner_thickness").value;
    var quantity = document.getElementById("liner_quantity").value;
    var length = document.getElementById("liner_length").value;
    var location = document.getElementById("liner_location").value;
  
    // 값 유효성 검사
    if (product_name === "" || input_date === "" || width === "" || thickness === "" || quantity === "" || length === "" || location === "") {
      alert("모든 필드를 채워주세요.");
      return;
    }
  
    // AJAX 요청 보내기
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert("재고가 추가되었습니다.");
        location.reload();
      }
    };
    xhttp.open("POST", "add_liner.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("product_name=" + product_name + "&input_date=" + input_date + "&width=" + width + "&thickness=" + thickness + "&quantity=" + quantity + "&length=" + length + "&location=" + location);
  }
  