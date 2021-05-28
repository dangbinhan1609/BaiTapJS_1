document.getElementById("btnTong").onclick = function () {
    var n = document.getElementById("number").value;
    var hangChuc = Math.floor(n % 100 / 10);
    var hangDonVi = Math.floor(n % 100 % 10);
    var tong2kyso = hangChuc + hangDonVi;
    console.log("Tổng 2 ký số là: " + tong2kyso);
    document.getElementById("divShowInfo5").innerHTML = "Tổng 2 ký số là: " + tong2kyso;
};