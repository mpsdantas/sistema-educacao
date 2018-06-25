google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawBasic);
google.charts.setOnLoadCallback(drawBasicEscolas);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawBasic() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Mês");
  data.addColumn("number", "Sugestões");
  data.addColumn("number", "Reclamações");
  data.addColumn("number", "Outros");

  data.addRows([
    ["Jan", 36, 21, 32],
    ["Fev", 40, 23, 12],
    ["Mar", 13, 31, 23],
    ["Abr", 59, 12, 12],
    ["Jun", 75, 32, 23],
    ["Jul", 65, 21, 12],
    ["Ago", 50, 31, 11],
    ["Set", 87, 13, 43],
    ["Out", 65, 11, 21],
    ["Nov", 29, 32, 21],
    ["Dez", 13, 32, 31]
  ]);

  var options = {
    title: "Distribuição de Reports por mês",
    hAxis: {
      title: "Mês"
    },
    vAxis: {
      title: "Quantidade de Reports",
      gridlines: { count: 4 }
    },
    lineWidth: 2.5,
    height: 400
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("grafico-barra")
  );

  chart.draw(data, options);
}

function drawBasicEscolas() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Mês");
  data.addColumn("number", "Número total de reports");

  data.addRows([
    ["Jan", 36],
    ["Fev", 40],
    ["Mar", 13],
    ["Abr", 104],
    ["Jun", 75],
    ["Jul", 65],
    ["Ago", 50],
    ["Set", 3],
    ["Out", 109],
    ["Nov", 29],
    ["Dez", 13]
  ]);

  var options = {
    title: "Distribuição de Reports por mês",
    hAxis: {
      title: "Mês"
    },
    vAxis: {
      title: "Quantidade de Reports"
    },
    colors: ["blue", "#004411"],
    height: 400
  };

  var chart = new google.visualization.ColumnChart();
  //document.getElementById("grafico-escolas")

  chart.draw(data, options);
}

function drawPieChart() {
  var data = google.visualization.arrayToDataTable([
    ["Tipo de Report", "Quantidade"],
    ["Reclamções", 64],
    ["Sugestões", 40],
    ["Elogios", 13],
    ["Outros", 25]
  ]);

  var options = {
    title: "Tipos de Reports",
    //is3D: true,
    chartArea: { left: 20, top: 20, width: "80%", height: "80%" },
    height: 200
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("grafico-pizza")
  );

  chart.draw(data, options);
}
function drawAxisTickColors() {
  var data = google.visualization.arrayToDataTable([
    ["Escolas", "Sugestões", "Reclamações"],
    ["E. E. João Henrique", 100, 125],
    ["E. E. Barão", 80, 100],
    ["E. E. de Parnamirim", 56, 100],
    ["E. E. de Currais Novos", 50, 80],
    ["E. E. Rafael", 50, 70]
  ]);

  var options = {
    title: "Distribuição por Escolas",
    chartArea: { width: "50%", height: 300 },
    hAxis: {
      title: "Quantidade de Reports",
      minValue: 0,
      textStyle: {
        bold: true,
        fontSize: 12,
        color: "#4d4d4d"
      },
      titleTextStyle: {
        bold: true,
        fontSize: 18,
        color: "#4d4d4d"
      }
    },
    vAxis: {
      title: "Escolas",
      textStyle: {
        fontSize: 14,
        bold: true,
        color: "#848484"
      },
      titleTextStyle: {
        fontSize: 14,
        bold: true,
        color: "#848484"
      }
    }
  };

  var data = google.visualization.arrayToDataTable([
    ["Escolas", "Sugestões", "Reclamações", "Outros", { role: "annotation" }],
    ["E. E. João Henrique", 28, 24, 30, ""],
    ["E. E. Barão", 21, 22, 27, ""],
    ["E. E. de Parnamirim", 25, 19, 10, ""],
    ["E. E. de Currais Novos", 28, 13, 23, ""],
    ["E. E. de São Vicente", 28, 25, 24, ""],
    ["E. E. de Cerro Corá", 25, 13, 23, ""],
    ["E. E. de Natal", 22, 12, 12, ""],
    ["E. E. de Carnaúba dos Dantas", 28, 19, 15, ""]
  ]);

  var options = {
    width: 600,
    height: 400,
    legend: { position: "top", maxLines: 3 },
    bar: { groupWidth: "75%" },
    isStacked: true
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("grafico-escolas")
  );
  chart.draw(data, options);
}
function drawDonut() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7]
  ]);

  var options = {
    title: "My Daily Activities",
    pieHole: 0.4
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  chart.draw(data, options);
}
