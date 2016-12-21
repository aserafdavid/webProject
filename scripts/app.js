
var imagesObject =
    { "images":[
      { "imageUrl": "img/nexus2cee_lollipop-wallpaper-01.jpg", "imageTitle": "image 01" },
      { "imageUrl": "img/nexus2cee_lollipop-wallpaper-02.jpg", "imageTitle": "image 02" },
      { "imageUrl": "img/nexus2cee_lollipop-wallpaper-03.jpg", "imageTitle": "image 03" },
      { "imageUrl": "img/nexus2cee_lollipop-wallpaper-04.jpg", "imageTitle": "image 04" },
      { "imageUrl": "img/nexus2cee_lollipop-wallpaper-05.jpg", "imageTitle": "image 05" },
      { "imageUrl": "img/nexus2cee_lollipop-wallpaper-06.jpg", "imageTitle": "image 06" },
      { "imageUrl": "img/nexus2cee_lollipop-wallpaper-07.jpg", "imageTitle": "image 07" },
      { "imageUrl": "img/nexus2cee_lollipop-wallpaper-08.jpg", "imageTitle": "image 08" }]
    };

$("document").ready(function () {
    $("#result-container").hide();
    $("#form-container-new").hide();
    $("#carousel-container").hide();
    $.each(imagesObject["images"], createThumbnailNotation);
    $("#main-image").attr("src",imagesObject["images"][0]["imageUrl"]);
    $("#main-image-headline").text(imagesObject["images"][0]["imageTitle"]);
    refreshLogin();
});

function createThumbnailNotation(index, image) {
    var a = $("<a/>");
    var img = $("<img/>");
    $(img).attr("src",image["imageUrl"]);
    $(img).attr("alt",image["imageTitle"]);
    $(img).attr("onclick", "changeImage(this)");
    $(a).append(img);
    $(a).addClass("thumbnail");
    $("#thumbnails-container").append(a);
}


function refreshLogin() {
    if (localStorage["data"] == null)
        localStorage["data"] = "";
    else {
        var obj = JSON.parse(localStorage["data"]);
        $("#login-username").val(obj["Username"]);
        $("#login-password").val(obj["Password"]);
    }
}

function Show() {
    var s = "ùí:\t" + $("#name").val() + "\nãåàø àì÷èøåðé:\t" +
        $("#mail").val() + "\nëúåáú àúø:\t" + $("#url").val() + "\nâéì:\t" + $("#age").val() + "\nùí îùúîù:\t" + $("#username").val() + "\nñéñîà:\t" + $("#password").val();

    $("#result").text(s);
}

function SubmitData() {
    var inpObject = {
        Name: $("#name").val(),
        Mail: $("#mail").val(),
        Url: $("#url").val(),
        Age: $("#age").val(),
        Username: $("#username").val(),
        Password: $("#password").val()
    }
    var obj = JSON.stringify(inpObject);
    localStorage["data"] = obj;

    loginToSystem();
    return false;
}

function ResetData() {
    $("#result").text("");
}

function showError(o) {
    var sp = $(o).next();
    $(sp).text("Error value in " + $(o).attr("id"));
}

function clearError(o) {
    var sp = $(o).next();
    $(sp).text("");
}

// other example 
function check(input) {
    if (input.validity.typeMismatch) {
        input.setCustomValidity("The '" + input.value + "' is not a valid email. Enter something else!!");
    }
    else {
        input.setCustomValidity("");
    }
}

function back() {
    refreshLogin();
    $("#login").show();
    $("#result-container").hide();
    $("#form-container-new").hide();
    $("#carousel-container").hide();
}

function loginToSystem() {
    var obj = JSON.parse(localStorage["data"]);
    $("#result").text("שלום " + obj.Name);
    $("#login").hide();
    $("#form-container-new").hide();
    $("#result-container").show();
    $("#carousel-container").show();
    return false;
}

function CreateNew() {
    $("#login").hide();
    $("#result-container").hide();
    $("#form-container-new").show();
    $("#carousel-container").hide();
}

function changeImage(o) {
    $("#main-image").fadeOut(200, function() { $("#main-image").attr("src", $(o).attr("src")) });   
    $("#main-image").fadeIn(200);
    $("#main-image-headline").text($(o).attr("alt"));
}