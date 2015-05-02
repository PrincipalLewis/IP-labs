//var bootstrap = require('bootstrap.js');


function openHtmlTasks(){
    document.getElementById("main").innerHTML=""
}

$('#loading-example-btn').click(function () {
    $('#main').load('html/html.html');
});

$('#js-lab1').click(function () {
    task1();
});