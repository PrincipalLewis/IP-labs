function task1 () {
    var table = document.createElement('table');
    table.style.border = "1px solid black";
    for (var i = 0, c = 1; i < 10; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < 10; j++) {
            row.insertCell(j).innerHTML = String(c++);
        }
    }
    document.getElementById("main").appendChild(table);
}
