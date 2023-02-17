let ma = document.getElementById("ma");
let ot = document.getElementById("ot");


ma.onclick = function () {
    if (ma.checked == true) {
        document.getElementById("smart").style.color = "Red";
    } else {
        document.getElementById("smart").style.color = "black";
    }
}
ot.onclick = function () {
    if (ot.checked == true) {
        document.getElementById('others1').style.color = "Blue";
        document.getElementById('others2').style.color = "Blue";
        document.getElementById('others3').style.color = "Blue";
        document.getElementById('others4').style.color = "Blue";
        document.getElementById('others6').style.color = "Blue";
        document.getElementById('others7').style.color = "Blue";
        document.getElementById('others5').style.color = "Blue";
        document.getElementById("smart").style.color = "black";
    }
    else {
        document.getElementById('others1').style.color = "black";
        document.getElementById('others2').style.color = "black";
        document.getElementById('others3').style.color = "black";
        document.getElementById('others4').style.color = "black";
        document.getElementById('others6').style.color = "black";
        document.getElementById('others7').style.color = "black";
        document.getElementById('others5').style.color = "black";
    }

}