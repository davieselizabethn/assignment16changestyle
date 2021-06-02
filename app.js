const content = document.getElementById("content");

const button = document.getElementById("submit");

let select = document.getElementsByTagName('select')[0];

select.addEventListener("change", function (event) {
    const form = document.getElementsByTagName("form")[0];
    const value = event.target.value;
    if (value) {
        button.className = "";
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            setTheme(value);
        })
    } else {
        button.className = "disabled";
        setTheme(value);
    }


})

function setTheme(value) {
    if (value == 'green') {
        content.className = "content " + value;
    } else if (value == 'blue') {
        content.className = "content " + value;
    } else if (value == 'purple') {
        content.className = "content " + value;
    } else if (value == 'red') {
        content.className = "content " + value;
    } else {
        content.className = "content";
    }
}