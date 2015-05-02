//var bootstrap = require('bootstrap.js');



function loadExample(id) {
    $('#main').load('html-lab/Ex' + id + '.html');
    showBackButton();
}


function openMainHtmlLab() {
    $('#main').load('html-lab/main.html');
    document.getElementById("back-button").style.visibility = "hidden";
}


function showBackButton() {
    document.getElementById("back-button").style.visibility = "visible";
}
