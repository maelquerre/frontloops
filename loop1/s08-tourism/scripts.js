const TITLES = [
    "Visiting the Venice of the north",
    "Visiting the pastelle city",
    "Visiting the city of lights"
];

function changeCategory(clickedCategory) {
    var categories = document.getElementsByClassName("category");
    emptyCurrent(categories);
    for (var i = 0; i < categories.length; i++) {
        if (categories[i] === clickedCategory) {
            categories[i].classList.add("current");
            document.getElementsByClassName("title")[0].innerHTML = TITLES[i];
        }
    }

    var imageUrl = "img/" + clickedCategory.text.toLowerCase() + ".jpg";
    document.getElementById("side-picture").style.backgroundImage
            = "url('" + imageUrl + "')";
}

function emptyCurrent(categories) {
    for (var i = 0; i < categories.length; i++) {
        var classList = categories[i].classList;
        if (classList.contains("current")) {
            classList.remove("current");
        }
    }
}

function initPage() {
    var categories = document.getElementsByClassName("category");
    for (var i = 0; i < categories.length; i++) {
        categories[i].onclick = function () {
            changeCategory(this);
        }
    }
}

window.onload = initPage();
