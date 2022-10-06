let format_day = document.getElementById("format_day");
let format_month = document.getElementById("format_month");
let filter_type = document.getElementById("type");
let type = document.getElementById("type");
let format = document.getElementsByName("format");
let start_date = document.getElementById("start_date");
let end_date = document.getElementById("end_date");
let table_data = document.getElementById("table_data");
let table_head = document.getElementById("table_head");

const URL = "https://smswithoutborders.com:11000/statistics"

window.onload = () => {
    let format_value;
    for (let i = 0; i < format.length; i++) {
        if (format[i].checked) {
            format_value = format[i].value;
        }
    }

    if (format_value == "month" || format_value == "day") {
        fetchData(URL, format_value, start_date.value, end_date.value, table_data, table_head, type.value);
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
        let format_value;
        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date.value, end_date.value, table_data, table_head, type.value);
    });

    format_day.addEventListener("click", () => {
        let format_value;
        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date.value, end_date.value, table_data, table_head, type.value);
    });

    type.addEventListener("change", () => {
        let format_value;
        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date.value, end_date.value, table_data, table_head, type.value);
    });

    start_date.addEventListener("change", () => {
        let format_value;
        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date.value, end_date.value, table_data, table_head, type.value);
    });

    end_date.addEventListener("change", () => {
        let format_value;
        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        fetchData(URL, format_value, start_date.value, end_date.value, table_data, table_head, type.value);
    });
}