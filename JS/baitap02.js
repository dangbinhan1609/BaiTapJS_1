document.getElementById("btnGiaTri").onclick = function () {
    var sothuc1 = document.getElementById("number1").value;
    var sothuc2 = document.getElementById("number2").value;
    var sothuc3 = document.getElementById("number3").value;
    var sothuc4 = document.getElementById("number4").value;
    var sothuc5 = document.getElementById("number5").value;
    var giatritrungbinh = (parseFloat(sothuc1) + parseFloat(sothuc2) + parseFloat(sothuc3) + parseFloat(sothuc4) +
        parseFloat(sothuc5)) / 5;

    console.log("Giá trị trung bình 5 số thực : " + giatritrungbinh);
    document.getElementById("divShowInfo2").innerHTML = "Giá trị TB 5 số thực: " + giatritrungbinh;
};