//var bootstrap = require('bootstrap.js');



function loadExample(id) {
    $('#main').load('html-lab/Ex' + id + '.html');
    console.log('!!!!!!!!!!!!!!!!!!!!');
    var main = document.getElementById('main');
    main.innerHTML += '<p >Задание' + id + '</p>';
}


function openMainHtmlLab() {
    $('#main').load('html-lab/main.html');
}
