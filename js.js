// Activate Carousel
$("#myCarousel").carousel(2);

// Enable Carousel Indicators
$(".item").click(function () {
    $("#myCarousel").carousel();
});

// Enable Carousel Controls
$(".left").click(function () {
    $("#myCarousel").carousel("prev");
});

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(28.472248, -81.473638),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
};

function addClass() {
    var Title = $('title').text();
    switch (Title) {
        case ('Home'):
            $('#home').addClass('active');
            break;
        case ('Articles'):
        case ('Article 1'):
            $('#articles').addClass('active');
            break;
        case ('Chat'):
            $('#chat').addClass('active');
            break;
        case ('Register'):
            $('#register').addClass('active');
            break;
        case ('About us'):
            $('#about-us').addClass('active');
            break;
    }
};


function check() {
    var firstInput = document.getElementById("password").value;
    var secondInput = document.getElementById("password-repeat").value;
    if (firstInput != secondInput) {
        document.getElementById("password-repeat").value = '';
        alert('Passwords doesnt match');

    }
};


function createComent() {
    if (document.getElementById("chat-username").value == '') {
        alert('Enter username!');
    }
    else {
        var username = document.getElementById("chat-username").value;
        var coment = document.getElementById("message").value;
        var ul = document.getElementById("xxx");
        var li = document.createElement("li");
        ul.appendChild(li);

        var strong = document.createElement("strong");
        strong.appendChild(document.createTextNode(username));
        li.appendChild(strong);

        var date = new Date();
        var span = document.createElement("span");
        span.appendChild(document.createTextNode(date));
        strong.appendChild(span);

        var div = document.createElement("div")
        div.appendChild(document.createTextNode(coment));
        li.appendChild(div);

        document.getElementById("chat-username").value = '';
        document.getElementById("message").value = '';
    }
}

