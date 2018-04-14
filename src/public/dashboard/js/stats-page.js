google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawBasic);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawBasic() {
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

  var chart = new google.visualization.ColumnChart(
    document.getElementById("grafico-barra")
  );

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
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000]
  ]);

  var options = {
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "50%", height: 300 },
    hAxis: {
      title: "Total Population",
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
      title: "City",
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
  var chart = new google.visualization.BarChart(
    document.getElementById("grafico-escolas")
  );
  chart.draw(data, options);
}
