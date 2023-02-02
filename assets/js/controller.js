const baseUrl = "https://smswithoutborders.com:11000"

window.onload = () => {
    let getFormat = () => {
        let result
        let format = document.getElementsByName("format");

        for (let i = 0; i < format.length; i++) {
            if (format[i].checked) {
                result = format[i].value;
                break;
            }
        }

        return result;
    };

    let checkDate = () => {
        if (start_date.value == "") {
            start_date.value = end_date.value
        } else if (end_date.value == "") {
            end_date.value = start_date.value
        }

        return;
    };

    document.getElementById('mapping').style.display = "none";

    checkDate();
    let format_value = getFormat();

    if (format_value == "month" || format_value == "day") {
        const URL = `${baseUrl}/users?start=${start_date.value}&end=${end_date.value}&type=${type.value}&format=${format_value}`
        fetchData(URL, format_value, type.value);
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
        type.value = "available"
        format_value = "month"

        const URL = `${baseUrl}/users?start=${start_date.value}&end=${end_date.value}&type=${type.value}&format=${format_value}`
        fetchData(URL, format_value, type.value);
    }

    format_month.addEventListener("click", () => {
        checkDate();
        let format_value = getFormat();

        const URL = `${baseUrl}/users?start=${start_date.value}&end=${end_date.value}&type=${type.value}&format=${format_value}`
        fetchData(URL, format_value, type.value);
    });

    format_day.addEventListener("click", () => {
        checkDate();
        let format_value = getFormat();

        const URL = `${baseUrl}/users?start=${start_date.value}&end=${end_date.value}&type=${type.value}&format=${format_value}`
        fetchData(URL, format_value, type.value);
    });

    type.addEventListener("change", () => {
        checkDate();
        let format_value = getFormat();

        const URL = `${baseUrl}/users?start=${start_date.value}&end=${end_date.value}&type=${type.value}&format=${format_value}`
        fetchData(URL, format_value, type.value);
    });

    start_date.addEventListener("change", () => {
        checkDate();
        let format_value = getFormat();

        const URL = `${baseUrl}/users?start=${start_date.value}&end=${end_date.value}&type=${type.value}&format=${format_value}`
        fetchData(URL, format_value, type.value);
    });

    end_date.addEventListener("change", () => {
        checkDate();
        let format_value = getFormat();

        const URL = `${baseUrl}/users?start=${start_date.value}&end=${end_date.value}&type=${type.value}&format=${format_value}`
        fetchData(URL, format_value, type.value);
    });;
}

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});