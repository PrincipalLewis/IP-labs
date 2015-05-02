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

$('#js-lab1').click(function () {
    task1();
});
