let filter_btn = document.getElementById("filter")
let category = document.getElementById("category")
let type = document.getElementById("type")
let category_day = document.getElementById("category_day")
let category_month = document.getElementById("category_month")
let start_month = document.getElementById("start_month");
let end_month = document.getElementById("end_month");
let start_date = document.getElementById("start_date");
let end_date = document.getElementById("end_date");
let table_data = document.getElementById("table_data");
let table_head = document.getElementById("table_head");

const URL = "https://62ffa49234344b6431fe43fc.mockapi.io/statistics"

window.onload = () => {
    if (category.value == "months") {
        category_month.style.display = "block";
        category_day.style.display = "none";

        fetchData(URL, category.value, start_month.value, end_month.value, start_date.value, end_date.value, table_data, table_head, type.value);
    } else if (category.value == "days") {
        category_day.style.display = "block";
        category_month.style.display = "none";

        fetchData(URL, category.value, start_month.value, end_month.value, start_date.value, end_date.value, table_data, table_head, type.value);
    } else {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm;

        start_month.value = today;
        end_month.value = today;

        category_month.style.display = "block";

        fetchData(URL, "months", start_month.value, end_month.value, start_date.value, end_date.value, table_data, table_head, "active");
    }

    filter_btn.addEventListener("click", () => {
        fetchData(URL, category.value, start_month.value, end_month.value, start_date.value, end_date.value, table_data, table_head, type.value);
    });

    category.addEventListener("change", () => {
        if (category.value == "months") {
            category_month.style.display = "block";
            category_day.style.display = "none";
        } else if (category.value == "days") {
            category_day.style.display = "block";
            category_month.style.display = "none";
        }
    })
}