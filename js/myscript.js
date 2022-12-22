function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sonuc = 0;

var cvpDizi = new Array();
cvpDizi[0] = "#cvp0";
cvpDizi[1] = "#cvp1";
cvpDizi[2] = "#cvp2";

cvpDizi[3] = "#cvp3";
cvpDizi[4] = "#cvp4";
cvpDizi[5] = "#cvp5";

cvpDizi[6] = "#cvp6";
cvpDizi[7] = "#cvp7";
cvpDizi[8] = "#cvp8";

/********************/

function yeniIslem() {
    var a = randomInt(0, 100);
    var b = randomInt(1, 100);

    var islem = randomInt(1, 4);

    var bolumBool = false;

    /********************/

    if (a < 50 || b < 50) {
        if (a > b) {
            min = b;
        } else {
            min = a;
        }
    }
    if (a > 80 && b > 80) {

        min = 40;

    } else if ((a > 80 && b < 50) || (a < 50 && b > 80)) {

        min = 20;

    } else if (a > 50 && b > 50) {

        min = 30;

    } else if ((a > 50 && b < 30) || (a < 30 && b > 50)) {

        min = 12;

    }

    /*******************/

    switch (islem) {

        case 1:
            sonuc = a + b;
            $("#gameScreen").html(a + " + " + b + " = ?");

            max = a + b + randomInt(10, 30);

            break;

        case 2:
            sonuc = a - b;
            $("#gameScreen").html(a + " - " + b + " = ?");

            if (a > b) {
                max = a - b + randomInt(5, b);
            } else {
                max = b - a + randomInt(5, a);
            }

            break;

        case 3:
            sonuc = a * b;
            $("#gameScreen").html(a + " * " + b + " = ?");

            max = ((a * b) / (a + b));

            break;

        case 4:
            sonuc = a / b;
            sonuc = sonuc.toFixed(2);

            if (a > b) {
                max = (2 * a) / b;
            } else {
                max = (2 * b) / a;
            }

            $("#gameScreen").html(a + " / " + b + " = ?");
            break;

        default:
            alert("Hata");
            break;
    }

    var cvpBtn = new Array();

    for (var i = 0; i <= 8; i++) {
        cvpBtn[i] = randomInt(min, sonuc);
    }

    if (islem == 4) {
        var randFdeger = 0;

        for (var i = 0; i < 4; i++) {
            randFdeger = randomInt(sonuc, min) / max;
            randFdeger = randFdeger.toFixed(2);
            cvpBtn[randomInt(0, 8)] = randFdeger;
        }
    }


    /******************/

    var cvpDeger = randomInt(0, 8);
    cvpBtn[cvpDeger] = sonuc;

    /******************/

    var cvpDizi = new Array();
    cvpDizi[0] = "#cvp0";
    cvpDizi[1] = "#cvp1";
    cvpDizi[2] = "#cvp2";

    cvpDizi[3] = "#cvp3";
    cvpDizi[4] = "#cvp4";
    cvpDizi[5] = "#cvp5";

    cvpDizi[6] = "#cvp6";
    cvpDizi[7] = "#cvp7";
    cvpDizi[8] = "#cvp8";

    /**********************/

    let diziTime = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    function karistir(dizi) {
        for (let i = dizi.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [dizi[i], dizi[j]] = [dizi[j], dizi[i]];
        }
    }

    /**********************/

    function butonDegerVer() {

        karistir(diziTime);

        for (var i = 0; i <= 8; i++) {
            $(cvpDizi[diziTime[i]]).html(cvpBtn[i]);
        }
    };

    butonDegerVer();

    var randZaman = randomInt(3000, 5000);
    setInterval(butonDegerVer, randZaman);

    return sonuc;
}

/******************************/

function backgroundFree() {
    for (var i = 0; i <= 8; i++) {
        $(cvpDizi[i]).css({ "background-color": "rgba(214, 249, 255, 0.733)" });
    }
}

var score = 0;
var valueName;

$("#score-tablo").html("Puan: " + score);

function buttonClick0() {
    valueName = $("#cvp0").html();
    if (valueName == sonuc) {
        $("#cvp0").css({ "background-color": "#008000" });
        setTimeout(backgroundFree, 1000);
        setTimeout(yeniIslem, 1500);
        score += 10;
    } else {
        $("#cvp0").css({ "background-color": "red" });
        setTimeout(backgroundFree, 1000);
        score -= 5;
    }

    $("#score-tablo").html("Puan: " + score);
}

function buttonClick1() {
    valueName = $("#cvp1").html();
    if (valueName == sonuc) {
        $("#cvp1").css({ "background-color": "#008000" });
        setTimeout(backgroundFree, 1000);
        setTimeout(yeniIslem, 1500);
        score += 10;
    } else {
        $("#cvp1").css({ "background-color": "red" });
        setTimeout(backgroundFree, 1000);
        score -= 5;
    }

    $("#score-tablo").html("Puan: " + score);
}


function buttonClick2() {
    valueName = $("#cvp2").html();
    if (valueName == sonuc) {
        $("#cvp2").css({ "background-color": "#008000" });
        setTimeout(backgroundFree, 1000);
        setTimeout(yeniIslem, 1500);
        score += 10;
    } else {
        $("#cvp2").css({ "background-color": "red" });
        setTimeout(backgroundFree, 1000);
        score -= 5;
    }

    $("#score-tablo").html("Puan: " + score);
}






function buttonClick3() {
    valueName = $("#cvp3").html();
    if (valueName == sonuc) {
        $("#cvp3").css({ "background-color": "#008000" });
        setTimeout(backgroundFree, 1000);
        setTimeout(yeniIslem, 1500);
        score += 10;
    } else {
        $("#cvp3").css({ "background-color": "red" });
        setTimeout(backgroundFree, 1000);
        score -= 5;
    }

    $("#score-tablo").html("Puan: " + score);
}


function buttonClick4() {
    valueName = $("#cvp4").html();
    if (valueName == sonuc) {
        $("#cvp4").css({ "background-color": "#008000" });
        setTimeout(backgroundFree, 1000);
        setTimeout(yeniIslem, 1500);
        score += 10;
    } else {
        $("#cvp4").css({ "background-color": "red" });
        setTimeout(backgroundFree, 1000);
        score -= 5;
    }

    $("#score-tablo").html("Puan: " + score);
}


function buttonClick5() {
    valueName = $("#cvp5").html();
    if (valueName == sonuc) {
        $("#cvp5").css({ "background-color": "#008000" });
        setTimeout(backgroundFree, 1000);
        setTimeout(yeniIslem, 1500);
        score += 10;
    } else {
        $("#cvp5").css({ "background-color": "red" });
        setTimeout(backgroundFree, 1000);
        score -= 5;
    }

    $("#score-tablo").html("Puan: " + score);
}






function buttonClick6() {
    valueName = $("#cvp6").html();
    if (valueName == sonuc) {
        $("#cvp6").css({ "background-color": "#008000" });
        setTimeout(backgroundFree, 1000);
        setTimeout(yeniIslem, 1500);
        score += 10;
    } else {
        $("#cvp6").css({ "background": "red" });
        setTimeout(backgroundFree, 1000);
        score -= 5;
    }

    $("#score-tablo").html("Puan: " + score);
}


function buttonClick7() {
    valueName = $("#cvp7").html();
    if (valueName == sonuc) {
        $("#cvp7").css({ "background-color": "#008000" });
        setTimeout(backgroundFree, 1000);
        setTimeout(yeniIslem, 1500);
        score += 10;
    } else {
        $("#cvp7").css({ "background-color": "red" });
        setTimeout(backgroundFree, 1000);
        score -= 5;
    }

    $("#score-tablo").html("Puan: " + score);
}


function buttonClick8() {
    valueName = $("#cvp8").html();
    if (valueName == sonuc) {
        $("#cvp8").css({ "background-color": "#008000" });
        setTimeout(backgroundFree, 1000);
        setTimeout(yeniIslem, 1500);
        score += 10;
    } else {
        $("#cvp8").css({ "background-color": "red" });
        setTimeout(backgroundFree, 1000);
        score -= 5;
    }

    $("#score-tablo").html("Puan: " + score);
}


/****************************/

yeniIslem();