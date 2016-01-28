google.load('visualization','1.0', {packages: ['corechart']});
google.setOnLoadCallback(statistic);

function neuladen() {
location.reload();
}
window.setTimeout("neuladen()",5000);

function statistic() {

var xhttp = null;
try{
    xhttp = new XMLHttpRequest();
}catch(e){
    
}

if (xhttp){
    xhttp.open("GET", "https://arsnova.eu/api/statistics", true);
    xhttp.onreadystatechange = function () {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            var data = new google.visualization.DataTable();
            var stat = JSON.parse(xhttp.responseText);
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Zähler');
            for(var i in stat){
                data.addRows([
                    [i,stat[i]]
                    ]);
            }
    var options ={
        'width' : 1000,
        'heigth' : 350
    };
           var chart = new google.visualization.BarChart(document.getElementById('st'));
        chart.draw(data,options);
        }
    };
    
    xhttp.send(null); 
}
}

 
