let filter = document.getElementById("filter")
let category = document.getElementById("category")
let type = document.getElementById("type")
let category_day = document.getElementsByClassName("category_day")
let category_month = document.getElementsByClassName("category_month")

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