google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);
google.charts.setOnLoadCallback(drawPieChart);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Número de arquivos');

    data.addRows(
      [["Janeiro", 36],["Fevereiro", 40],["Março", 13],["Abril", 104],["Junho", 75],["Julho", 65],["Agosto", 50],["Setembro", 3],["Outubro", 109],["Novembro", 29],["Dezembro", 13]]);

    var options = {
      title: 'Distribuição de Reports por mês',
      hAxis: {
        title: 'Mês',
      },
      vAxis: {
        title: 'Quantidade de Reports'
      },
      colors: ['blue','#004411'],
      height: 400,
    };

    var chart = new google.visualization.ColumnChart(
      document.getElementById('grafico-barra'));

    chart.draw(data, options);
}

function drawPieChart() {

  var data = google.visualization.arrayToDataTable(
    [["Tipo de Report", "Quantidade"],["Reclamções", 64],["Sugestões", 40],["Elogios", 13],["Outros", 25]]
  );

  var options = {
    title: 'Tipos de Reports',
    //is3D: true,
    chartArea:{left:20,top:20,width:'80%',height:'80%'},
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('grafico-pizza'));

  chart.draw(data, options);
}