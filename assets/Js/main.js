// Load google API
google.charts.load("current", {
  packages: ["corechart"],
});

function fetchData(
  url,
  category,
  start_month,
  end_month,
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

      run(
        entry,
        category,
        start_month,
        end_month,
        start_date,
        end_date,
        table_data,
        table_head,
        type
      );
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
}

function filter_months(entry, start_month, end_month, type) {
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

  entry.forEach((element) => {
    if (
      new Date(element.date).getFullYear() >=
        new Date(start_month).getFullYear() &&
      new Date(element.date).getMonth() >= new Date(start_month).getMonth() &&
      new Date(element.date).getFullYear() <=
        new Date(end_month).getFullYear() &&
      new Date(element.date).getMonth() <= new Date(end_month).getMonth() &&
      element.type == type
    ) {
      filter_data.push(month[new Date(element.date).getMonth()]);
      console.log(new Date(element.date).getTime());
    }
  });

  let data = {};

  filter_data.forEach((element) => {
    data[element] = (data[element] || 0) + 1;
  });

  let result = Object.keys(data).map((key) => {
    return [key, data[key]];
  });

  return result;
}

function filter_days(entry, start_date, end_date, type) {
  let filter_data = [];

  entry.forEach((element) => {
    if (
      new Date(element.date).getDate() >= new Date(start_date).getDate() &&
      new Date(element.date).getDate() <= new Date(end_date).getDate() &&
      element.type == type
    ) {
      filter_data.push(new Date(element.date).toDateString());
    }
  });
  let data = {};

  filter_data.forEach((element) => {
    data[element] = (data[element] || 0) + 1;
  });

  let result = Object.keys(data).map((key) => {
    return [key, data[key]];
  });

  return result;
}

function filter(
  entry,
  category,
  start_month,
  end_month,
  type,
  start_date,
  end_date
) {
  if (category == "months") {
    return filter_months(entry, start_month, end_month, type);
  } else if (category == "days") {
    return filter_days(entry, start_date, end_date, type);
  }
}

function line(data) {
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
      },
      hAxis: {
        title: data[0][0],
      },
      title: "Monthly Subscribers Visualization",
      height: 250,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(
      document.getElementById("line_div")
    );

    chart.draw(result, options);
  }
}

function bar(data) {
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
      },
      hAxis: {
        title: data[0][0],
      },
      title: "Monthly Subscribers Visualization",
      height: 250,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(
      document.getElementById("bar_div")
    );

    chart.draw(result, options);
  }
}

function run(
  data,
  category,
  start_month,
  end_month,
  start_date,
  end_date,
  table_data,
  table_head,
  type
) {
  let headers = [category.toUpperCase(), type.toUpperCase()];
  let filter_data = filter(
    data,
    category,
    start_month,
    end_month,
    type,
    start_date,
    end_date
  );

  // table
  table_head.innerHTML = `<tr><th scope="col">${headers[0]}</th><th scope="col">${headers[1]}</th></tr>`;
  table_data.innerHTML = "";

  filter_data.forEach((item) => {
    table_data.innerHTML += `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`;
  });

  filter_data.unshift(headers);

  line(filter_data);
  bar(filter_data);
}
