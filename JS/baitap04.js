document.getElementById("btnDienTich").onclick = function () {
    var chieudai = document.getElementById("chieudai").value;
    var chieurong = document.getElementById("chieurong").value;
    var dientichHCN = chieudai * chieurong;
    console.log("Diện tích HCN là: " + dientichHCN);
    document.getElementById("divShowInfo4").innerHTML = "Diện tích HCN là: " + dientichHCN;
};
document.getElementById("btnChuVi").onclick = function () {
    var chieudai = document.getElementById("chieudai").value;
    var chieurong = document.getElementById("chieurong").value;
    var chuviHCN = (Number(chieudai) + Number(chieurong)) * 2;
    console.log("Chu vi HCN là: " + chuviHCN);
    document.getElementById("divShowInfo4").innerHTML = "Chu vi HCN là: " + chuviHCN;
};
