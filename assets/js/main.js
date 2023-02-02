let map

// Load google API
google.charts.load("current", {
  packages: ["corechart"],
});

function fetchData(
  url,
  format,
  type
) {
  let xhttp = new XMLHttpRequest();

  // Make AJAX call
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let entry = JSON.parse(this.responseText);

      // anyChart map
      map = anychart.map();

      run(
        entry,
        format,
        type
      );
    } else {
      // Loaders
      document.getElementById("line_div").innerHTML = `<div class="d-flex justify-content-center">
      <div class="spinner-border text-light" style="margin-top: 10rem; width: 4rem; height: 4rem" role="status">
          <span class="visually-hidden">Loading...</span>
      </div></div>`;

      document.getElementById("total").innerHTML = `...`
      document.getElementById("countrytotal").innerHTML = `...`

    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
}

//Line Chart
function line(data) {
  if (data.length < 2) {
    document.getElementById("line_div").innerHTML = `<h5 class="text-danger text-center" style="margin-top: 10rem;">Sorry No Data To Display!</h5>`
  } else {
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var result = google.visualization.arrayToDataTable(data);

      // Set chart options
      var options = {
        vAxis: {
          title: data[0][1],
          format: "0",
          minValue: 0,
          textStyle: {
            color: '#FFF'
          },
          titleColor: '#FFF'
        },
        hAxis: {
          title: data[0][0],
          textStyle: {
            color: '#FFF'
          },
          titleColor: '#FFF'
        },
        backgroundColor: '#212121',
        legendTextStyle: {
          color: '#FFF'
        },
        titleTextStyle: {
          color: '#FFF'
        },
        trendlines: {
          0: {}
        } // Draw a trendline for data series 0.

      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.LineChart(
        document.getElementById("line_div")
      );

      chart.draw(result, options);
    }
  }
}

function run(
  data,
  format,
  type
) {
  let headers = [format.toUpperCase(), type.toUpperCase()];
  let yearData = []

  Object.keys(data).forEach((item) => {
    if (item == "countries" || item == "total_countries" || item == "total_users") {
      return
    } else {
      yearData.push(item)
    }
  })

  document.getElementById("v-pills-tab").innerHTML = "";
  document.getElementById("v-pills-tabContent").innerHTML = "";

  if (yearData.length < 1) {
    line([]);
    document.getElementById("v-pills-tabContent").innerHTML = `<h5 class="text-danger text-center" style="margin-top: 10rem;">Sorry No Data To Display!</h5>`;
    
    new ResizeObserver(function () {
      line([]);
    }).observe(document.getElementById("line_div"));
  } else {
    yearData.forEach((item, index) => {
      let selected_data = data[item]
      let chart_selected_data = [headers].concat(selected_data)

      if (index == 0) {
        line(chart_selected_data);

        new ResizeObserver(function () {
          line(chart_selected_data);
        }).observe(document.getElementById("line_div"));

        document.getElementById("v-pills-tab").innerHTML += `<button class="nav-link active" id="v-pills-${item}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${item}" type="button" role="tab" aria-controls="v-pills-${item}" aria-selected="true">${item}</button>`;

        document.getElementById("v-pills-tabContent").innerHTML += `<div class="tab-pane fade show active" id="v-pills-${item}" role="tabpanel"
        aria-labelledby="v-pills-${item}-tab">
        <div class="table-responsive rest mb-3 " id="table">
            <table class="table text-center">
                <thead id="table_head_${item}" class="text-light"></thead>
                <tbody id="table_data_${item}" class="text-light"></tbody>
            </table>
        </div>
    </div>`;
      } else {
        document.getElementById("v-pills-tab").innerHTML += `<button class="nav-link" id="v-pills-${item}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${item}" type="button" role="tab" aria-controls="v-pills-${item}" aria-selected="false">${item}</button>`;

        document.getElementById("v-pills-tabContent").innerHTML += `<div class="tab-pane fade" id="v-pills-${item}" role="tabpanel"
        aria-labelledby="v-pills-${item}-tab">
        <div class="table-responsive rest mb-3 " id="table">
            <table class="table text-center">
                <thead id="table_head_${item}" class="text-light"></thead>
                <tbody id="table_data_${item}" class="text-light"></tbody>
            </table>
        </div>
    </div>`;
      }

      document.getElementById(`table_head_${item}`).innerHTML = `<tr><th scope="col">${headers[0]}</th><th scope="col">${headers[1]}</th></tr>`;
      document.getElementById(`table_data_${item}`).innerHTML = "";

      selected_data.forEach((ele) => {
        document.getElementById(`table_data_${item}`).innerHTML += `<tr><td>${ele[0]}</td><td>${ele[1]}</td></tr>`;
      });
    });
  }

  yearData.forEach((element) => {
    document.getElementById(`v-pills-${element}-tab`).addEventListener("click", () => {
      let chart_data = [headers].concat(data[element])
      line(chart_data)

      new ResizeObserver(function () {
        line(chart_data);
      }).observe(document.getElementById("line_div"));
    })
  })

  document.getElementById("totalheader").innerHTML = `<p class="text-light totalheader" id=""> TOTAL ${headers[1]}</p>`;

  document.getElementById("total").innerHTML = `<h3 class="total text-light" id="total"> ${data.total_users} <i class="fa-solid fa-sort-up"></i></h3>`

  if (type == "available") {

    document.getElementById("countrytable_data").innerHTML = ""

    data.countries.forEach((key) => {
      document.getElementById("countrytable_head").innerHTML = `<tr><th scope="col">COUNTRY</th><th scope="col">USERS</th><th scope="col">PERCENTAGE</th></tr>`;
      document.getElementById("countrytable_data").innerHTML += `<tr><td class="pointclick" onclick="map.zoomToFeature('${key[1]}')">${key[0]}</td><td>${key[2]}</td><td> ${((key[2]/data.total_users) * 100).toFixed(1) + "%" } </td></tr>`;
    });

    document.getElementById("card2").style.display = "block"
    document.getElementById("maprow").style.display = "flex"
    document.getElementById("mapping").style.display = "block"
    document.getElementById("countrytotaldiv").style.display = "block"
    document.getElementById("countrytableid").style.display = "block";
    document.getElementById("countrytotal").innerHTML = `<h3 class="total text-light" id="countrytotal"> ${data.total_countries} <i class="fa-solid fa-sort-up"></i></h3>`

    // Map //
    let anyChartData = [];

    data.countries.forEach((key) => {
      anyChartData.push({
        "id": key[1],
        "value": key[2]
      })
    });

    document.getElementById("mapping").innerHTML = ""

    createMap(anyChartData);
    // Map  End//

  } else {
    document.getElementById('maprow').style.display = "none";
    document.getElementById('card2').style.display = "none";
  }

};

// Draw Map
function createMap(data) {
  anychart.onDocumentReady(function () {
    document.getElementById('mapping').innerHTML = `<a href="#" onclick='map.fullScreen(true)' class="text-light"><i class="fa-solid fa-maximize"></i></a>`

    map.geoData(anychart.maps.world);

    // set the series
    var series = map.choropleth(data);

    anychart.theme('#212121');

    map.height('130%');

    //format the labels of the id-defined series
    series.labels().format("{%name}");

    series.tooltip().format("Id: {%id} \nUsers: {%value}");

    // add zoom ui controls
    var zoomController = anychart.ui.zoom();
    zoomController.render(map);

    // disable labels
    series.labels(false);

    map.listen('pointClick', function (e) {
      map.zoomToFeature(e.point.get('id'));
    })

    // set the colors and ranges for the scale
    series.colorScale(anychart.scales.linearColor());

    //set the single hue progression
    var colors = anychart.color.singleHueProgression('#0068BC');

    // define the colors 
    series.colorScale().colors(colors);

    // create and enable the colorRange
    var colorRange = map.colorRange();
    colorRange.enabled(true);

    // put the colorRange to the right from the map
    colorRange.orientation('right');

    // set the colorRange length
    colorRange.length(100);

    // set the container
    map.container('mapping');
    map.draw();
  });
}