const countries = {
  "BD": "+880",
  "BE": "+32",
  "BF": "+226",
  "BG": "+359",
  "BA": "+387",
  "BB": "+1-246",
  "WF": "+681",
  "BL": "+590",
  "BM": "+1-441",
  "BN": "+673",
  "BO": "+591",
  "BH": "+973",
  "BI": "+257",
  "BJ": "+229",
  "BT": "+975",
  "JM": "+1-876",
  "BV": "",
  "BW": "+267",
  "WS": "+685",
  "BQ": "+599",
  "BR": "+55",
  "BS": "+1-242",
  "JE": "+44-1534",
  "BY": "+375",
  "BZ": "+501",
  "RU": "+7",
  "RW": "+250",
  "RS": "+381",
  "TL": "+670",
  "RE": "+262",
  "TM": "+993",
  "TJ": "+992",
  "RO": "+40",
  "TK": "+690",
  "GW": "+245",
  "GU": "+1-671",
  "GT": "+502",
  "GS": "",
  "GR": "+30",
  "GQ": "+240",
  "GP": "+590",
  "JP": "+81",
  "GY": "+592",
  "GG": "+44-1481",
  "GF": "+594",
  "GE": "+995",
  "GD": "+1-473",
  "GB": "+44",
  "GA": "+241",
  "SV": "+503",
  "GN": "+224",
  "GM": "+220",
  "GL": "+299",
  "GI": "+350",
  "GH": "+233",
  "OM": "+968",
  "TN": "+216",
  "JO": "+962",
  "HR": "+385",
  "HT": "+509",
  "HU": "+36",
  "HK": "+852",
  "HN": "+504",
  "HM": "",
  "VE": "+58",
  "PR": "+1-939",
  "PR": "+1-787",
  "PS": "+970",
  "PW": "+680",
  "PT": "+351",
  "SJ": "+47",
  "PY": "+595",
  "IQ": "+964",
  "PA": "+507",
  "PF": "+689",
  "PG": "+675",
  "PE": "+51",
  "PK": "+92",
  "PH": "+63",
  "PN": "+870",
  "PL": "+48",
  "PM": "+508",
  "ZM": "+260",
  "EH": "+212",
  "EE": "+372",
  "EG": "+20",
  "ZA": "+27",
  "EC": "+593",
  "IT": "+39",
  "VN": "+84",
  "SB": "+677",
  "ET": "+251",
  "SO": "+252",
  "ZW": "+263",
  "SA": "+966",
  "ES": "+34",
  "ER": "+291",
  "ME": "+382",
  "MD": "+373",
  "MG": "+261",
  "MF": "+590",
  "MA": "+212",
  "MC": "+377",
  "UZ": "+998",
  "MM": "+95",
  "ML": "+223",
  "MO": "+853",
  "MN": "+976",
  "MH": "+692",
  "MK": "+389",
  "MU": "+230",
  "MT": "+356",
  "MW": "+265",
  "MV": "+960",
  "MQ": "+596",
  "MP": "+1-670",
  "MS": "+1-664",
  "MR": "+222",
  "IM": "+44-1624",
  "UG": "+256",
  "TZ": "+255",
  "MY": "+60",
  "MX": "+52",
  "IL": "+972",
  "FR": "+33",
  "IO": "+246",
  "SH": "+290",
  "FI": "+358",
  "FJ": "+679",
  "FK": "+500",
  "FM": "+691",
  "FO": "+298",
  "NI": "+505",
  "NL": "+31",
  "NO": "+47",
  "NA": "+264",
  "VU": "+678",
  "NC": "+687",
  "NE": "+227",
  "NF": "+672",
  "NG": "+234",
  "NZ": "+64",
  "NP": "+977",
  "NR": "+674",
  "NU": "+683",
  "CK": "+682",
  "XK": "",
  "CI": "+225",
  "CH": "+41",
  "CO": "+57",
  "CN": "+86",
  "CM": "+237",
  "CL": "+56",
  "CC": "+61",
  // "CA": "1",
  "CG": "+242",
  "CF": "+236",
  "CD": "+243",
  "CZ": "+420",
  "CY": "+357",
  "CX": "+61",
  "CR": "+506",
  "CW": "+599",
  "CV": "+238",
  "CU": "+53",
  "SZ": "+268",
  "SY": "+963",
  "SX": "+599",
  "KG": "+996",
  "KE": "+254",
  "SS": "+211",
  "SR": "+597",
  "KI": "+686",
  "KH": "+855",
  "KN": "+1-869",
  "KM": "+269",
  "ST": "+239",
  "SK": "+421",
  "KR": "+82",
  "SI": "+386",
  "KP": "+850",
  "KW": "+965",
  "SN": "+221",
  "SM": "+378",
  "SL": "+232",
  "SC": "+248",
  "KZ": "+7",
  "KY": "+1-345",
  "SG": "+65",
  "SE": "+46",
  "SD": "+249",
  "DO": "+1-809",
  "DO": "+1-829",
  "DM": "+1-767",
  "DJ": "+253",
  "DK": "+45",
  "VG": "+1-284",
  "DE": "+49",
  "YE": "+967",
  "DZ": "+213",
  "US": "+1",
  "UY": "+598",
  "YT": "+262",
  "UM": "+1",
  "LB": "+961",
  "LC": "+1-758",
  "LA": "+856",
  "TV": "+688",
  "TW": "+886",
  "TT": "+1-868",
  "TR": "+90",
  "LK": "+94",
  "LI": "+423",
  "LV": "+371",
  "TO": "+676",
  "LT": "+370",
  "LU": "+352",
  "LR": "+231",
  "LS": "+266",
  "TH": "+66",
  "TF": "",
  "TG": "+228",
  "TD": "+235",
  "TC": "+1-649",
  "LY": "+218",
  "VA": "+379",
  "VC": "+1-784",
  "AE": "+971",
  "AD": "+376",
  "AG": "+1-268",
  "AF": "+93",
  "AI": "+1-264",
  "VI": "+1-340",
  "IS": "+354",
  "IR": "+98",
  "AM": "+374",
  "AL": "+355",
  "AO": "+244",
  "AQ": "",
  "AS": "+1-684",
  "AR": "+54",
  "AU": "+61",
  "AT": "+43",
  "AW": "+297",
  "IN": "+91",
  "AX": "+358-18",
  "AZ": "+994",
  "IE": "+353",
  "ID": "+62",
  "UA": "+380",
  "QA": "+974",
  "MZ": "+258"
}

let map

// Load google API
google.charts.load("current", {
  packages: ["corechart", 'sankey'],
});

function fetchData(
  url,
  format,
  start_date,
  end_date,
  table_data,
  table_head,
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
        start_date,
        end_date,
        table_data,
        table_head,
        type
      );
    } else {
      document.getElementById("line_div").innerHTML = `<div class="d-flex justify-content-center">
      <div class="spinner-border text-light" style="margin-top: 10rem; width: 4rem; height: 4rem" role="status">
          <span class="visually-hidden">Loading...</span>
      </div></div>`;

      document.getElementById("pie_div").innerHTML = `<div class="d-flex justify-content-center">
      <div class="spinner-border text-light" style="margin-top: 5rem; width: 4rem; height: 4rem" role="status">
          <span class="visually-hidden">Loading...</span>
      </div></div>`;

      document.getElementById("table_header").innerHTML = `<h6 class="text-light">Loading Summary ...</h6>`
      table_head.innerHTML = "";
      table_data.innerHTML = "";
      document.getElementById("total").innerHTML = `...`
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
}

function filter_months(entry, start_date, end_date, type) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let filter_data = [];
  let country_phone_codes = [];

  if (type == "available") {
    let previous_months_count = 0;

    entry.forEach((element) => {
      let search_month = new Date(element.date).toLocaleDateString()
      let start_month_modified = new Date(new Date(start_date).getFullYear(), new Date(start_date).getMonth(), 1).toLocaleDateString()
      let end_month_modified = new Date(new Date(end_date).getFullYear(), new Date(end_date).getMonth() + 1, 0).toLocaleDateString()

      if (
        new Date(search_month) >= new Date(start_month_modified) &&
        new Date(search_month) <= new Date(end_month_modified) &&
        element.type == type
      ) {
        filter_data.push(month[new Date(element.date).getMonth()]);
        country_phone_codes.push(element.country_code);
      }

      if (
        new Date(search_month) < new Date(start_month_modified) &&
        element.type == type
      ) {
        previous_months_count += 1;
        country_phone_codes.push(element.country_code);
      }
    });

    let country_region_code_data = {};
    let country_data = {};

    country_phone_codes.forEach((element) => {
      let country_region_code = Object.keys(countries).find(key => countries[key] === element)

      const regionNames = new Intl.DisplayNames(
        ['en'], {
          type: 'region'
        }
      );
      let country_name = regionNames.of(country_region_code);

      if (country_data[country_name]) {
        country_data[country_name] = (country_data[country_name] || 0) + 1;
      } else {
        country_data[country_name] = (country_data[country_name] || 0) + 1;
      };

      if (country_region_code_data[country_region_code]) {
        country_region_code_data[country_region_code] = (country_region_code_data[country_region_code] || 0) + 1;
      } else {
        country_region_code_data[country_region_code] = (country_region_code_data[country_region_code] || 0) + 1;
      }
    });

    document.getElementById("countrytable_data").innerHTML = ""

    Object.keys(country_data).forEach((key, index) => {
      document.getElementById("countrytable_header").innerHTML = `<h6 class="text-light">Country Summary Table</h6>`
      document.getElementById("countrytable_head").innerHTML = `<tr><th scope="col">COUNTRY</th><th scope="col">NUMBER OF USERS</th></tr>`;
      document.getElementById("countrytable_data").innerHTML += `<tr><td class="pointclick" onclick="map.zoomToFeature('${Object.keys(country_region_code_data)[index]}')">${key}</td><td>${country_data[key]}</td></tr>`;
    });

    // Map //
    let anyChartData = [];

    Object.keys(country_region_code_data).forEach((key) => {
      anyChartData.push({
        "id": key,
        "value": country_region_code_data[key]
      })
    });

    document.getElementById("mapping").innerHTML = ""

    createMap(anyChartData);
    // Map  End//

    let data = {};

    filter_data.forEach((element) => {
      data[element] = (data[element] || 0) + 1;
    });

    let result = Object.keys(data).sort(function (a, b) {
      return month.indexOf(a) > month.indexOf(b);
    }).map((key, index, array) => {
      previous_months_count += (data[array[index - 1]] || 0)
      return [key, data[key] + previous_months_count];
    });

    return result;
  } else {
    entry.forEach((element) => {
      let search_month = new Date(element.date).toLocaleDateString()
      let start_month_modified = new Date(new Date(start_date).getFullYear(), new Date(start_date).getMonth(), 1).toLocaleDateString()
      let end_month_modified = new Date(new Date(end_date).getFullYear(), new Date(end_date).getMonth() + 1, 0).toLocaleDateString()

      if (
        new Date(search_month) >= new Date(start_month_modified) &&
        new Date(search_month) <= new Date(end_month_modified) &&
        element.type == type
      ) {
        filter_data.push(month[new Date(element.date).getMonth()]);
      }
    });

    let data = {};

    filter_data.forEach((element) => {
      data[element] = (data[element] || 0) + 1;
    });

    let result = Object.keys(data).sort(function (a, b) {
      return month.indexOf(a) > month.indexOf(b);
    }).map((key) => {
      return [key, data[key]];
    });

    return result;
  }
}

function filter_days(entry, start_date, end_date, type) {
  let filter_data = [];
  let country_phone_codes = [];

  if (type == "available") {
    let previous_days_count = 0;

    entry.forEach((element) => {
      let search_date = new Date(element.date).toLocaleDateString()
      let start_date_modified = new Date(start_date).toLocaleDateString()
      let end_date_modified = new Date(end_date).toLocaleDateString()

      if (
        new Date(search_date) >= new Date(start_date_modified) &&
        new Date(search_date) <= new Date(end_date_modified) &&
        element.type == type
      ) {
        filter_data.push(new Date(element.date).toDateString());
        country_phone_codes.push(element.country_code);
      }

      if (
        new Date(search_date) < new Date(start_date_modified) &&
        element.type == type
      ) {
        previous_days_count += 1;
        country_phone_codes.push(element.country_code);
      }
    });

    let country_region_code_data = {};
    let country_data = {};

    country_phone_codes.forEach((element) => {
      let country_region_code = Object.keys(countries).find(key => countries[key] === element)

      const regionNames = new Intl.DisplayNames(
        ['en'], {
          type: 'region'
        }
      );
      let country_name = regionNames.of(country_region_code);

      if (country_data[country_name]) {
        country_data[country_name] = (country_data[country_name] || 0) + 1;
      } else {
        country_data[country_name] = (country_data[country_name] || 0) + 1;
      };

      if (country_region_code_data[country_region_code]) {
        country_region_code_data[country_region_code] = (country_region_code_data[country_region_code] || 0) + 1;
      } else {
        country_region_code_data[country_region_code] = (country_region_code_data[country_region_code] || 0) + 1;
      }
    });

    document.getElementById("countrytable_data").innerHTML = ""

    Object.keys(country_data).forEach((key, index) => {
      document.getElementById("countrytable_header").innerHTML = `<h6 class="text-light">Country Summary Table day</h6>`
      document.getElementById("countrytable_head").innerHTML = `<tr><th scope="col">COUNTRY</th><th scope="col">NUMBER OF USERS</th></tr>`;
      document.getElementById("countrytable_data").innerHTML += `<tr><td class="pointclick" onclick="map.zoomToFeature('${Object.keys(country_region_code_data)[index]}')">${key}</td><td>${country_data[key]}</td></tr>`;
    });

    // Map //
    let anyChartData = [];

    Object.keys(country_region_code_data).forEach((key) => {
      anyChartData.push({
        "id": key,
        "value": country_region_code_data[key]
      })
    });

    document.getElementById("mapping").innerHTML = ""

    createMap(anyChartData);
    // Map  End//

    let data = {};

    filter_data.forEach((element) => {
      data[element] = (data[element] || 0) + 1;
    });

    let result = Object.keys(data).sort(function (a, b) {
      return new Date(a) > new Date(b);
    }).map((key, index, array) => {
      previous_days_count += (data[array[index - 1]] || 0)
      return [key, data[key] + previous_days_count];
    });

    return result;

  } else {
    entry.forEach((element) => {
      let search_date = new Date(element.date).toLocaleDateString()
      let start_date_modified = new Date(start_date).toLocaleDateString()
      let end_date_modified = new Date(end_date).toLocaleDateString()

      if (
        new Date(search_date) >= new Date(start_date_modified) &&
        new Date(search_date) <= new Date(end_date_modified) &&
        element.type == type
      ) {
        filter_data.push(new Date(element.date).toDateString());
      }
    });
    let data = {};

    filter_data.forEach((element) => {
      data[element] = (data[element] || 0) + 1;
    });

    let result = Object.keys(data).sort(function (a, b) {
      return new Date(a) > new Date(b);
    }).map((key) => {
      return [key, data[key]];
    });

    return result;
  }
}

function filter(
  entry,
  format,
  type,
  start_date,
  end_date
) {
  if (format == "month") {
    return filter_months(entry, start_date, end_date, type);
  } else if (format == "day") {
    return filter_days(entry, start_date, end_date, type);
  }
}

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
        title: `${data[0][1]} METRICS`,
        height: 250,
        backgroundColor: '#0e213b',
        legendTextStyle: {
          color: '#FFF'
        },
        titleTextStyle: {
          color: '#FFF'
        },
        trendlines: {
          [1]: {
            type: 'linear',
            showR2: true,
            visibleInLegend: true
          }
        }

      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.LineChart(
        document.getElementById("line_div")
      );

      chart.draw(result, options);
    }
  }
}

function pie(data) {
  if (data.length < 2) {
    document.getElementById("pie_div").innerHTML = `<h5 class="text-danger text-center" style="margin-top: 5rem;">Sorry No Data To Display!</h5>`
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
        title: `${data[0][1]} METRICS`,
        height: 250,
        backgroundColor: '#0e213b',
        legendTextStyle: {
          color: '#FFF'
        },
        titleTextStyle: {
          color: '#FFF'
        },
        slices: {
          4: {
            offset: 0.2
          },
          1: {
            offset: 0.3
          },
          2: {
            offset: 0.3
          },
          3: {
            offset: 0.3
          },
          5: {
            offset: 0.3
          },
        },
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(
        document.getElementById("pie_div")
      );

      chart.draw(result, options);
    }
  }
}

function run(
  data,
  format,
  start_date,
  end_date,
  table_data,
  table_head,
  type
) {
  let headers = [format.toUpperCase(), type.toUpperCase()];
  let filter_data = filter(
    data,
    format,
    type,
    start_date,
    end_date
  );

  // table
  document.getElementById("table_header").innerHTML = `<h6 class="text-light">Summary Table</h6>`
  table_head.innerHTML = `<tr><th scope="col">${headers[0]}</th><th scope="col">${headers[1]}</th></tr>`;
  table_data.innerHTML = "";

  let total = 0;

  filter_data.forEach((item, index, array) => {
    table_data.innerHTML += `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`;

    if (type == "available") {
      if (index == array.length - 1) {
        total = item[1];
      }
    } else {
      total += item[1];
    }
  });

  document.getElementById("total").innerHTML = total

  filter_data.unshift(headers);

  line(filter_data);
  pie(filter_data);
};

function createMap(data) {
  anychart.onDocumentReady(function () {
    document.getElementById('mapping').innerHTML = `<a href="#" onclick='map.fullScreen(true)'>Enter full screen mode</a>`

    map.geoData(anychart.maps.world);

    // set the series
    var series = map.choropleth(data);

   // map.title("AVAILABLE USERS AROUND THE WORLD");

    anychart.theme('darkBlue');

   // map.fullScreen(true)

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