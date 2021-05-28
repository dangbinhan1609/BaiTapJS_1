document.getElementById("btnLuong").onclick = function () {
    var songaylam = document.getElementById("soNgayLam").value;
    var Luong1ngay = 100000;
    var Luong = songaylam * Luong1ngay;
    console.log("Tiền Lương là :" + Luong);
    document.getElementById("divShowInfo1").innerHTML = "Tiền Lương là: " + Luong;
};