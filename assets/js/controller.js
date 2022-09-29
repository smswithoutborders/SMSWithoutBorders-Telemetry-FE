let filter_btn = document.getElementById("filter")
let type = document.getElementById("type")
let format = document.getElementsByName("format")
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
        console.log(format_value)
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
        document.getElementById("format_day").checked = true;

        fetchData(URL, "day", start_date.value, end_date.value, table_data, table_head, "publisher");
    }

    filter_btn.addEventListener("click", () => {
        let format_value;
        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                format_value = format[i].value;
            }
        }

        console.log(format_value)
        fetchData(URL, format_value, start_date.value, end_date.value, table_data, table_head, type.value);
    });
}