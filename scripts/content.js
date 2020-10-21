let content1 = document.getElementById("sec1").innerHTML;

function sectionSwap1() {
    document.getElementById("sec1").innerHTML = content1;
    document.getElementById("sec1").classList.remove('sec2active', 'sec3active');
};

function sectionSwap2() {
    document.getElementById("sec1").innerHTML = document.getElementById("sec2").innerHTML;
    document.getElementById("sec1").classList.add('sec2active');
    document.getElementById("sec1").classList.remove('sec1active', 'sec3active');
};

function sectionSwap3() {
    document.getElementById("sec1").innerHTML = document.getElementById("sec3").innerHTML;
    document.getElementById("sec1").classList.add('sec3active');
    document.getElementById("sec1").classList.remove('sec1active', 'sec2active');
};
