let format_day = document.getElementById("format_day");
let format_month = document.getElementById("format_month");
let filter_type = document.getElementById("type");
let type = document.getElementById("type");
let country = document.getElementById("country");
let format = document.getElementsByName("format");
let start_date = document.getElementById("start_date");
let end_date = document.getElementById("end_date");
let table_data = document.getElementById("table_data");
let table_head = document.getElementById("table_head");

const URL = "https://62ffa49234344b6431fe43fc.mockapi.io/statistics"
//Original URL https://smswithoutborders.com:11000/statistics

window.onload = () => {

    document.getElementById("mapping").innerHTML = ""

    anychart.onDocumentReady(function () {
      var map = anychart.map();
      map.geoData(anychart.maps.world);

      // set the series
      var series = map.marker();

      map.title("AVAILABLE USERS AROUND THE WORLD");

      anychart.theme('darkGlamour');

      //format the labels of the id-defined series
      series.labels().format("{%name}");

      series.tooltip().format("Id: {%id} \nUsers: {%value}");


      // add zoom ui controls
      var zoomController = anychart.ui.zoom();
      zoomController.render(map);


      // disable labels
      series.labels(false);

      // set the container
      map.container('mapping');
      map.draw();
    });

    let start_date_new = start_date.value
    let end_date_new = end_date.value

    if (start_date_new == "") {
        start_date_new = end_date_new
    } else if (end_date_new == "") {
        end_date_new = start_date_new
    }

    let format_value;

    for (let i = 0; i < format.length; i++) {
        if (format[i].checked) {
            format_value = format[i].value;
        }
    }

    if (format_value == "month" || format_value == "day") {
        fetchData(URL, format_value, start_date_new, end_date_new, table_data, table_head, type.value);
    } else {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        // Default chart
        start_date.value = today;
        end_date.value = today;
        format_month.checked = true;

        fetchData(URL, "month", start_date.value, end_date.value, table_data, table_head, "signup");
    }

    format_month.addEventListener("click", () => {
        let start_date_new = start_date.value
        let end_date_new = end_date.value

        if (start_date_new == "") {
            start_date_new = end_date_new
        } else if (end_date_new == "") {
            end_date_new = start_date_new
        }

        let format_value;

        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date_new, end_date_new, table_data, table_head, type.value);
    });

    format_day.addEventListener("click", () => {
        let start_date_new = start_date.value
        let end_date_new = end_date.value

        if (start_date_new == "") {
            start_date_new = end_date_new
        } else if (end_date_new == "") {
            end_date_new = start_date_new
        }

        let format_value;

        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date_new, end_date_new, table_data, table_head, type.value);
    });

    type.addEventListener("change", () => {
        let start_date_new = start_date.value
        let end_date_new = end_date.value

        if (start_date_new == "") {
            start_date_new = end_date_new
        } else if (end_date_new == "") {
            end_date_new = start_date_new
        }

        let format_value;

        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date_new, end_date_new, table_data, table_head, type.value);
    });

    start_date.addEventListener("change", () => {
        let start_date_new = start_date.value
        let end_date_new = end_date.value

        if (start_date_new == "") {
            start_date_new = end_date_new
        } else if (end_date_new == "") {
            end_date_new = start_date_new
        }

        let format_value;

        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date_new, end_date_new, table_data, table_head, type.value);
    });

    end_date.addEventListener("change", () => {
        let start_date_new = start_date.value
        let end_date_new = end_date.value

        if (start_date_new == "") {
            start_date_new = end_date_new
        } else if (end_date_new == "") {
            end_date_new = start_date_new
        }

        let format_value;

        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date_new, end_date_new, table_data, table_head, type.value);
    });

    // country.addEventListener("change", () => {
    //     document.getElementById("gmap_canvas").src = `https://maps.google.com/maps?q=${country.value}&t=&z=6&ie=UTF8&iwloc=&output=embed`;
    // });
}