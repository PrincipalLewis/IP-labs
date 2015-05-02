function task1 () {
    var table = document.createElement('table');
    table.style.border = "1px solid black";
    for (var i = 0, c = 1; i < 10; i++) {
        var row = table.insertRow(i);
        table.style.border = "1px solid black";
        row.style.border = "1px solid black";
        for (var j = 0; j < 10; j++) {
            var cell = row.insertCell(j);
            cell.style.border = "1px solid black";
            cell.innerHTML = '<p style="margin: 5px 5px">' + String(c++) + '</p>';
        }
    }
    document.getElementById("main").appendChild(table);
}

function task2() {
    document.getElementById("main").innerHTML = '<img id="img" src="img/img1.gif" width=200 height=200>';
    var angel = 180;
    $( "#img" ).mouseover(function() {
        this.style.webkitTransform='rotate(180deg)';
        this.style.mozTransform='rotate(180deg)';
        this.style.oTransform='rotate(180deg)';
        this.style.msTransform='rotate(180eg)';
        this.style.transform='rotate(180deg)';
    });
    $( "#img" ).mouseout(function() {
        this.style.mozTransform='rotate(0)';
        this.style.oTransform='rotate(0)';
        this.style.msTransform='rotate(0)';
        this.style.transform='rotate(0)';
    });
}

$('#js-lab1').click(function () {
    task2();
});
