var zodiacSign;
var tiltAngle;
const showZodiac = (zodiacSign) => document.getElementById("zodiacSelect").src = `../assets/img/circ/${zodiacSign}.png`;

function czasomierz() {
    let curDate = new Date();
    let ddd = curDate.getDate();
    let mmm = curDate.getMonth() + 1;

    switch (mmm) {
        case 1: mmm = "JAN";
            if (ddd<20) {zodiacSign = "CAP";}
            else {zodiacSign = "AQU";}
            // timeout here??
            
            showZodiac(zodiacSign);
            
        break;
        case 2: mmm = "FEB";
            if (ddd<18) {zodiacSign = "AQU";}
            else {zodiacSign = "PIS";}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 3: mmm = "MAR";
            if (ddd<20) {zodiacSign = "PIS";}
            else {zodiacSign = "ARI"; tiltAngle = 30}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 4: mmm = "APR";
            if (ddd<20) {zodiacSign = "ARI"; tiltAngle = 30}
            else {zodiacSign = "TAU"; tiltAngle = 60}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 5: mmm = "MAY";
            if (ddd<21) {zodiacSign = "TAU"; tiltAngle = 60}
            else {zodiacSign = "GEM";}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 6: mmm = "JUN";
            if (ddd<21) {zodiacSign = "GEM";}
            else {zodiacSign = "CAN";}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 7: mmm = "JUL";
            if (ddd<22) {zodiacSign = "CAN";}
            else {zodiacSign = "LEO";}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 8: mmm = "AUG";
            if (ddd<23) {zodiacSign = "LEO";}
            else {zodiacSign = "VIR";}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 9: mmm = "SEP";
            if (ddd<23) {zodiacSign = "VIR";}
            else {zodiacSign = "LIB";}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 10: mmm = "OCT";
            if (ddd<23) {zodiacSign = "LIB";}
            else {zodiacSign = "SCO";}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 11: mmm = "NOV";
            if (ddd<22) {zodiacSign = "SCO";}
            else {zodiacSign = "SAG";}
            // timeout here??
            showZodiac(zodiacSign);
        break;
        case 12: mmm = "DEC";
            if (ddd<21) {zodiacSign = "SAG";}
            else {zodiacSign = "CAP";}
            // timeout here??
            showZodiac(zodiacSign);
        break;
    }
    // const showZodiac = (zodiacSign) => document.getElementById("zodiacSelect").src = `./assets/img/circ/${zodiacSign}.png`;

    let yyy = curDate.getFullYear();
    let hhh = curDate.getHours();
    let min = curDate.getMinutes();
    let sek = curDate.getSeconds();

    //if (ddd < 10) ddd = "0"+ddd;
    switch (ddd) {
        case 1: ddd = "1st";
            break;
        case 2: ddd = "2nd";
            break;
        case 3: ddd = "3rd";
            break;
        case 21: ddd = "21st";
            break;
        case 22: ddd = "22nd";
            break;
        case 23: ddd = "23rd";
            break;
        case 31: ddd = "31st";
            break;
            
        default:
            ddd = ddd + "th";
            break;
    }
    if (hhh < 10) hhh = "0" + hhh;
    if (min < 10) min = "0" + min;
    if (sek < 10) sek = "0" + sek;

    document.getElementById("dateHolder").innerHTML = ddd + " of " + mmm + " '" + yyy + " |       | " + hhh + ":" + min + ":" + sek;
        //
        setTimeout("czasomierz()", 1000);
    
}