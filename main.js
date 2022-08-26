  // Default
  // Load google API
  google.charts.load("current", {
    packages: ["corechart"],
  });

  function run(category, start_month, end_month, start_date, end_date, table_data, table_head, type) {
    let xhttp = new XMLHttpRequest();

    // Make AJAX call
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let entry = JSON.parse(this.responseText);
    
        let filter = (
          category,
          start_month,
          end_month,
          type,
          start_date,
          end_date
        ) => {
          if (category == "months") {
            return filter_months(start_month, end_month, type);
          } else if (category == "days") {
            return filter_days(start_date, end_date, type);
          }
        };

        let filter_data = filter(
          category,
          start_month,
          end_month,
          type,
          start_date,
          end_date
        );

        function filter_months(start_month, end_month, type) {
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

          console.log(start_month);
          console.log(end_month);

          entry.forEach((element) => {
            if (
              new Date(element.date).getFullYear() >=
              new Date(start_month).getFullYear() &&
              new Date(element.date).getMonth() >=
              new Date(start_month).getMonth() &&
              new Date(element.date).getFullYear() <=
              new Date(end_month).getFullYear() &&
              new Date(element.date).getMonth() <=
              new Date(end_month).getMonth() &&
              element.type == type
            ) {
              filter_data.push(month[new Date(element.date).getMonth()]);
            }
          });
          let data = {};

          filter_data.forEach((element) => {
            data[element] = (data[element] || 0) + 1;
          });

          let result = Object.keys(data).map((key) => {
            return [key, data[key]];
          });

          return result
        }

        function filter_days(start_date, end_date, type) {
          let filter_data = [];

          entry.forEach((element) => {
            if (
              new Date(element.date) >= new Date(start_date) &&
              new Date(element.date) <= new Date(end_date) &&
              element.type == type
            ) {
              filter_data.push(new Date(element.date));
            }
          });
          let data = {};

          filter_data.forEach((element) => {
            data[element] = (data[element] || 0) + 1;
          });

          let result = Object.keys(data).map((key) => {
            return [key, data[key]];
          });

          return result
        }

        let headers = [category.toUpperCase(), type.toUpperCase()];

        // table
        table_head.innerHTML = `<tr><th scope="col">${headers[0]}</th><th scope="col">${headers[1]}</th></tr>`
        table_data.innerHTML = ""

        filter_data.forEach((item) => {
          table_data.innerHTML += `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`
        })

        // call chart function
        filter_data.unshift(headers)

        line(filter_data);
        bar(filter_data);

        function line(data) {
          // Set a callback to run when the Google Visualization API is loaded.
          google.charts.setOnLoadCallback(drawChart);

          function drawChart() {

            var result = google.visualization.arrayToDataTable(data);

            // Set chart options
            var options = {
              vAxis: {
                title: headers[1],
                format: "0",
                minValue: 0,
              },
              hAxis: {
                title: "Months",
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
                title: headers[1],
                format: "0",
                minValue: 0,
              },
              hAxis: {
                title: "",
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
      }
    };

    xhttp.open(
      "GET",
      "https://62ffa49234344b6431fe43fc.mockapi.io/statistics",
      true
    );
    xhttp.send();
  }