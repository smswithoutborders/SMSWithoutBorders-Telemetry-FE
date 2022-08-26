let filter = document.getElementById("filter")
let category = document.getElementById("category")
let type = document.getElementById("type")
let category_day = document.getElementsByClassName("category_day")
let category_month = document.getElementsByClassName("category_month")
let start_month = document.getElementById("start_month");
let end_month = document.getElementById("end_month");
let start_date = document.getElementById("start_date");
let end_date = document.getElementById("end_date");
let table_data = document.getElementById("table_data");
let table_head = document.getElementById("table_head");

filter.addEventListener("click", () => {
    run(category.value, start_month.value, end_month.value, start_date.value, end_date.value, table_data, table_head, type.value);
});

category.addEventListener("change", () => {
    if (category.value == "months") {
        for (var i = 0; i < category_month.length; i++) {
            category_month[i].style.display = "block";
        };
        for (var i = 0; i < category_day.length; i++) {
            category_day[i].style.display = "none";
        };
    } else if (category.value == "days") {
        for (var i = 0; i < category_day.length; i++) {
            category_day[i].style.display = "block";
        };
        for (var i = 0; i < category_month.length; i++) {
            category_month[i].style.display = "none";
        };
    }
})