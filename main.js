// Default
// Load google API
google.charts.load('current', {
    'packages': ['corechart']
});
// get months input type


// filter.addEventListener("click", () => {
//     for (var i = 0; i < category_day.length; i++) {
//         category_day[i].style.display = "None";
//     }
// })

// run(input.value)

// input.addEventListener("change", () => {
//     run(input.value)
// })

// function run(month_type) {
//     let xhttp = new XMLHttpRequest();

//     // Make AJAX call
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let entry = JSON.parse(this.responseText);

//             let headers = [
//                 "Month",
//                 "Users"
//             ]

//             // call chart function
//             line();
//             bar();

//             function line() {
//                 // Set a callback to run when the Google Visualization API is loaded.
//                 google.charts.setOnLoadCallback(drawChart);

//                 function drawChart() {
//                     result = []

//                     // Condition for month types
//                     if (month_type == "all") {
//                         result.push(headers);

//                         entry.map(function (element) {
//                             data = []

//                             data.push(element.Month);
//                             data.push(element.users);

//                             result.push(data);
//                         })

//                     } else {
//                         result.push([
//                             entry[0].Month,
//                             entry[0].users
//                         ])

//                         entry.map(function (element) {
//                             if (element.Days == month_type) {
//                                 data = []

//                                 data.push(element.Month);
//                                 data.push(element.users);


//                                 result.push(data);
//                             }
//                         })
//                     }

//                     var data = google.visualization.arrayToDataTable(
//                         result
//                     );

//                     // Set chart options
//                     var options = {
//                         vAxis: {
//                             title: 'Days',
//                             format: '0',
//                             minValue: 0
//                         },
//                         hAxis: {
//                             title: 'Months'
//                         },
//                         'title': 'Monthly Subscribers Visualization',
//                         height: 200
//                     };

//                     // Instantiate and draw our chart, passing in some options.
//                     var chart = new google.visualization.LineChart(document.getElementById('line_div'));

//                     chart.draw(data, options);
//                 }
//             }

//             function bar() {
//                 // Set a callback to run when the Google Visualization API is loaded.
//                 google.charts.setOnLoadCallback(drawChart);


//                 function drawChart() {
//                     result = []

//                     // Condition for month types
//                     if (month_type == "all") {
//                         result.push(headers);

//                         entry.map(function (element) {
//                             data = []

//                             data.push(element.Month);
//                             data.push(element.users);

//                             result.push(data);
//                         })

//                     } else {
//                         result.push([
//                             entry[0].Month,
//                             entry[0].users
//                         ])

//                         entry.map(function (element) {
//                             if (element.Days == month_type) {
//                                 data = []

//                                 data.push(element.Month);
//                                 data.push(element.users);


//                                 result.push(data);
//                             }
//                         })
//                     }

//                     var data = google.visualization.arrayToDataTable(
//                         result
//                     );
//                     // Set chart options
//                     var options = {
//                         vAxis: {
//                             title: 'Days',
//                             format: '0'
//                         },

//                         hAxis: {
//                             title: 'Months',
//                             minValue: 0
//                         },
//                         'title': 'Monthly Subscribers Visualization',
//                         height: 200
//                     };

//                     // Instantiate and draw our chart, passing in some options.
//                     var chart = new google.visualization.BarChart(document.getElementById('bar_div'));

//                     chart.draw(data, options);
//                 }
//             }
//         }
//     };

//     xhttp.open("GET", "https://6047e344b801a40017ccd1df.mockapi.io/api/metrics", true);
//     xhttp.send();
// }