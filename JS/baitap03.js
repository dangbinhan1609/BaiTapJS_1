document.getElementById("btnUSD").onclick = function () {
    var sotienUSD = document.getElementById("USD").value;
    var VNĐ = 23500;
    var sotienquydoi = sotienUSD * VNĐ;
    console.log("Số tiền quy đổi là: " + sotienquydoi);

    document.getElementById("divShowInfo3").innerHTML = "Số tiền quy đổi là :" + sotienquydoi;
};